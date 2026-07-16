import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/home/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 - $80', min: 50, max: 80 },
  { id: '80-100', label: '$80 - $100', min: 80, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'name-asc', label: 'Name: A-Z' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: '',
  })
  const [sort, setSort] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category)
    }

    if (filters.priceRange) {
      const range = priceRanges.find((r) => r.id === filters.priceRange)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [filters, sort])

  return (
    <main className="pt-8 pb-16 md:pb-24">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="section-subtitle">Discover Your Style</p>
          <h1 className="section-title mt-2">Shop All Jewelry</h1>
          <p className="text-sm text-midnight-500 font-sans mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              priceRanges={priceRanges}
            />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-wider text-midnight-700 font-sans"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {(filters.category || filters.priceRange) && (
                  <span className="w-2 h-2 rounded-full bg-brand-600" />
                )}
              </button>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <label className="text-xs text-midnight-400 font-sans hidden sm:inline">
                  Sort by:
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs font-sans text-midnight-700 bg-transparent border border-midnight-200 px-3 py-2 focus:outline-none focus:border-midnight-400 cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-midnight-600 mb-2">No pieces found</p>
                <p className="text-sm text-midnight-400 font-sans mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={() => setFilters({ category: '', priceRange: '' })}
                  className="btn-outline text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} priority={i < 2} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-midnight-950/40 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-ivory-50 p-6 overflow-y-auto animate-slide-down">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm uppercase tracking-wider font-sans text-midnight-950">
                Filters
              </h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-midnight-500 hover:text-midnight-950"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              priceRanges={priceRanges}
            />
          </div>
        </div>
      )}
    </main>
  )
}