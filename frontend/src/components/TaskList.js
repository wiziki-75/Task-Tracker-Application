import React from 'react';

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => updateTask(task._id, { ...task, status: 'completed' })}>Complete</button>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
