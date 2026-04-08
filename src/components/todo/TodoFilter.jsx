const FILTERS = ['All', 'Active', 'Completed']

const TodoFilter = ({ current, onChange, completedCount, onClearCompleted }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-700 p-1 rounded-xl">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              current === f
                ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors underline underline-offset-2"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}

export default TodoFilter
