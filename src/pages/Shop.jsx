import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 49.99 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: '80plus', label: '$80+', min: 80.01, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrices, setSelectedPrices] = useState([])

  useEffect(() => {
    const category = searchParams.get('category') || ''
    setSelectedCategory(category)
  }, [searchParams])

  const toggleCategory = (id) => {
    setSelectedCategory((current) => (current === id ? '' : id))
  }

  const togglePrice = (id) => {
    setSelectedPrices((current) =>
      current.includes(id) ? current.filter((p) => p !== id) : [...current, id]
    )
  }

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrices([])
    setSearchParams({})
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId)
          return p.price >= range.min && p.price <= range.max
        })
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
      default:
        break
    }

    return result
  }, [selectedCategory, selectedPrices, sortBy])

  const hasFilters = selectedCategory || selectedPrices.length > 0

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1512]">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex cursor-pointer items-center gap-3">
              <button
                type="button"
                onClick={() => toggleCategory(cat.id)}
                className={cn(
                  'flex h-4 w-4 items-center justify-center border transition-colors',
                  selectedCategory === cat.id
                    ? 'border-[#C49A6C] bg-[#C49A6C]'
                    : 'border-[#C49A6C] bg-transparent'
                )}
                aria-checked={selectedCategory === cat.id}
                role="checkbox"
              >
                {selectedCategory === cat.id && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" />
                  </svg>
                )}
              </button>
              <span className="text-sm text-[#6B6259]">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1512]">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex cursor-pointer items-center gap-3">
              <button
                type="button"
                onClick={() => togglePrice(range.id)}
                className={cn(
                  'flex h-4 w-4 items-center justify-center border transition-colors',
                  selectedPrices.includes(range.id)
                    ? 'border-[#C49A6C] bg-[#C49A6C]'
                    : 'border-[#C49A6C] bg-transparent'
                )}
                aria-checked={selectedPrices.includes(range.id)}
                role="checkbox"
              >
                {selectedPrices.includes(range.id) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" />
                  </svg>
                )}
              </button>
              <span className="text-sm text-[#6B6259]">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1512]">
          Material
        </h4>
        <div className="space-y-2 text-sm text-[#6B6259]">
          <p>18k Gold Plated</p>
          <p>Hypoallergenic Brass</p>
          <p>Stainless Steel</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F6F3EF] pb-20 pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#C49A6C]">
            The Collection
          </p>
          <h1 className="font-serif text-4xl text-[#1A1512] md:text-5xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Desktop filters */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <div className="sticky top-28">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-serif text-lg text-[#1A1512]">Filters</h3>
                {hasFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs uppercase tracking-[0.1em] text-[#6B6259] underline-offset-4 hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex flex-col gap-4 border-b border-[#E4DDD4] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="flex items-center gap-2 border border-[#E4DDD4] px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-[#1A1512] lg:hidden"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                </button>
                <span className="text-sm text-[#6B6259]">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-xs uppercase tracking-[0.1em] text-[#6B6259]">
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border-b border-[#C49A6C] bg-transparent py-1 text-sm text-[#1A1512] outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-[#1A1512]">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-[#C49A6C] underline-offset-4 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-[#1A1512]/40 transition-opacity lg:hidden',
          mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <aside
        className={cn(
          'fixed bottom-0 left-0 right-0 z-[70] max-h-[80vh] overflow-y-auto rounded-t-2xl bg-[#F6F3EF] p-6 transition-transform duration-300 lg:hidden',
          mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-serif text-xl text-[#1A1512]">Filters</h3>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            aria-label="Close filters"
          >
            <X size={22} className="text-[#1A1512]" />
          </button>
        </div>
        <FilterContent />
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(false)}
          className="mt-8 w-full bg-[#1A1512] py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#F6F3EF]"
        >
          View {filteredProducts.length} Pieces
        </button>
      </aside>
    </div>
  )
}
