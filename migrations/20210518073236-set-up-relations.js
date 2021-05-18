'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("students", "houseId", {
      type: Sequelize.INTEGER,
      references: {
        model: "houses",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("students", "houseId")
  }
};
