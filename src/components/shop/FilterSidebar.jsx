const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = ['All', 'Under $50', '$50 - $80', '$80 - $120']
const materialOptions = ['All', '18K Gold Plated', 'Crystal Accent', 'Crystal Detail', 'Gift Set']

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-line pb-6">
      <p className="text-xs uppercase tracking-overline text-velmora-taupe">{title}</p>
      <div className="mt-4 space-y-3">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 text-sm text-velmora-ink">
            <input
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 border-velmora-line text-velmora-gold focus:ring-velmora-gold"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

function FilterSidebar({ filters, setFilters }) {
  return (
    <aside className="rounded-panel border border-velmora-line bg-white p-5 shadow-card lg:sticky lg:top-28 lg:h-fit">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-overline text-velmora-taupe">Filters</p>
          <h2 className="mt-2 font-display text-3xl text-velmora-espresso">Refine</h2>
        </div>
        <button
          type="button"
          onClick={() => setFilters({ category: 'All', price: 'All', material: 'All' })}
          className="text-xs uppercase tracking-overline text-velmora-taupe transition hover:text-velmora-espresso"
        >
          Reset
        </button>
      </div>

      <div className="mt-6 space-y-6">
        <FilterGroup
          title="Category"
          options={categoryOptions}
          value={filters.category}
          onChange={(category) => setFilters((current) => ({ ...current, category }))}
        />
        <FilterGroup
          title="Price"
          options={priceOptions}
          value={filters.price}
          onChange={(price) => setFilters((current) => ({ ...current, price }))}
        />
        <FilterGroup
          title="Material"
          options={materialOptions}
          value={filters.material}
          onChange={(material) => setFilters((current) => ({ ...current, material }))}
        />
      </div>
    </aside>
  )
}

export default FilterSidebar
