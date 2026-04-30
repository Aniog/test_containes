const FILTERS = ['all', 'active', 'completed'];

const TodoFooter = ({ todos, filter, onFilterChange, onClearCompleted }) => {
  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
      <span>
        <span className="font-semibold text-slate-200">{activeCount}</span>{' '}
        {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex gap-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1.5 rounded-lg capitalize font-medium transition-colors ${
              filter === f
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Clear completed ({completedCount})
      </button>
    </div>
  );
};

export default TodoFooter;
