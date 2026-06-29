import React, { useRef, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`shop-${product.imgId}-alt`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn model gold jewelry`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-warm-black/90 text-white text-[10px] tracking-[0.12em] uppercase font-medium px-6 py-3 flex items-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm md:text-base uppercase tracking-[0.12em] text-charcoal group-hover:text-gold transition-colors duration-300"
          >
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-warm-gray">{formatPrice(product.price)}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
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

  let filtered = [...products]

  if (activeCategory) {
    filtered = filtered.filter(p => p.category === activeCategory)
  }

  if (activePriceRange) {
    const range = priceRanges.find(r => r.label === activePriceRange)
    if (range) {
      filtered = filtered.filter(p => p.price >= range.min && p.price < range.max)
    }
  }

  if (activeSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (activeSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price)
  }

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory, activePriceRange, activeSort])

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePriceRange

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold-light/30">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase font-medium text-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-[11px] tracking-[0.1em] uppercase text-warm-gray hover:text-charcoal transition-colors"
              >
                <X className="w-3 h-3" />
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-warm-gray hidden md:inline">Sort by</span>
            <div className="relative">
              <select
                value={activeSort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="appearance-none bg-transparent text-[11px] tracking-[0.1em] uppercase font-medium text-charcoal pr-6 cursor-pointer focus:outline-none"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-warm-gray pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="text-[11px] tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', '')}
                    className={`block text-sm transition-colors ${!activeCategory ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'}`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block text-sm transition-colors ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-[11px] tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('price', '')}
                    className={`block text-sm transition-colors ${!activePriceRange ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'}`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => updateFilter('price', range.label)}
                      className={`block text-sm transition-colors ${activePriceRange === range.label ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  <button className="block text-sm text-warm-gray hover:text-charcoal transition-colors">
                    18K Gold Plated
                  </button>
                  <button className="block text-sm text-warm-gray hover:text-charcoal transition-colors">
                    Sterling Silver
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-cream">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-[11px] tracking-[0.15em] uppercase font-semibold text-charcoal">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5 text-charcoal" />
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-[11px] tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">Category</h4>
                  <div className="space-y-3">
                    <button
                      onClick={() => { updateFilter('category', ''); setMobileFiltersOpen(false) }}
                      className={`block text-sm ${!activeCategory ? 'text-gold font-medium' : 'text-warm-gray'}`}
                    >
                      All
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => { updateFilter('category', cat.id); setMobileFiltersOpen(false) }}
                        className={`block text-sm ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-warm-gray'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-[11px] tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">Price</h4>
                  <div className="space-y-3">
                    <button
                      onClick={() => { updateFilter('price', ''); setMobileFiltersOpen(false) }}
                      className={`block text-sm ${!activePriceRange ? 'text-gold font-medium' : 'text-warm-gray'}`}
                    >
                      All Prices
                    </button>
                    {priceRanges.map(range => (
                      <button
                        key={range.label}
                        onClick={() => { updateFilter('price', range.label); setMobileFiltersOpen(false) }}
                        className={`block text-sm ${activePriceRange === range.label ? 'text-gold font-medium' : 'text-warm-gray'}`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-gold text-sm underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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
