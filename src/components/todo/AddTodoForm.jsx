import { useState } from 'react';
import { Plus } from 'lucide-react';

const PRIORITY_OPTIONS = [
  { value: 'high', label: '高优先级' },
  { value: 'medium', label: '中优先级' },
  { value: 'low', label: '低优先级' },
];

const AddTodoForm = ({ onAdd, loading }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onAdd({ title: title.trim(), priority });
    setTitle('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="添加新任务..."
        className="flex-1 px-4 py-2.5 text-sm text-slate-800 bg-white border border-slate-300 rounded-lg
          placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
        disabled={loading}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-3 py-2.5 text-sm text-slate-700 bg-white border border-slate-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition cursor-pointer"
        disabled={loading}
      >
        {PRIORITY_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <button
        type="submit"
        disabled={loading || !title.trim()}
        className="flex items-center gap-1.5 px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300
          text-white text-sm font-medium rounded-lg transition-colors"
      >
        <Plus className="w-4 h-4" />
        添加
      </button>
    </form>
  );
};

export default AddTodoForm;
