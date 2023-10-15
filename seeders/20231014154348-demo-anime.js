"use strict";

const { QueryError } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const animeList = [
      {
        name: "Puella Magi Madoka Magica",
        body: "Slice of life anime about madoka fighting as magical girl",
        approved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Higurashi no naku koro ni",
        body: "Slice of life anime about Maebara Keichi who move to hinamizawa village",
        approved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bochi the rock",
        body: "Horror anime about bochi social anxiety",
        approved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Neon Genesis Evangelion",
        body: "Slice of life anime about shinji riding giant gundam",
        approved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Animes", animeList);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Animes", null, {});
  },
};
