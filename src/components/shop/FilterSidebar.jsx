import { filterOptions } from '@/data/products'

function FilterSidebar({ filters, onChange }) {
  return (
    <aside className="rounded-3xl border border-velmora-sand/35 bg-white p-6 shadow-soft">
      <div className="space-y-8">
        <FilterGroup
          options={filterOptions.categories}
          title="Category"
          value={filters.category}
          onChange={(value) => onChange('category', value)}
        />
        <FilterGroup
          options={filterOptions.prices}
          title="Price"
          value={filters.price}
          onChange={(value) => onChange('price', value)}
        />
        <FilterGroup
          options={filterOptions.materials}
          title="Material"
          value={filters.material}
          onChange={(value) => onChange('material', value)}
        />
      </div>
    </aside>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-luxe text-velmora-champagne">{title}</h3>
      <div className="mt-4 space-y-3">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 text-sm text-velmora-espresso">
            <input
              checked={value === option}
              className="h-4 w-4 accent-velmora-ink"
              name={title}
              onChange={() => onChange(option)}
              type="radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default FilterSidebar
