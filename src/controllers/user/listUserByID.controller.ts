import { Request, Response } from "express";
import { listUserByID } from "../../services/user/listUserByID.service";

export const listUserByIDController = async (req: Request, res: Response) =>{
    try{
        const {id} = req.params;
        const user = await listUserByID(id);
        return res.status(200).send(user);
    }catch(err){
        if (err instanceof Error){
            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}