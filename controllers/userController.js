import * as jwt from "../libs/jwt.js";
import * as User from "../services/userService.js";
import ApiError from "../utils/apiError.js";
import { checkPassword } from "../libs/bcrypt.js";

export const register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "created",
      data: user,
    });
  } catch (err) {
    console.log(err);
    next(new ApiError("Bad request", 400));
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const query = {
      where: {
        email: email.toLowerCase(),
      },
    };
    const user = await User.findOne(query);

    if (!user) {
      next(new ApiError("Email or Password not found", 404));
      return;
    }
    const isPasswordCorrect = await checkPassword(
      password,
      user.encryptedPassword
    );
    if (!isPasswordCorrect) {
      next(new ApiError("Email or Password not found", 404));
      return;
    }
    const data = {
      id: user.id,
      email: user.email,
    };
    const token = jwt.createToken(data);

    res.status(201).json({
      ...user,
      token,
    });
  } catch (err) {
    console.log(err.message);
    next(new ApiError("Internal server error", 500));
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.status(200).json({
      status: "ok",
      data: user,
    });
  } catch (err) {
    next(new ApiError("Internal server error", 500));
  }
};

export const checkToken = async (req, res, next) => {
  const id = req.user.id;
  try {
    console.log(id);
    const user = await User.findByPk(id);
    res.status(200).json({
      status: "ok",
      data: user,
    });
  } catch (err) {
    next(new ApiError("Internal server error", 500));
  }
};
