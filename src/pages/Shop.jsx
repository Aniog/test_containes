import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { safeLoadImages } from '@/lib/imageLoader'

import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-brand-ivory">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <img
            data-strk-img-id={`shop-${product.imgIdHover}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105"
          />
        </div>
      </Link>

      <button
        onClick={(e) => { e.preventDefault(); addItem(product) }}
        className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-brand-charcoal text-[11px] tracking-[0.12em] uppercase py-3 flex items-center justify-center gap-2 opacity-0 translate-y-3 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white shadow-sm"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="mt-4">
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="product-name text-[13px] text-brand-charcoal">{product.name}</h3>
        </Link>
        <p id={product.descId} className="text-xs text-brand-warm-gray mt-1.5">{product.shortDescription}</p>
        <p className="text-sm font-medium text-brand-charcoal mt-2">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || ''
  const activePriceRange = searchParams.get('price') || ''
  const activeSort = searchParams.get('sort') || 'featured'

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase())
    }

    if (activePriceRange) {
      const range = priceRanges.find(r => r.label === activePriceRange)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePriceRange, activeSort])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        safeLoadImages(containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [filteredProducts])

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePriceRange

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto section-padding pt-8 pb-6">
        <h1 className="font-serif text-display-sm md:text-display text-brand-charcoal">Shop All</h1>
        <p className="mt-2 text-sm text-brand-warm-gray">{filteredProducts.length} pieces</p>
      </div>

      <div className="hairline" />

      <div className="max-w-7xl mx-auto section-padding py-8">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', '')}
                    className={`block text-sm transition-colors duration-300 ${!activeCategory ? 'text-brand-charcoal font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'}`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.slug)}
                      className={`block text-sm transition-colors duration-300 ${activeCategory === cat.slug ? 'text-brand-charcoal font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal mb-3">Price</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('price', '')}
                    className={`block text-sm transition-colors duration-300 ${!activePriceRange ? 'text-brand-charcoal font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'}`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => updateFilter('price', range.label)}
                      className={`block text-sm transition-colors duration-300 ${activePriceRange === range.label ? 'text-brand-charcoal font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button onClick={clearFilters} className="text-xs text-brand-gold hover:text-brand-gold-dark transition-colors underline">
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-brand-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort */}
              <div className="relative ml-auto">
                <select
                  value={activeSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-widest uppercase font-sans text-brand-warm-gray pr-6 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-warm-gray pointer-events-none" />
              </div>
            </div>

            {/* Active filters */}
            {hasFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {activeCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-ivory text-xs text-brand-charcoal">
                    {activeCategory}
                    <button onClick={() => updateFilter('category', '')} className="text-brand-warm-gray hover:text-brand-charcoal">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activePriceRange && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-ivory text-xs text-brand-charcoal">
                    {activePriceRange}
                    <button onClick={() => updateFilter('price', '')} className="text-brand-warm-gray hover:text-brand-charcoal">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            <div ref={containerRef}>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="font-serif text-xl text-brand-charcoal">No pieces found</p>
                  <p className="text-sm text-brand-warm-gray mt-2">Try adjusting your filters.</p>
                  <button onClick={clearFilters} className="btn-outline mt-6 text-xs">Clear Filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-brand-cream shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-brand-warm-gray">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-8">
              <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal mb-3">Category</h4>
              <div className="space-y-2">
                <button
                  onClick={() => { updateFilter('category', ''); setMobileFiltersOpen(false) }}
                  className={`block text-sm ${!activeCategory ? 'text-brand-charcoal font-medium' : 'text-brand-warm-gray'}`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { updateFilter('category', cat.slug); setMobileFiltersOpen(false) }}
                    className={`block text-sm ${activeCategory === cat.slug ? 'text-brand-charcoal font-medium' : 'text-brand-warm-gray'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal mb-3">Price</h4>
              <div className="space-y-2">
                <button
                  onClick={() => { updateFilter('price', ''); setMobileFiltersOpen(false) }}
                  className={`block text-sm ${!activePriceRange ? 'text-brand-charcoal font-medium' : 'text-brand-warm-gray'}`}
                >
                  All Prices
                </button>
                {priceRanges.map(range => (
                  <button
                    key={range.label}
                    onClick={() => { updateFilter('price', range.label); setMobileFiltersOpen(false) }}
                    className={`block text-sm ${activePriceRange === range.label ? 'text-brand-charcoal font-medium' : 'text-brand-warm-gray'}`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {hasFilters && (
              <button onClick={() => { clearFilters(); setMobileFiltersOpen(false) }} className="text-xs text-brand-gold hover:text-brand-gold-dark underline">
                Clear all filters
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
