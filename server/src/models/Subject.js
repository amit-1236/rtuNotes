import mongoose from "mongoose";
const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  year: { type: Number, required: true, min: 1, max: 4 },
  order: { type: Number, default: 0 },
});
export default mongoose.model("Subject", subjectSchema);
