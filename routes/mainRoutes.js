import { Router } from "express";
import * as mainController from "../controllers/mainController.js";
import * as authController from "../controllers/authController.js";
import * as authChecker from "../middlewares/authChecker.js";

const router = Router();

router.route("/").get(authChecker.authorizedOnly, mainController.index);
router
  .route("/login")
  .get(mainController.login)
  .post(authChecker.publicOnly, authController.login);
router.route("/logout").get(authChecker.authorizedOnly, authController.logout);

export default router;
