import {Request, Response} from "express";
import { deleteUserByID } from "../../services/user/deleteUserByID.service";

export const deleteUserByIDController = async (req: Request, res: Response) =>{
    try{
        const {id} = req.params;
        await deleteUserByID(id);
        return res.status(200).send({
            "message": "Usuário deletado."
        })
    }catch(err){
        if(err instanceof Error){
            return res.status(404).send({
                "message": "Usuário inexistente"
            })            
        }
    }
}