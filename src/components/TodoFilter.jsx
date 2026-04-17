const TABS = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

export default function TodoFilter({ filter, onFilterChange }) {
  return (
    <div className="flex items-center gap-1 px-5 py-3 border-b border-gray-100 bg-gray-50">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onFilterChange(tab.value)}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
            filter === tab.value
              ? 'bg-indigo-500 text-white shadow-sm'
              : 'text-gray-500 hover:bg-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
