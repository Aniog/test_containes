const filters = {
  category: ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  price: ['All', '$0–$50', '$51–$80', '$81–$120'],
  material: ['All', '18K Gold Plated', '18K Gold Vermeil'],
}

function FilterSection({ title, options, selected, onChange }) {
  return (
    <div className="space-y-4 border-b border-stone-200 pb-6">
      <h3 className="text-xs uppercase tracking-[0.35em] text-stone-500">{title}</h3>
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em] transition ${
              selected === option
                ? 'border-stone-900 bg-stone-900 text-stone-50'
                : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900 hover:text-stone-900'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function FilterSidebar({ activeFilters, setActiveFilters }) {
  return (
    <aside className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-28 lg:h-fit">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Refine</p>
        <h2 className="mt-2 font-serif text-4xl text-stone-900">Shop Filters</h2>
      </div>

      <FilterSection
        title="Category"
        options={filters.category}
        selected={activeFilters.category}
        onChange={(value) => setActiveFilters((prev) => ({ ...prev, category: value }))}
      />
      <FilterSection
        title="Price"
        options={filters.price}
        selected={activeFilters.price}
        onChange={(value) => setActiveFilters((prev) => ({ ...prev, price: value }))}
      />
      <FilterSection
        title="Material"
        options={filters.material}
        selected={activeFilters.material}
        onChange={(value) => setActiveFilters((prev) => ({ ...prev, material: value }))}
      />
    </aside>
  )
}

export default FilterSidebar
