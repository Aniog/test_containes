import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const MATERIALS = ['18K Gold Plated', 'Sterling Silver']

export default function ShopPage() {
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()
  const [hoveredId, setHoveredId] = useState(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const categoryParam = searchParams.get('category') || ''
  const sortParam = searchParams.get('sort') || 'featured'
  const priceParam = searchParams.get('price') || ''
  const materialParam = searchParams.get('material') || ''

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [categoryParam, sortParam, priceParam, materialParam])

  const updateFilter = (key, value) => {
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

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (categoryParam) {
      result = result.filter((p) => p.category === categoryParam)
    }
    if (priceParam) {
      const range = PRICE_RANGES.find((r) => r.label === priceParam)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max)
      }
    }
    if (materialParam) {
      result = result.filter((p) => p.material === materialParam)
    }

    switch (sortParam) {
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
  }, [categoryParam, priceParam, materialParam, sortParam])

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  const hasFilters = categoryParam || priceParam || materialParam

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-cream mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {['', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat || 'all'}
              onClick={() => updateFilter('category', cat)}
              className={`block text-sm transition-colors duration-300 ${
                categoryParam === cat
                  ? 'text-warm-gold'
                  : 'text-warm-tan hover:text-warm-cream'
              }`}
            >
              {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All Jewelry'}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-cream mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {PRICE_RANGES.map((range) => (
            <button
              key={range.label}
              onClick={() => updateFilter('price', priceParam === range.label ? '' : range.label)}
              className={`block text-sm transition-colors duration-300 ${
                priceParam === range.label
                  ? 'text-warm-gold'
                  : 'text-warm-tan hover:text-warm-cream'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-cream mb-4">
          Material
        </h3>
        <div className="space-y-3">
          {MATERIALS.map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', materialParam === mat ? '' : mat)}
              className={`block text-sm transition-colors duration-300 ${
                materialParam === mat
                  ? 'text-warm-gold'
                  : 'text-warm-tan hover:text-warm-cream'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-[11px] uppercase tracking-[0.15em] text-warm-gold hover:text-warm-gold-light transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-warm-cream">
            {categoryParam ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1) : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-warm-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-dark/50">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-warm-tan hover:text-warm-cream transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-xs text-warm-tan">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sortParam}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent text-[11px] uppercase tracking-[0.15em] text-warm-tan pr-6 focus:outline-none cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-warm-charcoal text-warm-cream">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-warm-tan pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-warm-tan">No pieces match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-warm-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-warm-dark/30">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-name]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      <img
                        data-strk-img-id={`shop-${product.imgId2}`}
                        data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-name] worn`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className={`absolute bottom-3 left-3 right-3 bg-warm-gold text-warm-black py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 ${
                          hoveredId === product.id
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-2'
                        }`}
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Add to Cart
                      </button>
                    </div>
                    <div className="mt-3">
                      <h3
                        id={`shop-${product.id}-name`}
                        className="font-serif text-xs sm:text-sm tracking-[0.1em] uppercase text-warm-cream"
                      >
                        {product.name}
                      </h3>
                      <p
                        id={`shop-${product.id}-desc`}
                        className="text-[11px] text-warm-tan mt-1 line-clamp-1"
                      >
                        {product.description}
                      </p>
                      <p className="text-sm text-warm-gold mt-1.5">{formatPrice(product.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-warm-black/60 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 z-50 h-full w-80 bg-warm-charcoal border-r border-warm-dark/50 shadow-2xl p-6 pt-20 overflow-y-auto">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="absolute top-5 right-5 p-1 text-warm-tan hover:text-warm-cream transition-colors"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-warm-cream mb-8">
              Filters
            </h2>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}
