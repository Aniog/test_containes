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
        className="flex-1 bg-slate-700 text-slate-100 placeholder-slate-400 border border-slate-600 rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-violet-500 transition-colors"
      />
      <button
        type="submit"
        aria-label="Add todo"
        className="bg-violet-600 hover:bg-violet-500 text-white rounded-lg px-4 py-2.5 font-medium transition-colors flex items-center gap-1.5"
      >
        <Plus className="w-5 h-5" />
        <span>Add</span>
      </button>
    </form>
  );
};

export default TodoInput;
