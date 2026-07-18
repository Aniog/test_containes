import { categories, materials } from '@/data/store.js'

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '30-60', label: '$30 – $60' },
  { value: '60-120', label: '$60 – $120' },
]

function FilterSidebar({ filters, onFilterChange }) {
  return (
    <aside className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(28,25,23,0.05)]">
      <div className="space-y-8">
        <div>
          <h3 className="text-xs uppercase tracking-[0.32em] text-stone-500">Category</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onFilterChange('category', 'all')}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] ${
                filters.category === 'all'
                  ? 'border-stone-950 bg-stone-950 text-stone-100'
                  : 'border-stone-300 text-stone-700'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => onFilterChange('category', category.id)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] ${
                  filters.category === category.id
                    ? 'border-stone-950 bg-stone-950 text-stone-100'
                    : 'border-stone-300 text-stone-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.32em] text-stone-500">Price</h3>
          <div className="mt-4 space-y-3">
            {priceRanges.map((range) => (
              <label key={range.value} className="flex items-center gap-3 text-sm text-stone-700">
                <input
                  type="radio"
                  name="priceRange"
                  checked={filters.priceRange === range.value}
                  onChange={() => onFilterChange('priceRange', range.value)}
                />
                <span>{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.32em] text-stone-500">Material</h3>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3 text-sm text-stone-700">
              <input
                type="radio"
                name="material"
                checked={filters.material === 'all'}
                onChange={() => onFilterChange('material', 'all')}
              />
              <span>All Materials</span>
            </label>
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-3 text-sm text-stone-700">
                <input
                  type="radio"
                  name="material"
                  checked={filters.material === material}
                  onChange={() => onFilterChange('material', material)}
                />
                <span>{material}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
