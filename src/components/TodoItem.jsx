


import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      <div className="todo-actions">
        <button 
          className="todo-button complete-button"
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button 
          className="todo-button delete-button"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;


