import { Router } from "express";
import jwt from "jsonwebtoken";
const router = Router();
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD)
    return res.status(401).json({ message: "Invalid credentials" });
  res.json({ token: jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "7d" }) });
});
export default router;
