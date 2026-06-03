import { cn } from '@/lib/utils'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

const TodoFilter = ({ current, onChange, counts }) => {
  return (
    <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={cn(
            'flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-indigo-400',
            current === key
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          )}
        >
          {label}
          {counts[key] > 0 && (
            <span
              className={cn(
                'inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold',
                current === key ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-500'
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
