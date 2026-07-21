import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under50', label: 'Under $50' },
  { id: '50to80', label: '$50 – $80' },
  { id: 'over80', label: 'Over $80' },
]

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: '18k-gold-plated', label: '18K Gold Plated' },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()

  const selectedCategory = useMemo(() => {
    const category = searchParams.get('category')
    return category && categories.some((c) => c.id === category) ? category : 'all'
  }, [searchParams])

  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedPrice === 'under50') {
      result = result.filter((p) => p.price < 50)
    } else if (selectedPrice === '50to80') {
      result = result.filter((p) => p.price >= 50 && p.price <= 80)
    } else if (selectedPrice === 'over80') {
      result = result.filter((p) => p.price > 80)
    }

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial)
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedPrice !== 'all',
    selectedMaterial !== 'all',
  ].filter(Boolean).length

  const clearFilters = () => {
    setSelectedPrice('all')
    setSelectedMaterial('all')
    setSortBy('featured')
    setSearchParams({})
  }

  const FilterGroup = ({ title, options, selected, onChange }) => (
    <div className="mb-8">
      <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-wide text-charcoal">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={selected === option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              'block w-full text-left font-sans text-sm transition-colors',
              selected === option.id ? 'font-medium text-charcoal' : 'text-warmgray hover:text-charcoal'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-cream pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h1 className="font-serif text-3xl font-medium text-charcoal md:text-4xl lg:text-5xl">
            The Collection
          </h1>
          <p className="mx-auto mt-3 max-w-lg font-sans text-sm text-warmgray">
            Timeless demi-fine pieces designed for layering, gifting, and everyday elegance.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop sidebar */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <div className="sticky top-28">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-wide text-charcoal">
                  Filter
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs text-warmgray underline-offset-4 hover:text-accent hover:underline"
                  >
                    Clear ({activeFiltersCount})
                  </button>
                )}
              </div>
              <FilterGroup
                title="Category"
                options={categories}
                selected={selectedCategory}
                onChange={(id) => {
                  if (id === 'all') {
                    const next = new URLSearchParams(searchParams)
                    next.delete('category')
                    setSearchParams(next)
                  } else {
                    setSearchParams({ category: id })
                  }
                }}
              />
              <FilterGroup
                title="Price"
                options={priceRanges}
                selected={selectedPrice}
                onChange={setSelectedPrice}
              />
              <FilterGroup
                title="Material"
                options={materials}
                selected={selectedMaterial}
                onChange={setSelectedMaterial}
              />
            </div>
          </aside>

          {/* Mobile filter toggle + sort */}
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 border border-hairline px-4 py-2.5 font-sans text-xs font-medium uppercase tracking-wide text-charcoal"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filter
              {activeFiltersCount > 0 && (
                <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border border-hairline bg-transparent py-2.5 pl-3 pr-8 font-sans text-xs uppercase tracking-wide text-charcoal outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-warmgray">
                ▾
              </span>
            </div>
          </div>

          <section className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="font-sans text-sm text-warmgray">
                {filteredProducts.length}{' '}
                {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none border border-hairline bg-transparent py-2 pl-3 pr-8 font-sans text-xs uppercase tracking-wide text-charcoal outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-warmgray">
                  ▾
                </span>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-serif text-2xl text-charcoal">No pieces found</p>
                <p className="mt-2 text-sm text-warmgray">Try adjusting your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-cream p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wide text-charcoal">
                Filters
              </h3>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-warmgray"
                aria-label="Close filters"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <FilterGroup
              title="Category"
              options={categories}
              selected={selectedCategory}
              onChange={(id) => {
                if (id === 'all') {
                  const next = new URLSearchParams(searchParams)
                  next.delete('category')
                  setSearchParams(next)
                } else {
                  setSearchParams({ category: id })
                }
              }}
            />
            <FilterGroup
              title="Price"
              options={priceRanges}
              selected={selectedPrice}
              onChange={setSelectedPrice}
            />
            <FilterGroup
              title="Material"
              options={materials}
              selected={selectedMaterial}
              onChange={setSelectedMaterial}
            />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-2 w-full bg-accent py-3 text-sm font-medium uppercase tracking-wide text-white"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
