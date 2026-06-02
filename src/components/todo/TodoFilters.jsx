const FILTERS = ['All', 'Active', 'Completed']

const TodoFilters = ({ activeFilter, onChange, counts }) => {
  return (
    <div className="flex items-center gap-1 px-4 py-3 border-b border-slate-100">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 ${
            activeFilter === filter
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {filter}
          {counts[filter] !== undefined && (
            <span className={`ml-1.5 text-xs ${activeFilter === filter ? 'text-indigo-200' : 'text-slate-400'}`}>
              {counts[filter]}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default TodoFilters
