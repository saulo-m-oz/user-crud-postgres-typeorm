import { Request, Response } from "express";
import { updateUserByID } from "../../services/user/updateUserByID.service";

export const updateUserByIDController = async(req: Request, res: Response) =>{
    try{
        const data = req.body;
        const {id} = req.params;
        const updatedUser = await updateUserByID(id, data);
        return res.status(200).send({
            "message": "Usuário atualizado!"
        });
    }catch(err){
        if(err instanceof Error){
            return res.status(404).send({
                "message": err.message
            })
        }
    }
}