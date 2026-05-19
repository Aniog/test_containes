const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

const TodoFilter = ({ filter, onFilterChange }) => (
  <div className="flex gap-1 bg-slate-700 rounded-xl p-1">
    {FILTERS.map(({ key, label }) => (
      <button
        key={key}
        onClick={() => onFilterChange(key)}
        className={`flex-1 text-sm font-medium rounded-lg py-1.5 transition-colors ${
          filter === key
            ? 'bg-violet-600 text-white shadow'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        {label}
      </button>
    ))}
  </div>
)

export default TodoFilter
