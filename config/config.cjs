const fs = require("fs");

module.exports = {
  development: {
    username: "fajrin",
    password: "fajrin",
    database: "service_repository_pattern",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
