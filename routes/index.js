import { Router } from "express";
import Anime from "./animeRouter.js";
import User from "./userRouter.js";
import Main from "./mainRoutes.js";

const route = Router();

route.use("/", Main);
route.use("/api/v1/animes", Anime);
route.use("/api/v1/users", User);

export default route;
