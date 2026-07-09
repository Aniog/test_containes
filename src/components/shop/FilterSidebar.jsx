const FilterSidebar = ({ filters, onChange, onSearch, searchTerm }) => {
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies']
  const materials = ['All', '18K Gold Plated']
  const prices = ['All', 'Under $50', '$50 - $80', '$80+']

  return (
    <aside className="rounded-[2rem] border border-velmora-line bg-velmora-pearl p-6 shadow-card">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-mist">
          Search
        </p>
        <input
          value={searchTerm}
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Search Velmora pieces"
          className="mt-4 h-12 w-full rounded-full border border-velmora-line bg-white/80 px-5 text-sm text-velmora-ink outline-none transition focus:border-velmora-gold"
        />
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-ink">
            Category
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {categories.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onChange('category', option)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                  filters.category === option
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-noir'
                    : 'border-velmora-line text-velmora-mist hover:border-velmora-gold hover:text-velmora-ink'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-ink">
            Price
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {prices.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onChange('price', option)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                  filters.price === option
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-noir'
                    : 'border-velmora-line text-velmora-mist hover:border-velmora-gold hover:text-velmora-ink'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-ink">
            Material
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {materials.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onChange('material', option)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                  filters.material === option
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-noir'
                    : 'border-velmora-line text-velmora-mist hover:border-velmora-gold hover:text-velmora-ink'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
