const FILTERS = ['all', 'active', 'completed'];

const TodoFilter = ({ filter, onChange, counts }) => {
  return (
    <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
            filter === f
              ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          {f}
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full ${
              filter === f ? 'bg-white/20 text-white' : 'bg-white/10 text-white/40'
            }`}
          >
            {counts[f]}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
