import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/home/ProductCard'
import { products, categories } from '@/data/products'
import { Button } from '@/components/ui/button'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'
  const priceRange = searchParams.get('price') || 'all'

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory)
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      filtered = filtered.filter(p => p.price >= min && p.price <= max)
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }, [activeCategory, priceRange, sortBy])

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value === 'all' || value === '') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }
    setSearchParams(newParams)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== 'all' || priceRange !== 'all'

  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide mb-2">Shop</h1>
          <p className="text-sm text-gray-600">Discover our collection of demi-fine jewelry</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4">CATEGORY</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block text-sm w-full text-left py-1 transition-colors ${activeCategory === 'all' ? 'text-[#1a1a1a] font-medium' : 'text-gray-600 hover:text-[#1a1a1a]'}`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block text-sm w-full text-left py-1 transition-colors ${activeCategory === cat.id ? 'text-[#1a1a1a] font-medium' : 'text-gray-600 hover:text-[#1a1a1a]'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4">PRICE</h3>
                <div className="space-y-2">
                  {[
                    { label: 'All Prices', value: 'all' },
                    { label: 'Under $50', value: '0-50' },
                    { label: '$50 - $75', value: '50-75' },
                    { label: '$75 - $100', value: '75-100' },
                    { label: 'Over $100', value: '100-999' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('price', option.value)}
                      className={`block text-sm w-full text-left py-1 transition-colors ${priceRange === option.value ? 'text-[#1a1a1a] font-medium' : 'text-gray-600 hover:text-[#1a1a1a]'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-xs text-gray-500 hover:text-[#1a1a1a] underline">
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">{filteredProducts.length} products</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-sm text-gray-600"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border-0 bg-transparent focus:ring-0 cursor-pointer text-gray-600"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-sm underline">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg tracking-wider">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} className="p-2">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-3">CATEGORY</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { updateFilter('category', 'all'); setIsFilterOpen(false) }}
                    className={`block text-sm w-full text-left py-2 ${activeCategory === 'all' ? 'text-[#1a1a1a] font-medium' : 'text-gray-600'}`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { updateFilter('category', cat.id); setIsFilterOpen(false) }}
                      className={`block text-sm w-full text-left py-2 ${activeCategory === cat.id ? 'text-[#1a1a1a] font-medium' : 'text-gray-600'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-wider mb-3">PRICE</h3>
                <div className="space-y-2">
                  {[
                    { label: 'All Prices', value: 'all' },
                    { label: 'Under $50', value: '0-50' },
                    { label: '$50 - $75', value: '50-75' },
                    { label: '$75 - $100', value: '75-100' },
                    { label: 'Over $100', value: '100-999' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => { updateFilter('price', option.value) }}
                      className={`block text-sm w-full text-left py-2 ${priceRange === option.value ? 'text-[#1a1a1a] font-medium' : 'text-gray-600'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters} className="w-full">
                  Clear All Filters
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
