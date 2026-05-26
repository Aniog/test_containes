import { cn } from '@/lib/utils';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
];

const TodoFilter = ({ filter, onChange }) => {
  return (
    <div className="flex gap-1 bg-slate-100 rounded-lg p-1">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={cn(
            'flex-1 text-xs font-medium rounded-md px-3 py-1.5 transition-colors',
            filter === key
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
