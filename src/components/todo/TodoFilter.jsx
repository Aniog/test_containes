const FILTERS = ['All', 'Active', 'Completed'];

const TodoFilter = ({ activeFilter, onFilterChange, counts }) => {
  return (
    <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 ${
            activeFilter === filter
              ? 'bg-white text-violet-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {filter}
          <span
            className={`inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold ${
              activeFilter === filter
                ? 'bg-violet-100 text-violet-700'
                : 'bg-slate-200 text-slate-500'
            }`}
          >
            {counts[filter.toLowerCase()]}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
