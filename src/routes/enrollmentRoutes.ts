import express from 'express';
import { enrollUser } from '../controllers/EnrollmentController';
import { authenticationMiddleware } from '../middlewares/authenticationMiddleware';

const router = express.Router();

// Enroll the authenticated user in a workshop
router.post('/enroll/:workshopId', authenticationMiddleware, enrollUser);

export default router;
