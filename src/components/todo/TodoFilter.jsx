const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilter = ({ activeFilter, onFilterChange, completedCount, onClearCompleted }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-xs text-gray-500 hover:text-red-400 transition-colors"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default TodoFilter;
