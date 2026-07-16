const filters = {
  category: ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  price: ['All', 'Under $50', '$50–$80', '$80+'],
  material: ['All', '18K Gold Plated', 'Gold Plated with Crystals', 'Textured Gold Filigree', 'Gold Plated Gift Set'],
}

function FilterGroup({ title, activeValue, values, onChange }) {
  return (
    <div className="border-b border-velmora-line/70 pb-6 last:border-b-0 last:pb-0">
      <p className="text-xs uppercase tracking-editorial text-velmora-muted">{title}</p>
      <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
        {values.map((value) => {
          const isActive = activeValue === value

          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange(value)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? 'border-velmora-accent bg-velmora-accent text-velmora-ink'
                  : 'border-velmora-line/70 bg-velmora-paper text-velmora-ink hover:border-velmora-accent'
              }`}
            >
              {value}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function FilterSidebar({ activeFilters, onFilterChange }) {
  return (
    <aside className="rounded-[2rem] border border-velmora-line/70 bg-velmora-paper p-5 text-velmora-ink shadow-velmora-card lg:sticky lg:top-28">
      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-editorial text-velmora-muted">Refine</p>
          <h2 className="mt-2 font-serif text-3xl text-velmora-ink">Filter the edit</h2>
        </div>

        <FilterGroup
          title="Category"
          activeValue={activeFilters.category}
          values={filters.category}
          onChange={(value) => onFilterChange('category', value)}
        />
        <FilterGroup
          title="Price"
          activeValue={activeFilters.price}
          values={filters.price}
          onChange={(value) => onFilterChange('price', value)}
        />
        <FilterGroup
          title="Material"
          activeValue={activeFilters.material}
          values={filters.material}
          onChange={(value) => onFilterChange('material', value)}
        />
      </div>
    </aside>
  )
}
