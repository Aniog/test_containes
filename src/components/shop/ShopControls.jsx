import { cn } from '@/lib/utils'

export default function ShopControls({ filterOptions, selected, onFilterChange, sort, onSortChange }) {
  return (
    <div className="space-y-4 lg:hidden">
      <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-2">
        {filterOptions.categories.map((option) => (
          <button
            className={cn(
              'rounded-full border px-4 py-2 text-xs uppercase tracking-product transition',
              option === selected.category
                ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                : 'border-velmora-mist bg-velmora-porcelain text-velmora-taupe',
            )}
            key={option}
            onClick={() => onFilterChange('category', option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <select
          className="h-12 rounded-full border border-velmora-mist bg-velmora-porcelain px-4 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none"
          onChange={(event) => onFilterChange('price', event.target.value)}
          value={selected.price}
        >
          {filterOptions.prices.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className="h-12 rounded-full border border-velmora-mist bg-velmora-porcelain px-4 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none"
          onChange={(event) => onFilterChange('material', event.target.value)}
          value={selected.material}
        >
          {filterOptions.materials.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className="h-12 rounded-full border border-velmora-mist bg-velmora-porcelain px-4 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none"
          onChange={(event) => onSortChange(event.target.value)}
          value={sort}
        >
          {filterOptions.sorts.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
