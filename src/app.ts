import express from 'express';
import userRouter from './routes/user.routes';
import authRouter from './routes/auth.routes';
import { loggingMiddleware } from './middleware/loggingMiddleware';
import { errorHandlerMiddleware } from './middleware/errorHandlerMiddleware';

const app = express();

//Middleware для обработки JSON и логирования.
app.use(express.json());
app.use(loggingMiddleware);

//Роуты.
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

//Middleware для обработки ошибок.
app.use(errorHandlerMiddleware);

export default app;