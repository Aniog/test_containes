const FilterBar = ({ filter, onChange, counts }) => {
  const filters = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed },
  ]

  return (
    <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
            filter === key
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {label}
          <span
            className={`inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold ${
              filter === key
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {count}
          </span>
        </button>
      ))}
    </div>
  )
}

export default FilterBar
