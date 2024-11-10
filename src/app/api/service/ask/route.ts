// pages/api/chatgpt.js
import { OpenAI } from "openai";
import { NextResponse, NextRequest } from "next/server";
// Set up OpenAI configuration with your API key
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export async function POST(req: NextRequest) {
  const { question } = await req.json();
  if (!question) {
    return NextResponse.json(
      { message: "Please provide a question" },
      { status: 400 }
    );
  }

  try {
    // Make a request to the OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: question }],
    });

    // Extract the answer from the API response
    const answer = completion.choices[0].message.content;

    // Send the answer back to the client
    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
