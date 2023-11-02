import mongoose, { Schema, Document } from 'mongoose';

export interface IEnrollment extends Document {
    user_id: mongoose.Types.ObjectId;
    workshop_id: mongoose.Types.ObjectId;
    enrollment_date: Date;
}

const EnrollmentSchema: Schema = new Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    workshop_id: { type: mongoose.Types.ObjectId, ref: 'Workshop', required: true },
    enrollment_date: { type: Date, default: Date.now },
});

const EnrollmentModel = mongoose.model<IEnrollment>('Enrollment', EnrollmentSchema);

export default EnrollmentModel;
