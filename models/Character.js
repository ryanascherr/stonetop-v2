const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
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
    health: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    damage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    armor: {
        type: DataTypes.INTEGER,
    },
    exp: {
        type: DataTypes.INTEGER,
    },
    str: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dex: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    int: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    wis: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    con: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    cha: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    drive: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    background: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character',
  }
);

module.exports = Character;