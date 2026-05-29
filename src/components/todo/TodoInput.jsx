import { Plus } from 'lucide-react';
import { useState } from 'react';

const TodoInput = ({ onAdd, disabled }) => {
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
        disabled={disabled}
        className="flex-1 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white disabled:opacity-60 transition"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        aria-label="Add todo"
        className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2.5 flex items-center gap-1.5 text-sm font-medium transition-colors"
      >
        <Plus className="w-4 h-4" />
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  );
};

export default TodoInput;
