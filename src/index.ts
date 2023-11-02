import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes';
import workshopRoutes from './routes/workshopRoutes';
import enrollmentRoutes from './routes/enrollmentRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import { errorHandler } from './utils/errorHandler';
import connectDB from './dbConfig';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Connect to MongoDB and pass 'res' object
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((error) => {
//   console.error('MongoDB connection error:', error);
// });

// Routes
app.use('/auth', authRoutes); // Mount auth routes
app.use('/workshops', workshopRoutes); // Mount workshop routes
app.use('/enrollments', enrollmentRoutes); // Mount enrollment routes
app.use('/feedbacks', feedbackRoutes); // Mount feedback routes

connectDB()


// Global error handler
app.use(errorHandler);


const PORT = process.env.PORT || 3000;


// Start the server



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
