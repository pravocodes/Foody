import express from "express";
import { createpostController } from "../controllers/postController.js";
import { registerController ,loginController } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login",loginController);

router.get("/post", createpostController);

export default router;