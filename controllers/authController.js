import usermodel from "../models/usermodel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !password) {
      return res.send({
        message: "Enter username or password",
      });
    }
    if (!phone) {
      return res.send({
        message: "Enter Phone number",
      });
    }
    if (!email) {
      return res.send({
        message: "Enter email",
      });
    }

    const existinguser = await usermodel.findOne({ email });

    if (existinguser) {
      return res.status(300).send({
        success: false,
        message: "User already Registered",
      });
    }

    const user = await new usermodel({
      name,
      email,
      password,
      phone,
    }).save();

    res.status(200).send({
      success: true,
      message: "Registerd successfully",
      user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};
