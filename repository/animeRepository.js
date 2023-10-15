const { Anime } = require("../models");

module.exports = {
  findAll() {
    return Anime.findAll();
  },
};
