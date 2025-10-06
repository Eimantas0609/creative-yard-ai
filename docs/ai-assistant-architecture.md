# AI Assistant Architecture (Phase 2 - NOT IMPLEMENTED)

## Overview
This document outlines the planned architecture for the AI chat assistant feature, scheduled for Phase 2 implementation.

## Database Schema

### 1. knowledge_items Table
Stores content that the assistant can reference (projects, posts, services, custom knowledge).

```sql
CREATE TABLE public.knowledge_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_type TEXT NOT NULL, -- 'project', 'post', 'service', 'custom'
  source_id UUID, -- References original content table
  title TEXT NOT NULL,
  summary TEXT,
  metadata JSONB, -- Flexible data like tags, dates, etc.
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2. knowledge_translations Table
Multi-language support for knowledge content.

```sql
CREATE TABLE public.knowledge_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  knowledge_item_id UUID REFERENCES public.knowledge_items(id) ON DELETE CASCADE,
  language TEXT NOT NULL, -- 'en', 'lt', 'ru'
  content TEXT NOT NULL, -- Full searchable content
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(knowledge_item_id, language)
);
```

### 3. knowledge_embeddings Table
Vector embeddings for semantic search using pgvector.

```sql
-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE public.knowledge_embeddings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  translation_id UUID REFERENCES public.knowledge_translations(id) ON DELETE CASCADE,
  embedding vector(1536), -- OpenAI ada-002 dimension
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast similarity search
CREATE INDEX ON public.knowledge_embeddings USING ivfflat (embedding vector_cosine_ops);
```

### 4. chat_conversations Table
Store user conversations for context persistence.

```sql
CREATE TABLE public.chat_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 5. chat_messages Table
Individual messages within conversations.

```sql
CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  role TEXT NOT NULL, -- 'user' or 'assistant'
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Edge Functions

### 1. generate-embeddings
**Purpose:** Generate embeddings for new/updated content  
**Trigger:** Called when projects, posts, or services are created/updated

```typescript
// Pseudo-code structure
export async function generateEmbeddings(request: Request) {
  const { content, language, knowledgeItemId } = await request.json();
  
  // Call OpenAI Embeddings API
  const embedding = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: content,
  });
  
  // Store in knowledge_embeddings
  await supabase
    .from("knowledge_embeddings")
    .insert({ translation_id, embedding: embedding.data[0].embedding });
}
```

### 2. chat-query (RAG Endpoint)
**Purpose:** Process user queries with RAG (Retrieval Augmented Generation)

```typescript
export async function chatQuery(request: Request) {
  const { message, conversationId, language } = await request.json();
  
  // 1. Generate embedding for user query
  const queryEmbedding = await generateQueryEmbedding(message);
  
  // 2. Retrieve relevant knowledge using vector similarity
  const relevantKnowledge = await retrieveRelevantContext(queryEmbedding, language);
  
  // 3. Build context from conversation history
  const conversationHistory = await getConversationHistory(conversationId);
  
  // 4. Call OpenAI with context + RAG results
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant for Creative Yard portfolio. 
                  Use the following context to answer questions accurately:
                  ${relevantKnowledge.map(k => k.content).join('\n\n')}`
      },
      ...conversationHistory,
      { role: "user", content: message }
    ],
  });
  
  // 5. Store message and response
  await storeMessages(conversationId, message, response);
  
  return new Response(JSON.stringify(response));
}
```

### 3. sync-knowledge
**Purpose:** Sync projects/posts/services to knowledge base  
**Trigger:** Manual trigger or scheduled job

```typescript
export async function syncKnowledge() {
  // Fetch all published projects
  const projects = await supabase.from("projects").select("*").eq("status", "published");
  
  // For each project, create knowledge_items + translations + embeddings
  for (const project of projects) {
    await createKnowledgeItem({
      source_type: "project",
      source_id: project.id,
      title: project.title,
      content: project.summary + " " + project.story,
    });
  }
  
  // Repeat for posts, services
}
```

## Frontend Components

### 1. ChatBubble Component
- Fixed position bottom-right corner
- Toggle open/close
- Shows unread message indicator
- Persists open/closed state in localStorage

### 2. ChatWindow Component
- Message list with auto-scroll
- Input field with send button
- Loading indicator during API calls
- Language auto-detection from i18n context
- Markdown rendering for formatted responses

### 3. Message Component
- User vs Assistant styling differentiation
- Timestamp display
- Copy message button
- Support for code blocks and lists

## Rate Limiting Strategy

### API Rate Limits
- **Per User:** 10 messages per minute
- **Anonymous:** 5 messages per minute
- **Daily Cap:** 100 messages per user

### Implementation
Use Edge Function middleware to check Redis cache:

```typescript
const rateLimitKey = `chat:${userId || ip}:${Date.now()}`;
const messageCount = await redis.incr(rateLimitKey);
if (messageCount > 10) {
  throw new Error("Rate limit exceeded");
}
await redis.expire(rateLimitKey, 60); // 1 minute TTL
```

## Security Considerations

1. **RLS Policies:**
   - Users can only read their own conversations
   - Knowledge_items are public (read-only)
   - Embeddings are not exposed via API

2. **Input Sanitization:**
   - Validate message length (max 2000 chars)
   - Strip HTML/scripts from user input
   - Prevent prompt injection attacks

3. **OpenAI API Key:**
   - Store in Supabase secrets
   - Never expose to frontend
   - Rotate periodically

## Embedding Generation Strategy

### Initial Sync
1. Run `sync-knowledge` edge function on deployment
2. Generate embeddings for all existing content
3. Index takes ~1 minute for 100 items

### Incremental Updates
1. Hook into project/post/service update triggers
2. Regenerate embeddings only for changed content
3. Delete old embeddings, insert new ones

### Cost Optimization
- Cache embeddings for unchanged content
- Batch embedding generation (max 100 per batch)
- Use ada-002 (cheaper) instead of ada-003

## User Experience Flow

1. User clicks chat bubble → Opens chat window
2. User types message → Shows typing indicator
3. Frontend calls `chat-query` edge function
4. Edge function:
   - Retrieves conversation history
   - Performs vector search for relevant knowledge
   - Calls OpenAI with augmented context
   - Returns streaming response
5. Frontend displays response with markdown formatting
6. Conversation persists in database

## Multi-Language Support

### Detection
- Use i18n.resolvedLanguage from react-i18next
- Pass language code to edge function

### Response Generation
- Filter knowledge embeddings by language
- System prompt instructs to respond in detected language
- Fallback to English if no translations exist

## Performance Targets

- **RAG Query:** < 2 seconds
- **Embedding Generation:** < 500ms per item
- **Vector Search:** < 100ms (with proper indexing)
- **Frontend Load Time:** < 300ms for chat bubble

## Future Enhancements (Phase 3+)

1. **Voice Input:** Integrate Web Speech API
2. **Suggested Questions:** Show common queries as chips
3. **Conversation Sharing:** Share chat links publicly
4. **Analytics Dashboard:** Track popular queries, response quality
5. **Fine-tuned Model:** Train custom model on portfolio content
6. **Image Understanding:** Allow users to upload images for context

## Cost Estimates

**Monthly for 1000 users, 50 messages each:**
- OpenAI API (chat): ~$150
- OpenAI API (embeddings): ~$5
- Supabase storage: ~$10
- Total: ~$165/month

**Optimization:**
- Cache common queries
- Use cheaper models for simple questions
- Implement aggressive rate limiting

---

**Status:** Planning Only - NOT IMPLEMENTED  
**Phase:** 2 (Post-MVP)  
**Dependencies:** Phase 1 completion, OpenAI API key acquisition
