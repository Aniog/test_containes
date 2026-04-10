const TodoFilter = ({ filter, onChange, counts }) => {
  const filters = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed },
  ]

  return (
    <div className="flex gap-1 bg-gray-100 dark:bg-gray-700/50 rounded-xl p-1">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition
            ${filter === key
              ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
        >
          {label}
          <span className={`inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-xs
            ${filter === key
              ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400'
              : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
            }`}>
            {count}
          </span>
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
