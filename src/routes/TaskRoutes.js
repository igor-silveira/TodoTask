const express = require('express');

const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/task', TaskValidation, TaskController.create);

router.put('/task/:id', TaskValidation, TaskController.update);

router.get('/task', MacaddressValidation, TaskController.all);

router.get('/task/:id', TaskController.show);

router.delete('/task/:id', TaskController.delete);

router.put('/task/:id/:done', TaskController.update);

module.exports = router;
