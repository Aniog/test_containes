import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Check } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/components/StrkImage'
import { cn } from '@/lib/utils'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over-80', label: 'Over $80', min: 80, max: Infinity },
]

const MATERIALS = ['18K Gold Plated']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get('category') || ''
  const query = searchParams.get('q') || ''

  const [selectedCats, setSelectedCats] = useState(initialCategory ? [initialCategory] : [])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setSelectedCats(initialCategory ? [initialCategory] : [])
  }, [initialCategory])

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (query) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }
    if (selectedCats.length) {
      result = result.filter((p) => selectedCats.includes(p.category))
    }
    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((id) => {
          const range = PRICE_RANGES.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
        })
      )
    }
    if (selectedMats.length) {
      result = result.filter((p) => selectedMats.includes(p.material))
    }

    switch (sort) {
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
  }, [query, selectedCats, selectedPrices, selectedMats, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMats([])
    setSearchParams({})
  }

  const activeCount =
    selectedCats.length + selectedPrices.length + selectedMats.length

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-sand py-6">
      <h3 className="text-[11px] uppercase tracking-[0.2em] text-espresso">{title}</h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  )

  const CheckRow = ({ checked, onClick, label }) => (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 text-left"
    >
      <span
        className={cn(
          'flex h-4 w-4 items-center justify-center border transition-colors',
          checked ? 'border-espresso bg-espresso text-ivory' : 'border-sand'
        )}
      >
        {checked && <Check className="h-3 w-3" />}
      </span>
      <span className={cn('text-sm', checked ? 'text-espresso' : 'text-cocoa')}>{label}</span>
    </button>
  )

  const Sidebar = (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl text-espresso">Filters</h2>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="text-[11px] uppercase tracking-[0.15em] text-gold hover:text-gold-deep"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {categories.map((c) => (
          <CheckRow
            key={c.id}
            checked={selectedCats.includes(c.id)}
            onClick={() => toggle(selectedCats, setSelectedCats, c.id)}
            label={c.name}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <CheckRow
            key={r.id}
            checked={selectedPrices.includes(r.id)}
            onClick={() => toggle(selectedPrices, setSelectedPrices, r.id)}
            label={r.label}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <CheckRow
            key={m}
            checked={selectedMats.includes(m)}
            onClick={() => toggle(selectedMats, setSelectedMats, m)}
            label={m}
          />
        ))}
      </FilterGroup>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-sand bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">
            {query ? `Results for “${query}”` : 'All Jewelry'}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-taupe">
            Demi-fine gold pieces, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-60 shrink-0 md:block">
            <div className="sticky top-28">{Sidebar}</div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between gap-4">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] text-espresso md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeCount > 0 && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] text-ivory">
                    {activeCount}
                  </span>
                )}
              </button>
              <p className="hidden text-sm text-taupe md:block">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-[11px] uppercase tracking-[0.15em] text-taupe">Sort</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-sand bg-ivory px-3 py-2.5 text-sm text-espresso outline-none focus:border-gold"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso">No pieces match your filters</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-6">
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
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-ivory p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-serif text-2xl text-espresso">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="h-5 w-5 text-espresso" />
              </button>
            </div>
            {Sidebar}
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full bg-gold py-4 text-[11px] uppercase tracking-[0.2em] text-ivory hover:bg-gold-deep"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
