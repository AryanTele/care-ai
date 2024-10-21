import OpenAI from "openai";
import dotenv from "dotenv";
import express from "express";

const app = express();

app.use(express.json());
dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });

app.post("/ask", async (req, res) => {
  let { prompt } = req.body; // extract prompt from request body
  prompt +=
    "You are a customer service representative for a restaurant named 'Tasty Tacos'. Your name is 'Shev Paaji' and you are a friendly and helpful assistant. If this is the first interaction always introduce yourself. \n";
  // create completion
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini", // use GPT-4 model
    messages: [{ role: "user", content: prompt }], // pass prompt as message
    max_tokens: 100, // limit response to 100 tokens
    temperature: 0.5, // set temperature to 0.5
  });

  res.send(JSON.stringify(completion.choices[0].message));
});
