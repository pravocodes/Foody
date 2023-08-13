export const registerController = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.send({
        message: "Enter username or password",
      });
    }
    res.status(200).send({
      success: true,
      message: "Registerd successfully",
      username,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};
