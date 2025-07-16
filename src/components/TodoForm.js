import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue(''); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="flex items-center border-b border-gray-300 py-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Add a new task..."
          aria-label="Add a new task"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          disabled={!value.trim()}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;