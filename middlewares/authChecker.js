export const authorizedOnly = (req, res, next) => {
  if (!req.session.isAuthenticated) {
    res.redirect("/login");
  }
  next();
};

export const publicOnly = (req, res, next) => {
  if (!req.session.isAuthenticated) {
    next();
    return;
  }
  res.redirect("/");
};
