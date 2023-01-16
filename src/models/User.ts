import { Schema, model, connect } from 'mongoose';

interface IUser {
    fullNme: string;
    email: string;
    passwordHash: string
    avatarUrl?: string;

}

// 2. Create a Schema corresponding to the document interface.
const UserSchema = new Schema<IUser>({
    fullNme: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    avatarUrl: String
}, {timestamps: true});

// 3. Create a Model.
export default model<IUser>('User', UserSchema);