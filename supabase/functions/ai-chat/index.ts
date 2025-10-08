import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// PHASE 2 TODO: Replace stub with real OpenAI API call
// import "https://deno.land/x/xhr@0.1.0/mod.ts";
// const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
// const response = await fetch('https://api.openai.com/v1/chat/completions', {
//   method: 'POST',
//   headers: {
//     'Authorization': `Bearer ${OPENAI_API_KEY}`,
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     model: 'gpt-4',
//     messages: [
//       { role: 'system', content: 'You are a helpful AI assistant for Creative Yard...' },
//       { role: 'user', content: question }
//     ],
//   }),
// });

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const STUB_RESPONSES = {
  en: "Thank you for your question! I'm Creative Yard's AI assistant. I can help you learn about our projects, services, and expertise. (This is a demo response - full AI integration coming soon!)",
  lt: "Dėkojame už klausimą! Esu Creative Yard AI asistentas. Galiu padėti sužinoti apie mūsų projektus, paslaugas ir kompetencijas. (Tai demonstracinė žinutė - pilna AI integracija netrukus!)",
  ru: "Спасибо за ваш вопрос! Я AI-ассистент Creative Yard. Могу помочь узнать о наших проектах, услугах и экспертизе. (Это демонстрационный ответ - полная интеграция AI скоро!)",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question, lang } = await req.json();

    if (!question || typeof question !== "string") {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid question" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Log the question for future analysis
    console.log(`[AI Chat] Question (${lang}):`, question);

    // Return localized stub response
    const language = (lang as keyof typeof STUB_RESPONSES) || "en";
    const answer = STUB_RESPONSES[language] || STUB_RESPONSES.en;

    return new Response(
      JSON.stringify({ ok: true, answer }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("[AI Chat] Error:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
