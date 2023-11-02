import EnrollmentModel, { IEnrollment } from '../models/Enrollment';

export async function createEnrollment(enrollmentData: IEnrollment): Promise<IEnrollment> {
    try {
        const newEnrollment = new EnrollmentModel(enrollmentData);
        return await newEnrollment.save();
    } catch (error) {
        throw error;
    }
}

// Add more enrollment-related functions as needed.
