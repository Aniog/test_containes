import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products, categories } from '../data/products'
import FilterSidebar from '../components/shop/FilterSidebar'
import ShopProductCard from '../components/shop/ShopProductCard'

export default function Shop() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const containerRef = useRef(null)

  const [filters, setFilters] = useState({
    category: categoryParam || null,
    priceRange: null,
    material: null,
  })
  const [sortBy, setSortBy] = useState('featured')
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  useEffect(() => {
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }))
    }
  }, [categoryParam])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(frameId)
  })

  // Filter products
  let filtered = [...products]

  if (filters.category) {
    filtered = filtered.filter(p => p.category === filters.category)
  }

  if (filters.priceRange) {
    filtered = filtered.filter(
      p => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
    )
  }

  // Sort
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-cream-100 pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-serif text-3xl md:text-4xl text-warm-900 mb-3">
            {filters.category
              ? categories.find(c => c.id === filters.category)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-sm text-warm-800/60 tracking-wide">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Controls bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-warm-800/70 hover:text-warm-900 transition-colors"
          >
            <SlidersHorizontal size={15} strokeWidth={1.5} />
            Filter
          </button>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs text-warm-800/50 tracking-wide hidden sm:inline">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-cream-400 text-xs text-warm-800 px-3 py-2 pr-7 focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2378716C\' stroke-width=\'2\'%3E%3Cpolyline points=\'6,9 12,15 18,9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar filters={filters} setFilters={setFilters} categories={categories} />
          </div>

          {/* Mobile filter drawer */}
          {showMobileFilter && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div className="absolute inset-0 bg-black/30" onClick={() => setShowMobileFilter(false)} />
              <div className="absolute top-0 left-0 bottom-0 w-72 bg-cream-100 p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="heading-serif text-lg text-warm-900">Filters</h3>
                  <button onClick={() => setShowMobileFilter(false)} aria-label="Close filters">
                    <X size={18} className="text-warm-800" />
                  </button>
                </div>
                <FilterSidebar filters={filters} setFilters={setFilters} categories={categories} />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="heading-serif text-xl text-warm-800/60 mb-3">No pieces found</p>
                <p className="text-sm text-warm-800/40">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
