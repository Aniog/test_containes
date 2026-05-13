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
        className="flex-1 bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-500 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
      />
      <button
        type="submit"
        className="bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg px-4 py-2.5 flex items-center gap-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!text.trim()}
      >
        <Plus className="w-4 h-4" />
        <span>Add</span>
      </button>
    </form>
  );
};

export default TodoInput;
