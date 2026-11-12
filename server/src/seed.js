import "dotenv/config";
import mongoose from "mongoose";
import Subject from "./models/Subject.js";
import { subjectsByYear } from "./data/subjects.js";

const slugify = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

await mongoose.connect(process.env.MONGO_URI);
for (const [year, names] of Object.entries(subjectsByYear)) {
  for (const [i, name] of names.entries()) {
    const slug = `${year}-${slugify(name)}`;
    await Subject.updateOne({ slug }, { name, slug, year: Number(year), order: i }, { upsert: true });
  }
}
console.log("Subjects seeded");
process.exit(0);
