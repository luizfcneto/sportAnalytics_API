import FootballController from "../controllers/FootballController.js";
import express from "express";

const router = express.Router();

router.get("/test", FootballController.testAPI);

export default router;