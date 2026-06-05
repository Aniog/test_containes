import { cn } from '@/lib/utils'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

const TodoFilter = ({ filter, onChange, counts }) => {
  return (
    <div className="flex gap-1 bg-slate-100 rounded-lg p-1">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={cn(
            'flex-1 text-sm font-medium rounded-md px-3 py-1.5 transition-colors',
            filter === key
              ? 'bg-white text-slate-800 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          )}
        >
          {label}
          {counts[key] > 0 && (
            <span
              className={cn(
                'ml-1.5 text-xs px-1.5 py-0.5 rounded-full',
                filter === key ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-500'
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

export default TodoFilter
