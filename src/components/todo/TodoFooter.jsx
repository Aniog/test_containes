const FILTERS = ['all', 'active', 'completed'];

const TodoFooter = ({ items, filter, onFilterChange, onClearCompleted, disabled }) => {
  const activeCount = items.filter((item) => !(item?.data?.completed)).length;
  const completedCount = items.filter((item) => item?.data?.completed).length;

  return (
    <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100 flex-wrap gap-2">
      <span className="text-sm text-slate-500">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex gap-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors capitalize ${
              filter === f
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onClearCompleted}
        disabled={disabled || completedCount === 0}
        className="text-sm text-slate-500 hover:text-red-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Clear completed
      </button>
    </div>
  );
};

export default TodoFooter;
