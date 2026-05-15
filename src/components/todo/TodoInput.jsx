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
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium px-4 py-3 rounded-lg text-sm transition-all duration-200 whitespace-nowrap"
      >
        <Plus className="w-4 h-4" />
        <span className="hidden sm:inline">Add Task</span>
      </button>
    </form>
  );
};

export default TodoInput;
