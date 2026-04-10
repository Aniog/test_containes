import { cn } from '../../lib/utils.js'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

const TodoFooter = ({ todos, filter, onFilterChange, onClearCompleted }) => {
  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-5 pt-4 border-t border-slate-100">
      <span className="text-xs text-slate-400 order-last sm:order-first">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex gap-1">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={cn(
              'px-3 py-1 rounded-md text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-300',
              filter === key
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="text-xs text-slate-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition focus:outline-none focus:ring-2 focus:ring-red-300 rounded"
      >
        Clear completed ({completedCount})
      </button>
    </div>
  )
}

export default TodoFooter
