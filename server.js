import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "./todos.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_CONN_STR)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Use the to-do routes
app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
