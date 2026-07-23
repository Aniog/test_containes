import { cn } from '@/lib/utils'

function FilterGroup({ title, options, selected, onSelect }) {
  return (
    <div>
      <h3 className="text-sm font-medium uppercase tracking-button text-ink">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2 lg:grid lg:gap-3">
        {options.map((option) => {
          const isActive = option === selected
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition',
                isActive
                  ? 'border-ink bg-ink text-mist'
                  : 'border-line bg-surface text-muted hover:border-gold hover:text-ink',
              )}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function FilterSidebar({ filters, selectedFilters, onFilterChange }) {
  return (
    <aside className="editorial-card p-5 sm:p-6 lg:sticky lg:top-28">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow">Refine</p>
          <h2 className="mt-3 font-serif text-3xl text-ink">Filters</h2>
        </div>
      </div>

      <div className="mt-8 grid gap-8">
        <FilterGroup
          title="Category"
          options={filters.category}
          selected={selectedFilters.category}
          onSelect={(value) => onFilterChange('category', value)}
        />
        <FilterGroup
          title="Price"
          options={filters.price}
          selected={selectedFilters.price}
          onSelect={(value) => onFilterChange('price', value)}
        />
        <FilterGroup
          title="Material"
          options={filters.material}
          selected={selectedFilters.material}
          onSelect={(value) => onFilterChange('material', value)}
        />
      </div>
    </aside>
  )
}
