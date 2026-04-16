const FILTERS = ['All', 'Active', 'Completed'];

const TodoFooter = ({ total, completedCount, activeFilter, onFilterChange, onClearCompleted }) => {
  const activeCount = total - completedCount;

  return (
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
      <span className="order-2 sm:order-1">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="order-1 sm:order-2 flex gap-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeFilter === f
                ? 'bg-indigo-500 text-white'
                : 'text-white/50 hover:text-white hover:bg-white/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="order-3 px-3 py-1.5 rounded-lg text-white/50 hover:text-red-400 hover:bg-red-400/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Clear completed
      </button>
    </div>
  );
};

export default TodoFooter;
