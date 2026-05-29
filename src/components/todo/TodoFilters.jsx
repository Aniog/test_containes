const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilters = ({ filter, onChange, completedCount, onClearCompleted }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1 bg-slate-100 rounded-lg p-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
              filter === f
                ? 'bg-violet-600 text-white shadow-sm'
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
          className="text-xs text-slate-400 hover:text-red-500 transition-colors font-medium"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default TodoFilters;
