import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown, Grid3X3, LayoutGrid } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products, categories, priceRanges } from '@/data/products'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [gridCols, setGridCols] = useState(3)

  const activeCategory = searchParams.get('category') || 'all'
  const activePriceRange = searchParams.get('price') || 'all'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    let filtered = [...products]

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory)
    }

    // Price filter
    if (activePriceRange !== 'all') {
      const range = priceRanges.find((r) => r.id === activePriceRange)
      if (range) {
        filtered = filtered.filter(
          (p) => p.price >= range.min && p.price < range.max
        )
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }, [activeCategory, activePriceRange, sortBy])

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all'

  const clearFilters = () => {
    setSearchParams({})
  }

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? 'p-6' : ''}>
      {mobile && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-lg text-charcoal-800">Filters</h3>
          <button
            onClick={() => setMobileFilterOpen(false)}
            className="p-2 text-charcoal-400 hover:text-charcoal-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Category filter */}
      <div className="mb-8">
        <h4 className="text-xs tracking-[0.15em] uppercase text-charcoal-600 mb-4">
          Category
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setCategory('all')}
            className={`block text-sm transition-colors ${
              activeCategory === 'all'
                ? 'text-gold-500 font-medium'
                : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'text-gold-500 font-medium'
                  : 'text-charcoal-500 hover:text-charcoal-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="mb-8">
        <h4 className="text-xs tracking-[0.15em] uppercase text-charcoal-600 mb-4">
          Price
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setPriceRange('all')}
            className={`block text-sm transition-colors ${
              activePriceRange === 'all'
                ? 'text-gold-500 font-medium'
                : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setPriceRange(range.id)}
              className={`block text-sm transition-colors ${
                activePriceRange === range.id
                  ? 'text-gold-500 font-medium'
                  : 'text-charcoal-500 hover:text-charcoal-800'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material note */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase text-charcoal-600 mb-4">
          Material
        </h4>
        <p className="text-sm text-charcoal-400">
          All pieces are 18K gold plated or sterling silver plated, hypoallergenic.
        </p>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="mt-8 text-xs text-gold-500 hover:text-gold-600 underline underline-offset-4 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Page header */}
      <div className="bg-ivory-100 border-b border-charcoal-100">
        <div className="max-w-[1400px] mx-auto section-padding py-10 md:py-14 text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl md:text-heading-lg text-charcoal-800 mb-3">
            {activeCategory !== 'all'
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'Shop All Jewelry'}
          </h1>
          <p className="text-sm text-charcoal-400">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} available
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto section-padding pt-8">
        <div className="flex gap-10 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal-100">
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-charcoal-600 hover:text-gold-500 transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                {/* Active filters */}
                {hasActiveFilters && (
                  <div className="hidden sm:flex items-center gap-2">
                    {activeCategory !== 'all' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-50 text-gold-600 text-[11px] border border-gold-200">
                        {categories.find((c) => c.id === activeCategory)?.name}
                        <button onClick={() => setCategory('all')}>
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {activePriceRange !== 'all' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-50 text-gold-600 text-[11px] border border-gold-200">
                        {priceRanges.find((r) => r.id === activePriceRange)?.label}
                        <button onClick={() => setPriceRange('all')}>
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                {/* Grid toggle - desktop */}
                <div className="hidden md:flex items-center gap-1">
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-1.5 transition-colors ${
                      gridCols === 3 ? 'text-charcoal-800' : 'text-charcoal-300'
                    }`}
                    aria-label="3 columns"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setGridCols(2)}
                    className={`p-1.5 transition-colors ${
                      gridCols === 2 ? 'text-charcoal-800' : 'text-charcoal-300'
                    }`}
                    aria-label="2 columns"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-xs tracking-[0.1em] uppercase text-charcoal-600 pr-6 pl-2 py-1.5 border border-charcoal-200 focus:outline-none focus:border-gold-500 cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-charcoal-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div
                className={`grid gap-5 md:gap-6 ${
                  gridCols === 3
                    ? 'grid-cols-2 md:grid-cols-3'
                    : 'grid-cols-2 md:grid-cols-2'
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-500 mb-2">
                  No pieces found
                </p>
                <p className="text-sm text-charcoal-400 mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline text-xs"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-full bg-ivory-50 shadow-2xl animate-slide-in-left overflow-y-auto">
            <FilterSidebar mobile />
          </div>
        </div>
      )}
    </main>
  )
}
