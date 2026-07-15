import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

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

  switch (activeSort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'newest':
      filtered.reverse()
      break
    default:
      break
  }

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory, activePriceRange, activeSort])

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-super-wide uppercase text-deep-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', '')}
            className={`block font-sans text-sm transition-colors ${!activeCategory ? 'text-champagne-gold' : 'text-warm-gray-500 hover:text-deep-charcoal'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.slug)}
              className={`block font-sans text-sm transition-colors ${activeCategory === cat.slug ? 'text-champagne-gold' : 'text-warm-gray-500 hover:text-deep-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-super-wide uppercase text-deep-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('price', '')}
            className={`block font-sans text-sm transition-colors ${!activePriceRange ? 'text-champagne-gold' : 'text-warm-gray-500 hover:text-deep-charcoal'}`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => updateFilter('price', range.label)}
              className={`block font-sans text-sm transition-colors ${activePriceRange === range.label ? 'text-champagne-gold' : 'text-warm-gray-500 hover:text-deep-charcoal'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-warm-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-5xl text-deep-charcoal tracking-wide">The Collection</h1>
          <p className="mt-3 font-sans text-sm text-warm-gray-500 tracking-wide">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter toggle + Sort */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-super-wide uppercase text-deep-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="relative ml-auto">
            <select
              value={activeSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-wide uppercase text-warm-gray-500 pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-warm-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-deep-charcoal/50" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute top-0 left-0 h-full w-72 bg-warm-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-sans text-xs tracking-super-wide uppercase text-deep-charcoal">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} className="text-warm-gray-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warm-gray-500 mb-4">No pieces found</p>
                <button
                  onClick={() => {
                    setSearchParams({})
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3x4] bg-antique-white overflow-hidden mb-3">
                      <img
                        data-strk-img-id={`${product.imgId}-shop`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-opacity duration-500"
                      />
                      <img
                        data-strk-img-id={`${product.imgId}-shop-hover`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] worn model gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                      />
                      <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product)
                          }}
                          className="w-full bg-deep-charcoal/90 text-warm-cream font-sans text-[10px] tracking-super-wide uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-deep-charcoal transition-colors"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <h3 className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-deep-charcoal text-center">
                      {product.name}
                    </h3>
                    <p className="font-sans text-[10px] md:text-xs text-warm-gray-500 text-center mt-0.5">
                      {product.description}
                    </p>
                    <p className="font-sans text-sm text-deep-charcoal text-center mt-1">
                      ${product.price}
                    </p>
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
