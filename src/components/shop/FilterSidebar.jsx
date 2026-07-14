export default function FilterSidebar({ filters, setFilters, categories }) {
  const priceRanges = [
    { label: 'Under $40', min: 0, max: 40 },
    { label: '$40 – $60', min: 40, max: 60 },
    { label: '$60 – $100', min: 60, max: 100 },
    { label: 'Over $100', min: 100, max: 999 },
  ]

  const materials = ['Gold', 'Silver']

  const toggleCategory = (cat) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === cat ? null : cat,
    }))
  }

  const togglePriceRange = (range) => {
    setFilters(prev => ({
      ...prev,
      priceRange: prev.priceRange?.label === range.label ? null : range,
    }))
  }

  const toggleMaterial = (mat) => {
    setFilters(prev => ({
      ...prev,
      material: prev.material === mat ? null : mat,
    }))
  }

  return (
    <aside className="w-full lg:w-56 flex-shrink-0">
      <h3 className="text-xs tracking-[0.2em] uppercase text-warm-900 font-medium mb-5">
        Filter By
      </h3>

      {/* Category */}
      <div className="mb-8">
        <h4 className="text-xs tracking-wider uppercase text-warm-800/60 mb-3 font-medium">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`block text-sm transition-colors ${
                filters.category === cat.id
                  ? 'text-gold-600 font-medium'
                  : 'text-warm-800/70 hover:text-warm-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="text-xs tracking-wider uppercase text-warm-800/60 mb-3 font-medium">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => togglePriceRange(range)}
              className={`block text-sm transition-colors ${
                filters.priceRange?.label === range.label
                  ? 'text-gold-600 font-medium'
                  : 'text-warm-800/70 hover:text-warm-900'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h4 className="text-xs tracking-wider uppercase text-warm-800/60 mb-3 font-medium">
          Material
        </h4>
        <div className="flex gap-2">
          {materials.map(mat => (
            <button
              key={mat}
              onClick={() => toggleMaterial(mat)}
              className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                filters.material === mat
                  ? 'border-gold-500 bg-gold-500/10 text-warm-900'
                  : 'border-cream-400 text-warm-800/60 hover:border-gold-400'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {(filters.category || filters.priceRange || filters.material) && (
        <button
          onClick={() => setFilters({ category: null, priceRange: null, material: null })}
          className="text-xs text-gold-600 underline hover:text-gold-700 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </aside>
  )
}
