import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import process from "process";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export const createToken = (payload) => {
  return jwt.sign(payload, jwtSecret);
};

export const verifyToken = (token) => {
  return jwt.verify(token, jwtSecret);
};
