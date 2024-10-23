import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import owner from "./model/owner.js";
const app = express();
app.use(express.json());
dotenv.config();

app.post("/registerDetails", async (req, res) => {
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
  if (!businessOwnerName || !businessName) {
    return res.status(400).send("Missing required fields");
  }
  const newOwner = await owner.create({
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
  if (!newOwner) {
    return res.status(400).send("Owner not created");
  }

  res.send({
    success: true,
    message: "Owner created successfully",
    data: newOwner,
  });
});

app.get("/getDetails", async (req, res) => {
  const details = await owner.find({});
  if (!details) {
    return res.status(400).send("Details not found");
  }
  res.send({ success: true, data: details });
});
const PORT = process.env.PORT || 1337;
app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB: Business User Database");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  console.log(`Server is running on port ${PORT}`);
});
