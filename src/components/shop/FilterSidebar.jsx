import { cn } from '@/lib/utils'

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="space-y-4 border-b border-velmora-mist pb-6 last:border-b-0 last:pb-0">
      <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            className={cn(
              'rounded-full border px-4 py-2 text-xs uppercase tracking-product transition',
              option === value
                ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                : 'border-velmora-mist bg-transparent text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold',
            )}
            key={option}
            onClick={() => onChange(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function FilterSidebar({ filterOptions, selected, onFilterChange }) {
  return (
    <div className="space-y-8 rounded-luxe border border-velmora-mist bg-velmora-porcelain p-6 shadow-velmora">
      <div>
        <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">Filter</p>
        <h2 className="mt-3 font-serif text-3xl text-velmora-ink">Refine the edit</h2>
      </div>
      <FilterGroup
        onChange={(value) => onFilterChange('category', value)}
        options={filterOptions.categories}
        title="Category"
        value={selected.category}
      />
      <FilterGroup
        onChange={(value) => onFilterChange('price', value)}
        options={filterOptions.prices}
        title="Price"
        value={selected.price}
      />
      <FilterGroup
        onChange={(value) => onFilterChange('material', value)}
        options={filterOptions.materials}
        title="Material"
        value={selected.material}
      />
    </div>
  )
}
