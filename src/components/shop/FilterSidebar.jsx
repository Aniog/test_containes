import { categories, materials } from '@/data/products'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
]

export default function FilterSidebar({ filters, onFilterChange, open }) {
  return (
    <aside className={`${open ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
      <div className="space-y-8">
        {/* Category */}
        <div>
          <h4 className="text-[11px] tracking-widest uppercase text-espresso font-sans font-medium mb-3">
            Category
          </h4>
          <div className="space-y-2">
            {categories.map(cat => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.category === cat || (cat === 'All' && !filters.category)}
                  onChange={() => onFilterChange('category', cat === 'All' ? null : cat)}
                  className="w-3.5 h-3.5 border-taupe-light text-gold focus:ring-gold/20"
                />
                <span className="text-sm font-sans text-taupe group-hover:text-espresso transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <h4 className="text-[11px] tracking-widest uppercase text-espresso font-sans font-medium mb-3">
            Price
          </h4>
          <div className="space-y-2">
            {priceRanges.map(range => (
              <label key={range.label} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={
                    filters.priceMin === range.min && filters.priceMax === range.max
                  }
                  onChange={() => {
                    if (filters.priceMin === range.min && filters.priceMax === range.max) {
                      onFilterChange('price', null)
                    } else {
                      onFilterChange('price', range)
                    }
                  }}
                  className="w-3.5 h-3.5 border-taupe-light text-gold focus:ring-gold/20"
                />
                <span className="text-sm font-sans text-taupe group-hover:text-espresso transition-colors">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Material */}
        <div>
          <h4 className="text-[11px] tracking-widest uppercase text-espresso font-sans font-medium mb-3">
            Finish
          </h4>
          <div className="space-y-2">
            {materials.map(mat => (
              <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.material === mat}
                  onChange={() =>
                    onFilterChange('material', filters.material === mat ? null : mat)
                  }
                  className="w-3.5 h-3.5 border-taupe-light text-gold focus:ring-gold/20"
                />
                <span className="text-sm font-sans text-taupe group-hover:text-espresso transition-colors">
                  {mat} Tone
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
