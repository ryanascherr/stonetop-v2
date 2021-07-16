const router = require('express').Router();
const { User, Character, Playbook, Background, Drive } = require('../models');

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
      // let playbook = localStorage.getItem("playbook");
      // console.log(playbook);
      const backgroundData = await Background.findAll({
            where: {
                  playbook: "The Seeker"
            }
      });

      const backgrounds = backgroundData.map((playbook) => playbook.get({ plain: true }));

      res.render('background', { backgrounds });
});

router.get('/drive', async (req, res) => {
      const driveData = await Drive.findAll({
            where: {
                  playbook: "The Seeker"
            }
      });

      const drives = driveData.map((drives) => drives.get({ plain: true }));

      res.render('drive', { drives });
});

router.get('/login', async (req, res) => {
      
      res.render('login');
} )

module.exports = router;