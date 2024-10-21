import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
dotenv.config();

app.post("/user", (req, res) => {
  const {
    businessOwnerName,
    businessName,
    businessDescription,
    businessEmail,
    businessPhone,
    businessAddress,
    businessWebsite,
    businessDomain,
    businessSocials,
  } = req.body;

  res.send({
    businessOwnerName,
    businessName,
    businessDescription,
    businessEmail,
    businessPhone,
    businessAddress,
    businessWebsite,
    businessDomain,
    businessSocials,
  });
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${process.env.MONGO_URI}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  console.log(`Server is running on port ${PORT}`);
});
