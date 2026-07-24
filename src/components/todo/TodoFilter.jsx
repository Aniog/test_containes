import { cn } from '@/lib/utils'

const FILTERS = [
  { key: 'all', label: '全部' },
  { key: 'active', label: '进行中' },
  { key: 'completed', label: '已完成' },
]

export default function TodoFilter({ filter, onChange, counts }) {
  return (
    <div className="flex items-center gap-1 bg-violet-50 rounded-xl p-1">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={cn(
            'flex-1 text-sm px-3 py-1.5 rounded-lg font-medium transition-all duration-150',
            filter === key
              ? 'bg-white text-violet-600 shadow-sm'
              : 'text-gray-500 hover:text-violet-500'
          )}
        >
          {label}
          {counts[key] > 0 && (
            <span className={cn(
              'ml-1.5 text-xs px-1.5 py-0.5 rounded-full',
              filter === key ? 'bg-violet-100 text-violet-600' : 'bg-gray-200 text-gray-500'
            )}>
              {counts[key]}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
