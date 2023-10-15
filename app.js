import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import dotenv from "dotenv";
import process from "process";
import route from "./routes/index.js";
import ApiError from "./utils/apiError.js";
import errorHandler from "./controllers/errorController.js";
import session from "express-session";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// swagger

const swaggerDocument = YAML.load("./openapi.yaml");

// view engine
app.set("view engine", "ejs");

// express session
app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.COOKIE_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(route);
// swagger route

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// catch error on all http method and routes when not exists

app.all("*", (req, res, next) => {
  next(new ApiError("Route does note exist", 404));
});
app.use(errorHandler);

export default app;
