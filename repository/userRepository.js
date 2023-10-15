const { User } = require("../models");

module.exports = {
  create(data) {
    return User.create(data);
  },
  findOne(query) {
    return User.findOne(query);
  },
  findByPk(primaryKey) {
    return User.findByPk(primaryKey);
  },
  findAll() {
    return User.findAll();
  },
};
