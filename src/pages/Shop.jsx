import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 — $80', min: 50, max: 80 },
  { id: 'over-80', label: 'Over $80', min: 80, max: Infinity },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
]

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={`shop-${product.id}`}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product, product.variants[0].id)
            }}
            className="w-full bg-onyx-950/90 backdrop-blur-sm text-ivory-50 py-3 px-4 flex items-center justify-center gap-2 font-sans text-xs tracking-ultra-wide uppercase hover:bg-onyx-950 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="font-serif text-sm sm:text-base tracking-wide uppercase text-onyx-900 group-hover:text-gold-600 transition-colors">
        {product.name}
      </h3>
      <p className="font-sans text-xs text-onyx-400 mt-1 line-clamp-2">
        {product.subtitle}
      </p>
      <p className="font-sans text-sm font-medium text-onyx-800 mt-2">
        {formatPrice(product.price)}
      </p>
    </Link>
  )
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.id === selectedPrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    switch (sortBy) {
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
  }, [selectedCategory, selectedPrice, sortBy])

  useEffect(() => {
    if (containerRef.current) {
      const frame = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [filtered])

  const activeFilters = [
    selectedCategory !== 'all' && { key: 'category', label: categories.find(c => c.id === selectedCategory)?.name },
    selectedPrice && { key: 'price', label: priceRanges.find(r => r.id === selectedPrice)?.label },
  ].filter(Boolean)

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPrice(null)
    setSortBy('featured')
  }

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="text-center mb-8">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-600 mb-3">
            Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-onyx-900">
            Shop All Jewelry
          </h1>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-wide uppercase text-onyx-600 border border-velvet-300 px-4 py-2 hover:border-onyx-400 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="font-sans text-xs text-gold-600 hover:text-gold-700 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-onyx-400 hidden sm:inline">
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-velvet-300 pl-3 pr-8 py-2 font-sans text-xs tracking-wide text-onyx-600 focus:outline-none focus:border-gold-400 transition-colors cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-onyx-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active filter badges */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeFilters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => {
                  if (filter.key === 'category') setSelectedCategory('all')
                  if (filter.key === 'price') setSelectedPrice(null)
                }}
                className="flex items-center gap-1.5 bg-velvet-100 border border-velvet-200 px-3 py-1.5 font-sans text-xs text-onyx-600 hover:border-onyx-300 transition-colors"
              >
                {filter.label}
                <X className="w-3 h-3" />
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-onyx-800 mb-4">
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={cn(
                    'block font-sans text-sm transition-colors',
                    selectedCategory === 'all' ? 'text-gold-600 font-medium' : 'text-onyx-500 hover:text-onyx-800'
                  )}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      'block font-sans text-sm transition-colors',
                      selectedCategory === cat.id ? 'text-gold-600 font-medium' : 'text-onyx-500 hover:text-onyx-800'
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-onyx-800 mb-4">
                Price
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedPrice(null)}
                  className={cn(
                    'block font-sans text-sm transition-colors',
                    !selectedPrice ? 'text-gold-600 font-medium' : 'text-onyx-500 hover:text-onyx-800'
                  )}
                >
                  All Prices
                </button>
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPrice(range.id)}
                    className={cn(
                      'block font-sans text-sm transition-colors',
                      selectedPrice === range.id ? 'text-gold-600 font-medium' : 'text-onyx-500 hover:text-onyx-800'
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-onyx-800 mb-4">
                Material
              </h3>
              <p className="font-sans text-sm text-onyx-500">
                18K Gold Plated
              </p>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          <div
            className={cn(
              'fixed inset-0 z-40 lg:hidden transition-opacity duration-300',
              filterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
          >
            <div className="absolute inset-0 bg-onyx-950/40" onClick={() => setFilterOpen(false)} />
            <div
              className={cn(
                'absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-ivory-50 shadow-2xl p-6 pt-20 transform transition-transform duration-300',
                filterOpen ? 'translate-x-0' : '-translate-x-full'
              )}
            >
              <button
                onClick={() => setFilterOpen(false)}
                className="absolute top-5 right-5 p-2 text-onyx-400"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-onyx-800 mb-4">
                    Category
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => { setSelectedCategory('all'); setFilterOpen(false) }}
                      className={cn(
                        'block font-sans text-sm',
                        selectedCategory === 'all' ? 'text-gold-600 font-medium' : 'text-onyx-500'
                      )}
                    >
                      All Jewelry
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat.id); setFilterOpen(false) }}
                        className={cn(
                          'block font-sans text-sm',
                          selectedCategory === cat.id ? 'text-gold-600 font-medium' : 'text-onyx-500'
                        )}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-onyx-800 mb-4">
                    Price
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => { setSelectedPrice(null); setFilterOpen(false) }}
                      className={cn(
                        'block font-sans text-sm',
                        !selectedPrice ? 'text-gold-600 font-medium' : 'text-onyx-500'
                      )}
                    >
                      All Prices
                    </button>
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => { setSelectedPrice(range.id); setFilterOpen(false) }}
                        className={cn(
                          'block font-sans text-sm',
                          selectedPrice === range.id ? 'text-gold-600 font-medium' : 'text-onyx-500'
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-onyx-500 mb-2">No products found</p>
                <p className="font-sans text-sm text-onyx-400 mb-6">
                  Try adjusting your filters.
                </p>
                <button onClick={clearFilters} className="btn-outline-gold text-xs">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
