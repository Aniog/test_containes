const FILTERS = ['all', 'active', 'completed'];

const TodoFilter = ({ filter, onChange, counts }) => (
  <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
    {FILTERS.map((f) => (
      <button
        key={f}
        type="button"
        onClick={() => onChange(f)}
        className={`flex-1 text-xs font-medium px-3 py-1.5 rounded-md capitalize transition-colors ${
          filter === f
            ? 'bg-white text-slate-800 shadow-sm'
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        {f}
        {counts[f] > 0 && (
          <span
            className={`ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-semibold ${
              filter === f ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-500'
            }`}
          >
            {counts[f]}
          </span>
        )}
      </button>
    ))}
  </div>
);

export default TodoFilter;
