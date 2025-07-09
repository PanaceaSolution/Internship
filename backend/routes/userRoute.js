const { registerUser } = require('../controller/auth/userController');

const router = require('express').Router();

router.route('/register').post(registerUser);

module.exports = router;