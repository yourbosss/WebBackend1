import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
import path from "path"; 


const router = Router();

//маршрут для отображения формы регистрации.
router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, '../views/register.html'));
});

//маршрут для обработки регистрации пользователя.
router.post("/register", registerUser );

//маршрут для страницы успешной регистрации.
router.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, '../views/success.html'));
});

export default router;