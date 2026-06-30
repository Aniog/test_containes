import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpDown } from 'lucide-react'
import { products, categories } from '../data/products'
import FilterSidebar from '../components/collection/FilterSidebar'
import ProductGridCard from '../components/collection/ProductGridCard'

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') ? [searchParams.get('category')] : [],
    price: [],
    material: [],
  })
  const [sortBy, setSortBy] = useState('featured')

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat && !filters.category.includes(cat)) {
      setFilters((prev) => ({ ...prev, category: [cat] }))
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (filters.category?.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category))
    }

    // Price filter
    if (filters.price?.length > 0) {
      result = result.filter((p) =>
        filters.price.some((range) => {
          if (range === 'Under $50') return p.price < 50
          if (range === '$50 - $75') return p.price >= 50 && p.price <= 75
          if (range === '$75 - $100') return p.price > 75 && p.price <= 100
          if (range === 'Over $100') return p.price > 100
          return true
        })
      )
    }

    // Material filter
    if (filters.material?.length > 0) {
      result = result.filter((p) =>
        filters.material.some((m) => p.material.toLowerCase().includes(m.toLowerCase()))
      )
    }

    // Sort
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
    <main className="velmora-container mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-32">
      {/* Header */}
      <div className="mb-10">
        <p className="velmora-body-xs text-[var(--velmora-text-light)] tracking-[0.2em] mb-3">
          Collection
        </p>
        <h1 className="velmora-heading velmora-heading-md mb-4">All Jewelry</h1>
        <p className="velmora-body text-[var(--velmora-text-muted)]">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="flex gap-8 lg:gap-12">
        {/* Filter sidebar */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          products={products}
          categories={categories}
        />

        {/* Product grid */}
        <div className="flex-1 min-w-0">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--velmora-border-light)]">
            <span className="velmora-body-xs text-[var(--velmora-text-muted)]">
              {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
            </span>
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-[var(--velmora-text-light)]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="velmora-body-xs bg-transparent border-none outline-none cursor-pointer text-[var(--velmora-text)]"
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
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="velmora-heading-sm text-[var(--velmora-text-muted)] mb-2">
                No pieces found
              </p>
              <p className="velmora-body-sm text-[var(--velmora-text-light)]">
                Try adjusting your filters to discover more jewelry.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductGridCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
