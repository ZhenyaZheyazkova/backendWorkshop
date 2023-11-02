import { Response, Request, NextFunction } from 'express';

// Custom error class to represent application-specific errors
export class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.name = "AppError";
    }
}

// Error handling middleware
export function errorHandler(
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
}

export function handleError(err: AppError | Error, res: any) {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({ status: "error", message: err.message });
    } else {
        console.error(err);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}

