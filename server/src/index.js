import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import subjectRoutes from "./routes/subjects.js";
import resourceRoutes from "./routes/resources.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.get("/api/health", (_, res) => res.json({ ok: true }));
app.use("/api/auth", authRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/resources", resourceRoutes);

connectDB().then(() => app.listen(process.env.PORT || 5000, () => console.log(`API running at port ${process.env.PORT}`)));
