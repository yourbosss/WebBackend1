📌 Описание
1WebBackLab — это серверная часть веб-приложения, разработанная на Node.js с использованием Express и MongoDB. Проект предоставляет API для управления пользователями и данными, аутентификации и авторизации.

⚙️ Технологии
Node.js — среда выполнения JavaScript
Express.js — веб-фреймворк для Node.js
MongoDB — NoSQL база данных
Yarn — менеджер пакетов
Mongoose — ODM для работы с MongoDB
JWT (JSON Web Token) — механизм аутентификации

🚀 Запуск проекта
1️⃣ Установка зависимостей
Перед установкой убедитесь, что у вас установлены:

Node.js (LTS-версия)
Yarn (устанавливается через npm install -g yarn)
MongoDB (локально или в облаке (docker)
Склонируйте репозиторий

2️⃣ Настройка переменных окружения
Измените файл .env в корневой директории при необходимости.

3️⃣ Запуск сервера
Для запуска в режиме разработки (с автоматической перезагрузкой через nodemon):

yarn run dev
После запуска сервер будет доступен по адресу http://localhost:3000.

📡 API эндпоинты


🔹 Регистрация (создать нового студента/преподавателя)
POST /api/users/register 
Тело запроса (JSON):
{
  "firstName": "Иван",
  "lastName": "Иванов",
  "username": "ivanov",
  "password": "password123",
  "role": "student" // или "teacher"
}

🔹 Аутентификация
POST api/auth/login  
Тело запроса (JSON):
{
  "username": "ivanov",
  "password": "password123"
}


🔹 Проверка существования пользователя
GET api/users/profile 
authorization  Bearer <ваш_JWT_токен>

🔹Удаление пользователя
 DELETE /api/users/<user_id>
 authorization  Bearer <ваш_JWT_токен>


