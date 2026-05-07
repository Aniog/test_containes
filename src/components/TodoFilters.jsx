export default function TodoFilters({ filters, active, onChange }) {
  return (
    <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            active === f
              ? 'bg-white text-violet-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  )
}
