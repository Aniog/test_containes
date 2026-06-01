import { cn } from '@/lib/utils'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

const TodoFilter = ({ current, onChange, counts }) => {
  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={cn(
            'flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400',
            current === key
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          )}
        >
          {label}
          <span
            className={cn(
              'inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-xs font-semibold',
              current === key
                ? 'bg-indigo-100 text-indigo-600'
                : 'bg-gray-200 text-gray-500'
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
