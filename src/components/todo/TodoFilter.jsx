const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilter = ({ current, onChange, completedCount, onClearCompleted }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              current === filter
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-red-400 hover:text-red-600 font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default TodoFilter;
