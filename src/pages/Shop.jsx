import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
]

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-cream-100 overflow-hidden mb-4">
          <img
            data-strk-img-id={`${product.imgId}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-all duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="bg-cream-50 text-charcoal-800 px-6 py-2.5 text-[11px] tracking-nav uppercase font-medium hover:bg-white transition-colors shadow-elevated flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <ShoppingBag size={14} />
              Add to Cart
            </button>
          </div>

          {/* Badges */}
          {product.new && (
            <span className="absolute top-3 left-3 bg-gold-500 text-charcoal-900 text-[10px] tracking-wider uppercase font-bold px-2.5 py-1">
              New
            </span>
          )}
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3 className="text-[11px] tracking-product uppercase font-medium text-charcoal-800 mb-1 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-xs text-charcoal-400 mb-2 line-clamp-1">
        {product.description}
      </p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < Math.round(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-charcoal-200'}
            />
          ))}
        </div>
        <span className="text-xs text-charcoal-400">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium text-charcoal-700 mt-1.5">
        {formatPrice(product.price)}
      </p>
    </article>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [selectedPriceRange, setSelectedPriceRange] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategory, selectedPriceRange, sortBy])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (selectedPriceRange) {
      filtered = filtered.filter(p =>
        p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
      )
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedPriceRange, sortBy])

  const handleCategoryChange = (cat) => {
    const newCat = selectedCategory === cat ? '' : cat
    setSelectedCategory(newCat)
    if (newCat) {
      setSearchParams({ category: newCat })
    } else {
      setSearchParams({})
    }
  }

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPriceRange(null)
    setSortBy('featured')
    setSearchParams({})
  }

  const hasActiveFilters = selectedCategory || selectedPriceRange

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="bg-cream-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-charcoal-400 mb-6">
            <Link to="/" className="hover:text-charcoal-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal-600">Shop</span>
          </nav>
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-3">
            Our Collection
          </h1>
          <p className="text-sm text-charcoal-400 max-w-md mx-auto">
            Discover demi-fine jewelry crafted for everyday elegance. 
            Each piece is designed to be treasured.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 text-sm text-charcoal-700 border border-charcoal-200 px-4 py-2.5"
            >
              <SlidersHorizontal size={16} />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-gold-500 rounded-full" />
              )}
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm text-charcoal-700 border border-charcoal-200 px-4 py-2.5 bg-cream-50 focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Sidebar filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${filtersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs tracking-nav uppercase font-semibold text-charcoal-800 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-500 hover:text-charcoal-800'
                      }`}
                    >
                      {cat.name}
                      <span className="text-charcoal-300 ml-1">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs tracking-nav uppercase font-semibold text-charcoal-800 mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPriceRange(
                        selectedPriceRange?.label === range.label ? null : range
                      )}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        selectedPriceRange?.label === range.label
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-500 hover:text-charcoal-800'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs tracking-nav uppercase font-semibold text-charcoal-800 mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  <span className="block text-sm text-charcoal-500 py-1.5">
                    18K Gold Plated
                  </span>
                  <span className="block text-sm text-charcoal-500 py-1.5">
                    Sterling Silver
                  </span>
                </div>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-charcoal-500 underline hover:text-charcoal-800 transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort (desktop) */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm text-charcoal-400">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-charcoal-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm text-charcoal-700 border-b border-charcoal-200 pb-1 bg-transparent focus:outline-none focus:border-charcoal-400 cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-600 mb-2">
                  No products found
                </p>
                <p className="text-sm text-charcoal-400 mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="border border-charcoal-800 text-charcoal-800 px-6 py-2.5 text-xs tracking-nav uppercase font-medium hover:bg-charcoal-800 hover:text-cream-100 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
