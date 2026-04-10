import { cn } from '../../lib/utils'

const FILTERS = ['All', 'Active', 'Completed']

const TodoFilter = ({ filter, onChange, counts }) => {
  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={cn(
            'flex-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200',
            filter === f
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          )}
        >
          {f}
          {f === 'Active' && counts.active > 0 && (
            <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-xs bg-indigo-100 text-indigo-600 rounded-full">
              {counts.active}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
