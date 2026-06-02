import { cn } from '../lib/utils.js'

export default function TodoFilterBar({ filter, onFilterChange, filters }) {
  const tabs = [
    { key: filters.ALL, label: 'All' },
    { key: filters.ACTIVE, label: 'Active' },
    { key: filters.COMPLETED, label: 'Completed' },
  ]

  return (
    <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onFilterChange(tab.key)}
          className={cn(
            'flex-1 text-xs font-medium py-1.5 px-3 rounded-md transition-all',
            filter === tab.key
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
