import React from 'react';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <span 
          className={cn(
            "ml-3 text-gray-700", 
            todo.completed && "line-through text-gray-400"
          )}
        >
          {todo.text}
        </span>
      </div>
      <Button 
        variant="danger" 
        size="sm" 
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;