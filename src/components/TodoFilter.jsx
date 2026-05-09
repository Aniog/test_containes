const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilter = ({ current, onChange, completedCount, onClearCompleted }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
              ${current === filter
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-slate-400 hover:text-red-400 transition-colors duration-200 px-3 py-1.5 rounded-lg hover:bg-red-400/10"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default TodoFilter;
