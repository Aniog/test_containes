const TodoFilter = ({ filter, onFilterChange, counts }) => {
  const filters = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed },
  ];

  return (
    <div className="flex items-center gap-1 bg-gray-800/60 rounded-lg p-1">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
            filter === key
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          {label}
          <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
            filter === key
              ? 'bg-indigo-500/60 text-indigo-100'
              : 'bg-gray-700 text-gray-400'
          }`}>
            {count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
