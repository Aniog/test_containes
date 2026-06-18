const FILTERS = ['all', 'active', 'completed']

const TodoFilter = ({ filter, onChange, counts }) => (
  <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
    {FILTERS.map((f) => (
      <button
        key={f}
        onClick={() => onChange(f)}
        className={`flex-1 py-1.5 px-3 rounded-md text-sm font-medium capitalize transition-all duration-200 ${
          filter === f
            ? 'bg-white text-indigo-600 shadow-sm'
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        {f}
        <span className="ml-1.5 text-xs font-normal opacity-70">
          ({counts[f] ?? 0})
        </span>
      </button>
    ))}
  </div>
)

export default TodoFilter
