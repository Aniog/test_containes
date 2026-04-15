const FilterBar = ({ filter, setFilter, completedCount, onClearCompleted }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              filter === f
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-gray-400 hover:text-red-500 transition-colors duration-150 focus:outline-none focus:underline"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default FilterBar;
