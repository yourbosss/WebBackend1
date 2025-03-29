# WebBackLab 🚀

Серверная часть веб-приложения для управления пользователями с аутентификацией JWT

## Технологии
- **Node.js** (LTS-версия)
- **Express.js** — веб-фреймворк
- **MongoDB** — NoSQL база данных
- **Mongoose** — ODM для MongoDB
- **JWT** — аутентификация
- **Yarn** — менеджер пакетов

---

## 🚀 Запуск проекта

### 1️⃣ Установка зависимостей
**Перед началом установите:**
- [Node.js](https://nodejs.org/) (LTS-версия)
- [Yarn](https://yarnpkg.com/):
  ```bash
  npm install -g yarn
MongoDB (локально или через Docker)

Клонирование репозитория:

bash
Copy
git clone https://github.com/ваш-репозиторий.git
cd ваш-репозиторий
2️⃣ Настройка окружения
Создайте файл .env в корне проекта:

env
Copy
PORT=3000
DB_URL=mongodb://localhost:27017/ваша-база
JWT_SECRET=ваш_секретный_ключ
3️⃣ Запуск сервера
Режим разработки (с hot-reload):

bash
Copy
yarn run dev
Сервер будет доступен по адресу:
http://localhost:3000

📡 API Endpoints
🔐 Аутентификация
POST /api/auth/login
Тело запроса:

json
Copy
{
  "username": "ivanov",
  "password": "password123"
}
👥 Пользователи
Регистрация
POST /api/users/register
Тело запроса:

json
Copy
{
  "firstName": "Иван",
  "lastName": "Иванов",
  "username": "ivanov",
  "password": "password123",
  "role": "student"
}
Получение профиля
GET /api/users/profile
Требуется:
Authorization: Bearer ваш_JWT_токен

Удаление пользователя
DELETE /api/users/<user_id>
Требуется:
Authorization: Bearer ваш_JWT_токен


















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


