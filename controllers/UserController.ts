import { Request, Response, NextFunction } from "express";
import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

const { SECRET_KEY } = process.env;

export interface IUserInfo {
  username: string;
  password: string;
}

export async function getUserList(req: Request, res: Response) {
  const users = await UserModel.getUserList();

  res.status(200).json({
    err_code: 0,
    err_msg: "ok",
    data: users,
  });
}

export async function register(req: Request, res: Response) {
  //获取用户输入字段
  const { username, password }: IUserInfo = req.body;

  //验证用户输入字段
  if (username.length < 6 || password.length < 6) {
    return res.status(403).json({
      err_code: 1001,
      err_msg: "Invalid username or password length",
    });
  }

  try {
    //添加用户到数据库
    const user = await UserModel.addUser({ username, password });
    res.status(200).json({
      err_code: 0,
      err_msg: "ok",
      data: user,
    });
  } catch (e) {
    //验证用户是否存在
    res.status(200).json({
      reqData: req.body,
      err_code: 1002,
      err_msg: "username exsisted in database",
      err: e,
    });
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const { username, password }: IUserInfo = req.body;
  const userInfo = await UserModel.getUser(username);

  if (!userInfo) {
    return res.status(403).json({
      err_code: 1003,
      err_msg: "The user is not exist in database",
    });
  }

  //比对数据库密码，userInfo.password不一定存在，后面加！断言处理
  const isValidPassword = bcrypt.compareSync(password, userInfo.password!);

  //判断相等性，不相等返回报错信息
  if (!isValidPassword) {
    return res.status(403).json({
      err_code: 1004,
      err_msg: "Got a wrong password",
    });
  }

  const userToken = jwt.sign(
    {
      id: String(userInfo._id),
    },
    SECRET_KEY!,
    {
      expiresIn: "2h",
    }
  );
}

export async function getProfile(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(200).json({
    message: "Profile",
  });
}
