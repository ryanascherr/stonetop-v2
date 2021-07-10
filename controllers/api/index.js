const router = require('express').Router();
const userRoutes = require('./userRoutes');

//Tells the system to go into the userRoutes.js if /users is in the file path
router.use('/users', userRoutes);

module.exports = router;