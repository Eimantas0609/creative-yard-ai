# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/53313e13-8312-40a3-8b30-b510dda8bc64

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/53313e13-8312-40a3-8b30-b510dda8bc64) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/53313e13-8312-40a3-8b30-b510dda8bc64) and click on Share -> Publish.

## Environment Setup

### Frontend Configuration

1. Copy `.env.example` to `.env.local`:
```sh
cp .env.example .env.local
```

2. Update `.env.local` with your Supabase credentials (available in Lovable Cloud dashboard):
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key_here
VITE_SUPABASE_PROJECT_ID=your_project_id_here
```

3. **Important**: Never commit `.env.local` to version control!

### Backend Configuration (Supabase Secrets)

These secrets are used by Edge Functions and should NEVER be exposed to the frontend:

1. **Via Lovable Cloud Dashboard** (Recommended):
   - Open your project in Lovable
   - Navigate to Settings → Secrets
   - Add the following secrets:
     - `OPENAI_API_KEY` (for AI features in Phase 2)
     - `SUPABASE_SERVICE_ROLE_KEY` (for admin operations)
     - `RESEND_API_KEY` (optional, for email notifications)
     - `MAIL_FROM` (optional, e.g., "Creative Yard <hello@example.com>")
     - `MAIL_TO` (optional, your email address)

2. **Via Supabase CLI** (if connected to external Supabase):
```sh
supabase secrets set OPENAI_API_KEY=sk-...
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=...
```

Refer to `supabase/.env.example` for a complete list of available secrets.

## Project Architecture

This project includes:

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Lovable Cloud (Supabase) with:
  - Database (PostgreSQL)
  - Authentication (Email/Password)
  - Edge Functions (serverless API)
  - Row-Level Security (RLS)
- **Internationalization**: react-i18next (EN, LT, RU)
- **AI Assistant**: Chat widget with Edge Function backend (stub responses, ready for OpenAI integration)

### AI Chat Widget

The AI assistant is available on all pages (bottom-right corner). Current implementation:
- ✅ Functional chat interface
- ✅ Language-aware responses (EN/LT/RU)
- ✅ Edge Function backend (`supabase/functions/ai-chat`)
- 🚧 Stub responses (Phase 2: OpenAI integration)

To enable full AI capabilities:
1. Set `OPENAI_API_KEY` secret in Lovable Cloud
2. Update `supabase/functions/ai-chat/index.ts` (see comments in file)
3. Deploy changes

## Database Structure

Key tables:
- `profiles` - User profiles
- `user_roles` - User permissions (admin, user)
- `projects` - Portfolio projects (published/draft)
- `posts` - Blog posts (published/draft)
- `services` - Service offerings
- `contacts` - Contact form submissions

All tables are protected with Row-Level Security (RLS) policies.

## Creating Your First Admin User

1. Sign up via the `/auth` page
2. Access Lovable Cloud → Database → `user_roles` table
3. Add a new row:
   - `user_id`: Your user UUID (from `profiles` table)
   - `role`: `admin`

## Testing the Application

### Manual Test Checklist

**Layout & Navigation:**
- [ ] Single Header and Footer on all pages
- [ ] No duplicate navigation elements
- [ ] Language switcher only in Header

**Internationalization:**
- [ ] Switch EN ↔ LT ↔ RU updates all UI strings
- [ ] NotFound page (`/404`) shows translated text
- [ ] Chat widget uses current language
- [ ] All sections properly translated

**AI Chat Widget:**
- [ ] Widget visible on all pages (bottom-right)
- [ ] Opens/closes smoothly
- [ ] Sends messages to Edge Function
- [ ] Receives responses in correct language
- [ ] No CORS or authentication errors in console

**Authentication:**
- [ ] Sign up creates new user
- [ ] Sign in works with correct credentials
- [ ] Sign out clears session
- [ ] Protected routes redirect to auth

**Backend & Data:**
- [ ] Projects load from database
- [ ] Blog posts display correctly
- [ ] Services fetch properly
- [ ] Contact form inserts to database
- [ ] Only published content visible to public

**Security:**
- [ ] No secrets in frontend code
- [ ] RLS policies prevent unauthorized access
- [ ] Admin-only actions require admin role

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
