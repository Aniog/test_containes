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
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="flex items-center gap-1.5 px-4 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white text-sm font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  );
};

export default TodoInput;
