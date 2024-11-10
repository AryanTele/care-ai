import mongoose from "mongoose";

const businessUserSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  businessAddress: {
    type: String,
    required: true,
  },
  businessPhone: {
    type: String,
    required: true,
  },
  businessEmail: {
    type: String,
    required: true,
  },
  businessWebsite: {
    type: String,
    required: true,
  },
});

export default mongoose.model("BusinessUser", businessUserSchema);
