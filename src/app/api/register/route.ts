/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/controllers/connectDB";
import businessUser from "@/models/businessUser";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
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

  try {
    connectDB();
    const bUser = await businessUser.create({
      businessAddress,
      businessEmail,
      businessName,
      businessPhone,
      businessWebsite,
    });
    return NextResponse.json(bUser);
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
