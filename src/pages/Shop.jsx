import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { cn, formatPrice } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies']
const MATERIALS = ['18K Gold Plated']
const PRICE_RANGES = [
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
  const containerRef = useRef(null)

  const initialCategory = searchParams.get('category') || ''
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL when it changes
  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCats, selectedPrices, selectedMaterials, sort])

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const catOk = selectedCats.length === 0 || selectedCats.includes(p.category)
      const matOk =
        selectedMaterials.length === 0 || selectedMaterials.includes(p.material)
      const priceOk =
        selectedPrices.length === 0 ||
        selectedPrices.some((id) => {
          const range = PRICE_RANGES.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
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
  }, [selectedCats, selectedMaterials, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const hasFilters =
    selectedCats.length > 0 ||
    selectedPrices.length > 0 ||
    selectedMaterials.length > 0

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-wide2 text-ink">Category</h3>
        <ul className="mt-4 space-y-3">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => toggle(selectedCats, setSelectedCats, c)}
                className="flex items-center gap-3 text-sm text-stone transition-colors hover:text-ink"
              >
                <span
                  className={cn(
                    'flex h-4 w-4 items-center justify-center border transition-colors',
                    selectedCats.includes(c)
                      ? 'border-gold bg-gold text-ivory'
                      : 'border-sand'
                  )}
                >
                  {selectedCats.includes(c) && <Check size={11} strokeWidth={2.5} />}
                </span>
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-wide2 text-ink">Price</h3>
        <ul className="mt-4 space-y-3">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => toggle(selectedPrices, setSelectedPrices, r.id)}
                className="flex items-center gap-3 text-sm text-stone transition-colors hover:text-ink"
              >
                <span
                  className={cn(
                    'flex h-4 w-4 items-center justify-center border transition-colors',
                    selectedPrices.includes(r.id)
                      ? 'border-gold bg-gold text-ivory'
                      : 'border-sand'
                  )}
                >
                  {selectedPrices.includes(r.id) && <Check size={11} strokeWidth={2.5} />}
                </span>
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-wide2 text-ink">Material</h3>
        <ul className="mt-4 space-y-3">
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => toggle(selectedMaterials, setSelectedMaterials, m)}
                className="flex items-center gap-3 text-sm text-stone transition-colors hover:text-ink"
              >
                <span
                  className={cn(
                    'flex h-4 w-4 items-center justify-center border transition-colors',
                    selectedMaterials.includes(m)
                      ? 'border-gold bg-gold text-ivory'
                      : 'border-sand'
                  )}
                >
                  {selectedMaterials.includes(m) && <Check size={11} strokeWidth={2.5} />}
                </span>
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-wide2 text-gold transition-colors hover:text-gold-deep"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-sand bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">Shop All</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Demi-fine gold jewelry, designed to be worn every day. Explore earrings,
            necklaces, and huggies crafted to be treasured.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-60 shrink-0 md:block">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-sand pb-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="inline-flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] uppercase tracking-wide2 text-ink md:hidden"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.5} />
                  Filters
                </button>
                <span className="text-[11px] uppercase tracking-wide2 text-stone">
                  {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <label className="hidden text-[11px] uppercase tracking-wide2 text-stone sm:block">
                  Sort by
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-sand bg-ivory px-3 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
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
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <p className="mt-2 text-sm text-stone">Try adjusting or clearing your selection.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 text-[11px] uppercase tracking-wide2 text-gold hover:text-gold-deep"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm fade-in"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-80 max-w-[85%] flex-col bg-ivory slide-in-right">
            <div className="flex items-center justify-between border-b border-sand px-6 py-5">
              <h2 className="font-serif text-xl uppercase tracking-wide2 text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="text-ink hover:text-gold"
                aria-label="Close filters"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterContent />
            </div>
            <div className="border-t border-sand px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold py-3.5 text-[11px] uppercase tracking-wide2 text-ivory transition-colors hover:bg-gold-deep"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
