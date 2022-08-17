export interface ICreateUser {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  created_at: Date;
  updated_at: Date;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUpdateUser{
  name?: string;
  email?: string;
  password?: string;
  age?: number;
  updated_at?: Date;
}