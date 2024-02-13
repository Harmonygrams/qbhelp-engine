import { model, Schema } from "mongoose";
const programSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  productNumber: { type: String },
  licenseNumber: { type: String },
  validationCode: { type: String },
  downloadUrl: { type: String, required: true },
});
export const Program = model("Program", programSchema);
