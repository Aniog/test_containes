import { priceFilters } from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function FilterSidebar({ filters, onFilterChange }) {
  return (
    <aside className="rounded-[2rem] border border-velmora-line bg-velmora-panel p-6 shadow-card">
      <div className="space-y-8">
        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-velmora-cocoa">
            Category
          </h3>
          <div className="mt-4 grid gap-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-3 text-sm text-velmora-stone">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category}
                  onChange={() => onFilterChange('category', category)}
                  className="h-4 w-4 border-velmora-line text-velmora-bronze focus:ring-velmora-gold"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-velmora-line pt-8">
          <h3 className="text-xs uppercase tracking-[0.28em] text-velmora-cocoa">
            Price
          </h3>
          <div className="mt-4 grid gap-3">
            {priceFilters.map((option) => (
              <label key={option.value} className="flex items-center gap-3 text-sm text-velmora-stone">
                <input
                  type="radio"
                  name="price"
                  checked={filters.price === option.value}
                  onChange={() => onFilterChange('price', option.value)}
                  className="h-4 w-4 border-velmora-line text-velmora-bronze focus:ring-velmora-gold"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-velmora-line pt-8">
          <h3 className="text-xs uppercase tracking-[0.28em] text-velmora-cocoa">
            Material
          </h3>
          <div className="mt-4 grid gap-3">
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-3 text-sm text-velmora-stone">
                <input
                  type="radio"
                  name="material"
                  checked={filters.material === material}
                  onChange={() => onFilterChange('material', material)}
                  className="h-4 w-4 border-velmora-line text-velmora-bronze focus:ring-velmora-gold"
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
