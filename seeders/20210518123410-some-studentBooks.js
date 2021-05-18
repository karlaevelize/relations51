'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "studentBooks",
      [
        {
          studentId: 1,
          bookId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 1,
          bookId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 2,
          bookId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 2,
          bookId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 1,
          bookId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 1,
          bookId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 3,
          bookId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 4,
          bookId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 5,
          bookId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 6,
          bookId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("studentBooks", null, {});
  }
};
