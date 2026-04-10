import { cn } from '../../lib/utils';

const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilter = ({ filter, onChange, counts }) => {
  return (
    <div className="flex items-center gap-1 bg-gray-800 rounded-xl p-1">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={cn(
            "flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
            filter === f
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-gray-400 hover:text-gray-200"
          )}
        >
          {f}
          {f === 'Active' && counts.active > 0 && (
            <span className="ml-1.5 text-xs bg-indigo-500/30 text-indigo-300 px-1.5 py-0.5 rounded-full">
              {counts.active}
            </span>
          )}
          {f === 'Completed' && counts.completed > 0 && (
            <span className="ml-1.5 text-xs bg-gray-600 text-gray-400 px-1.5 py-0.5 rounded-full">
              {counts.completed}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
