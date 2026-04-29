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
        className="flex-1 px-4 py-3 rounded-xl border border-yellow-200 bg-white text-slate-800 placeholder-yellow-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="flex items-center gap-1.5 px-5 py-3 bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-200 text-yellow-900 disabled:text-yellow-400 text-sm font-semibold rounded-xl transition-colors"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  );
};

export default TodoInput;
