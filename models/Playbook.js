const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playbook extends Model {}

Playbook.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    complexity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    character_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'character',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playbook',
  }
);

module.exports = Playbook;