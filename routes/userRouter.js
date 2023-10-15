import { Router } from "express";
import * as userController from "../controllers/userController.js";
import checkToken from "../middlewares/checkToken.js";

const router = Router();

router.route("/").get(checkToken, userController.getAllUser);
router.route("/checktoken").get(checkToken, userController.checkToken);
router.route("/register").post(userController.register);
router.route("/login").post(userController.login);

export default router;
