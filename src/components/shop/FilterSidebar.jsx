const FilterGroup = ({ title, options, activeValue, onChange }) => {
  return (
    <div className="space-y-4 border-b border-velmora-line pb-6">
      <h3 className="text-xs uppercase tracking-luxury text-velmora-muted">{title}</h3>
      <div className="flex flex-wrap gap-2 md:flex-col md:items-start">
        {options.map((option) => {
          const value = typeof option === 'string' ? option : option.value
          const label = typeof option === 'string' ? option : option.label
          const isActive = activeValue === value

          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange(value)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-luxury transition ${
                isActive
                  ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                  : 'border-velmora-line bg-transparent text-velmora-ink hover:border-velmora-gold hover:text-velmora-gold'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const FilterSidebar = ({ filters, filterOptions, onFilterChange }) => {
  return (
    <aside className="space-y-6 rounded-[2rem] border border-velmora-line bg-velmora-mist p-6 shadow-velmora-soft md:sticky md:top-24">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-luxury text-velmora-gold">Refine</p>
        <h2 className="font-display text-3xl text-velmora-ink">Shop filters</h2>
      </div>

      <FilterGroup
        title="Category"
        options={filterOptions.categories}
        activeValue={filters.category}
        onChange={(value) => onFilterChange('category', value)}
      />
      <FilterGroup
        title="Price"
        options={filterOptions.prices}
        activeValue={filters.price}
        onChange={(value) => onFilterChange('price', value)}
      />
      <FilterGroup
        title="Material"
        options={filterOptions.materials}
        activeValue={filters.material}
        onChange={(value) => onFilterChange('material', value)}
      />
    </aside>
  )
}

export default FilterSidebar
