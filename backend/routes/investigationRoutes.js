import express from "express";
import { investigateNight } from "../controllers/investigationController.js";

const router = express.Router();

router.get("/run", investigateNight);

export default router;