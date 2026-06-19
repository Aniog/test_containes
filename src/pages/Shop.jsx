import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Star } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80 +', min: 80, max: Infinity },
]

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || ''
  const activePriceRange = searchParams.get('price') || ''
  const activeSort = searchParams.get('sort') || 'newest'
  const activeMaterial = searchParams.get('material') || ''

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === activeCategory && key === 'category') {
      params.delete(key)
    } else if (value === activePriceRange && key === 'price') {
      params.delete(key)
    } else if (value === activeMaterial && key === 'material') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      )
    }

    if (activePriceRange) {
      const range = priceRanges.find((r) => r.label === activePriceRange)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    if (activeMaterial === 'gold') {
      result = result.filter((p) => p.variants.includes('gold'))
    } else if (activeMaterial === 'silver') {
      result = result.filter((p) => p.variants.includes('silver'))
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePriceRange, activeSort, activeMaterial])

  const hasActiveFilters = activeCategory || activePriceRange || activeMaterial

  const renderStars = (rating) => {
    const full = Math.floor(rating)
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < full ? 'text-brand-gold fill-brand-gold' : 'text-brand-border'}`}
      />
    ))
  }

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-brand-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                activeCategory === cat.id
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-stone hover:text-brand-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-brand-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setFilter('price', range.label)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                activePriceRange === range.label
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-stone hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-brand-charcoal mb-3">Material</h4>
        <div className="space-y-2">
          {[
            { label: '18K Gold', value: 'gold' },
            { label: 'Silver Tone', value: 'silver' },
          ].map((mat) => (
            <button
              key={mat.value}
              onClick={() => setFilter('material', mat.value)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                activeMaterial === mat.value
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-stone hover:text-brand-charcoal'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase text-brand-stone hover:text-brand-charcoal transition-colors flex items-center gap-1"
        >
          <X className="w-3 h-3" />
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-semibold">Shop</h1>
          <p className="text-sm text-brand-stone mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-border">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-brand-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-brand-gold" />
                )}
              </button>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <label className="text-xs text-brand-stone hidden sm:block">Sort:</label>
                <select
                  value={activeSort}
                  onChange={(e) => setFilter('sort', e.target.value)}
                  className="text-xs tracking-widest uppercase bg-transparent border border-brand-border px-3 py-2 text-brand-charcoal focus:outline-none focus:border-brand-charcoal"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active filters tags */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {activeCategory && (
                  <span className="text-[10px] tracking-widest uppercase bg-brand-warm px-3 py-1.5 text-brand-charcoal flex items-center gap-1">
                    {categories.find((c) => c.id === activeCategory)?.name}
                    <button onClick={() => setFilter('category', activeCategory)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activePriceRange && (
                  <span className="text-[10px] tracking-widest uppercase bg-brand-warm px-3 py-1.5 text-brand-charcoal flex items-center gap-1">
                    {activePriceRange}
                    <button onClick={() => setFilter('price', activePriceRange)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activeMaterial && (
                  <span className="text-[10px] tracking-widest uppercase bg-brand-warm px-3 py-1.5 text-brand-charcoal flex items-center gap-1">
                    {activeMaterial === 'gold' ? '18K Gold' : 'Silver Tone'}
                    <button onClick={() => setFilter('material', activeMaterial)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-brand-stone mb-6">
                  Try adjusting your filters to discover more.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest uppercase text-brand-gold underline underline-offset-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative flex flex-col">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-brand-warm overflow-hidden mb-3">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <Link to={`/product/${product.id}`} className="flex flex-col gap-1">
                      <h3 className="text-xs tracking-widest uppercase font-medium text-brand-charcoal">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        {renderStars(product.rating)}
                        <span className="text-[10px] text-brand-stone ml-1">({product.reviewCount})</span>
                      </div>
                      <span className="text-sm font-medium text-brand-charcoal">${product.price}</span>
                    </Link>
                    <button
                      onClick={() => addItem(product, 'gold', 1)}
                      className="mt-2 w-full text-[10px] tracking-widest uppercase border border-brand-border py-2.5 text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-60 md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40`}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-brand-card p-6 overflow-y-auto transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs tracking-widest uppercase">Filters</h3>
            <button onClick={() => setMobileFiltersOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterSidebar />
        </div>
      </div>
    </div>
  )
}