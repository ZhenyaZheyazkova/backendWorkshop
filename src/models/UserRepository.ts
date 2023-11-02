import UserModel, { IUser } from '../models/User';

export async function createUser(userData: IUser): Promise<IUser> {
  try {
    const newUser = new UserModel(userData);
    return await newUser.save();
  } catch (error) {
    throw error;
  }
}

export async function findUserByUsername(username: string): Promise<IUser | null> {
  try {
    return await UserModel.findOne({ username }).exec();
  } catch (error) {
    throw error;
  }
}

