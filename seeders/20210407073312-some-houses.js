'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "houses",
      [
        {
          name: "Gryffindor",
          symbol: "lion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hufflepuff",
          symbol: "badger",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ravenclaw",
          symbol: "eagle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Slytherin",
          symbol: "serpent",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("houses", null, {});
  },
};
