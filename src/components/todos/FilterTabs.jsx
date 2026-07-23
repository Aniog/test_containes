import { cn } from '@/lib/utils'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Done' },
]

export default function FilterTabs({ filter, onChange, counts }) {
  return (
    <div className="flex gap-1 bg-slate-100 rounded-lg p-1">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={cn(
            'flex-1 px-3 py-1.5 rounded-md text-xs font-medium transition-colors',
            filter === key
              ? 'bg-white text-slate-800 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          )}
        >
          {label}
          {counts[key] > 0 && (
            <span
              className={cn(
                'ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-xs',
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
