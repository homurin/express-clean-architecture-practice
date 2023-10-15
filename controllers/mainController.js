import ApiError from "../utils/apiError.js";

const index = (req, res, next) => {
  try {
    const data = {
      user: req.session.user,
    };
    res.render("index", data);
  } catch (err) {
    next(new ApiError("Internal server error", 500));
  }
};

const login = (req, res, next) => {
  try {
    res.render("login");
  } catch (err) {
    next(new Error("Internal server error", 500));
  }
};

export { index, login };
