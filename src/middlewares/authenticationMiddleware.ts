

import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
import { AppError } from '../utils/errorHandler';
import jwt, { Secret } from 'jsonwebtoken'; // Import Secret type





// Define a custom interface that extends Request
interface CustomRequest extends Request {
  user?: any; // Add the user property
}

export function authenticationMiddleware(
  req: CustomRequest, // Use the custom interface
  res: Response,
  next: NextFunction
) {
  // Check if a JWT token is present in the request headers
  const token = req.header('x-auth-token');

  if (!token) {
    return next(new AppError('Access denied. No token provided.', 401));
  }

  try {
    // Verify the token and decode its payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret); // Specify Secret type

    // Add the user object to the request for further use
    req.user = decoded;

    next();
  } catch (error) {
    return next(new AppError('Invalid token.', 401));
  }
}
