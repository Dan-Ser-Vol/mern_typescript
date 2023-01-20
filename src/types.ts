import  {Request, Response} from "express";

export interface IUser {
    fullNme: string;
    email: string;
    passwordHash?: string
    avatarUrl?: string;
    password: string | number;

}

export interface IReqRes {
    req: Request,
    res: Response
}

