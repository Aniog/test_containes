import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown, Check } from 'lucide-react'
import { PRODUCTS, CATEGORIES, formatPrice } from '@/data/products'
import { useImageLoader } from '@/lib/useImageLoader'
import ProductCard from '@/components/ui/ProductCard'
import { cn } from '@/lib/utils'

const MATERIALS = ['Gold', 'Silver']

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useImageLoader([searchParams.get('category')])

  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync with category selection.
  useEffect(() => {
    const next = new URLSearchParams(searchParams)
    if (selectedCategory === 'all') next.delete('category')
    else next.set('category', selectedCategory)
    setSearchParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory])

  // Sync from URL when changed externally (e.g. footer link).
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all')
  }, [searchParams])

  const toggleMaterial = (m) => {
    setSelectedMaterials((cur) =>
      cur.includes(m) ? cur.filter((x) => x !== m) : [...cur, m],
    )
  }

  const filtered = PRODUCTS.filter((p) => {
    if (selectedCategory !== 'all') {
      const cat = CATEGORIES.find((c) => c.id === selectedCategory)
      if (cat && p.type !== cat.type && p.category !== cat.name) return false
    }
    if (selectedMaterials.length > 0) {
      const hasMat = selectedMaterials.some((m) => p.variants.includes(m))
      if (!hasMat) return false
    }
    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    if (range && (p.price < range.min || p.price > range.max)) return false
    return true
  })

  const sorted =
    sort === 'price-asc'
      ? [...filtered].sort((a, b) => a.price - b.price)
      : sort === 'price-desc'
        ? [...filtered].sort((a, b) => b.price - a.price)
        : sort === 'rating'
          ? [...filtered].sort((a, b) => b.rating - a.rating)
          : filtered

  const clearAll = () => {
    setSelectedCategory('all')
    setSelectedMaterials([])
    setPriceRange('all')
    setSort('featured')
  }

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedMaterials.length +
    (priceRange !== 'all' ? 1 : 0)

  const FilterPanel = () => (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-[11px] tracking-[0.2em] uppercase text-ink mb-4">Category</h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={cn(
                'text-sm transition-colors',
                selectedCategory === 'all' ? 'text-ink font-medium' : 'text-stone hover:text-ink',
              )}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={cn(
                  'text-sm transition-colors',
                  selectedCategory === c.id ? 'text-ink font-medium' : 'text-stone hover:text-ink',
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] tracking-[0.2em] uppercase text-ink mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPriceRange(r.id)}
                className={cn(
                  'text-sm transition-colors',
                  priceRange === r.id ? 'text-ink font-medium' : 'text-stone hover:text-ink',
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] tracking-[0.2em] uppercase text-ink mb-4">Material</h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => {
            const checked = selectedMaterials.includes(m)
            return (
              <li key={m}>
                <button
                  type="button"
                  onClick={() => toggleMaterial(m)}
                  className="flex items-center gap-3 text-sm text-stone hover:text-ink transition-colors"
                >
                  <span
                    className={cn(
                      'w-4 h-4 border flex items-center justify-center transition-colors',
                      checked ? 'bg-ink border-ink' : 'border-line',
                    )}
                  >
                    {checked && <Check size={11} strokeWidth={2.5} className="text-cream" />}
                  </span>
                  {m} Tone
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] tracking-[0.18em] uppercase text-champagne hover:text-champagne-deep transition-colors border-b border-champagne pb-0.5"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-champagne mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            {selectedCategory === 'all'
              ? 'All Jewelry'
              : CATEGORIES.find((c) => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-4 text-stone max-w-md mx-auto">
            Demi-fine gold pieces, crafted to be treasured and made to be worn every day.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
              <p className="text-xs tracking-[0.14em] uppercase text-stone">
                {sorted.length} {sorted.length === 1 ? 'Piece' : 'Pieces'}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="md:hidden flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-ink border border-line px-4 py-2.5"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.5} />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="bg-champagne text-cream rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-line text-[11px] tracking-[0.14em] uppercase text-ink pl-4 pr-9 py-2.5 cursor-pointer focus:outline-none focus:border-ink transition-colors"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    strokeWidth={1.5}
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone"
                  />
                </div>
              </div>
            </div>

            {/* Grid */}
            {sorted.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <p className="mt-2 text-sm text-stone">Try adjusting or clearing your selection.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 border border-ink text-ink text-[11px] tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-ink hover:text-cream transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
                {sorted.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-[85%] max-w-sm bg-cream flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-line">
              <h2 className="font-serif text-xl tracking-[0.14em] uppercase">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterPanel />
            </div>
            <div className="border-t border-line px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-ink text-cream text-[11px] tracking-[0.2em] uppercase py-4"
              >
                Show {sorted.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
