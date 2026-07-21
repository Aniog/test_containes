import React, { useState, useMemo } from 'react'
import { Filter, SlidersHorizontal } from 'lucide-react'
import { products } from '../data/products'
import FilterSidebar from '../components/collection/FilterSidebar'
import ProductCard from '../components/collection/ProductCard'

export default function CollectionPage() {
  const [filters, setFilters] = useState({ category: null, priceRange: null, materials: null })
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category)
    }

    if (filters.priceRange) {
      result = result.filter(
        (p) => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
      )
    }

    if (filters.materials && filters.materials.length > 0) {
      result = result.filter((p) => filters.materials.includes(p.material))
    }

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
      case 'newest':
        result.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        break
    }

    return result
  }, [filters, sortBy])

  return (
    <main className="bg-velmora-cream min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-base text-center">
            Shop All
          </h1>
          <p className="text-sm text-velmora-text-light text-center mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
          />

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-velmora-text"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-velmora-text-light hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-velmora-border bg-white px-3 py-2 text-velmora-text focus:outline-none focus:border-velmora-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-base mb-2">No pieces found</p>
                <p className="text-sm text-velmora-text-light">
                  Try adjusting your filters to discover more jewelry.
                </p>
                <button
                  onClick={() => setFilters({ category: null, priceRange: null, materials: null })}
                  className="mt-4 text-xs tracking-wider uppercase text-velmora-gold underline hover:text-velmora-base transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
