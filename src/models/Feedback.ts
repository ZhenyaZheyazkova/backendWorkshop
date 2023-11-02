import mongoose, { Schema, Document } from 'mongoose';

export interface IFeedback extends Document {
    user_id: mongoose.Types.ObjectId;
    workshop_id: mongoose.Types.ObjectId;
    feedback_text: string;
    rating: number;
}

const FeedbackSchema: Schema = new Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    workshop_id: { type: mongoose.Types.ObjectId, ref: 'Workshop', required: true },
    feedback_text: { type: String, required: true },
    rating: { type: Number, required: true },
});

const FeedbackModel = mongoose.model<IFeedback>('Feedback', FeedbackSchema);

export default FeedbackModel;
