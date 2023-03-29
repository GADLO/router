import { IUserInfo } from "../controllers/UserController";
import { UserModel } from "../db";

//注册
async function addUser(userinfo: IUserInfo) {
  await UserModel.create(userinfo);
}

//获取用户列表
async function getUserList() {
  return await UserModel.find();
}

//登陆验证查找用户
async function getUser(username: string) {
  return UserModel.findOne({ username });
}

//使用命名空间输出
export default {
  addUser,
  getUserList,
  getUser,
};
