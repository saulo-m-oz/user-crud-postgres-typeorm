import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

export const listUserByID = async (userID: string) =>{

    const usersRepo = AppDataSource.getRepository(User);
    const user = await usersRepo.find({where: {id: userID}});
    return user[0];

}