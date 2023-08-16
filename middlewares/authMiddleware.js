import JWT from "jsonwebtoken";
import usermodel from "../models/usermodel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRETKEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await usermodel.findById(req.user._id);
    console.log(user.role);
    if (user.role != 1) {
      return res.status(403).send({
        success: false,
        message: "Unauthorised Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in admin middleware",
    });
  }
};
