const express = require("express");
import { NextFunction } from "express";
import userRouter from "./routers/UserRouter";

const port = 8000;

const app = express();

//设置跨域,请求先经过这里，通过next跳转到路由
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  //设置允许跨域的源
  res.header("Access-Control-Allow-Origin", "*"); //允许全部跨域

  //设置允许的请求方法
  res.header("Access-Control-Allow-Methods", "GET,POST"); //允许GET，POST

  //设置允许的请求header
  res.header(
    "Access-Control-Allow-Headers",
    "content-type, Origin, Authorization"
  );

  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(userRouter);
app.use(express.json());

//服务监听
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
