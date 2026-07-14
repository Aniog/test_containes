import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Check } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/lib/useStrkImages'
import { cn } from '@/lib/utils'

const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies']
const MATERIALS = ['18K Gold Plated']
const PRICE_BUCKETS = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
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
    initialCategory ? [initialCategory] : [],
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL when it changes (e.g. nav clicks)
  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((cur) =>
      cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value],
    )
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const catOk = selectedCats.length === 0 || selectedCats.includes(p.category)
      const matOk = selectedMats.length === 0 || selectedMats.includes(p.material)
      const priceOk =
        selectedPrices.length === 0 ||
        selectedPrices.some((id) => {
          const b = PRICE_BUCKETS.find((x) => x.id === id)
          return b && p.price >= b.min && p.price < b.max
        })
      return catOk && matOk && priceOk
    })

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [selectedCats, selectedMats, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMats([])
    setSearchParams({})
  }

  const activeCount =
    selectedCats.length + selectedPrices.length + selectedMats.length

  const FilterPanel = (
    <div className="space-y-8">
      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <CheckOption
            key={c}
            label={c}
            checked={selectedCats.includes(c)}
            onChange={() => toggle(selectedCats, setSelectedCats, c)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <CheckOption
            key={b.id}
            label={b.label}
            checked={selectedPrices.includes(b.id)}
            onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <CheckOption
            key={m}
            label={m}
            checked={selectedMats.includes(m)}
            onChange={() => toggle(selectedMats, setSelectedMats, m)}
          />
        ))}
      </FilterGroup>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-widest2 text-gold border-b border-gold/40 pb-1 hover:text-ink hover:border-ink transition-colors"
        >
          Clear All ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28 min-h-screen">
      {/* Header */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 md:py-14 text-center border-b border-line">
        <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
          The Collection
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
          Shop All
        </h1>
        <p className="mt-4 text-stone max-w-xl mx-auto">
          Demi-fine gold jewelry, designed in studio and made for the everyday.
        </p>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
        {/* Desktop sidebar */}
        <aside className="hidden md:block">
          <div className="sticky top-28">
            <h2 className="font-serif text-2xl text-ink mb-6">Filters</h2>
            {FilterPanel}
          </div>
        </aside>

        {/* Main */}
        <div>
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink border border-line px-4 py-2.5"
            >
              <SlidersHorizontal size={14} /> Filters
              {activeCount > 0 && (
                <span className="bg-ink text-ivory rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                  {activeCount}
                </span>
              )}
            </button>
            <p className="hidden md:block text-sm text-stone">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
            <div className="flex items-center gap-2">
              <label className="text-[11px] uppercase tracking-widest2 text-stone">
                Sort
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border border-line text-sm text-ink px-3 py-2.5 focus:outline-none focus:border-ink transition-colors cursor-pointer"
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
              <p className="font-serif text-3xl text-ink">No pieces found</p>
              <p className="mt-3 text-stone">Try adjusting your filters.</p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 text-[11px] uppercase tracking-widest2 text-gold border-b border-gold/40 pb-1"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[80] md:hidden transition-opacity duration-300',
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      >
        <div
          className="absolute inset-0 bg-ink/50"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-[85%] max-w-sm bg-ivory p-6 overflow-y-auto transition-transform duration-400',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-ink">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
            >
              <X size={22} />
            </button>
          </div>
          {FilterPanel}
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-8 w-full inline-flex items-center justify-center px-7 py-4 text-xs font-medium uppercase tracking-widest2 bg-ink text-ivory"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </div>
    </div>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-widest2 text-stone font-semibold mb-4">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function CheckOption({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          'w-4 h-4 border flex items-center justify-center transition-colors',
          checked ? 'bg-ink border-ink' : 'border-line group-hover:border-stone',
        )}
      >
        {checked && <Check size={11} className="text-ivory" />}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-cocoa group-hover:text-ink transition-colors">
        {label}
      </span>
    </label>
  )
}
