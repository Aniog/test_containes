import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Handle edit form submission
  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  // Cancel editing and reset text
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  // Render edit form when editing
  if (isEditing) {
    return (
      <li className="p-4">
        <form onSubmit={handleEdit} className="flex items-center">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="appearance-none bg-transparent border border-gray-300 rounded w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-blue-500"
            autoFocus
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded mr-2"
            disabled={!editText.trim()}
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Cancel
          </button>
        </form>
      </li>
    );
  }

  // Render normal view when not editing
  return (
    <li className="p-4 flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <span 
          className={`ml-3 ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600 hover:text-red-900 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;