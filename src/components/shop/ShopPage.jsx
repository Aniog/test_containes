import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
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

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeMaterial = searchParams.get('material') || ''

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

  let filtered = [...products]

  if (activeCategory) {
    filtered = filtered.filter((p) => p.category === activeCategory)
  }
  if (activePrice) {
    const range = priceRanges.find((r) => r.label === activePrice)
    if (range) {
      filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max)
    }
  }
  if (activeMaterial) {
    filtered = filtered.filter((p) => p.material === activeMaterial)
  }

  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price)
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price)

  const hasFilters = activeCategory || activePrice || activeMaterial

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory, activePrice, activeMaterial])

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-28'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-sans text-xs font-semibold tracking-wide-btn uppercase text-warm-black">
          Filters
        </h3>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-gold hover:text-gold-dark font-sans transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-warm-black mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {['', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat)}
              className={`block w-full text-left text-sm font-sans transition-colors ${
                activeCategory === cat ? 'text-gold font-medium' : 'text-warm-gray hover:text-warm-black'
              }`}
            >
              {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-warm-black mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {['', ...priceRanges.map((r) => r.label)].map((label) => (
            <button
              key={label}
              onClick={() => updateFilter('price', label)}
              className={`block w-full text-left text-sm font-sans transition-colors ${
                activePrice === label ? 'text-gold font-medium' : 'text-warm-gray hover:text-warm-black'
              }`}
            >
              {label || 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-warm-black mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {['', '18K Gold Plated'].map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', mat)}
              className={`block w-full text-left text-sm font-sans transition-colors ${
                activeMaterial === mat ? 'text-gold font-medium' : 'text-warm-gray hover:text-warm-black'
              }`}
            >
              {mat || 'All'}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-warm-black font-light">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-warm-black"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-xs font-sans text-warm-gray hidden md:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-2">
            <label className="text-xs font-sans text-warm-gray">Sort:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs font-sans text-warm-black bg-transparent border border-sand px-2 py-1.5 focus:outline-none focus:border-gold"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-warm-gray mb-4">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-xs font-sans font-semibold tracking-wide-btn uppercase text-gold hover:text-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-cream">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          id={product.titleId}
                          className="font-serif text-sm uppercase tracking-product text-warm-black"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p
                        id={product.descId}
                        className="text-xs text-warm-gray mt-0.5 font-sans"
                      >
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-sand'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-1.5">
                        <p className="text-sm font-sans font-medium text-warm-black">${product.price}</p>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            addItem(product)
                          }}
                          className="flex items-center gap-1.5 text-[10px] font-sans font-semibold tracking-wide-btn uppercase text-warm-black hover:text-gold transition-colors border border-sand px-3 py-1.5 hover:border-gold"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
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
            className="fixed inset-0 bg-warm-black/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 bg-ivory z-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
              <h2 className="font-serif text-lg text-warm-black">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-warm-gray hover:text-warm-black transition-colors" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-4">
              <FilterSidebar mobile />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ShopPage
