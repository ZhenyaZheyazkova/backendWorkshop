import express from 'express';
import { submitFeedback } from '../controllers/FeedbackController';
import { authenticationMiddleware } from '../middlewares/authenticationMiddleware';

const router = express.Router();

// Provide feedback for a workshop you attended
router.post('/feedback/:workshopId', authenticationMiddleware, submitFeedback);

export default router;
