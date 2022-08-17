import { Request, Response } from "express";
import { listAllUsers } from "../../services/user/listAllUsers.service";

export const listAllUsersController = async (req: Request, res: Response) =>{
    try{
        const users = await listAllUsers();
        return res.status(200).send(users);
    }catch(err){
        if (err instanceof Error){
            return res.status(400).send({
                "message": err.message
            })
        }
    }
}