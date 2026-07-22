const FilterSidebar = ({ filters, setFilters, priceCap }) => {
  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  return (
    <aside className="space-y-8 rounded-[2rem] border border-velmora-mist/20 bg-white/70 p-6 shadow-soft">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">
          Category
        </p>
        <div className="grid gap-3">
          {['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'].map((option) => (
            <button
              key={option}
              type="button"
              className={`rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.24em] transition ${
                filters.category === option
                  ? 'border-velmora-bronze bg-velmora-ink text-velmora-parchment'
                  : 'border-velmora-mist/20 text-velmora-ink hover:border-velmora-bronze'
              }`}
              onClick={() => updateFilter('category', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">
            Price
          </p>
          <span className="text-sm text-velmora-rose">Up to ${filters.price}</span>
        </div>
        <input
          type="range"
          min="30"
          max={priceCap}
          step="1"
          value={filters.price}
          onChange={(event) => updateFilter('price', Number(event.target.value))}
          className="w-full accent-velmora-bronze"
        />
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">
          Material
        </p>
        <div className="grid gap-3">
          {['All', '18K Gold Plated', 'Gold Vermeil', 'Gift Set'].map((option) => (
            <button
              key={option}
              type="button"
              className={`rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.24em] transition ${
                filters.material === option
                  ? 'border-velmora-bronze bg-velmora-ink text-velmora-parchment'
                  : 'border-velmora-mist/20 text-velmora-ink hover:border-velmora-bronze'
              }`}
              onClick={() => updateFilter('material', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
