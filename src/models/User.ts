import { Schema, model} from 'mongoose';
import {IUser} from "../types.js";



const UserSchema = new Schema<IUser>({
    fullNme: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    avatarUrl: String
}, {timestamps: true});


export default model<IUser>('User', UserSchema);