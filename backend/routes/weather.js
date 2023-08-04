import express from "express";
import { destination } from "../controllers/weather.js";

const router = express.Router();
router.get('/temperature',destination)

export default router;

