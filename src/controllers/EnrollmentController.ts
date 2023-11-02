import { Request, Response } from 'express';

// Enrollment controller
export const enrollUser = async (req: Request, res: Response) => {
  try {
    // Your enrollment logic here

    // Send a response if enrollment is successful
    res.status(201).json({ message: 'Enrollment successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
