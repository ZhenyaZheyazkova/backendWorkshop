import express from 'express';
import { registerUser, loginUser } from '../controllers/AuthController';
import { authenticationMiddleware } from '../middlewares/authenticationMiddleware';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Authenticate and log in a user
router.post('/login', loginUser);

// Example protected route that requires authentication
router.get('/protected', authenticationMiddleware, (req, res) => {
  res.status(200).json({ message: 'This is a protected route' });
});

export default router;
