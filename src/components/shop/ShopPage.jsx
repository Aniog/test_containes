import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const { addItem } = useCart()
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets']
  const materials = ['all', 'gold', 'silver']
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $50', value: 'under50' },
    { label: '$50 - $75', value: '50to75' },
    { label: '$75+', value: 'over75' },
  ]

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial)
    }
    if (priceRange === 'under50') {
      result = result.filter((p) => p.price < 50)
    } else if (priceRange === '50to75') {
      result = result.filter((p) => p.price >= 50 && p.price <= 75)
    } else if (priceRange === 'over75') {
      result = result.filter((p) => p.price > 75)
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const activeFilterCount = [
    selectedCategory !== 'all',
    selectedMaterial !== 'all',
    priceRange !== 'all',
  ].filter(Boolean).length

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setPriceRange('all')
  }

  return (
    <div className="container-wide py-24 md:py-32">
      {/* Page header */}
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--velmora-text-muted)] mb-3">The Collection</p>
        <h1 className="font-serif-display text-4xl md:text-5xl mb-4">Shop All Jewelry</h1>
        <p className="text-sm text-[var(--velmora-text-muted)] max-w-md mx-auto">
          Demi-fine pieces designed for everyday luxury. 18K gold plated, hypoallergenic, and made to be treasured.
        </p>
      </div>

      <div className="flex gap-8">
        {/* Mobile filter button */}
        <button
          className="md:hidden fixed bottom-6 right-6 z-40 bg-[var(--velmora-dark)] text-white px-5 py-3 text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg"
          onClick={() => setFiltersOpen(true)}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
        </button>

        {/* Filter sidebar - desktop */}
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-widest">Filters</h3>
              {activeFilterCount > 0 && (
                <button onClick={clearFilters} className="text-xs text-[var(--velmora-accent)] hover:underline">
                  Clear all
                </button>
              )}
            </div>

            {/* Category */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider mb-3 text-[var(--velmora-text-muted)]">Category</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm capitalize group-hover:text-[var(--velmora-accent)] transition-colors">
                      {cat === 'all' ? 'All' : cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider mb-3 text-[var(--velmora-text-muted)]">Material</h4>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === mat}
                      onChange={() => setSelectedMaterial(mat)}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm capitalize group-hover:text-[var(--velmora-accent)] transition-colors">
                      {mat === 'all' ? 'All' : mat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h4 className="text-xs uppercase tracking-wider mb-3 text-[var(--velmora-text-muted)]">Price</h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.value} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === range.value}
                      onChange={() => setPriceRange(range.value)}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm group-hover:text-[var(--velmora-accent)] transition-colors">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile filter drawer */}
        {filtersOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-72 bg-[var(--velmora-bg)] p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm uppercase tracking-widest">Filters</h3>
                <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider mb-3 text-[var(--velmora-text-muted)]">Category</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="mobile-category"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          className="accent-[var(--velmora-accent)]"
                        />
                        <span className="text-sm capitalize">{cat === 'all' ? 'All' : cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider mb-3 text-[var(--velmora-text-muted)]">Material</h4>
                  <div className="space-y-2">
                    {materials.map((mat) => (
                      <label key={mat} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="mobile-material"
                          checked={selectedMaterial === mat}
                          onChange={() => setSelectedMaterial(mat)}
                          className="accent-[var(--velmora-accent)]"
                        />
                        <span className="text-sm capitalize">{mat === 'all' ? 'All' : mat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider mb-3 text-[var(--velmora-text-muted)]">Price</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="mobile-price"
                          checked={priceRange === range.value}
                          onChange={() => setPriceRange(range.value)}
                          className="accent-[var(--velmora-accent)]"
                        />
                        <span className="text-sm">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button onClick={clearFilters} className="btn-outline flex-1 text-xs">Clear</button>
                <button onClick={() => setFiltersOpen(false)} className="btn-primary flex-1 text-xs">Apply</button>
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="flex-1">
          {/* Sort and count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[var(--velmora-text-muted)]">
              {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-[var(--velmora-border)] px-4 py-2 pr-8 text-sm font-sans-ui focus:outline-none focus:border-[var(--velmora-accent)] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--velmora-text-muted)]" />
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif-display text-2xl mb-2">No pieces found</p>
              <p className="text-sm text-[var(--velmora-text-muted)] mb-4">Try adjusting your filters</p>
              <button onClick={clearFilters} className="btn-ghost">Clear all filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="product-card-image relative">
                    <img src={product.images[0]} alt={product.shortName} />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[var(--velmora-accent)] text-white text-[10px] uppercase tracking-wider px-2 py-1">
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          addItem(product, product.variants[0])
                        }}
                        className="bg-white text-[var(--velmora-dark)] px-4 py-2 text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[var(--velmora-accent)] hover:text-white transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Bag
                      </button>
                    </div>
                  </Link>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="product-card-title">{product.shortName}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
                      <span className="text-xs text-[var(--velmora-text-muted)]">{product.rating}</span>
                    </div>
                    <p className="product-card-price">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
