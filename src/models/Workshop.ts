import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkshop extends Document {
    title: string;
    description: string;
    date: Date;
    instructor_name: string;
    capacity: number;
}

const WorkshopSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    instructor_name: { type: String, required: true },
    capacity: { type: Number, required: true },
});

const WorkshopModel = mongoose.model<IWorkshop>('Workshop', WorkshopSchema);

export default WorkshopModel;
