import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/lib/useStrkImages'
import { cn } from '@/lib/utils'

const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies']
const MATERIALS = ['18K Gold Plated']
const PRICE_BUCKETS = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to100', label: '$50 – $100', min: 50, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
]
const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get('category') || ''
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync when arriving via category link
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setSelectedCats([cat])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const toggle = (value, list, setter) => {
    setter(
      list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedMats.length && !selectedMats.includes(p.material)) return false
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const bucket = PRICE_BUCKETS.find((b) => b.id === id)
          return bucket && p.price >= bucket.min && p.price < bucket.max
        })
        if (!matches) return false
      }
      return true
    })

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [selectedCats, selectedPrices, selectedMats, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMats([])
    setSearchParams({})
  }

  const activeCount =
    selectedCats.length + selectedPrices.length + selectedMats.length

  const FilterPanel = () => (
    <div className="space-y-9">
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={cn(
                    'w-4 h-4 border flex items-center justify-center transition-colors',
                    selectedCats.includes(c)
                      ? 'bg-ink border-ink'
                      : 'border-taupe group-hover:border-ink'
                  )}
                >
                  {selectedCats.includes(c) && (
                    <span className="w-2 h-2 bg-champagne" />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedCats.includes(c)}
                  onChange={() => toggle(c, selectedCats, setSelectedCats)}
                />
                <span className="text-sm text-mocha group-hover:text-ink transition-colors">
                  {c}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={cn(
                    'w-4 h-4 border flex items-center justify-center transition-colors',
                    selectedPrices.includes(b.id)
                      ? 'bg-ink border-ink'
                      : 'border-taupe group-hover:border-ink'
                  )}
                >
                  {selectedPrices.includes(b.id) && (
                    <span className="w-2 h-2 bg-champagne" />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedPrices.includes(b.id)}
                  onChange={() => toggle(b.id, selectedPrices, setSelectedPrices)}
                />
                <span className="text-sm text-mocha group-hover:text-ink transition-colors">
                  {b.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={cn(
                    'w-4 h-4 border flex items-center justify-center transition-colors',
                    selectedMats.includes(m)
                      ? 'bg-ink border-ink'
                      : 'border-taupe group-hover:border-ink'
                  )}
                >
                  {selectedMats.includes(m) && (
                    <span className="w-2 h-2 bg-champagne" />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedMats.includes(m)}
                  onChange={() => toggle(m, selectedMats, setSelectedMats)}
                />
                <span className="text-sm text-mocha group-hover:text-ink transition-colors">
                  {m}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-widest2 text-champagne hover:text-champagne-dark transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-sand py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">
            Shop All
          </h1>
          <p className="mt-3 text-sm text-taupe max-w-md mx-auto">
            Demi-fine gold jewelry, designed to be worn every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-sand">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeCount > 0 && (
              <span className="bg-champagne text-ink text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {activeCount}
              </span>
            )}
          </button>
          <p className="hidden md:block text-xs uppercase tracking-widest2 text-taupe">
            {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-sand pl-4 pr-10 py-2.5 text-xs uppercase tracking-widest2 text-ink focus:outline-none focus:border-ink cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-mocha absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="mt-2 text-sm text-taupe">
                  Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 text-xs uppercase tracking-widest2 text-champagne hover:text-champagne-dark"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85%] bg-cream shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-mocha hover:text-champagne"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterPanel />
            </div>
            <div className="border-t border-sand px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-champagne text-ink text-xs uppercase tracking-widest2 py-4 hover:bg-champagne-dark transition-colors"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
