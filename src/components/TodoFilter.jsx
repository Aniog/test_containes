export default function TodoFilter({ filter, filters, onFilter }) {
  const labels = { all: 'All', active: 'Active', completed: 'Completed' }

  return (
    <div className="flex items-center justify-center gap-1 px-5 py-3 border-b border-gray-100 bg-gray-50">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilter(f)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            filter === f
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
          }`}
          aria-pressed={filter === f}
        >
          {labels[f]}
        </button>
      ))}
    </div>
  )
}
