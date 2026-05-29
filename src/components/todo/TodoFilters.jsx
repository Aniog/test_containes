const FILTERS = ['All', 'Active', 'Completed']

const TodoFilters = ({ activeFilter, onChange, counts }) => {
  return (
    <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={`flex-1 rounded-md px-3 py-1.5 text-xs font-semibold transition ${
            activeFilter === filter
              ? 'bg-white text-violet-600 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {filter}
          {counts[filter] > 0 && (
            <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-xs ${
              activeFilter === filter ? 'bg-violet-100 text-violet-600' : 'bg-slate-200 text-slate-500'
            }`}>
              {counts[filter]}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default TodoFilters
