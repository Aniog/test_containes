import React from 'react';
import TodoItem from './TodoItem';
import Button from '../ui/Button';

const TodoList = ({ todos, onToggle, onDelete, onClearCompleted }) => {
  const completedCount = todos.filter(todo => todo.completed).length;
  
  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Your Tasks ({todos.length})
        </h2>
        {completedCount > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onClearCompleted}
          >
            Clear Completed ({completedCount})
          </Button>
        )}
      </div>
      
      {todos.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No tasks yet. Add a new task to get started!
        </div>
      ) : (
        <div>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;