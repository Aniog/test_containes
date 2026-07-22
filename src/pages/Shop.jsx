import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 49 },
  { id: '50to100', label: '$50 - $100', min: 50, max: 100 },
  { id: 'over100', label: 'Over $100', min: 101, max: Infinity },
]

const MATERIALS = ['18K Gold Plated']

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const gridRef = useRef(null)

  const activeCategory = params.get('category') || 'all'
  const activePrice = params.get('price') || 'all'
  const activeMaterial = params.get('material') || 'all'
  const sort = params.get('sort') || 'featured'

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const setParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = products.slice()
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory)
    }
    const range = PRICE_RANGES.find((r) => r.id === activePrice) || PRICE_RANGES[0]
    list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    if (activeMaterial !== 'all') {
      list = list.filter((p) => p.material === activeMaterial)
    }
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [activeCategory, activePrice, activeMaterial, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, gridRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filtered])

  const FilterContent = () => (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink mb-4">
          Category
        </h3>
        <ul className="space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setParam('category', 'all')}
              className={cn(
                'text-sm transition-colors',
                activeCategory === 'all' ? 'text-gold' : 'text-stone hover:text-ink'
              )}
            >
              All Jewelry
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setParam('category', c.id)}
                className={cn(
                  'text-sm transition-colors',
                  activeCategory === c.id ? 'text-gold' : 'text-stone hover:text-ink'
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
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink mb-4">
          Price
        </h3>
        <ul className="space-y-3">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setParam('price', r.id)}
                className={cn(
                  'text-sm transition-colors',
                  activePrice === r.id ? 'text-gold' : 'text-stone hover:text-ink'
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
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink mb-4">
          Material
        </h3>
        <ul className="space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setParam('material', 'all')}
              className={cn(
                'text-sm transition-colors',
                activeMaterial === 'all' ? 'text-gold' : 'text-stone hover:text-ink'
              )}
            >
              All Materials
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setParam('material', m)}
                className={cn(
                  'text-sm transition-colors',
                  activeMaterial === m ? 'text-gold' : 'text-stone hover:text-ink'
                )}
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="pt-16 md:pt-20">
      {/* Page header */}
      <div className="border-b border-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            Shop All Jewelry
          </h1>
          <p className="mt-4 text-stone max-w-lg mx-auto">
            Demi-fine 18K gold plated pieces, hand-finished and made to be worn
            every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink"
              >
                <SlidersHorizontal width={15} height={15} strokeWidth={1.5} />
                Filters
              </button>
              <p className="hidden md:block text-sm text-stone">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-[11px] uppercase tracking-[0.2em] text-stone">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setParam('sort', e.target.value)}
                  className="bg-transparent border border-sand text-sm text-ink px-3 py-2 focus:outline-none focus:border-gold transition-colors"
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
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={() => setParams({}, { replace: true })}
                  className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div
                ref={gridRef}
                className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6"
              >
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
        <div className="fixed inset-0 z-[55] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/50 fade-in"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[80%] max-w-xs bg-ivory p-6 overflow-y-auto drawer-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-stone hover:text-ink"
              >
                <X width={20} height={20} />
              </button>
            </div>
            <FilterContent />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold text-espresso text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gold-deep hover:text-ivory transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
