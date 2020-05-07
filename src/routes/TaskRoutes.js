const express = require('express');

const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/task', TaskValidation, TaskController.create);

router.put('/task/:id', TaskController.update);

module.exports = router;
