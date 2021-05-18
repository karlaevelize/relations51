'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.belongsTo(models.house)
    }
  };
  student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    playsQuidditch: DataTypes.BOOLEAN,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};