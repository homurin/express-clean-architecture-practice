import * as jwt from "../libs/jwt.js";
import ApiError from "../utils/apiError.js";
import * as userService from "../services/userService.js";
import { checkPassword } from "../libs/bcrypt.js";

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const query = {
    where: {
      email: email.toLowerCase(),
    },
  };
  const user = await userService.findOne(query);
  if (!user) {
    next(new ApiError("User email not found", 404));
    return;
  }
  const isPasswordCorrect = await checkPassword(
    password,
    user.encryptedPassword
  );
  if (!isPasswordCorrect) {
    next(new ApiError("User email and password not found", 404));
    return;
  }
  const token = jwt.createToken(user);

  res.status(200).json({
    ...user,
    token,
  });
  try {
  } catch (err) {
    next(new ApiError("Internal server error", 500));
  }
};

export const logout = (req, res, next) => {
  try {
    res.redirect("/login");
  } catch (err) {
    next(new ApiError("Internal server error", 500));
  }
};
