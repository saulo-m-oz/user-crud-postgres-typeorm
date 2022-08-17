import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

export const listAllUsers = async() => {
    const usersRepo = AppDataSource.getRepository(User);
    const users = await usersRepo.find();

    return users;
}