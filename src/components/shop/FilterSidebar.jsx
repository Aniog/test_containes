const FilterSidebar = ({ filters, options, onChange }) => {
  return (
    <aside className="rounded-[2rem] border border-velmora-line bg-velmora-pearl/70 p-6 text-velmora-ink shadow-velmora lg:sticky lg:top-28">
      <div className="space-y-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-velmora-mist">Category</p>
          <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:items-start">
            {options.category.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => onChange('category', value)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                  filters.category === value
                    ? 'border-velmora-bronze bg-velmora-ink text-velmora-ivory'
                    : 'border-velmora-line bg-white text-velmora-ink hover:border-velmora-bronze'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-velmora-mist">Price</p>
          <div className="mt-4 space-y-3">
            {options.price.map((value) => (
              <label key={value} className="flex items-center gap-3 text-sm text-velmora-ink">
                <input
                  type="radio"
                  name="price"
                  checked={filters.price === value}
                  onChange={() => onChange('price', value)}
                  className="h-4 w-4 border-velmora-line text-velmora-bronze focus:ring-velmora-bronze"
                />
                <span>{value}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-velmora-mist">Material</p>
          <div className="mt-4 space-y-3">
            {options.material.map((value) => (
              <label key={value} className="flex items-center gap-3 text-sm text-velmora-ink">
                <input
                  type="radio"
                  name="material"
                  checked={filters.material === value}
                  onChange={() => onChange('material', value)}
                  className="h-4 w-4 border-velmora-line text-velmora-bronze focus:ring-velmora-bronze"
                />
                <span>{value}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
