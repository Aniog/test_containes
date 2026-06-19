import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingBag, Star, SlidersHorizontal, X } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-[var(--velmora-bg-secondary)] overflow-hidden mb-3 sm:mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {product.badge && (
            <span className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 py-1 bg-[var(--velmora-gold)] text-[var(--velmora-black)] text-[10px] tracking-widest uppercase">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
            <button
              onClick={(e) => {
                e.preventDefault()
                addToCart(product, product.variants[0])
              }}
              className="w-full btn-gold text-xs py-2.5 sm:py-3"
              aria-label={`Add ${product.name} to cart`}
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </Link>
      <Link to={`/product/${product.id}`} className="block">
        <h3 className="product-name text-xs sm:text-sm text-[var(--velmora-text)] mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
          <Star className="w-3 h-3 fill-[var(--velmora-gold)] text-[var(--velmora-gold)]" />
          <span className="text-xs text-[var(--velmora-text-secondary)]">{product.rating}</span>
          <span className="text-xs text-[var(--velmora-text-muted)]">({product.reviews})</span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--velmora-text)]">${product.price}</p>
      </Link>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { addToCart } = useCart()

  const categoryFilter = searchParams.get('category') || ''
  const priceFilter = searchParams.get('price') || ''
  const materialFilter = searchParams.get('material') || ''
  const sortBy = searchParams.get('sort') || ''

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter)
    }
    if (materialFilter) {
      result = result.filter(p => p.material === materialFilter)
    }
    if (priceFilter) {
      if (priceFilter === 'under50') {
        result = result.filter(p => p.price < 50)
      } else if (priceFilter === '50to100') {
        result = result.filter(p => p.price >= 50 && p.price <= 100)
      } else if (priceFilter === 'over100') {
        result = result.filter(p => p.price > 100)
      }
    }
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [categoryFilter, priceFilter, materialFilter, sortBy])

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }
    setSearchParams(newParams)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = categoryFilter || priceFilter || materialFilter

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-4">Category</h4>
        <div className="space-y-2">
          {['earrings', 'necklaces', 'huggies', 'sets'].map(cat => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer min-h-[44px]">
              <input
                type="radio"
                name="category"
                checked={categoryFilter === cat}
                onChange={() => updateFilter('category', categoryFilter === cat ? '' : cat)}
                className="accent-[var(--velmora-gold)]"
              />
              <span className="text-sm capitalize text-[var(--velmora-text-secondary)]">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-4">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 - $100' },
            { value: 'over100', label: 'Over $100' },
          ].map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer min-h-[44px]">
              <input
                type="radio"
                name="price"
                checked={priceFilter === option.value}
                onChange={() => updateFilter('price', priceFilter === option.value ? '' : option.value)}
                className="accent-[var(--velmora-gold)]"
              />
              <span className="text-sm text-[var(--velmora-text-secondary)]">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-4">Material</h4>
        <div className="space-y-2">
          {['gold', 'silver'].map(mat => (
            <label key={mat} className="flex items-center gap-2 cursor-pointer min-h-[44px]">
              <input
                type="radio"
                name="material"
                checked={materialFilter === mat}
                onChange={() => updateFilter('material', materialFilter === mat ? '' : mat)}
                className="accent-[var(--velmora-gold)]"
              />
              <span className="text-sm capitalize text-[var(--velmora-text-secondary)]">{mat} tone</span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase text-[var(--velmora-gold)] hover:text-[var(--velmora-gold-dark)] transition-colors min-h-[44px] flex items-center"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <main className="pt-16 md:pt-20">
      {/* Page header */}
      <div className="section-padding pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-2 sm:mb-3">
            Collection
          </p>
          <h1 className="serif-heading text-3xl sm:text-4xl md:text-5xl text-[var(--velmora-text)] mb-3 sm:mb-4 leading-tight">
            All Jewelry
          </h1>
          <p className="text-sm sm:text-base text-[var(--velmora-text-secondary)] max-w-xl">
            Discover our curated collection of demi-fine gold jewelry, designed for everyday elegance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="flex gap-6 sm:gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm text-[var(--velmora-text-secondary)] min-h-[44px]"
              aria-label="Toggle filters"
              aria-expanded={isFilterOpen}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-[var(--velmora-gold)] rounded-full" />
              )}
            </button>
          </div>

          {/* Mobile filter drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-[var(--velmora-bg)] p-6 overflow-y-auto animate-slide-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="serif-heading text-xl">Filters</h3>
                  <button onClick={() => setIsFilterOpen(false)} aria-label="Close filters" className="min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort and count */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-[var(--velmora-text-muted)]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-xs sm:text-sm bg-transparent border border-[var(--velmora-border)] px-3 py-2 text-[var(--velmora-text-secondary)] focus:outline-none focus:border-[var(--velmora-gold)] min-h-[44px]"
                aria-label="Sort products"
              >
                <option value="">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 sm:py-16">
                <p className="serif-heading text-xl text-[var(--velmora-text-secondary)] mb-2">
                  No products found
                </p>
                <p className="text-sm text-[var(--velmora-text-muted)] mb-4">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-outline inline-flex text-xs sm:text-sm">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {filteredProducts.map(product => (
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
