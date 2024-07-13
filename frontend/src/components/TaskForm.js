import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={task.title} 
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={task.description} 
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
