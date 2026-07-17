import React, { useState, useMemo, useEffect, useRef } from 'react'
import { Filter, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { products, categories } from '../../data/products'
import ProductCard from '../ui/ProductCard'

export default function CollectionPage() {
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 150])
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial)
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedMaterial !== 'all',
    priceRange[0] > 0 || priceRange[1] < 150,
  ].filter(Boolean).length

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setPriceRange([0, 150])
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[var(--velmora-bg)]">
      {/* Page Header */}
      <div className="bg-[var(--velmora-bg-alt)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="velmora-heading text-4xl md:text-5xl mb-3">The Collection</h1>
          <p className="text-[var(--velmora-text-muted)] max-w-2xl mx-auto">
            Discover our curated selection of demi-fine jewelry, designed for everyday elegance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <p className="text-sm text-[var(--velmora-text-muted)]">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-[var(--velmora-border)]"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filters</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-[var(--velmora-accent)] text-white text-xs rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Filter Sidebar */}
          <aside
            className={`lg:w-64 lg:flex-shrink-0 ${
              isFilterOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="velmora-label mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm text-[var(--velmora-text-muted)]">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-[var(--velmora-accent)]"
                      />
                      <span className="text-sm text-[var(--velmora-text-muted)]">
                        {cat.name} ({cat.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="velmora-label mb-4">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'all'}
                      onChange={() => setSelectedMaterial('all')}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm text-[var(--velmora-text-muted)]">All</span>
                  </label>
                  {['gold', 'silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => setSelectedMaterial(mat)}
                        className="accent-[var(--velmora-accent)]"
                      />
                      <span className="text-sm text-[var(--velmora-text-muted)] capitalize">
                        {mat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="velmora-label mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
                      }
                      className="w-20 px-2 py-1 text-sm border border-[var(--velmora-border)] bg-[var(--velmora-surface)]"
                      min="0"
                      max={priceRange[1]}
                    />
                    <span className="text-[var(--velmora-text-light)]">to</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value) || 150])
                      }
                      className="w-20 px-2 py-1 text-sm border border-[var(--velmora-border)] bg-[var(--velmora-surface)]"
                      min={priceRange[0]}
                      max="150"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[var(--velmora-accent)]"
                  />
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-sm text-[var(--velmora-accent)] hover:text-[var(--velmora-accent-hover)] transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[var(--velmora-text-muted)] hidden lg:block">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-[var(--velmora-text-muted)]">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-2 text-sm border border-[var(--velmora-border)] bg-[var(--velmora-surface)] cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name A-Z</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--velmora-text-muted)]" />
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="velmora-heading text-xl text-[var(--velmora-text-muted)] mb-2">
                  No products found
                </p>
                <p className="text-sm text-[var(--velmora-text-light)] mb-6">
                  Try adjusting your filters to discover more pieces.
                </p>
                <button onClick={clearFilters} className="velmora-btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
