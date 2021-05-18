'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      book.belongsToMany(models.student, {
        through: "studentBooks",
        foreignKey: "bookId"
      })
    }
  };
  book.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};