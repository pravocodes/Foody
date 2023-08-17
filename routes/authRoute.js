import express from "express";
import { registerController ,loginController, searchuserController, followController, followingController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login",loginController);

router.get("/search",searchuserController);

router.post("/follow",requireSignIn,followController);

router.get("/followers",followingController);

router.get("/test",requireSignIn,isAdmin,(req,res)=>{
    res.send("Sign in required Route")
})

export default router;