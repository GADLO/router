export interface IUserInfo {
  username: string;
  password: string;
}

export interface IResponse {
  err_code: number;
  err_msg: string;
  data?: any;
}

export interface ICommon {
  [key: string]: string;
}
