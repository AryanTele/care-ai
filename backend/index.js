import OpenAI from "openai";
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
