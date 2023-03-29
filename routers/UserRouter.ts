import { Router } from "express";
import bodyParser from "body-parser";
import { checkAuth } from "../middlewares/UserMiddleware";
import {
  register,
  login,
  getProfile,
  getUserList,
} from "../controllers/UserController";

const router = Router();
const jsonParser = bodyParser.json();

router.get("/api/user/get_user_list", getUserList);
router.post("/api/user/register", jsonParser, register);
router.post("/api/user/login", jsonParser, login);
router.post("/api/user/profile", jsonParser, checkAuth, getProfile);

export default router;
