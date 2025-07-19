import React from 'react';
import Button from './ui/Button';

const TodoStats = ({ todos, onClearCompleted }) => {
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  
  return (
    <div className="flex items-center justify-between py-4 border-t border-border mt-4">
      <div className="text-sm text-gray-500">
        {totalCount > 0 ? (
          <p>
            {completedCount} of {totalCount} tasks completed
          </p>
        ) : (
          <p>No tasks</p>
        )}
      </div>
      {completedCount > 0 && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClearCompleted}
          className="text-gray-500 hover:text-error"
        >
          Clear completed
        </Button>
      )}
    </div>
  );
};

export default TodoStats;