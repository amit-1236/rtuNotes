import mongoose from "mongoose";
const resourceSchema = new mongoose.Schema({
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
  title: { type: String, required: true, trim: true },
  type: { type: String, enum: ["notes", "book", "pyq", "syllabus", "link"], default: "notes" },
  url: { type: String, required: true },
}, { timestamps: true });
export default mongoose.model("Resource", resourceSchema);
