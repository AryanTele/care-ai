import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  businessOwnerName: { type: String, required: true },
  businessName: { type: String, required: true },
  businessDescription: String,
  businessEmail: String,
  businessPhone: String,
  businessAddress: String,
  businessWebsite: String,
  businessDomain: String,
  businessSocials: String,
});

export default mongoose.model("owner", ownerSchema);
