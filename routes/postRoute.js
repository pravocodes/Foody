import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createpostController, getpostController, getpostbyIdController } from "../controllers/postController.js";
const router = express.Router();
router.post("/createpost", requireSignIn, createpostController);

router.get("/getpost", requireSignIn, getpostController);

router.get("/userpost",requireSignIn, getpostbyIdController);

export default router;