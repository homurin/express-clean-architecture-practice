import { verifyToken } from "../libs/jwt.js";
import ApiError from "../utils/apiError.js";
import { findByPk } from "../services/userService.js";

export default async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    const token = bearer.split("Bearer ")[1];
    const payload = verifyToken(token);
    if (!payload) {
      next(new ApiError("Invalid token", 400));
    }
    req.user = await findByPk(payload.id);
    next();
  } catch (err) {
    next(new ApiError("Unauthorized", 400));
  }
};
