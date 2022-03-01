import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import { todoRouter } from "./routes/todo";
const app = express();
app.use(json());
app.use(todoRouter);

mongoose.connect("mongodb://localhost/todo", () => {
  console.log("connected to mongodb");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
