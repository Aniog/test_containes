import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Button from '@/components/ui/button'
import { SlidersHorizontal, X } from 'lucide-react'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

const priceRanges = [
  { label: 'Under $40', value: '0-40' },
  { label: '$40 - $60', value: '40-60' },
  { label: '$60 - $80', value: '60-80' },
  { label: '$80+', value: '80-999' },
]

export default function Collection() {
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeSort = searchParams.get('sort') || 'featured'

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [searchParams])

  let filtered = [...products]

  // Filter by category
  if (activeCategory) {
    filtered = filtered.filter((p) => p.category === activeCategory)
  }

  // Filter by price
  if (activePrice) {
    const [min, max] = activePrice.split('-').map(Number)
    filtered = filtered.filter((p) => p.price >= min && p.price <= max)
  }

  // Sort
  switch (activeSort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'newest':
      filtered.sort((a, b) => Number(b.isNew) - Number(a.isNew))
      break
    default:
      break
  }

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

  const hasFilters = activeCategory || activePrice

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]" id="collection-title">
              {activeCategory
                ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
                : 'All Jewelry'}
            </h1>
            <p className="text-sm text-taupe mt-2 font-sans">{filtered.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={activeSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="hidden md:block text-xs font-sans font-medium uppercase tracking-wider bg-transparent border border-divider px-4 py-2.5 text-[#1A1A1A] focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-wider text-[#1A1A1A] border border-divider px-4 py-2.5"
              onClick={() => setMobileFilterOpen(true)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs font-sans font-medium uppercase tracking-wider text-[#1A1A1A] mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', '')}
                    className={`block text-sm font-sans transition-colors ${
                      !activeCategory ? 'text-gold font-medium' : 'text-taupe hover:text-[#1A1A1A]'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block text-sm font-sans transition-colors ${
                        activeCategory === cat.id
                          ? 'text-gold font-medium'
                          : 'text-taupe hover:text-[#1A1A1A]'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs font-sans font-medium uppercase tracking-wider text-[#1A1A1A] mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('price', '')}
                    className={`block text-sm font-sans transition-colors ${
                      !activePrice ? 'text-gold font-medium' : 'text-taupe hover:text-[#1A1A1A]'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className={`block text-sm font-sans transition-colors ${
                        activePrice === range.value
                          ? 'text-gold font-medium'
                          : 'text-taupe hover:text-[#1A1A1A]'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear */}
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-sans text-taupe underline hover:text-[#1A1A1A] transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-taupe mb-4">No pieces found</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-[#E5DDD3] overflow-hidden mb-3">
                        <img
                          data-strk-img-id={`col-${product.id}`}
                          data-strk-img={`[pd-title-${product.id}] [pd-desc-${product.id}] [collection-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        <img
                          data-strk-img-id={`col-${product.id}-hover`}
                          data-strk-img={`[pd-title-${product.id}] [pd-desc-${product.id}] [collection-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${product.name} detail`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        />

                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-gold text-white text-[10px] font-sans font-medium uppercase tracking-wider px-2 py-1">
                            New
                          </span>
                        )}

                        <div
                          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                            hoveredId === product.id
                              ? 'translate-y-0 opacity-100'
                              : 'translate-y-4 opacity-0'
                          }`}
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              addItem(product)
                            }}
                            className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-[#1A1A1A] text-xs font-sans font-medium tracking-wider uppercase hover:bg-gold hover:text-white transition-all duration-300"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <h3 className="font-serif text-xs uppercase tracking-wider text-[#1A1A1A] mb-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-taupe">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-cream max-h-[80vh] overflow-y-auto transition-transform duration-400 ${
            mobileFilterOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="sticky top-0 bg-cream border-b border-divider px-6 py-4 flex items-center justify-between">
            <span className="text-sm font-sans font-medium">Filters</span>
            <button onClick={() => setMobileFilterOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Sort */}
            <div>
              <h3 className="text-xs font-sans font-medium uppercase tracking-wider text-[#1A1A1A] mb-3">
                Sort By
              </h3>
              <select
                value={activeSort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="w-full text-sm font-sans bg-white border border-divider px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-gold"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-xs font-sans font-medium uppercase tracking-wider text-[#1A1A1A] mb-3">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => { updateFilter('category', ''); setMobileFilterOpen(false) }}
                  className={`px-4 py-2 text-xs font-sans border transition-colors ${
                    !activeCategory ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'border-divider text-taupe'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { updateFilter('category', cat.id); setMobileFilterOpen(false) }}
                    className={`px-4 py-2 text-xs font-sans border transition-colors ${
                      activeCategory === cat.id
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'border-divider text-taupe'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-xs font-sans font-medium uppercase tracking-wider text-[#1A1A1A] mb-3">
                Price
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => updateFilter('price', '')}
                  className={`px-4 py-2 text-xs font-sans border transition-colors ${
                    !activePrice ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'border-divider text-taupe'
                  }`}
                >
                  All
                </button>
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => updateFilter('price', range.value)}
                    className={`px-4 py-2 text-xs font-sans border transition-colors ${
                      activePrice === range.value
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'border-divider text-taupe'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {hasFilters && (
              <button
                onClick={() => { clearFilters(); setMobileFilterOpen(false) }}
                className="text-sm font-sans text-taupe underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}