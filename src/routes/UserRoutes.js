const express = require('express');

const router = express.Router();

const RegisterController = require('../controller/RegisterController');
const RegisterValidation = require('../middlewares/RegisterValidation');

router.post('/register', RegisterValidation, RegisterController.registration);

module.exports = router;
