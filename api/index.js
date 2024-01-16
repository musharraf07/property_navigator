import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// const mongoose = require("mongoose");
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();
const mongo = process.env.MONGO;
mongoose.connect(mongo, {});

const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log(`Monogo Database is connected  on port ${mongo}`);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
