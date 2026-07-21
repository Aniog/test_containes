import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '../data/products'
import { ProductCard } from '../components/products/ProductCard'
import { cn } from '../lib/utils'

const categoryFilters = [
  { id: 'all', label: 'All Jewelry' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'sets', label: 'Gift Sets' },
]

const priceFilters = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: 'over-75', label: '$75+', min: 75, max: Infinity },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [showSort, setShowSort] = useState(false)

  const categoryParam = searchParams.get('category') || 'all'
  const priceParam = searchParams.get('price') || 'all'
  const sortParam = searchParams.get('sort') || 'featured'

  const activeCategory = categoryFilters.find(c => c.id === categoryParam) || categoryFilters[0]
  const activePrice = priceFilters.find(p => p.id === priceParam) || priceFilters[0]
  const activeSort = sortOptions.find(s => s.id === sortParam) || sortOptions[0]

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value === 'all' || value === 'featured') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }
    setSearchParams(newParams)
  }

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const categoryMatch = categoryParam === 'all' || product.category === categoryParam
      const priceMatch = product.price >= activePrice.min && product.price < activePrice.max
      return categoryMatch && priceMatch
    })
    .sort((a, b) => {
      switch (sortParam) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
    })

  const hasActiveFilters = categoryParam !== 'all' || priceParam !== 'all'

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-warmgray-100/50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-4">
            Our Collection
          </h1>
          <p className="text-warmgray-500 max-w-xl mx-auto">
            Discover our carefully curated selection of demi-fine gold jewelry, crafted to add elegance to everyday moments.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-warmgray-200">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 text-sm font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-gold-500 rounded-full" />
            )}
          </button>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-6">
            {categoryFilters.map((category) => (
              <button
                key={category.id}
                onClick={() => updateFilter('category', category.id)}
                className={cn(
                  'text-sm font-medium transition-colors',
                  categoryParam === category.id
                    ? 'text-charcoal-900'
                    : 'text-warmgray-500 hover:text-charcoal-900'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 text-sm font-medium"
            >
              Sort: <span className="text-warmgray-600">{activeSort.label}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {showSort && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowSort(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-cream-50 border border-warmgray-200 rounded-lg shadow-lg z-20 py-2 min-w-[180px]">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        updateFilter('sort', option.id)
                        setShowSort(false)
                      }}
                      className={cn(
                        'w-full px-4 py-2 text-left text-sm hover:bg-warmgray-100 transition-colors',
                        sortParam === option.id
                          ? 'text-charcoal-900 font-medium'
                          : 'text-warmgray-600'
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="lg:hidden mb-8 p-4 bg-warmgray-100/50 rounded-lg animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Category */}
            <div className="mb-4">
              <h4 className="text-xs font-medium text-warmgray-500 uppercase tracking-wide mb-2">
                Category
              </h4>
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      updateFilter('category', category.id)
                      setShowFilters(false)
                    }}
                    className={cn(
                      'px-3 py-1.5 text-sm rounded-full border transition-colors',
                      categoryParam === category.id
                        ? 'bg-charcoal-900 text-cream-50 border-charcoal-900'
                        : 'border-warmgray-300 hover:border-charcoal-900'
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h4 className="text-xs font-medium text-warmgray-500 uppercase tracking-wide mb-2">
                Price
              </h4>
              <div className="flex flex-wrap gap-2">
                {priceFilters.map((price) => (
                  <button
                    key={price.id}
                    onClick={() => {
                      updateFilter('price', price.id)
                      setShowFilters(false)
                    }}
                    className={cn(
                      'px-3 py-1.5 text-sm rounded-full border transition-colors',
                      priceParam === price.id
                        ? 'bg-charcoal-900 text-cream-50 border-charcoal-900'
                        : 'border-warmgray-300 hover:border-charcoal-900'
                    )}
                  >
                    {price.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSearchParams({})
                  setShowFilters(false)
                }}
                className="mt-4 text-sm text-warmgray-500 hover:text-charcoal-900"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Desktop Sidebar + Products */}
        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-medium text-charcoal-900 mb-4">Price</h3>
              <div className="space-y-3">
                {priceFilters.map((price) => (
                  <label
                    key={price.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="price"
                      checked={priceParam === price.id}
                      onChange={() => updateFilter('price', price.id)}
                      className="w-4 h-4 border-warmgray-300 text-charcoal-900 focus:ring-gold-500"
                    />
                    <span className={cn(
                      'text-sm transition-colors',
                      priceParam === price.id
                        ? 'text-charcoal-900'
                        : 'text-warmgray-500 group-hover:text-charcoal-900'
                    )}>
                      {price.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material Filter (placeholder) */}
            <div className="mb-8">
              <h3 className="font-medium text-charcoal-900 mb-4">Material</h3>
              <div className="space-y-3">
                {['18K Gold Plated', 'Sterling Silver'].map((material) => (
                  <label
                    key={material}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-warmgray-300 text-charcoal-900 focus:ring-gold-500"
                    />
                    <span className="text-sm text-warmgray-500 group-hover:text-charcoal-900 transition-colors">
                      {material}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-sm text-warmgray-500 mb-6">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-warmgray-500 mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-charcoal-900 font-medium hover:text-gold-600 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
