const router = require('express').Router();
const { User, Character } = require('../models');

router.get('/', async (req, res) => {
      const playbookData = await Playbook.findAll({
            order: [
                  ['date_created', 'DESC']
                  ],
      });
      // const playbooks = playbookData.get({ plain: true });
      // res.render('homepage', { playbooks });

      const playbooks = playbookData.map((pb) => pb.get({ plain: true }));
      res.render('homepage', { playbooks });
});

router.get('/background', (req, res) => {
      res.render('background');
});

module.exports = router;