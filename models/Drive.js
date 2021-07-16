const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drive extends Model {}

Drive.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    playbook: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
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
    modelName: 'drive',
  }
);

module.exports = Drive;