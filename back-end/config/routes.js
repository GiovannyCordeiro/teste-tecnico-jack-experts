const express = require('express')

const TasksController = require('../controller/TasksController');

const router = express.Router();

router.get('/tasks', TasksController.index);

module.exports = router