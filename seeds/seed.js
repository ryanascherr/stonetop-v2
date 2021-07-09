const sequelize = require('../config/connection');
const { User, Background, Drive, Character, Playbook } = require('../models/');

// const userData = require('./userData.json');
// const backgroundData = require('./backgroundData.json');
const driveData = require('./driveData.json');
// const characterData = require('./characterData.json');
const playbookData = require('./playbookData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await Background.bulkCreate(backgroundData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // await Drive.bulkCreate(driveData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await Playbook.bulkCreate(playbookData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();