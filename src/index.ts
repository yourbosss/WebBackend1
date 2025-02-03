import mongoose from "mongoose";
import express, { Request, Response } from "express";

const app = express();
const port = 3000;

const start = async () => {
  try {
    // Подключение к MongoDB.
    await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000");

    console.log("Connected to MongoDB");

    app.use(express.json());

    app.get("/", (req: Request, res: Response) => {
      res.send("Hello, Express with TypeScript!");
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

start();
