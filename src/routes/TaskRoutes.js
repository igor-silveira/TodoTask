const express = require('express');

const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/task', TaskValidation, TaskController.create);

router.put('/task/:id', TaskValidation, TaskController.update);

router.get('/task', TaskController.all);

module.exports = router;
