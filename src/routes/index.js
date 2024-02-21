import express from "express";
import footballRoutes from "./footballRoutes.js";

const router = express.Router();

router.use("/api/football", footballRoutes);

export default router;