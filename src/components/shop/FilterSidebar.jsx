const FilterGroup = ({ title, options, selectedValue, onSelect }) => {
  return (
    <div className="space-y-4 border-b border-line pb-6">
      <h3 className="text-xs uppercase tracking-[0.28em] text-muted">{title}</h3>
      <div className="flex flex-wrap gap-3 md:flex-col">
        <button
          type="button"
          onClick={() => onSelect('all')}
          className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
            selectedValue === 'all'
              ? 'border-ink bg-ink text-ivory'
              : 'border-line bg-white text-ink hover:bg-sand'
          }`}
        >
          All
        </button>
        {options.map((option) => {
          const optionValue = option.toLowerCase().replace(/\s+/g, '-')
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(optionValue)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                selectedValue === optionValue
                  ? 'border-ink bg-ink text-ivory'
                  : 'border-line bg-white text-ink hover:bg-sand'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const FilterSidebar = ({ filters, selectedFilters, onChange }) => {
  return (
    <aside className="space-y-6 rounded-[2rem] border border-line bg-white p-5 shadow-soft md:sticky md:top-28 md:h-fit">
      <div>
        <p className="text-xs uppercase tracking-[0.32em] text-bronze">Refine</p>
        <h2 className="mt-3 font-display text-4xl text-ink">Shop filters</h2>
      </div>
      <FilterGroup
        title="Category"
        options={filters.categories}
        selectedValue={selectedFilters.category}
        onSelect={(value) => onChange('category', value)}
      />
      <FilterGroup
        title="Price"
        options={filters.prices}
        selectedValue={selectedFilters.price}
        onSelect={(value) => onChange('price', value)}
      />
      <FilterGroup
        title="Material"
        options={filters.materials}
        selectedValue={selectedFilters.material}
        onSelect={(value) => onChange('material', value)}
      />
    </aside>
  )
}

export default FilterSidebar
