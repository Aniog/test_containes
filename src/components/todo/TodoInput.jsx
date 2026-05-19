import { useState } from 'react';
import { Plus } from 'lucide-react';

const TodoInput = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent shadow-sm text-base transition-all"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="flex items-center gap-2 px-5 py-3 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white font-semibold rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <Plus className="w-5 h-5" />
        <span>Add</span>
      </button>
    </form>
  );
};

export default TodoInput;
