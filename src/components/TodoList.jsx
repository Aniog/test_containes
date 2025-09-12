


import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        No tasks yet. Add a new task above!
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-md shadow-md overflow-hidden border border-gray-700">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;


