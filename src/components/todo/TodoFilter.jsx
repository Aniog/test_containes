const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

export default function TodoFilter({ filter, onFilterChange, counts }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700/60">
      <div className="flex gap-1">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              filter === key
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:text-gray-100 hover:bg-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <span className="text-xs text-gray-500">
        {counts.total} {counts.total === 1 ? 'item' : 'items'}
      </span>
    </div>
  )
}
