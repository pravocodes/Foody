import express from "express";
import { registerController ,loginController, searchuserController} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login",loginController);

router.get("/search",searchuserController);


router.get("/test",requireSignIn,isAdmin,(req,res)=>{
    res.send("Sign in required Route")
})

export default router;