const sequelize = require('../config/connection');
const { User, Background, Drive, Character, Playbook, Origin, Move } = require('../models/');

const userData = require('./userData.json');
const driveData = require('./driveData.json');
const playbookData = require('./playbookData.json');
const backgroundData = require('./backgroundData.json');
const originData = require('./originData.json');
const moveData = require('./moveData.json');
const characterData = require('./characterData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Drive.bulkCreate(driveData, {
    individualHooks: true,
    returning: true,
  });

  await Playbook.bulkCreate(playbookData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Background.bulkCreate(backgroundData, {
    individualHooks: true,
    returning: true,
  });

  await Origin.bulkCreate(originData, {
    individualHooks: true,
    returning: true,
  });

  await Move.bulkCreate(moveData, {
    individualHooks: true,
    returning: true,
  });

  await Character.bulkCreate(characterData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();