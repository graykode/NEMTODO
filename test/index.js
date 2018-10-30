const express = require('express');
const router = express.Router();
const Task = require('../model/task');
const moment = require('moment');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

router.post('/add', async (req, res, next) => {
    const task = new Task(req.body);
    await task.save();
    res.send(tasks);
});

module.exports = router;