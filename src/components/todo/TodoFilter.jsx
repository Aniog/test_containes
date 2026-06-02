const TodoFilter = ({ filter, onChange, counts }) => {
  const filters = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Done', count: counts.completed },
  ]

  return (
    <div className="flex gap-1 bg-zinc-800 rounded-xl p-1">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg transition
            ${filter === key
              ? 'bg-amber-400 text-zinc-900'
              : 'text-zinc-500 hover:text-zinc-300'
            }`}
        >
          {label}
          <span
            className={`text-xs rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center
              ${filter === key
                ? 'bg-zinc-900 text-amber-400'
                : 'bg-zinc-700 text-zinc-500'}`}
          >
            {count}
          </span>
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
