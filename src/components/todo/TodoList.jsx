import { ClipboardList } from 'lucide-react';
import TodoItem from './TodoItem';

const TodoList = ({ items, filter, onToggle, onDelete, loading }) => {
  const filtered = items.filter((item) => {
    const fields = item?.data ?? {};
    if (filter === 'active') return !fields.completed;
    if (filter === 'completed') return fields.completed;
    return true;
  });

  if (loading) {
    return (
      <div className="py-12 flex flex-col items-center gap-3 text-slate-400">
        <div className="w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm">Loading tasks...</p>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="py-12 flex flex-col items-center gap-3 text-slate-400">
        <ClipboardList className="w-10 h-10 text-slate-300" />
        <p className="text-sm">
          {filter === 'completed'
            ? 'No completed tasks yet'
            : filter === 'active'
            ? 'No active tasks — great job!'
            : 'No tasks yet. Add one above!'}
        </p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-slate-100">
      {filtered.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
          disabled={loading}
        />
      ))}
    </ul>
  );
};

export default TodoList;
