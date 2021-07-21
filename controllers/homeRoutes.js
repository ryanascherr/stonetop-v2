const router = require('express').Router();
const { User, Character, Playbook, Background, Drive, Origin, Move } = require('../models');

router.get('/', async (req, res) => {
      const playbookData = await Playbook.findAll({
            order: [
                  ['name', 'ASC']
            ]
      });

      const userData = await User.findByPk(req.session.id, {
            attributes: { exclude: ['password'] },
          });
      
      //     const users = userData.get({ plain: true });

      const playbooks = playbookData.map((playbook) => playbook.get({ plain: true }));

      res.render('homepage', { 
            playbooks,
            logged_in: req.session.logged_in });

            

      // res.render('dashboard', {
      //       ...user,
      //       logged_in: true
      //     });
});

router.get('/move', async (req, res) => {
      const moveData = await Move.findAll({
            order: [
                  ['name', 'ASC']
            ],
            where: {
                  playbook: "Basic"
            }
      });

      const moves = moveData.map((move) => move.get({ plain: true }));

      res.render('move', { moves });
});

router.get('/background/:playbookName', async (req, res) => {
      console.log(req.params.playbookName);
      const backgroundData = await Background.findAll({
            where: {
                  playbook: req.params.playbookName
            }
      });

      const backgrounds = backgroundData.map((background) => background.get({ plain: true }));

      res.render('background', { backgrounds, logged_in: req.session.logged_in });
});

router.get('/drive/:playbookName', async (req, res) => {
      const driveData = await Drive.findAll({
            where: {
                  playbook: req.params.playbookName
            }
      });

      const drives = driveData.map((drive) => drive.get({ plain: true }));

      res.render('drive', { drives, logged_in: req.session.logged_in });
});

router.get('/origin/:playbookName', async (req, res) => {
      const originData = await Origin.findAll({
            where: {
                  playbook: req.params.playbookName
            }
      });

      const origins = originData.map((origin) => origin.get({ plain: true }));

      res.render('origin', { origins, logged_in: req.session.logged_in });
});

router.get('/login', async (req, res) => {
      
      res.render('login');
});

router.get('/stat', async (req, res) => {
      
      res.render('stat', { logged_in: req.session.logged_in });
});

router.get('/sheet/:id', async (req, res) => {

      const characterData = await Character.findAll({
            where: {
                  id: req.params.id
            }
      });

      const characters = characterData.map((character) => character.get({ plain: true }));
      
      res.render('sheet', {characters, logged_in: req.session.logged_in});
});

router.get('/characters', async (req, res) => {

      const characterData = await Character.findAll({
            order: [
                  ['name', 'ASC']
            ]
      });

      const characters = characterData.map((character) => character.get({ plain: true }));
      
      res.render('characters', { characters, logged_in: req.session.logged_in });
});

module.exports = router;