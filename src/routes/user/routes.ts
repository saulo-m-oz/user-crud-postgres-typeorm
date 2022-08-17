import {Router} from "express";
import { createUserController } from "../../controllers/user/createUser.controller";
import { deleteUserByIDController } from "../../controllers/user/deleteUserByID.controller";
import { listAllUsersController } from "../../controllers/user/listAllUsers.controller";
import { listUserByIDController } from "../../controllers/user/listUserByID.controller";
import { updateUserByIDController } from "../../controllers/user/updateUserByID.controller";
import { findUserMiddleware } from "../../middlewares/findUser.middleware";
import { createUserSchema, validateUserCreate } from "../../middlewares/userCreate.middleware";
export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("", listAllUsersController);
userRouter.get("/:id", findUserMiddleware, listUserByIDController);
userRouter.delete("/:id", findUserMiddleware, deleteUserByIDController);
userRouter.patch("/:id", findUserMiddleware, updateUserByIDController);