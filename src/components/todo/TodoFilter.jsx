const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilter = ({ filter, onChange, completedCount, onClearCompleted }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
              ${filter === f
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
          className="text-sm text-slate-400 hover:text-red-500 transition-colors duration-200 underline underline-offset-2"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default TodoFilter;
