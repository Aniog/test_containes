import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'
  const priceRange = searchParams.get('price') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory)
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter(p => p.price >= min && p.price <= max)
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
      default:
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0))
    }

    return result
  }, [activeCategory, priceRange, sortBy])

  const setFilter = (key, value) => {
    if (value === 'all' || !value) {
      searchParams.delete(key)
    } else {
      searchParams.set(key, value)
    }
    setSearchParams(searchParams)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== 'all' || priceRange !== 'all'

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-2">
              {activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
            </h1>
            <p className="text-sm text-[#78716C]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2.5 border border-[#E8E4DF] rounded-full text-sm text-[#57534E]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-[#E8E4DF] rounded-full px-4 py-2.5 pr-10 text-sm text-[#57534E] focus:outline-none focus:border-[#C9A96E] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78716C] pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-serif text-sm tracking-widest uppercase text-[#1C1917] mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilter('category', 'all')}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      activeCategory === 'all' ? 'text-[#C9A96E] font-medium' : 'text-[#78716C] hover:text-[#C9A96E]'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setFilter('category', category.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors capitalize ${
                        activeCategory === category.id ? 'text-[#C9A96E] font-medium' : 'text-[#78716C] hover:text-[#C9A96E]'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <h3 className="font-serif text-sm tracking-widest uppercase text-[#1C1917] mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-40', label: 'Under $40' },
                    { value: '40-60', label: '$40 - $60' },
                    { value: '60-100', label: '$60 - $100' },
                    { value: '100-200', label: '$100+' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setFilter('price', option.value)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        priceRange === option.value ? 'text-[#C9A96E] font-medium' : 'text-[#78716C] hover:text-[#C9A96E]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#C9A96E] hover:text-[#B8944F] transition-colors flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filters */}
          {isFilterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setIsFilterOpen(false)}>
              <div
                className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-lg">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)} className="p-2">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-sm tracking-widest uppercase text-[#1C1917] mb-3">Category</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => { setFilter('category', 'all'); setIsFilterOpen(false) }}
                        className={`block w-full text-left text-sm py-1.5 ${activeCategory === 'all' ? 'text-[#C9A96E] font-medium' : 'text-[#78716C]'}`}
                      >
                        All
                      </button>
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => { setFilter('category', category.id); setIsFilterOpen(false) }}
                          className={`block w-full text-left text-sm py-1.5 capitalize ${activeCategory === category.id ? 'text-[#C9A96E] font-medium' : 'text-[#78716C]'}`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-sm tracking-widest uppercase text-[#1C1917] mb-3">Price</h3>
                    <div className="space-y-2">
                      {[
                        { value: 'all', label: 'All Prices' },
                        { value: '0-40', label: 'Under $40' },
                        { value: '40-60', label: '$40 - $60' },
                        { value: '60-100', label: '$60 - $100' },
                        { value: '100-200', label: '$100+' }
                      ].map(option => (
                        <button
                          key={option.value}
                          onClick={() => { setFilter('price', option.value); setIsFilterOpen(false) }}
                          className={`block w-full text-left text-sm py-1.5 ${priceRange === option.value ? 'text-[#C9A96E] font-medium' : 'text-[#78716C]'}`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#78716C] font-serif text-lg mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#C9A96E] hover:text-[#B8944F] transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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

export default ShopPage
