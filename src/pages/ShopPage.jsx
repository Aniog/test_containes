import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const [hoveredId, setHoveredId] = useState(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || '')
  }, [searchParams])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategory, selectedPrice, sortBy])

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedPrice) {
      result = result.filter((p) => p.price >= selectedPrice.min && p.price < selectedPrice.max)
    }
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }
    return result
  }, [selectedCategory, selectedPrice, sortBy])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice(null)
  }

  const hasFilters = selectedCategory || selectedPrice

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-nav font-semibold text-charcoal mb-4">Category</h3>
        <div className="space-y-2.5">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block font-sans text-sm transition-colors ${
              !selectedCategory ? 'text-charcoal font-medium' : 'text-stone-500 hover:text-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? '' : cat)}
              className={`block font-sans text-sm transition-colors ${
                selectedCategory === cat ? 'text-charcoal font-medium' : 'text-stone-500 hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-nav font-semibold text-charcoal mb-4">Price</h3>
        <div className="space-y-2.5">
          <button
            onClick={() => setSelectedPrice(null)}
            className={`block font-sans text-sm transition-colors ${
              !selectedPrice ? 'text-charcoal font-medium' : 'text-stone-500 hover:text-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(selectedPrice?.label === range.label ? null : range)}
              className={`block font-sans text-sm transition-colors ${
                selectedPrice?.label === range.label ? 'text-charcoal font-medium' : 'text-stone-500 hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {hasFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs uppercase tracking-btn text-gold hover:text-gold-hover transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="mb-8 md:mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            {selectedCategory || 'All Jewelry'}
          </h1>
          <p className="font-sans text-sm text-stone-500 mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Sort + mobile filter toggle */}
            <div className="flex items-center justify-between mb-6">
              <button
                className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-btn font-medium text-charcoal"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <div className="flex items-center gap-2 ml-auto">
                <label className="font-sans text-xs text-stone-500" htmlFor="sort">Sort by</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-sans text-xs text-charcoal bg-transparent border border-stone-200 px-3 py-2 focus:outline-none focus:border-gold"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="relative aspect-[3/4] bg-white overflow-hidden mb-3">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className={`absolute bottom-0 left-0 right-0 bg-charcoal/80 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${
                          hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product)
                          }}
                          className="flex items-center gap-2 text-cream font-sans text-[11px] uppercase tracking-btn font-medium"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                  <h3
                    id={product.titleId}
                    className="font-serif text-xs md:text-sm font-medium uppercase tracking-product text-charcoal"
                  >
                    {product.name}
                  </h3>
                  <p
                    id={product.descId}
                    className="font-sans text-[11px] text-stone-500 mt-0.5 line-clamp-1"
                  >
                    {product.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-sans text-[10px] text-stone-400">({product.reviews})</span>
                  </div>
                  <p className="font-sans text-sm font-medium text-charcoal mt-1">${product.price}</p>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-3">No pieces found</p>
                <p className="font-sans text-sm text-stone-500 mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs uppercase tracking-btn text-gold hover:text-gold-hover transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-charcoal/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 shadow-2xl p-6 overflow-y-auto animate-slide-in-left">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg font-semibold text-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-stone-400 hover:text-charcoal" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  )
}
