import { ChevronDown } from 'lucide-react'

export default function FilterSidebar({ filters, setFilters, categories, priceRanges }) {
  const toggleCategory = (cat) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === cat ? '' : cat,
    }))
  }

  const togglePrice = (range) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === range ? '' : range,
    }))
  }

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-midnight-950 font-sans mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                filters.category === cat.id
                  ? 'text-midnight-950 font-medium'
                  : 'text-midnight-500 hover:text-midnight-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-midnight-950 font-sans mb-4">
          Price Range
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => togglePrice(range.id)}
              className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                filters.priceRange === range.id
                  ? 'text-midnight-950 font-medium'
                  : 'text-midnight-500 hover:text-midnight-800'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {(filters.category || filters.priceRange) && (
        <button
          onClick={() => setFilters({ category: '', priceRange: '' })}
          className="text-xs uppercase tracking-widest text-brand-600 hover:text-brand-700 font-sans transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </aside>
  )
}