import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories, priceRanges } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'
  const activePriceRange = searchParams.get('price') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    // Filter by price
    if (activePriceRange !== 'all') {
      const range = priceRanges.find(r => r.id === activePriceRange)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
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
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePriceRange, sortBy])

  const handleCategoryChange = (categoryId) => {
    const params = new URLSearchParams(searchParams)
    if (categoryId === 'all') {
      params.delete('category')
    } else {
      params.set('category', categoryId)
    }
    setSearchParams(params)
  }

  const handlePriceChange = (priceId) => {
    const params = new URLSearchParams(searchParams)
    if (priceId === 'all') {
      params.delete('price')
    } else {
      params.set('price', priceId)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all'

  return (
    <main className="bg-ivory pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-light">
            {activeCategory !== 'all'
              ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
              : 'Our Collection'}
          </h1>
          <p className="mt-3 text-stone-500 text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-gold transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </button>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs text-stone-400 hidden sm:block">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 pl-3 py-2 text-sm text-stone-600 border border-stone-200 focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-serif text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-stone-500 hover:text-stone-700'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone-500 hover:text-stone-700'
                      }`}
                    >
                      {cat.name}
                      <span className="text-stone-300 ml-1">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-serif text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handlePriceChange('all')}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      activePriceRange === 'all' ? 'text-gold font-medium' : 'text-stone-500 hover:text-stone-700'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => handlePriceChange(range.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        activePriceRange === range.id ? 'text-gold font-medium' : 'text-stone-500 hover:text-stone-700'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-stone-400 hover:text-gold underline transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filters panel */}
          {showFilters && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
              <div className="absolute left-0 top-0 h-full w-80 max-w-full bg-ivory shadow-xl p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-lg text-stone-900">Filters</h2>
                  <button onClick={() => setShowFilters(false)} className="p-1">
                    <X className="w-5 h-5 text-stone-400" />
                  </button>
                </div>

                {/* Mobile category filter */}
                <div className="mb-8">
                  <h3 className="font-serif text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
                    Category
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => { handleCategoryChange('all'); setShowFilters(false) }}
                      className={`block w-full text-left text-sm py-2 transition-colors ${
                        activeCategory === 'all' ? 'text-gold font-medium' : 'text-stone-500'
                      }`}
                    >
                      All Jewelry
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => { handleCategoryChange(cat.id); setShowFilters(false) }}
                        className={`block w-full text-left text-sm py-2 transition-colors ${
                          activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone-500'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile price filter */}
                <div className="mb-8">
                  <h3 className="font-serif text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
                    Price
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => { handlePriceChange('all'); setShowFilters(false) }}
                      className={`block w-full text-left text-sm py-2 transition-colors ${
                        activePriceRange === 'all' ? 'text-gold font-medium' : 'text-stone-500'
                      }`}
                    >
                      All Prices
                    </button>
                    {priceRanges.map(range => (
                      <button
                        key={range.id}
                        onClick={() => { handlePriceChange(range.id); setShowFilters(false) }}
                        className={`block w-full text-left text-sm py-2 transition-colors ${
                          activePriceRange === range.id ? 'text-gold font-medium' : 'text-stone-500'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={() => { clearFilters(); setShowFilters(false) }}
                    className="text-xs text-stone-400 hover:text-gold underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-600 mb-2">No products found</p>
                <p className="text-sm text-stone-400 mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
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
    </main>
  )
}
