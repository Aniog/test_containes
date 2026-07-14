import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const priceRange = searchParams.get('price') || 'all'

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === 'all') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    setSearchParams(params)
  }

  const setPriceRange = (range) => {
    const params = new URLSearchParams(searchParams)
    if (range === 'all') {
      params.delete('price')
    } else {
      params.set('price', range)
    }
    setSearchParams(params)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50)
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80)
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80)
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [activeCategory, priceRange, sortBy])

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-medium tracking-wide-xl uppercase text-brand-charcoal mb-3">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setCategory('all')}
            className={`block text-sm font-sans transition-colors ${
              activeCategory === 'all' ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`block text-sm font-sans transition-colors ${
                activeCategory === cat.id ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-medium tracking-wide-xl uppercase text-brand-charcoal mb-3">
          Price
        </h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() => setPriceRange(option.value)}
              className={`block text-sm font-sans transition-colors ${
                priceRange === option.value ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs font-sans font-medium tracking-wide-xl uppercase text-brand-charcoal mb-3">
          Material
        </h3>
        <div className="space-y-2">
          <span className="block text-sm font-sans text-brand-charcoal font-medium">18K Gold Plated</span>
          <span className="block text-sm font-sans text-brand-muted">Sterling Silver</span>
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-espresso">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-brand-muted font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter toggle + sort */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 text-sm font-sans text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <FilterSidebar className="hidden lg:block w-48 flex-shrink-0" />

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 focus:outline-none focus:border-brand-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal">No pieces found</p>
                <p className="text-sm text-brand-muted mt-2">Try adjusting your filters</p>
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

      {/* Mobile filter drawer */}
      {showFilters && (
        <>
          <div
            className="fixed inset-0 bg-brand-espresso/40 z-[60] lg:hidden"
            onClick={() => setShowFilters(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-brand-cream z-[70] lg:hidden shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-brand-espresso">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-brand-charcoal"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </main>
  )
}
