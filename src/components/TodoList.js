import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500">
        <p>No tasks yet. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;