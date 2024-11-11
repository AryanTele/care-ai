/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/api/chatgpt.js
import { OpenAI } from "openai";
import { NextResponse, NextRequest } from "next/server";
import businessUser from "@/models/businessUser";
import { connectDB } from "@/controllers/connectDB";

// Set up OpenAI configuration with your API key
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Conversation history and introduction tracking
let conversationHistory = "";
let hasIntroduced = false; // Tracks if introduction has been made

export async function POST(req: NextRequest) {
  const { question, id } = await req.json();

  if (!question) {
    return NextResponse.json(
      { message: "Please provide a question" },
      { status: 400 }
    );
  }

  try {
    connectDB();
    // Search User Id in DB
    const bUser = await businessUser.findById(id);
    const {
      businessAddress,
      businessEmail,
      businessName,
      businessPhone,
      businessWebsite,
    } = bUser!;

    // Set up the introductory text if not already introduced
    const introText = !hasIntroduced
      ? `
      Introduce yourself as "I am care AI, a customer service representative."
      My responses will focus on business information relevant to your inquiries, ensuring accuracy and avoiding unrelated information.
      
      Now, here's the information provided for context:
      
      - **Business Name**: ${businessName}
      - **Business Address**: ${businessAddress}
      - **Business Phone**: ${businessPhone}
      - **Business Email**: ${businessEmail}
      - **Business Website**: ${businessWebsite}
      `
      : ""; // Empty if already introduced

    // Set up the main prompt for OpenAI API
    const prompt = `
      ${introText}
      Previous Conversation History: ${conversationHistory}
      Question: ${question}
      
      Please answer with business-focused information only.
    `;

    // Update introduction flag
    hasIntroduced = true;

    // Make a request to the OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    // Extract the answer from the API response
    const answer = completion.choices[0].message.content;

    // Update conversation history
    conversationHistory += `\nUser: ${question}\nAI: ${answer}`;

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
