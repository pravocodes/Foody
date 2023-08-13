import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

app.use("/api/v1/auth", authRoute);

app.use("/", (req, res) => {
  res.send("<h1>Foodies</h1>");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port number ${PORT}`.bgGreen.white);
});
