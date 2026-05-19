import { useState } from 'react';
import { Plus } from 'lucide-react';

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 bg-gray-800 border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-3 text-base outline-none transition-all duration-200"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-lg px-4 py-3 flex items-center gap-2 transition-colors duration-200 whitespace-nowrap"
      >
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">Add Task</span>
      </button>
    </form>
  );
};

export default TodoInput;
