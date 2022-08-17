import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import {Request, Response, NextFunction} from "express";

export const findUserMiddleware = async (req: Request, res: Response, next: NextFunction) =>{
    const {id} = req.params;
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.find({where: {id: id}});
    if(!user[0]){
        return res.status(404).send({
            "message": "Usuário não existe!"
        })
    }
    next();
}