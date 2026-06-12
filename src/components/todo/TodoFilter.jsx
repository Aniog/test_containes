export default function TodoFilter({ filter, setFilter, filters }) {
  const tabs = [
    { key: filters.ALL, label: 'All' },
    { key: filters.ACTIVE, label: 'Active' },
    { key: filters.COMPLETED, label: 'Completed' },
  ]

  return (
    <div className="flex gap-1 bg-slate-100 rounded-xl p-1 mb-2">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => setFilter(key)}
          className={`flex-1 text-xs font-semibold py-1.5 rounded-lg transition-colors ${
            filter === key
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
