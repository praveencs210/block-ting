import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    organizationName: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    serviceRequired: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.contact ||
  mongoose.model("contact", contactSchema);
