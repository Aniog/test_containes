import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import Checkbox from './ui/Checkbox';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm border border-border transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        <Checkbox 
          checked={todo.completed} 
          onChange={() => onToggle(todo.id)}
          id={`todo-${todo.id}`}
        />
        <label 
          htmlFor={`todo-${todo.id}`}
          className={`text-sm font-medium cursor-pointer transition-all ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
          }`}
        >
          {todo.text}
        </label>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 hover:text-error transition-colors p-1 rounded-full hover:bg-gray-100"
        aria-label="Delete todo"
      >
        <FiTrash2 size={16} />
      </button>
    </div>
  );
};

export default TodoItem;