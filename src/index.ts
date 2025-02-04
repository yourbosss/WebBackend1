import mongoose from "mongoose";
import express from "express";
import path from "path"; //работа со статическими путями.
import userRoutes from "./routes/user.routes";

const app = express();
const port = 3000;

const start = async () => {
  try {
    //подключение к MongoDB.
    await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000");
    console.log("Connected to MongoDB");

    //обработка http запросов.
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //установка статической папки для HTML файлов.
    app.use(express.static(path.join(__dirname, 'views'))); 

    //исходная страница.
    app.get("/", (req, res) => {
      res.redirect("/register"); 
    });

    app.use("/", userRoutes);

    //запуск сервера.
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

//запуск приложения.
start();
