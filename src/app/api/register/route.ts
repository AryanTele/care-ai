/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/controllers/connectDB";
import businessUser from "@/models/businessUser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const {
      businessAddress,
      businessEmail,
      businessName,
      businessPhone,
      businessWebsite,
    } = await req.json();

    if (
      !businessAddress ||
      !businessEmail ||
      !businessName ||
      !businessPhone ||
      !businessWebsite
    ) {
      return NextResponse.json(
        { message: "Please provide all fields" },
        { status: 400 }
      );
    }

    // Ensure the database connection is successful
    await connectDB();

    const bUser = await businessUser.create({
      businessAddress,
      businessEmail,
      businessName,
      businessPhone,
      businessWebsite,
    });

    return NextResponse.json(bUser, { status: 201 }); // Created
  } catch (error: unknown) {
    console.error("Error in POST /api/register:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: String(error) },
      { status: 500 }
    );
  }
}
