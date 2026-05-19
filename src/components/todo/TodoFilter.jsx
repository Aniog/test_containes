const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilter = ({ current, onChange, completedCount, onClearCompleted }) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div className="flex gap-1 bg-gray-800 border border-gray-700 rounded-xl p-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              current === f
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:text-gray-100'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-xs text-red-400 hover:text-red-300 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default TodoFilter;
