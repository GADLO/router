const express = require("express");
import userRouter from "./routers/UserRouter";

const port = 8000;

const app = express();

app.use(userRouter);
app.use(express.json());

//服务监听
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
