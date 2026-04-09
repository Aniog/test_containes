import { cn } from '@/lib/utils'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

const TodoFilter = ({ filter, onChange, counts }) => {
  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={cn(
            'flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-violet-500',
            filter === key
              ? 'bg-white dark:bg-slate-700 text-violet-700 dark:text-violet-300 shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
          )}
        >
          {label}
          <span
            className={cn(
              'text-xs px-1.5 py-0.5 rounded-full font-semibold',
              filter === key
                ? 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
            )}
          >
            {counts[key]}
          </span>
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
