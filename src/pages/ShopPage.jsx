import React, { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../data/products'
import { Star, ChevronDown, Filter, X } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Filter by material
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial)
    }

    // Filter by price
    if (priceRange === 'under50') {
      result = result.filter((p) => p.price < 50)
    } else if (priceRange === '50to75') {
      result = result.filter((p) => p.price >= 50 && p.price <= 75)
    } else if (priceRange === 'over75') {
      result = result.filter((p) => p.price > 75)
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    setFilteredProducts(result)
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setPriceRange('all')
    setSortBy('featured')
  }

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange !== 'all'

  return (
    <main className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-[var(--velmora-bg-alt)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl tracking-[0.05em] mb-3">
            Shop All Jewelry
          </h1>
          <p className="text-sm text-[var(--velmora-text-muted)]">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="accent-[var(--velmora-gold)]"
                      />
                      <span className="text-sm text-[var(--velmora-text-secondary)] capitalize">
                        {cat === 'all' ? 'All' : cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-4">Material</h3>
                <div className="space-y-2">
                  {['all', 'gold', 'silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => setSelectedMaterial(mat)}
                        className="accent-[var(--velmora-gold)]"
                      />
                      <span className="text-sm text-[var(--velmora-text-secondary)] capitalize">
                        {mat === 'all' ? 'All' : mat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 - $75' },
                    { value: 'over75', label: 'Over $75' },
                  ].map((range) => (
                    <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === range.value}
                        onChange={() => setPriceRange(range.value)}
                        className="accent-[var(--velmora-gold)]"
                      />
                      <span className="text-sm text-[var(--velmora-text-secondary)]">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-[var(--velmora-gold)] hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="md:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm text-[var(--velmora-text-secondary)]"
            >
              <Filter className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-[var(--velmora-gold)] rounded-full" />
              )}
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm text-[var(--velmora-text-secondary)] pr-6 cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--velmora-text-muted)]" />
            </div>
          </div>

          {/* Mobile filter panel */}
          {showFilters && (
            <div className="md:hidden bg-[var(--velmora-surface)] p-4 mb-6 border border-[var(--velmora-border-light)]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-3">Category</h3>
                  <div className="space-y-2">
                    {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category-mobile"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          className="accent-[var(--velmora-gold)]"
                        />
                        <span className="text-sm text-[var(--velmora-text-secondary)] capitalize">
                          {cat === 'all' ? 'All' : cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-3">Price</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to75', label: '$50 - $75' },
                      { value: 'over75', label: 'Over $75' },
                    ].map((range) => (
                      <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price-mobile"
                          checked={priceRange === range.value}
                          onChange={() => setPriceRange(range.value)}
                          className="accent-[var(--velmora-gold)]"
                        />
                        <span className="text-sm text-[var(--velmora-text-secondary)]">
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowFilters(false)}
                    className="flex-1 btn-primary text-xs py-2"
                  >
                    Apply
                  </button>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="flex-1 btn-outline text-xs py-2"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-between mb-6">
              <p className="text-sm text-[var(--velmora-text-muted)]">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-[var(--velmora-text-secondary)] pr-6 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--velmora-text-muted)]" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-xl text-[var(--velmora-text-secondary)] mb-2">
                  No pieces found
                </p>
                <p className="text-sm text-[var(--velmora-text-muted)] mb-6">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

// Inline ProductCard for shop page (reuses same pattern)
function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] bg-[var(--velmora-bg-alt)] overflow-hidden mb-4">
          <img
            alt={product.name}
            data-strk-img-id={`shop-${product.images[0].id}`}
            data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            alt={`${product.name} detail`}
            data-strk-img-id={`shop-${product.images[0].id}-hover`}
            data-strk-img={`[product-name-${product.id}] detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        <div>
          <h3
            id={`product-name-${product.id}`}
            className="product-name text-sm tracking-[0.12em] mb-1 group-hover:text-[var(--velmora-gold)] transition-colors"
          >
            {product.name}
          </h3>
          <p
            id={`product-desc-${product.id}`}
            className="text-xs text-[var(--velmora-text-muted)] mb-2"
          >
            {product.description}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]'
                      : 'text-[var(--velmora-border)]'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-[var(--velmora-text-muted)]">
              ({product.reviews})
            </span>
          </div>
          <p className="text-sm font-medium mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
