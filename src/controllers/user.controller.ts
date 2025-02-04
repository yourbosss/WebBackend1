import { Request, Response } from "express";
import User from "../models/user.model"; 

interface MongoError extends Error {
    code?: number; // без нее error красные.
}

//функция для проверки, содержит ли строка только буквы.
const isAlpha = (str: string): boolean => /^[A-Za-zА-Яа-яЁё]+$/.test(str);

export const registerUser  = async (req: Request, res: Response): Promise<void> => {
    const { firstName, lastName, username, password, role } = req.body;

    //валидация ( firstName и lastName содержат только буквы).
    if (!isAlpha(firstName) || !isAlpha(lastName)) {
        res.status(400).send("Имя и фамилия должны содержать только буквы.");
        return; 
    }

    //логин и пароль могут содержать любые символы, включая буквы и цифры.
    try {
        //существует ли пользователь с таким же username
        const existingUser  = await User.findOne({ username });

        if (existingUser ) {
            res.status(400).send("Пользователь с таким логином уже существует");
            return; 
        } else {
            //создание нового пользователя.
            const user = new User({ firstName, lastName, username, password, role });

            //СОХРАНЕНИЕ ПОЛЬЗОВАТЕЛЯ В БД.
            await user.save();
            console.log("Пользователь успешно зарегистрирован");
            res.redirect("/success");
        }
    } catch (error) {
        console.error("Ошибка при регистрации:", error);
        
        const mongoError = error as MongoError;

        if (mongoError.code === 11000) {
            res.status(400).send("Пользователь с таким логином уже существует");
        } else {
            res.status(500).send("Ошибка при регистрации пользователя");
        }
    }
};