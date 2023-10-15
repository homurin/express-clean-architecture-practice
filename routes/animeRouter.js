import { Router } from "express";
import * as adminController from "../controllers/animeController.js";

const router = Router();

router.route("/").get(adminController.findAll);

export default router;
