import FeedbackModel, { IFeedback } from '../models/Feedback';

export async function createFeedback(feedbackData: IFeedback): Promise<IFeedback> {
    try {
        const newFeedback = new FeedbackModel(feedbackData);
        return await newFeedback.save();
    } catch (error) {
        throw error;
    }
}

