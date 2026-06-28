export default function ProductFilters({ filters, selected, onChange }) {
  return (
    <aside className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_16px_45px_rgba(28,25,23,0.05)]">
      <div className="space-y-8">
        {Object.entries(filters).map(([key, options]) => (
          <div key={key}>
            <h3 className="text-xs uppercase tracking-[0.28em] text-stone-500">
              {key}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => onChange(key, option)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                    selected[key] === option
                      ? 'border-stone-950 bg-stone-950 text-stone-50'
                      : 'border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-950 hover:text-stone-950'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
