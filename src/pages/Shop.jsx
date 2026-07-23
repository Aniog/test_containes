import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: '',
    material: '',
  })
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [filters, sortBy])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? '' : value,
    }))
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      material: '',
    })
  }

  const filteredProducts = products.filter(product => {
    if (filters.category && product.category !== filters.category) {
      return false
    }
    
    if (filters.priceRange) {
      const range = priceRanges.find(r => r.id === filters.priceRange)
      if (range && (product.price < range.min || product.price >= range.max)) {
        return false
      }
    }
    
    if (filters.material) {
      const materialLower = product.materials.toLowerCase()
      if (filters.material === 'gold' && !materialLower.includes('gold')) {
        return false
      }
      if (filters.material === 'silver' && !materialLower.includes('silver')) {
        return false
      }
    }
    
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return (a.new ? 1 : 0) - (b.new ? 1 : 0)
      default:
        return 0
    }
  })

  const activeFiltersCount = Object.values(filters).filter(Boolean).length

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-cream-100 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider uppercase text-charcoal-800 mb-4">
            Shop All Jewelry
          </h1>
          <p className="text-charcoal-500 max-w-xl mx-auto">
            Discover our collection of premium demi-fine jewelry, crafted with care and designed to last.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Mobile Filter Button */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-cream-300 hover:border-gold-400 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-gold-500 text-white text-xs flex items-center justify-center rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-charcoal-500">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-cream-300 bg-white text-sm focus:outline-none focus:border-gold-500"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium text-charcoal-800 mb-4 tracking-wide uppercase text-sm">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleFilterChange('category', category.id)}
                      className={cn(
                        'block w-full text-left px-3 py-2 text-sm transition-colors',
                        filters.category === category.id
                          ? 'bg-gold-50 text-gold-700 font-medium'
                          : 'text-charcoal-600 hover:bg-cream-100'
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-medium text-charcoal-800 mb-4 tracking-wide uppercase text-sm">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => handleFilterChange('priceRange', range.id)}
                      className={cn(
                        'block w-full text-left px-3 py-2 text-sm transition-colors',
                        filters.priceRange === range.id
                          ? 'bg-gold-50 text-gold-700 font-medium'
                          : 'text-charcoal-600 hover:bg-cream-100'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-medium text-charcoal-800 mb-4 tracking-wide uppercase text-sm">
                  Material
                </h3>
                <div className="space-y-2">
                  {['gold', 'silver'].map(material => (
                    <button
                      key={material}
                      onClick={() => handleFilterChange('material', material)}
                      className={cn(
                        'block w-full text-left px-3 py-2 text-sm transition-colors capitalize',
                        filters.material === material
                          ? 'bg-gold-50 text-gold-700 font-medium'
                          : 'text-charcoal-600 hover:bg-cream-100'
                      )}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gold-500 hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-sm text-charcoal-500">
                {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-charcoal-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-cream-300 bg-white text-sm focus:outline-none focus:border-gold-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.category && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream-200 text-sm">
                    {categories.find(c => c.id === filters.category)?.name}
                    <button
                      onClick={() => handleFilterChange('category', filters.category)}
                      className="ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.priceRange && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream-200 text-sm">
                    {priceRanges.find(r => r.id === filters.priceRange)?.label}
                    <button
                      onClick={() => handleFilterChange('priceRange', filters.priceRange)}
                      className="ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.material && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream-200 text-sm capitalize">
                    {filters.material}
                    <button
                      onClick={() => handleFilterChange('material', filters.material)}
                      className="ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-charcoal-500 mb-4">No products found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-gold-500 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden transition-opacity duration-300',
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 w-80 max-w-full bg-cream-50 transform transition-transform duration-300',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-cream-200">
            <h2 className="font-serif text-xl tracking-wider uppercase">Filters</h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 space-y-8 overflow-y-auto h-[calc(100%-140px)]">
            {/* Category Filter */}
            <div>
              <h3 className="font-medium text-charcoal-800 mb-4 tracking-wide uppercase text-sm">
                Category
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleFilterChange('category', category.id)}
                    className={cn(
                      'block w-full text-left px-3 py-2 text-sm transition-colors',
                      filters.category === category.id
                        ? 'bg-gold-50 text-gold-700 font-medium'
                        : 'text-charcoal-600 hover:bg-cream-100'
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-medium text-charcoal-800 mb-4 tracking-wide uppercase text-sm">
                Price
              </h3>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <button
                    key={range.id}
                    onClick={() => handleFilterChange('priceRange', range.id)}
                    className={cn(
                      'block w-full text-left px-3 py-2 text-sm transition-colors',
                      filters.priceRange === range.id
                        ? 'bg-gold-50 text-gold-700 font-medium'
                        : 'text-charcoal-600 hover:bg-cream-100'
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="font-medium text-charcoal-800 mb-4 tracking-wide uppercase text-sm">
                Material
              </h3>
              <div className="space-y-2">
                {['gold', 'silver'].map(material => (
                  <button
                    key={material}
                    onClick={() => handleFilterChange('material', material)}
                    className={cn(
                      'block w-full text-left px-3 py-2 text-sm transition-colors capitalize',
                      filters.material === material
                        ? 'bg-gold-50 text-gold-700 font-medium'
                        : 'text-charcoal-600 hover:bg-cream-100'
                    )}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-cream-200 bg-cream-50">
            <div className="flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border border-cream-300 text-sm font-medium"
              >
                Clear All
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-3 bg-charcoal-800 text-white text-sm font-medium"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
