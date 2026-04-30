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
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 rounded-xl border border-yellow-300 bg-white text-yellow-900 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-semibold rounded-xl transition-colors disabled:opacity-50"
        disabled={!text.trim()}
      >
        <Plus className="w-5 h-5" />
        Add
      </button>
    </form>
  );
};

export default TodoInput;
