import { useMemo, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

const categoryOptions = [
  { id: 'earring', label: 'Earrings' },
  { id: 'necklace', label: 'Necklaces' },
  { id: 'huggie', label: 'Huggies' },
  { id: 'set', label: 'Sets' },
]

const priceOptions = [
  { id: 'under50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50to80', label: '$50 – $80', test: (p) => p.price >= 50 && p.price <= 80 },
  { id: 'over80', label: 'Over $80', test: (p) => p.price > 80 },
]

const materialOptions = [
  { id: 'gold', label: '18K Gold Plated' },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const initialType = searchParams.get('type')
  const [selectedCategories, setSelectedCategories] = useState(
    initialType ? [initialType] : [],
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategories, selectedPrices, selectedMaterials, sort])

  // Keep URL in sync when arriving with ?type=
  useEffect(() => {
    const t = searchParams.get('type')
    if (t && !selectedCategories.includes(t)) {
      setSelectedCategories([t])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const toggle = (list, setList, id) => {
    setList((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.type)) return false
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const opt = priceOptions.find((o) => o.id === id)
          return opt ? opt.test(p) : false
        })
        if (!matches) return false
      }
      if (selectedMaterials.length && !selectedMaterials.includes(p.tone)) return false
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sort])

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const activeCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length

  const FilterGroup = ({ title, options, selected, onToggle }) => (
    <div className="border-b border-hairline py-6">
      <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">{title}</h3>
      <ul className="space-y-3">
        {options.map((opt) => (
          <li key={opt.id}>
            <label className="flex cursor-pointer items-center gap-3 text-sm text-stone hover:text-ink transition-colors">
              <span
                className={cn(
                  'flex h-4 w-4 items-center justify-center border transition-colors',
                  selected.includes(opt.id)
                    ? 'border-gold bg-gold'
                    : 'border-hairline bg-transparent',
                )}
              >
                {selected.includes(opt.id) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-cream">
                    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selected.includes(opt.id)}
                onChange={() => onToggle(opt.id)}
              />
              {opt.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  const Sidebar = (
    <div>
      <div className="flex items-center justify-between pb-4">
        <h2 className="font-serif text-xl text-ink">Filters</h2>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] uppercase tracking-widest3 text-stone hover:text-ink transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
      <FilterGroup
        title="Category"
        options={categoryOptions}
        selected={selectedCategories}
        onToggle={(id) => {
          toggle(selectedCategories, setSelectedCategories, id)
          setSearchParams({})
        }}
      />
      <FilterGroup
        title="Price"
        options={priceOptions}
        selected={selectedPrices}
        onToggle={(id) => toggle(selectedPrices, setSelectedPrices, id)}
      />
      <FilterGroup
        title="Material"
        options={materialOptions}
        selected={selectedMaterials}
        onToggle={(id) => toggle(selectedMaterials, setSelectedMaterials, id)}
      />
    </div>
  )

  return (
    <div ref={containerRef} className="bg-cream pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">All Jewelry</h1>
          <p className="mx-auto mt-4 max-w-md text-sm md:text-base text-stone leading-relaxed">
            Demi-fine 18K gold plated pieces, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden w-60 flex-shrink-0 md:block">{Sidebar}</aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 border border-hairline px-4 py-2.5 text-xs uppercase tracking-widest3 text-ink hover:border-ink transition-colors md:hidden"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filters
                {activeCount > 0 && <span className="text-gold">({activeCount})</span>}
              </button>
              <p className="hidden text-sm text-stone md:block">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative ml-auto">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-hairline bg-cream py-2.5 pl-4 pr-10 text-xs uppercase tracking-widest3 text-ink focus:border-ink focus:outline-none transition-colors"
                >
                  {sortOptions.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink"
                />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <p className="mt-2 text-sm text-stone">Try adjusting or clearing your selection.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 bg-gold text-cream hover:bg-gold-deep uppercase tracking-widest3 text-xs font-medium px-8 py-4 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8">
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
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto animate-drawer-in" style={{ animationName: 'velmora-overlay-in' }}>
            <div className="flex items-center justify-between pb-4 border-b border-hairline">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-gold"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            {Sidebar}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full bg-gold text-cream hover:bg-gold-deep uppercase tracking-widest3 text-xs font-medium py-4 transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
