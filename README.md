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

### Установка зависимостей
**Перед началом установите:**
- Node.js
- Yarn
- npm install -g yarn
- MongoDB (локально или через Docker)

Клонирование репозитория:
- git clone 

##
 Настройка окружения

PORT=3000


mongodb://127.0.0.1:27017/база


JWT_SECRET=ваш_секретный_ключ

##
 Запуск сервера


Режим разработки:

yarn run dev


Сервер будет доступен по адресу:
http://localhost:3000/база

##

📡 API Endpoints: 

Авторизация

POST /api/auth/login


Тело запроса:


{
  "username": "ivanov",
  "password": "password123"
}



##
Пользователи

Регистрация

POST /api/users/register

Тело запроса:


{
  "firstName": "Иван",
  "lastName": "Иванов",
  "username": "ivanov",
  "password": "password123",
  "role": "student"
}

##

Получение профиля

GET /api/users/profile


authorization Bearer ваш_JWT_токен

##

Удаление пользователя

DELETE /api/users/<user_id>


authorization  Bearer ваш_JWT_токен

##

Проверка существования пользователя

GET /api/users/profile

authorization  Bearer ваш_JWT_токен



## Примечания
1. Для тестирования используйте Thunder Client
2. JWT секрет должен быть уникальным и защищенным
3. MongoDB URL может быть изменен в `.env`
















