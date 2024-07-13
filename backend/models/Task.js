const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ['to-do', 'in-progress', 'completed'], default: 'to-do' }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
