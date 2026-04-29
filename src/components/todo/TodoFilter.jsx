const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilter = ({ filter, onChange, completedCount, onClearCompleted }) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === f
                ? 'bg-white text-violet-700 shadow-sm'
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
          className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors px-2 py-1 rounded-lg hover:bg-red-50"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default TodoFilter;
