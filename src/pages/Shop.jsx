import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { cn } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

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
  const [selectedCats, setSelectedCats] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL on mount / change
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat && CATEGORIES.includes(cat)) {
      setSelectedCats([cat])
    } else {
      setSelectedCats([])
    }
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
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
          <CheckRow
            key={c}
            label={c}
            checked={selectedCats.includes(c)}
            onChange={() => toggle(selectedCats, setSelectedCats, c)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <CheckRow
            key={b.id}
            label={b.label}
            checked={selectedPrices.includes(b.id)}
            onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <CheckRow
            key={m}
            label={m}
            checked={selectedMats.includes(m)}
            onChange={() => toggle(selectedMats, setSelectedMats, m)}
          />
        ))}
      </FilterGroup>
      {activeCount > 0 && (
        <button
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.2em] text-stone hover:text-ink underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light">
            All Jewelry
          </h1>
          <p className="mt-4 text-stone max-w-md mx-auto text-sm md:text-base">
            Demi-fine gold, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-60 shrink-0">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal width={15} height={15} className="text-stone" />
              <h2 className="text-[12px] uppercase tracking-[0.2em] font-medium">
                Filters
              </h2>
            </div>
            {FilterPanel}
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]"
              >
                <SlidersHorizontal width={15} height={15} />
                Filters {activeCount > 0 && `(${activeCount})`}
              </button>
              <p className="hidden md:block text-xs text-stone">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-sand pl-4 pr-9 py-2.5 text-[11px] uppercase tracking-[0.18em] cursor-pointer focus:outline-none focus:border-ink transition-colors"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  width={14}
                  height={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone"
                />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-3xl text-stone">No pieces match your filters.</p>
                <button
                  onClick={clearAll}
                  className="mt-5 text-[11px] uppercase tracking-[0.2em] text-champagne underline underline-offset-4"
                >
                  Clear filters
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
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-ivory shadow-card flex flex-col">
            <div className="flex items-center justify-between px-5 py-5 border-b border-sand">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X width={22} height={22} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">{FilterPanel}</div>
            <div className="px-5 py-4 border-t border-sand">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-champagne text-ivory py-4 text-[11px] uppercase tracking-[0.2em]"
              >
                Show {filtered.length} results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-[0.22em] text-stone mb-4">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function CheckRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          'w-4 h-4 border flex items-center justify-center transition-colors',
          checked ? 'bg-ink border-ink' : 'border-sand group-hover:border-ink',
        )}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 5l3 3 5-6" stroke="#F7F3EC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className="text-sm text-ink/85 group-hover:text-ink transition-colors">
        {label}
      </span>
    </label>
  )
}
