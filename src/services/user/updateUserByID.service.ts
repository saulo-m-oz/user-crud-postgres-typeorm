import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { IUpdateUser } from "../../interfaces/user";
import bcrypt from "bcrypt";

export const updateUserByID = async (userID: string, data: IUpdateUser) => {
  const usersRepo = AppDataSource.getRepository(User);
  const user = await usersRepo.find({ where: { id: userID } });

  const updatedUser: IUpdateUser = {
    name: data.name || user[0].name,
    email: data.email || user[0].email,
    age: data.age || user[0].age,
    updated_at: new Date(),
  };

  if (data.password !== undefined) {
    // if (bcrypt.compareSync(data.password, user[0].password)) {
    //   throw new Error(
    //     "Não é possível utilizar a mesma senha usada anteriormente."
    //   );
    // }
    const newPassword = bcrypt.hashSync(data.password, 10);
    updatedUser.password = newPassword;
  }

  await usersRepo.update(user[0].id, {
    name: updatedUser.name,
    email: updatedUser.email,
    age: updatedUser.age,
    password: updatedUser.password,
    updated_at: updatedUser.updated_at
  });

  return updatedUser;
};
