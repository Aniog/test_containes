import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  // If there are no todos, display a message
  if (todos.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No tasks yet. Add a task to get started123456!
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
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;