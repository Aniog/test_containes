export default function TodoFilter({ filter, onFilterChange, activeCount, completedCount, totalCount }) {
  const tabs = [
    { key: 'all', label: 'All', count: totalCount },
    { key: 'active', label: 'Active', count: activeCount },
    { key: 'completed', label: 'Completed', count: completedCount },
  ]

  return (
    <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onFilterChange(tab.key)}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
            filter === tab.key
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.label}
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
              filter === tab.key
                ? 'bg-indigo-100 text-indigo-600'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  )
}
