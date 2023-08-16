import express from "express";
import { createpostController, getpostController } from "../controllers/postController.js";
import { registerController ,loginController } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login",loginController);

router.post("/createpost", createpostController);

router.post("/getpost", getpostController)

export default router;