import { priceRanges, productCategories, materialOptions } from '../../data/products'
import { cn } from '../../lib/utils'

function FilterGroup({ title, options, selectedValue, onChange }) {
  return (
    <div className="space-y-4 border-b border-velmora-ink/10 pb-6">
      <p className="text-xs uppercase tracking-luxe text-velmora-truffle">{title}</p>
      <div className="space-y-3">
        {options.map((option) => {
          const value = option.value ?? option
          const label = option.label ?? option
          const checked = selectedValue === value

          return (
            <label key={value} className="flex items-center justify-between gap-3 text-sm text-velmora-cocoa">
              <span>{label}</span>
              <button
                type="button"
                onClick={() => onChange(checked ? '' : value)}
                className={cn(
                  'inline-flex h-5 w-5 items-center justify-center rounded-full border transition-colors duration-300',
                  checked
                    ? 'border-velmora-champagne bg-velmora-champagne'
                    : 'border-velmora-ink/15 bg-transparent',
                )}
                aria-label={`Select ${label}`}
              >
                <span className={cn('h-2 w-2 rounded-full bg-velmora-ink', !checked && 'opacity-0')} />
              </button>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default function FilterSidebar({ filters, onChange, className = '' }) {
  return (
    <aside className={cn('rounded-[30px] border border-velmora-ink/10 bg-white/70 p-6 shadow-card', className)}>
      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-luxe text-velmora-truffle">Refine</p>
          <h2 className="mt-3 font-display text-3xl leading-none text-velmora-ink">Shop Filters</h2>
        </div>
        <FilterGroup
          title="Category"
          options={productCategories}
          selectedValue={filters.category}
          onChange={(value) => onChange('category', value)}
        />
        <FilterGroup
          title="Price"
          options={priceRanges}
          selectedValue={filters.price}
          onChange={(value) => onChange('price', value)}
        />
        <FilterGroup
          title="Material"
          options={materialOptions}
          selectedValue={filters.material}
          onChange={(value) => onChange('material', value)}
        />
        <button
          type="button"
          onClick={() => {
            onChange('category', '')
            onChange('price', '')
            onChange('material', '')
          }}
          className="button-secondary w-full"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  )
}
