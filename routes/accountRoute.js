import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { followController, followingController } from "../controllers/accountController.js"

const router = express.Router();
router.post("/follow",requireSignIn,followController);

router.get("/followers",followingController);

export default router;