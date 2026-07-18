import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/shop/ProductCard'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const materialOptions = ['Gold', 'Silver']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || null
  const activeMaterial = searchParams.get('material') || null

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial.toLowerCase())
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
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
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeMaterial, sortBy])

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== 'all' || activePrice || activeMaterial

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal mb-4 font-medium">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', null)}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              activeCategory === 'all' ? 'text-velmora-gold font-medium' : 'text-velmora-mid-gray hover:text-velmora-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                activeCategory === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-mid-gray hover:text-velmora-charcoal'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal mb-4 font-medium">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setFilter('price', activePrice === range.label ? null : range.label)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                activePrice === range.label ? 'text-velmora-gold font-medium' : 'text-velmora-mid-gray hover:text-velmora-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal mb-4 font-medium">
          Material
        </h3>
        <div className="space-y-2">
          {materialOptions.map((mat) => (
            <button
              key={mat}
              onClick={() => setFilter('material', activeMaterial === mat ? null : mat)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                activeMaterial === mat ? 'text-velmora-gold font-medium' : 'text-velmora-mid-gray hover:text-velmora-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans tracking-wider uppercase text-velmora-mid-gray hover:text-velmora-charcoal transition-colors flex items-center gap-1"
        >
          <X size={12} />
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <main className="pt-20 md:pt-24">
      {/* Page header */}
      <section className="bg-velmora-ivory py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-3">
            Our Collection
          </p>
          <h1 className="section-title">Shop All Jewelry</h1>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-4" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-velmora-charcoal"
            >
              <SlidersHorizontal size={14} />
              Filters
              {hasActiveFilters && (
                <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
              )}
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs font-sans tracking-wider uppercase text-velmora-mid-gray pr-6 py-1 border-b border-velmora-warm focus:outline-none focus:border-velmora-gold cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-mid-gray" />
            </div>
          </div>

          {/* Mobile filters drawer */}
          {mobileFiltersOpen && (
            <div className="lg:hidden bg-velmora-cream p-6 rounded-sm">
              <FilterSidebar />
            </div>
          )}

          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort bar */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm text-velmora-mid-gray">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs font-sans tracking-wider uppercase text-velmora-mid-gray pr-6 py-1 border-b border-velmora-warm focus:outline-none focus:border-velmora-gold cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-mid-gray" />
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
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-velmora-mid-gray mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
