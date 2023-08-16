import express from "express";
import { registerController } from "../controllers/authController.js";
import { createpostController } from "../controllers/postController.js";

const router = express.Router();

router.get("/register", registerController);

router.get("/post", createpostController);

export default router;