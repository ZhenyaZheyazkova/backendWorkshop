import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';


export const validateRegistration = [
  body('username').notEmpty().isString(),
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
