import { cn } from '@/lib/utils'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

const TodoFilters = ({ activeFilter, onFilterChange, counts }) => {
  return (
    <div className="flex items-center gap-1">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onFilterChange(key)}
          className={cn(
            'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150',
            activeFilter === key
              ? 'bg-indigo-50 text-indigo-600 font-semibold'
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
          )}
        >
          {label}
          {counts[key] > 0 && (
            <span
              className={cn(
                'ml-1.5 text-xs px-1.5 py-0.5 rounded-full',
                activeFilter === key
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'bg-slate-100 text-slate-500'
              )}
            >
              {counts[key]}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default TodoFilters
