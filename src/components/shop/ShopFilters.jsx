import { SlidersHorizontal } from 'lucide-react'
import { filterGroups, sortOptions } from '@/data/storefront'

export function ShopFilters({ filters, onFilterChange, sortValue, onSortChange }) {
  return (
    <aside className="rounded-[2rem] border border-velmora-line bg-white/70 p-6 shadow-soft lg:sticky lg:top-28">
      <div className="flex items-center gap-3 border-b border-velmora-line pb-5">
        <SlidersHorizontal className="h-4 w-4 text-velmora-truffle" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-truffle">Filters</p>
          <h2 className="font-display text-3xl text-velmora-espresso">Refine</h2>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {Object.entries(filterGroups).map(([group, values]) => (
          <div key={group}>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-truffle">
              {group}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {values.map((value) => {
                const active = filters[group] === value

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => onFilterChange(group, value)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                      active
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                        : 'border-velmora-line bg-velmora-porcelain text-velmora-espresso hover:border-velmora-taupe'
                    }`}
                  >
                    {value}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-velmora-line pt-6">
        <label className="text-xs uppercase tracking-[0.28em] text-velmora-truffle" htmlFor="sort-products">
          Sort by
        </label>
        <select
          id="sort-products"
          value={sortValue}
          onChange={(event) => onSortChange(event.target.value)}
          className="mt-3 h-12 w-full rounded-full border border-velmora-line bg-velmora-porcelain px-4 text-sm text-velmora-espresso outline-none"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </aside>
  )
}
