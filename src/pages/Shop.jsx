import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/lib/products'
import ProductCard from '@/components/home/ProductCard'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [sortBy, setSortBy] = useState('featured')

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max,
      )
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
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        break
    }

    return result
  }, [activeCategory, selectedPrice, sortBy])

  const handleCategoryChange = (catId) => {
    setSearchParams(catId === 'all' ? {} : { category: catId })
  }

  const clearFilters = () => {
    setSelectedPrice(null)
    setSortBy('featured')
    setSearchParams({})
  }

  const hasFilters = selectedPrice || activeCategory !== 'all' || sortBy !== 'featured'

  return (
    <main className="bg-surface pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="py-8 md:py-12">
          <p className="font-sans text-[11px] text-accent uppercase tracking-[0.2em] mb-3">
            Collection
          </p>
          <h1 className="section-title">Shop All</h1>
          <p className="font-sans text-sm text-muted mt-3 max-w-md">
            Explore our demi-fine gold jewelry collection. Each piece is crafted in small batches.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-sans text-[11px] text-base uppercase tracking-[0.1em] font-medium mb-4">
                  Category
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left px-3 py-2 font-sans text-sm transition-colors ${
                        activeCategory === cat.id
                          ? 'text-accent font-medium'
                          : 'text-muted hover:text-base'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="font-sans text-[11px] text-base uppercase tracking-[0.1em] font-medium mb-4">
                  Price
                </h3>
                <div className="space-y-1">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPrice(selectedPrice?.label === range.label ? null : range)}
                      className={`block w-full text-left px-3 py-2 font-sans text-sm transition-colors ${
                        selectedPrice?.label === range.label
                          ? 'text-accent font-medium'
                          : 'text-muted hover:text-base'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-[11px] text-muted hover:text-base uppercase tracking-[0.08em] flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear all
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <button
                className="lg:hidden flex items-center gap-2 font-sans text-xs text-base uppercase tracking-[0.08em]"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter & Sort
              </button>

              <span className="font-sans text-xs text-muted hidden md:block">
                {filtered.length} products
              </span>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-xs text-muted uppercase tracking-[0.08em] pr-6 pl-3 py-2 border border-border focus:outline-none focus:border-accent cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted pointer-events-none" />
              </div>
            </div>

            {/* Mobile filter panel */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${filterOpen ? 'max-h-96 mb-6' : 'max-h-0'}`}>
              <div className="flex gap-3 flex-wrap pb-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-2 font-sans text-xs uppercase tracking-[0.08em] border transition-colors ${
                      activeCategory === cat.id
                        ? 'border-base bg-base text-surface'
                        : 'border-border text-muted hover:border-base'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(selectedPrice?.label === range.label ? null : range)}
                    className={`px-4 py-2 font-sans text-xs uppercase tracking-[0.08em] border transition-colors ${
                      selectedPrice?.label === range.label
                        ? 'border-base bg-base text-surface'
                        : 'border-border text-muted hover:border-base'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active filter chips */}
            {hasFilters && (
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {activeCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-border/30 font-sans text-[11px] text-base uppercase tracking-[0.05em]">
                    {categories.find((c) => c.id === activeCategory)?.label}
                    <button onClick={() => handleCategoryChange('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-border/30 font-sans text-[11px] text-base uppercase tracking-[0.05em]">
                    {selectedPrice.label}
                    <button onClick={() => setSelectedPrice(null)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-20">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-base mb-3">No products found</p>
                <p className="font-sans text-sm text-muted mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline text-sm">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
