import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errorHandler';

export function errorHandlingMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    // Handle known application-specific errors
    res.status(err.statusCode).json({ message: err.message });
  } else {
    // Handle unknown errors
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
