/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/api/chatgpt.js
import { OpenAI } from "openai";
import { NextResponse, NextRequest } from "next/server";
import businessUser from "@/models/businessUser";
import { connectDB } from "@/controllers/connectDB";
// Set up OpenAI configuration with your API key
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export async function POST(req: NextRequest) {
  let conversationHistory = "";
  const { question, id } = await req.json();
  if (!question) {
    return NextResponse.json(
      { message: "Please provide a question" },
      { status: 400 }
    );
  }

  try {
    connectDB();
    // Serach User Id in Db
    const bUser = await businessUser.findById(id);
    const {
      businessAddress,
      businessEmail,
      businessName,
      businessPhone,
      businessWebsite,
    } = bUser!;

    // Set up the prompt for the OpenAI API
    const prompt =
      conversationHistory == ""
        ? `
    Introduce yourself as: I am care ai, a customer service representative.
    Always analyze the previous conversation history before answering and make use of already answered questions.
    
    Please keep in mind that my responses will focus only on information relevant to your business inquiries. I will ensure accuracy and avoid answering questions outside the scope of business matters.
    
    Now, here's the information provided for context:
    
    - **Business Name**: ${businessName}
    - **Business Address**: ${businessAddress}
    - **Business Phone**: ${businessPhone}
    - **Business Email**: ${businessEmail}
    - **Business Website**: ${businessWebsite}
    Previous Conversation History:${conversationHistory}
    Question: ${question}
    
    Please answer with business-focused information only.
    `
        : `
        Always analyze the previous conversation history before answering and make use of already answered questions.Please keep in mind that my responses will focus only on information relevant to your business inquiries. I will ensure accuracy and avoid answering questions outside the scope of business matters.
    
    Now, here's the information provided for context:
    
    - **Business Name**: ${businessName}
    - **Business Address**: ${businessAddress}
    - **Business Phone**: ${businessPhone}
    - **Business Email**: ${businessEmail}
    - **Business Website**: ${businessWebsite}
    Previous Conversation History:${conversationHistory}
    Question: ${question}
    
    Please answer with business-focused information only.
    `;

    // Make a request to the OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    // Extract the answer from the API response
    conversationHistory += completion.choices[0].message.content;
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
