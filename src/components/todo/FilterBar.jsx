import { ClipboardList } from 'lucide-react';

const FilterBar = ({ filter, setFilter, completedCount, onClearCompleted }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1 bg-slate-100 rounded-lg p-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-colors ${
              filter === f
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-xs text-red-400 hover:text-red-600 font-medium transition-colors"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default FilterBar;
