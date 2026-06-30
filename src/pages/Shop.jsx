import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
]

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-100', label: '$75 - $100' },
  { value: 'over-100', label: 'Over $100' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || 'all'
  const activeSort = searchParams.get('sort') || 'featured'

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value === 'all' || value === 'featured') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }
    setSearchParams(newParams)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    // Filter by price
    switch (activePrice) {
      case 'under-50':
        result = result.filter((p) => p.price < 50)
        break
      case '50-75':
        result = result.filter((p) => p.price >= 50 && p.price <= 75)
        break
      case '75-100':
        result = result.filter((p) => p.price >= 75 && p.price <= 100)
        break
      case 'over-100':
        result = result.filter((p) => p.price > 100)
        break
    }

    // Sort
    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
    }

    return result
  }, [activeCategory, activePrice, activeSort])

  const activeFiltersCount = [
    activeCategory !== 'all',
    activePrice !== 'all',
  ].filter(Boolean).length

  const clearAllFilters = () => {
    setSearchParams({})
  }

  return (
    <main className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-espresso-800 mb-2">
            {activeCategory !== 'all' 
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'
            }
          </h1>
          <p className="text-espresso-800/60">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm font-medium text-espresso-800"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="px-2 py-0.5 bg-gold text-white text-xs rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Mobile Sort */}
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 text-sm font-medium text-espresso-800"
              >
                Sort by
                <ChevronDown size={16} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-cream-300 py-2 z-20 min-w-[180px]">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateFilter('sort', option.value)
                        setIsSortOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        activeSort === option.value
                          ? 'bg-cream-100 text-espresso-800 font-medium'
                          : 'text-espresso-800/70 hover:bg-cream-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors"
                >
                  <X size={14} />
                  Clear all filters
                </button>
              )}

              {/* Categories */}
              <div>
                <h3 className="text-xs font-medium tracking-ultra-wide text-espresso-800/50 mb-4">
                  CATEGORY
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block w-full text-left py-1 text-sm transition-colors ${
                      activeCategory === 'all'
                        ? 'text-espresso-800 font-medium'
                        : 'text-espresso-800/60 hover:text-espresso-800'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => updateFilter('category', category.id)}
                      className={`block w-full text-left py-1 text-sm transition-colors ${
                        activeCategory === category.id
                          ? 'text-espresso-800 font-medium'
                          : 'text-espresso-800/60 hover:text-espresso-800'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs font-medium tracking-ultra-wide text-espresso-800/50 mb-4">
                  PRICE
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className={`block w-full text-left py-1 text-sm transition-colors ${
                        activePrice === range.value
                          ? 'text-espresso-800 font-medium'
                          : 'text-espresso-800/60 hover:text-espresso-800'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort & Results */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-espresso-800/60">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </p>
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-espresso-800"
                >
                  Sort by: {sortOptions.find((o) => o.value === activeSort)?.label}
                  <ChevronDown size={16} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-cream-300 py-2 z-20 min-w-[180px]">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          updateFilter('sort', option.value)
                          setIsSortOpen(false)
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                          activeSort === option.value
                            ? 'bg-cream-100 text-espresso-800 font-medium'
                            : 'text-espresso-800/70 hover:bg-cream-50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-espresso-800/60 mb-4">No products match your filters.</p>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-espresso-900/50 z-50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-cream-50 z-50 overflow-y-auto animate-slide-in">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-espresso-800">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 text-espresso-800/60 hover:text-espresso-800"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-ultra-wide text-espresso-800/50 mb-4">
                  CATEGORY
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activeCategory === 'all'
                        ? 'text-espresso-800 font-medium'
                        : 'text-espresso-800/60'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => updateFilter('category', category.id)}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        activeCategory === category.id
                          ? 'text-espresso-800 font-medium'
                          : 'text-espresso-800/60'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-ultra-wide text-espresso-800/50 mb-4">
                  PRICE
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        activePrice === range.value
                          ? 'text-espresso-800 font-medium'
                          : 'text-espresso-800/60'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="w-full py-3 border border-espresso-800 text-espresso-800 text-sm font-medium rounded"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-3 bg-espresso-800 text-cream-50 text-sm font-medium rounded"
                >
                  View {filteredProducts.length} Results
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  )
}
