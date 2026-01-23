import express from "express";
import { uploadTest } from "../controllers/upload.controller.js";

const router = express.Router();

router.post("/upload", uploadTest);

export default router;
