const router = require('express').Router();
const { User, Character, Playbook } = require('../models');

router.get('/', async (req, res) => {
      const playbookData = await Playbook.findAll({
      });

      const playbooks = playbookData.map((playbook) => playbook.get({ plain: true }));
      res.render('homepage', { playbooks });
});

router.get('/background', (req, res) => {
      res.render('background');
});

module.exports = router;