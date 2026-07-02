import { materialFilters, priceFilters } from '@/data/catalog'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <aside className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-stone-500">
          Category
        </p>
        <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
          {categories.map((category) => {
            const checked = filters.category === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => onFilterChange('category', category)}
                className={`rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.24em] transition duration-300 ${
                  checked
                    ? 'border-stone-900 bg-stone-900 text-stone-50'
                    : 'border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-900 hover:text-stone-900'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-8 border-t border-stone-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-stone-500">
          Price
        </p>
        <div className="mt-4 space-y-3">
          {priceFilters.map((filter) => (
            <label key={filter.value} className="flex items-center gap-3 text-sm text-stone-700">
              <input
                type="radio"
                name="price"
                checked={filters.price === filter.value}
                onChange={() => onFilterChange('price', filter.value)}
                className="h-4 w-4 border-stone-300 text-stone-900 accent-stone-900"
              />
              <span>{filter.label}</span>
            </label>
          ))}
          <label className="flex items-center gap-3 text-sm text-stone-700">
            <input
              type="radio"
              name="price"
              checked={filters.price === 'all'}
              onChange={() => onFilterChange('price', 'all')}
              className="h-4 w-4 border-stone-300 text-stone-900 accent-stone-900"
            />
            <span>All prices</span>
          </label>
        </div>
      </div>

      <div className="mt-8 border-t border-stone-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-stone-500">
          Material
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {materialFilters.map((material) => {
            const checked = filters.material === material

            return (
              <button
                key={material}
                type="button"
                onClick={() => onFilterChange('material', checked ? 'all' : material)}
                className={`rounded-full border px-4 py-3 text-xs uppercase tracking-[0.22em] transition duration-300 ${
                  checked
                    ? 'border-amber-700 bg-amber-700 text-stone-50'
                    : 'border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-900'
                }`}
              >
                {material}
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
