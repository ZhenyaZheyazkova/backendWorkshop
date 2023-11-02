import mongoose from "mongoose";
import dotenv from "dotenv";
import { AppError, handleError } from "../src/utils/errorHandler";
// import { Response } from "express";

dotenv.config();

const isAppError = (error: any): error is AppError => {
    return error instanceof AppError;
};

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error(
                "MONGODB_URI must be defined in the environment variables."
            );
        }
        const db = await mongoose.connect(process.env.MONGO_URI!); // process.env.MONGODB_URI! non-null and non-undefined
        console.log("Connected to MongoDB");
        return db;
    } catch (error) {
        // if (isAppError(error)) {
        //     handleError(error); // Remove the null argument
        // } else {
        //     console.error("An unknown error occurred:", error);
        // }
        console.log(error)
    }

};


export default connectDB;



