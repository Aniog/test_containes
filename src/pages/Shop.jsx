import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const categories = [
  { label: 'All', value: '' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
  { label: 'Gift Sets', value: 'sets' },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const activeCategory = searchParams.get('category') || ''
  const activeSort = searchParams.get('sort') || 'featured'
  const activePrice = searchParams.get('price') || ''

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory, activePrice])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  // Filter & sort
  let filtered = [...products]
  if (activeCategory) {
    if (activeCategory === 'huggies') {
      filtered = filtered.filter((p) => p.subcategory === 'Huggies')
    } else {
      filtered = filtered.filter((p) => p.category === activeCategory)
    }
  }
  if (activePrice) {
    const range = priceRanges[parseInt(activePrice)]
    if (range) {
      filtered = filtered.filter((p) => p.price >= range.min && p.price <= range.max)
    }
  }
  if (activeSort === 'price-asc') filtered.sort((a, b) => a.price - b.price)
  if (activeSort === 'price-desc') filtered.sort((a, b) => b.price - a.price)
  if (activeSort === 'rating') filtered.sort((a, b) => b.rating - a.rating)

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-wider uppercase text-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => updateFilter('category', cat.value)}
              className={`block w-full text-left px-0 py-1 text-sm transition-colors ${
                activeCategory === cat.value ? 'text-charcoal font-medium' : 'text-taupe hover:text-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-wider uppercase text-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={i}
              onClick={() => updateFilter('price', activePrice === String(i) ? '' : String(i))}
              className={`block w-full text-left px-0 py-1 text-sm transition-colors ${
                activePrice === String(i) ? 'text-charcoal font-medium' : 'text-taupe hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-wider uppercase text-charcoal mb-3">Material</h4>
        <div className="space-y-2">
          <button className="block text-sm text-taupe hover:text-charcoal transition-colors">
            18K Gold Plated
          </button>
          <button className="block text-sm text-taupe hover:text-charcoal transition-colors">
            Sterling Silver Base
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 pt-10">
          <h1 className="font-serif text-4xl lg:text-5xl font-light tracking-wide text-charcoal">
            Shop All
          </h1>
          <div className="w-10 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button
                  className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-charcoal"
                  onClick={() => setMobileFilterOpen(true)}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filter
                </button>
                <span className="text-xs text-taupe font-sans">{filtered.length} pieces</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-taupe font-sans hidden sm:inline">Sort by:</span>
                <select
                  value={activeSort}
                  onChange={(e) => updateFilter('sort', e.target.value === 'featured' ? '' : e.target.value)}
                  className="bg-transparent border border-border px-3 py-2 text-sm font-sans text-charcoal focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-square bg-stone overflow-hidden relative mb-4 rounded-sm">
                      <div
                        className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                        data-strk-img={`[shop-desc-${product.id}] [shop-name-${product.id}] gold jewelry`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="600"
                        data-strk-img-id={`shop-${product.id}`}
                      />
                    </div>
                    <p
                      className="font-serif text-sm tracking-wider uppercase text-charcoal"
                      id={`shop-name-${product.id}`}
                    >
                      {product.name}
                    </p>
                    <p className="sr-only" id={`shop-desc-${product.id}`}>{product.description}</p>
                    <p className="text-xs text-taupe mt-1">{product.subcategory}</p>
                    <p className="font-sans text-sm font-medium text-charcoal mt-1.5">
                      ${product.price}
                    </p>
                  </Link>

                  <button
                    onClick={(e) => { e.preventDefault(); addItem(product) }}
                    className={`absolute bottom-14 left-1/2 -translate-x-1/2 bg-cream/95 text-charcoal px-4 py-2.5 font-sans text-[11px] tracking-wider uppercase shadow-lg transition-all duration-300 whitespace-nowrap ${
                      hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <ShoppingBag className="w-3 h-3 inline mr-1.5" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-taupe">No pieces match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-sm text-gold underline hover:text-espresso transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-charcoal/40 lg:hidden"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-cream p-6 overflow-y-auto lg:hidden animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wide">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}