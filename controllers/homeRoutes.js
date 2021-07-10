const router = require('express').Router();
const { User, Character, Playbook, Background, Drive } = require('../models');

router.get('/', async (req, res) => {
      const playbookData = await Playbook.findAll({
      });

      const playbooks = playbookData.map((playbook) => playbook.get({ plain: true }));
      res.render('homepage', { playbooks });
});

router.get('/background', async (req, res) => {
      // const Background = await Background.where({
      // });
      res.render('background');
});

router.get('/drive', async (req, res) => {
      const driveData = await Drive.findAll({
      });

      const drives = driveData.map((drives) => drives.get({ plain: true }));
      res.render('drive', { drives });
});

router.get('/login', async (req, res) => {
      res.render('login');
} )

module.exports = router;