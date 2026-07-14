const filterGroups = {
  category: ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'],
  price: ['All', 'Under $50', '$50 to $80', '$80+'],
  material: ['All', '18K Gold Plated', 'Gold Vermeil'],
}

const FilterSidebar = ({ filters, onChange }) => {
  return (
    <aside className="rounded-[2rem] border border-velmora-line bg-velmora-soft p-6 text-velmora-ink">
      <div className="border-b border-velmora-line pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-gold">
          Refine
        </p>
        <h2 className="mt-3 font-display text-3xl">Shop Filters</h2>
      </div>

      <div className="space-y-8 pt-6">
        {Object.entries(filterGroups).map(([group, options]) => (
          <div key={group}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-muted">
              {group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {options.map((option) => {
                const active = filters[group] === option

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onChange(group, option)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      active
                        ? 'border-velmora-gold bg-velmora-panel text-velmora-cream'
                        : 'border-velmora-line bg-velmora-cream text-velmora-ink hover:border-velmora-gold'
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default FilterSidebar
