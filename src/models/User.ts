import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    hashed_password: string;
    email: string;
    role: 'regular' | 'admin';
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    hashed_password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['regular', 'admin'], default: 'regular' },
});

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
