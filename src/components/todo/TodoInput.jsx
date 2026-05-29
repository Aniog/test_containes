import { useState } from 'react';
import { Plus } from 'lucide-react';

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
        className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition disabled:opacity-50 bg-white"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="flex items-center gap-1.5 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium px-4 py-3 rounded-xl transition-colors"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  );
};

export default TodoInput;
