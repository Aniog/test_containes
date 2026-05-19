const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilter = ({ current, onChange, completedCount, onClearCompleted }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <div className="flex gap-1.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              current === f
                ? 'bg-violet-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-slate-400 hover:text-red-400 transition-colors"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default TodoFilter;
