import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

//Проверяет подлинность пользователя по JWT-токену и добавляет данные пользователя в запрос для последующих обработчиков.
interface DecodedToken {
  userId: string;
  role: string;
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. Получаем заголовок Authorization
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header is missing' });
    }

    // 2. Проверяем формат заголовка
    const authHeaderString = Array.isArray(authHeader) ? authHeader[0] : authHeader;
    const tokenParts = authHeaderString.split(' ');
    
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Invalid Authorization header format. Expected: Bearer <token>' });
    }

    const token = tokenParts[1];

    // 3. Верифицируем токен
    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
      if (err) {
        console.error('Token verification error:', err.message);
        return res.status(403).json({ message: 'Invalid or expired token' });
      }

      const payload = decoded as DecodedToken;
      
      // 4. Добавляем пользователя в запрос
      req.user = {
        userId: payload.userId,
        role: payload.role
      };
      
      next();
    });

  } catch (error) {
    console.error('Authentication middleware error:', error);
    return res.status(500).json({ message: 'Internal server error during authentication' });
  }
};