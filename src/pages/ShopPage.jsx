import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const MATERIALS = ['18K Gold Plated']

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
          <img
            data-strk-img-id={`${product.imgId}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`${product.images[1].id}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-4 left-4 right-4 bg-charcoal text-cream py-2.5 text-[11px] font-semibold uppercase tracking-wide-product flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>
      <div className="mt-3">
        <h3 className="font-serif text-sm uppercase tracking-wide-product text-charcoal">
          <Link to={`/product/${product.slug}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-xs text-stone-500 mt-0.5">{product.description}</p>
        <p className="text-sm font-medium mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilters, setMobileFilters] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeSort = searchParams.get('sort') || 'featured'

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activePrice) {
      const range = PRICE_RANGES.find((r) => r.label === activePrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
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
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeSort])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [filtered])

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePrice

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-stone-200 pb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFilters(!mobileFilters)}
              className="md:hidden flex items-center gap-2 text-xs font-semibold uppercase tracking-wide-product text-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <span className="text-xs text-stone-400">{filtered.length} items</span>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-gold hover:text-gold-dark transition-colors underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide-product text-charcoal"
            >
              Sort: {SORT_OPTIONS.find((o) => o.value === activeSort)?.label}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg border border-stone-200 py-1 z-10 min-w-[180px]">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setFilter('sort', opt.value); setSortOpen(false) }}
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-stone-50 transition-colors ${activeSort === opt.value ? 'text-gold font-semibold' : 'text-charcoal'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-semibold uppercase tracking-wide-product text-charcoal mb-4">Category</h3>
              <div className="space-y-2 mb-8">
                {['', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter('category', cat)}
                    className={`block text-sm transition-colors ${activeCategory === cat ? 'text-gold font-medium' : 'text-stone-500 hover:text-charcoal'}`}
                  >
                    {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All'}
                  </button>
                ))}
              </div>

              <h3 className="text-xs font-semibold uppercase tracking-wide-product text-charcoal mb-4">Price</h3>
              <div className="space-y-2 mb-8">
                {['', ...PRICE_RANGES.map((r) => r.label)].map((price) => (
                  <button
                    key={price}
                    onClick={() => setFilter('price', price)}
                    className={`block text-sm transition-colors ${activePrice === price ? 'text-gold font-medium' : 'text-stone-500 hover:text-charcoal'}`}
                  >
                    {price || 'All'}
                  </button>
                ))}
              </div>

              <h3 className="text-xs font-semibold uppercase tracking-wide-product text-charcoal mb-4">Material</h3>
              <div className="space-y-2">
                {MATERIALS.map((mat) => (
                  <span key={mat} className="block text-sm text-stone-500">{mat}</span>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filters panel */}
          {mobileFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilters(false)} />
              <div className="absolute right-0 top-0 h-full w-72 bg-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wide-product text-charcoal">Filters</h3>
                  <button onClick={() => setMobileFilters(false)} aria-label="Close filters">
                    <X className="w-5 h-5 text-charcoal" />
                  </button>
                </div>

                <h4 className="text-xs font-semibold uppercase tracking-wide-product text-charcoal mb-3">Category</h4>
                <div className="space-y-2 mb-6">
                  {['', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setFilter('category', cat); setMobileFilters(false) }}
                      className={`block text-sm transition-colors ${activeCategory === cat ? 'text-gold font-medium' : 'text-stone-500'}`}
                    >
                      {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All'}
                    </button>
                  ))}
                </div>

                <h4 className="text-xs font-semibold uppercase tracking-wide-product text-charcoal mb-3">Price</h4>
                <div className="space-y-2">
                  {['', ...PRICE_RANGES.map((r) => r.label)].map((price) => (
                    <button
                      key={price}
                      onClick={() => { setFilter('price', price); setMobileFilters(false) }}
                      className={`block text-sm transition-colors ${activePrice === price ? 'text-gold font-medium' : 'text-stone-500'}`}
                    >
                      {price || 'All'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-500 mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-xs font-semibold uppercase tracking-wide-product text-gold hover:text-gold-dark transition-colors underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
