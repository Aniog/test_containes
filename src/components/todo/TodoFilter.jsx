const TodoFilter = ({ filter, onChange, counts }) => {
  const filters = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed },
  ];

  return (
    <div className="flex gap-1 bg-slate-700 rounded-lg p-1">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`flex-1 text-xs font-medium rounded-md px-3 py-1.5 transition-all flex items-center justify-center gap-1.5 ${
            filter === key
              ? 'bg-violet-600 text-white shadow'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {label}
          <span
            className={`text-xs rounded-full px-1.5 py-0.5 ${
              filter === key ? 'bg-violet-500 text-white' : 'bg-slate-600 text-slate-400'
            }`}
          >
            {count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
