import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  userId: string;
  role: string;
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Authorization token required' });
    return;
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET!,
    (err: jwt.VerifyErrors | null, decoded: unknown) => {
      if (err) {
        res.status(403).json({ message: 'Invalid token' });
        return;
      }

      const payload = decoded as DecodedToken;

      //добавляем пользователя в запрос.
      req.user = {
        userId: payload.userId,
        role: payload.role,
      };

      next();
    }
  );
};