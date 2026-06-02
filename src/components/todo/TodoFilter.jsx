const TodoFilter = ({ filter, onChange, counts }) => {
  const filters = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed },
  ]

  return (
    <div className="flex gap-1 bg-slate-100 rounded-xl p-1">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-medium py-1.5 px-3 rounded-lg transition
            ${filter === key
              ? 'bg-white text-slate-800 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
            }`}
        >
          {label}
          <span
            className={`text-xs rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center
              ${filter === key ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-500'}`}
          >
            {count}
          </span>
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
