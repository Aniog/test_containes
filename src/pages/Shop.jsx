import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Check } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 49 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 81, max: Infinity },
]

const MATERIALS = ['Gold', 'Silver']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const initialCategory = searchParams.get('category') || 'all'
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setCategory(searchParams.get('category') || 'all')
  }, [searchParams])

  const updateCategory = (val) => {
    setCategory(val)
    const next = new URLSearchParams(searchParams)
    if (val === 'all') next.delete('category')
    else next.set('category', val)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice()
    if (category !== 'all') list = list.filter((p) => p.category === category)
    const range = PRICE_RANGES.find((r) => r.id === price)
    if (range) list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    if (material !== 'all') list = list.filter((p) => p.tone.includes(material))

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
  }, [category, price, material, sort])

  const activeCount =
    (category !== 'all' ? 1 : 0) + (price !== 'all' ? 1 : 0) + (material !== 'all' ? 1 : 0)

  const clearAll = () => {
    updateCategory('all')
    setPrice('all')
    setMaterial('all')
  }

  const FilterContent = () => (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <p className="text-[11px] uppercase tracking-widest2 text-ink">Category</p>
        <ul className="mt-4 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => updateCategory('all')}
              className={cn(
                'text-sm transition-colors hover:text-gold',
                category === 'all' ? 'text-gold' : 'text-taupe'
              )}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => updateCategory(c.id)}
                className={cn(
                  'text-sm transition-colors hover:text-gold',
                  category === c.id ? 'text-gold' : 'text-taupe'
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
        <p className="text-[11px] uppercase tracking-widest2 text-ink">Price</p>
        <ul className="mt-4 space-y-3">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPrice(r.id)}
                className={cn(
                  'text-sm transition-colors hover:text-gold',
                  price === r.id ? 'text-gold' : 'text-taupe'
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
        <p className="text-[11px] uppercase tracking-widest2 text-ink">Material</p>
        <ul className="mt-4 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setMaterial('all')}
              className={cn(
                'text-sm transition-colors hover:text-gold',
                material === 'all' ? 'text-gold' : 'text-taupe'
              )}
            >
              All Materials
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setMaterial(m)}
                className={cn(
                  'flex items-center gap-2 text-sm transition-colors hover:text-gold',
                  material === m ? 'text-gold' : 'text-taupe'
                )}
              >
                <span
                  className={cn(
                    'inline-block h-3 w-3 rounded-full border',
                    m === 'Gold' ? 'bg-gold border-gold' : 'bg-gray-300 border-gray-400'
                  )}
                />
                {m} Tone
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-widest2 text-gold-deep underline-offset-4 hover:underline"
        >
          Clear all ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="mx-auto max-w-8xl px-5 py-10 text-center md:px-8 md:py-14">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">The Collection</p>
        <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          {category === 'all' ? 'All Jewelry' : CATEGORIES.find((c) => c.id === category)?.name}
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-sand" />
      </div>

      <div className="mx-auto max-w-8xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between border-b border-sand pb-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink md:hidden"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.5} />
                  Filters
                  {activeCount > 0 && <span className="text-gold">({activeCount})</span>}
                </button>
                <p className="hidden text-xs text-taupe md:block">
                  {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
                </p>
              </div>

              <label className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-taupe">
                <span className="hidden sm:inline">Sort</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-sand bg-ivory px-3 py-2 text-xs text-ink focus:border-gold focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 text-[11px] uppercase tracking-widest2 text-gold-deep underline-offset-4 hover:underline"
                >
                  Clear filters
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
        <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true">
          <div
            className="animate-overlay-in absolute inset-0 bg-espresso/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="animate-drawer-in absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-ivory p-6">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-serif text-xl text-ink">Filters</p>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-gold"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <FilterContent />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 text-xs uppercase tracking-widest3 text-ivory"
            >
              <Check size={14} strokeWidth={1.5} />
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
