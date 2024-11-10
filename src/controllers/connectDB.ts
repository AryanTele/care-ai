import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB connected");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Failed to connect", error.message);
    } else {
      console.log("Failed to connect", String(error));
    }
  }
};
