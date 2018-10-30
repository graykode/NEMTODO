const express = require('express');
const router = express.Router();
const Task = require('../model/task');
const moment = require('moment');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.render('index', {
        tasks,
        moment
    });
});

router.post('/add', async (req, res, next) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});

router.get('/done/:id', async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    task.done = !task.done;
    await task.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    console.log(task)
    res.render('edit', { task });
});

router.get('/swap/:from/:to', async (req, res, next) => {
    const from = await Task.findById(req.params.from);
    const to = await Task.findById(req.params.to);
    var temp = from.priority;
    from.priority = to.priority;
    to.priority = temp;
    await from.save();
    await to.save();
    res.redirect('/');
});

router.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Task.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
});


module.exports = router;