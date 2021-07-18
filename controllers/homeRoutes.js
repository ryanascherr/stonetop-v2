const router = require('express').Router();
const { User, Character, Playbook, Background, Drive, Origin } = require('../models');

router.get('/', async (req, res) => {
      const playbookData = await Playbook.findAll({
            order: [
                  ['name', 'ASC']
            ]
      });

      const playbooks = playbookData.map((playbook) => playbook.get({ plain: true }));

      res.render('homepage', { playbooks });
});

router.get('/background', async (req, res) => {
      const backgroundData = await Background.findAll({
            where: {
                  playbook: req.body.playbookName
            }
      });

      const backgrounds = backgroundData.map((background) => background.get({ plain: true }));

      res.render('background', { backgrounds });
});

router.get('/drive', async (req, res) => {
      const driveData = await Drive.findAll({
            where: {
                  playbook: "The Blessed"
            }
      });

      const drives = driveData.map((drive) => drive.get({ plain: true }));

      res.render('drive', { drives });
});

router.get('/origin', async (req, res) => {
      const originData = await Origin.findAll({
            where: {
                  playbook: "The Heavy"
            }
      });

      const origins = originData.map((origin) => origin.get({ plain: true }));

      res.render('origin', { origins });
});

router.get('/login', async (req, res) => {
      
      res.render('login');
} )

module.exports = router;