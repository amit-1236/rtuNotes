import { Router } from "express";
import Resource from "../models/Resource.js";
import requireAdmin from "../middleware/auth.js";
const router = Router();

router.post("/", requireAdmin, async (req, res) => {
  try { res.status(201).json(await Resource.create(req.body)); }
  catch (e) { res.status(400).json({ message: e.message }); }
});
router.put("/:id", requireAdmin, async (req, res) => {
  res.json(await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});
router.delete("/:id", requireAdmin, async (req, res) => {
  await Resource.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});
export default router;
