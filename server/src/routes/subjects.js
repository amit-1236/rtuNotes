import { Router } from "express";
import Subject from "../models/Subject.js";
import Resource from "../models/Resource.js";
const router = Router();
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// GET /api/subjects?year=3&q=cloud
router.get("/", async (req, res) => {
  const filter = {};
  if (req.query.year) filter.year = Number(req.query.year);
  if (req.query.q) filter.name = new RegExp(escapeRe(req.query.q), "i");
  res.json(await Subject.find(filter).sort({ year: 1, order: 1 }));
});

// GET /api/subjects/:slug -> subject + its resources
router.get("/:slug", async (req, res) => {
  const subject = await Subject.findOne({ slug: req.params.slug });
  if (!subject) return res.status(404).json({ message: "Subject not found" });
  const resources = await Resource.find({ subject: subject._id }).sort({ createdAt: -1 });
  res.json({ subject, resources });
});
export default router;
