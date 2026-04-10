const TodoFilter = ({ filter, onChange, counts }) => {
  const tabs = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed },
  ]

  return (
    <div className="flex gap-1 bg-white/5 rounded-xl p-1">
      {tabs.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors
            ${filter === key
              ? 'bg-violet-500 text-white shadow'
              : 'text-white/50 hover:text-white/80'
            }`}
        >
          {label}
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full
              ${filter === key ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50'}`}
          >
            {count}
          </span>
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
