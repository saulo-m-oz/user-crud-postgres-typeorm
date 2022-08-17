import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/user";
import * as yup from "yup";
import { SchemaOf } from "yup";

export const createUserSchema: SchemaOf<IUser> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  age: yup.number().required(),
});

export const validateUserCreate =
  (schema: SchemaOf<IUser>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.newUser = validatedData;
        next();
      } catch (err: any) {
        return res.status(400).json({
          message: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };
