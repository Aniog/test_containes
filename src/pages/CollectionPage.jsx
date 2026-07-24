import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const categoryFilter = searchParams.get('category') || 'all'
  const priceFilter = searchParams.get('price') || 'all'
  const materialFilter = searchParams.get('material') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter)
    }
    if (materialFilter !== 'all') {
      result = result.filter(p => p.material === materialFilter)
    }
    if (priceFilter !== 'all') {
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
    if (value === 'all') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }
    setSearchParams(newParams)
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-warm-white)] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-2">Collection</p>
          <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl tracking-wide">
            {categoryFilter === 'all' ? 'All Jewelry' : categories.find(c => c.id === categoryFilter)?.name || 'All Jewelry'}
          </h1>
          <p className="text-sm text-[var(--color-warm-gray)] mt-2">{filteredProducts.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm tracking-wider"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm tracking-wider pr-8 cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'earrings', label: 'Earrings' },
                    { value: 'necklaces', label: 'Necklaces' },
                    { value: 'huggies', label: 'Huggies' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('category', option.value)}
                      className={`block text-sm transition-colors ${
                        categoryFilter === option.value
                          ? 'text-[var(--color-charcoal)] font-medium'
                          : 'text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 - $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('price', option.value)}
                      className={`block text-sm transition-colors ${
                        priceFilter === option.value
                          ? 'text-[var(--color-charcoal)] font-medium'
                          : 'text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'gold', label: 'Gold Tone' },
                    { value: 'silver', label: 'Silver Tone' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('material', option.value)}
                      className={`block text-sm transition-colors ${
                        materialFilter === option.value
                          ? 'text-[var(--color-charcoal)] font-medium'
                          : 'text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-[var(--color-warm-gray)]">{filteredProducts.length} results</p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm tracking-wider pr-8 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-2xl mb-2">No pieces found</p>
                <p className="text-sm text-[var(--color-warm-gray)]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
