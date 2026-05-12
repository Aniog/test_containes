const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilter = ({ filter, onChange, completedCount, onClearCompleted }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-700">
      <div className="flex gap-1 bg-slate-800 rounded-lg p-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition
              ${filter === f
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-slate-400 hover:text-red-400 transition px-3 py-1.5 rounded-lg hover:bg-red-400/10"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default TodoFilter;
