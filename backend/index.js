import OpenAI from "openai";
const apiKey =
  "sk-tLsK_s4gGYReNPXsIdj6iYWTQASDCDS4IStON09BrOT3BlbkFJqj7KBHAFipa-Nz_-eRh3PVIQzP-cFEDA2QueNVftoA";
const openai = new OpenAI({ apiKey: apiKey });

const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    {
      role: "user",
      content: "Tell me something about indian economy",
    },
  ],
});
