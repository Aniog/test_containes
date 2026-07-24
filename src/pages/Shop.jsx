import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const materials = ['18K Gold Plated']

const ShopPage = () => {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const activeCategory = searchParams.get('category') || ''
  const activePriceRange = searchParams.get('price') || ''
  const activeMaterial = searchParams.get('material') || ''
  const sortBy = searchParams.get('sort') || 'default'

  const setFilter = (key, value) => {
    setSearchParams(prev => {
      if (value) prev.set(key, value)
      else prev.delete(key)
      return prev
    })
  }

  // Filter products
  const filtered = products.filter(p => {
    if (activeCategory && p.category !== activeCategory) return false
    if (activePriceRange) {
      const range = priceRanges.find(r => r.label === activePriceRange)
      if (range && (p.price < range.min || p.price >= range.max)) return false
    }
    if (activeMaterial && p.material !== activeMaterial) return false
    return true
  })

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, activePriceRange, activeMaterial])

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePriceRange || activeMaterial

  return (
    <div ref={containerRef} className="min-h-screen bg-warm-white pt-20 md:pt-24">
      <div className="max-w-content mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-2xl md:text-3xl tracking-heading uppercase text-warm-black">
            {activeCategory ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}` : 'All Jewelry'}
          </h1>
          <div className="mt-3 w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 border-b border-cream pb-4">
          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden flex items-center gap-2 font-sans text-sm text-muted hover:text-warm-black transition-colors duration-300"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasFilters && <span className="bg-gold text-warm-black text-xs w-5 h-5 rounded-full flex items-center justify-center">!</span>}
            </button>

            {/* Active filters */}
            {hasFilters && (
              <div className="flex items-center gap-2">
                <button onClick={clearFilters} className="font-sans text-xs text-muted hover:text-warm-black underline transition-colors duration-200">
                  Clear all
                </button>
              </div>
            )}

            <span className="font-sans text-xs text-muted">
              {sorted.length} pieces
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setFilter('sort', e.target.value === 'default' ? '' : e.target.value)}
              className="font-sans text-sm text-muted bg-transparent border-none appearance-none cursor-pointer pr-6 focus:outline-none hover:text-warm-black transition-colors duration-300"
            >
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>

        {/* Mobile filters panel */}
        {mobileFiltersOpen && (
          <div className="md:hidden bg-cream p-6 mb-6 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-sans text-sm tracking-button uppercase text-warm-black">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-muted hover:text-warm-black">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-4">
              <p className="font-sans text-xs tracking-button uppercase text-muted mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter('category', activeCategory === cat.id ? '' : cat.id)}
                    className={`font-sans text-xs px-3 py-1.5 border transition-all duration-200 ${
                      activeCategory === cat.id ? 'border-gold bg-gold/10 text-warm-black' : 'border-cream text-muted hover:border-gold-light'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <p className="font-sans text-xs tracking-button uppercase text-muted mb-2">Price</p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setFilter('price', activePriceRange === range.label ? '' : range.label)}
                    className={`font-sans text-xs px-3 py-1.5 border transition-all duration-200 ${
                      activePriceRange === range.label ? 'border-gold bg-gold/10 text-warm-black' : 'border-cream text-muted hover:border-gold-light'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {/* Category */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-button uppercase text-warm-black mb-3">Category</p>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter('category', activeCategory === cat.id ? '' : cat.id)}
                    className={`block font-sans text-sm transition-colors duration-200 ${
                      activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted hover:text-warm-black'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
                <button
                  onClick={() => setFilter('category', '')}
                  className={`block font-sans text-sm transition-colors duration-200 ${
                    !activeCategory ? 'text-gold font-medium' : 'text-muted hover:text-warm-black'
                  }`}
                >
                  All
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-button uppercase text-warm-black mb-3">Price</p>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setFilter('price', activePriceRange === range.label ? '' : range.label)}
                    className={`block font-sans text-sm transition-colors duration-200 ${
                      activePriceRange === range.label ? 'text-gold font-medium' : 'text-muted hover:text-warm-black'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <p className="font-sans text-xs tracking-button uppercase text-warm-black mb-3">Material</p>
              <div className="space-y-2">
                {materials.map(mat => (
                  <button
                    key={mat}
                    onClick={() => setFilter('material', activeMaterial === mat ? '' : mat)}
                    className={`block font-sans text-sm transition-colors duration-200 ${
                      activeMaterial === mat ? 'text-gold font-medium' : 'text-muted hover:text-warm-black'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {sorted.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-sans text-sm text-muted">No pieces match your filters.</p>
                <button onClick={clearFilters} className="mt-4 font-sans text-sm tracking-button uppercase text-gold hover:text-gold-dark underline">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sorted.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                      <img
                        alt={product.name}
                        data-strk-img-id={product.images[0].imgId}
                        data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                        data-strk-img-ratio={product.images[0].ratio}
                        data-strk-img-width={product.images[0].width}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className={`w-full h-full object-cover transition-opacity duration-500 ${hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'}`}
                      />
                      <img
                        alt={`${product.name} alternate`}
                        data-strk-img-id={product.images[1].imgId}
                        data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry styled`}
                        data-strk-img-ratio={product.images[1].ratio}
                        data-strk-img-width={product.images[1].width}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}
                      />
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product, product.toneOptions[0], 1) }}
                        className={`absolute bottom-3 left-3 right-3 bg-gold hover:bg-gold-dark text-warm-black font-sans text-xs tracking-button uppercase py-2 transition-all duration-300 ${hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5 inline mr-1.5" />
                        Quick Add
                      </button>
                    </div>
                    <div className="mt-3">
                      <h3 id={product.titleId} className="font-serif text-sm md:text-base tracking-product uppercase text-warm-black">{product.name}</h3>
                      <p id={product.descId} className="font-sans text-xs text-muted mt-1 line-clamp-1">{product.description}</p>
                      <p className="font-sans text-sm text-warm-black mt-1.5 font-medium">{formatPrice(product.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
