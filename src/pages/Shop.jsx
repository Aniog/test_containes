import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
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
  const [params, setParams] = useSearchParams()
  const [selectedCats, setSelectedCats] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFilters, setMobileFilters] = useState(false)

  // Sync category from URL on mount
  useEffect(() => {
    const cat = params.get('category')
    if (cat && CATEGORIES.includes(cat)) {
      setSelectedCats([cat])
    }
  }, [params])

  const toggle = (list, setList, value) =>
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMats([])
    setParams({})
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
  }, [selectedCats, selectedPrices, selectedMats, sort])

  const activeCount =
    selectedCats.length + selectedPrices.length + selectedMats.length

  const FilterGroup = ({ title, options, selected, onToggle }) => (
    <div className="border-b border-ink/10 py-6">
      <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink mb-4">{title}</h3>
      <div className="space-y-3">
        {options.map((opt) => {
          const value = typeof opt === 'string' ? opt : opt.id
          const label = typeof opt === 'string' ? opt : opt.label
          const checked = selected.includes(value)
          return (
            <label key={value} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  checked ? 'bg-gold border-gold' : 'border-ink/30 group-hover:border-ink',
                )}
              >
                {checked && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5l3 3 5-6" stroke="#F7F3EC" strokeWidth="1.5" />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(value)}
                className="sr-only"
              />
              <span className="text-sm text-ink/80 group-hover:text-ink transition-colors">
                {label}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )

  const Sidebar = (
    <div>
      <FilterGroup
        title="Category"
        options={CATEGORIES}
        selected={selectedCats}
        onToggle={(v) => toggle(selectedCats, setSelectedCats, v)}
      />
      <FilterGroup
        title="Price"
        options={PRICE_BUCKETS}
        selected={selectedPrices}
        onToggle={(v) => toggle(selectedPrices, setSelectedPrices, v)}
      />
      <FilterGroup
        title="Material"
        options={MATERIALS}
        selected={selectedMats}
        onToggle={(v) => toggle(selectedMats, setSelectedMats, v)}
      />
      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="mt-6 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-deep transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl">Shop All Jewelry</h1>
          <p className="mt-4 text-muted max-w-md mx-auto">
            Demi-fine gold pieces, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-60 shrink-0">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-serif text-xl">Filters</h2>
            </div>
            {Sidebar}
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-ink/10">
              <button
                type="button"
                onClick={() => setMobileFilters(true)}
                className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]"
              >
                <SlidersHorizontal width={15} height={15} />
                Filters {activeCount > 0 && `(${activeCount})`}
              </button>
              <p className="hidden md:block text-sm text-muted">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-muted hidden sm:block">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-ink/20 text-sm py-2 px-3 focus:outline-none focus:border-gold transition-colors"
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
                <p className="font-serif text-2xl mb-3">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-gold underline text-sm tracking-wide"
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
      {mobileFilters && (
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFilters(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-cream p-6 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFilters(false)}
                aria-label="Close filters"
              >
                <X width={20} height={20} />
              </button>
            </div>
            {Sidebar}
            <button
              type="button"
              onClick={() => setMobileFilters(false)}
              className="mt-8 w-full bg-gold text-cream text-[11px] uppercase tracking-[0.25em] py-4 hover:bg-gold-deep transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
