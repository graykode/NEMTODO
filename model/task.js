const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    title: String,
    description: String,
    created: {
        type : Date,
        default: Date.now
    },
    priority: Number,
    deadline: {
        type: Date,
        default: null
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks', TaskSchema);