const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceRanges = ['All', 'Under $50', '$50 to $80', '$80+']
const materials = ['All', '18K Gold Plated', 'Crystal Accent', 'Multicolor Crystal', 'Filigree Texture', 'Gift Boxed Set']

export default function FilterSidebar({ filters, setFilters }) {
  return (
    <aside className="space-y-8 rounded-[30px] border border-parchment bg-mist p-6">
      <FilterGroup
        title="Category"
        options={categories}
        value={filters.category}
        onChange={(value) => setFilters((current) => ({ ...current, category: value }))}
      />
      <FilterGroup
        title="Price"
        options={priceRanges}
        value={filters.priceRange}
        onChange={(value) => setFilters((current) => ({ ...current, priceRange: value }))}
      />
      <FilterGroup
        title="Material"
        options={materials}
        value={filters.material}
        onChange={(value) => setFilters((current) => ({ ...current, material: value }))}
      />
    </aside>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs uppercase tracking-[0.24em] text-bronze">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const active = option === value

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                active
                  ? 'border-ink bg-obsidian text-shell'
                  : 'border-parchment bg-shell text-stone hover:border-champagne hover:text-ink'
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
