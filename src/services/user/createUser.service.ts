import { User } from "../../entities/user.entity";
import { ICreateUser, IUser } from "../../interfaces/user";
import bcrypt from "bcrypt";
import { AppDataSource } from "../../data-source";

export const createUserService = async ({name, email, password, age}: IUser) =>{

    const usersRepo = AppDataSource.getRepository(User);
    const users = await usersRepo.find();

    const emailAlreadyExists = users.find((user) => user.email === email);
    if (emailAlreadyExists){
        throw new Error("Email indisponível");
    }

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = bcrypt.hashSync(password, 10);
    user.age = age;
    user.created_at = new Date();
    user.updated_at = new Date();

    usersRepo.create(user);
    await usersRepo.save(user);

    return {...user, password: undefined};

}