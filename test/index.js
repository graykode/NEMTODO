const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const ejs = require('ejs-locals');

const app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

module.exports = app;
