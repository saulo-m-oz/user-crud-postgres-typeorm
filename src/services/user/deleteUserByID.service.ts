import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

export const deleteUserByID = async(userID : string) =>{
    const userRepository = AppDataSource.getRepository(User);
    await userRepository.delete({id: userID});
}