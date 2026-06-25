import React, { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import ProductCard from '@/components/ProductCard'
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
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 81, max: Infinity },
]

const MATERIALS = ['Gold', 'Silver']

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const category = params.get('category') || 'all'
  const price = params.get('price') || 'all'
  const material = params.get('material') || 'all'
  const sort = params.get('sort') || 'featured'
  const q = params.get('q') || ''

  const setParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const clearAll = () => setParams({}, { replace: true })

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]
    if (category !== 'all') list = list.filter((p) => p.category === category)
    const range = PRICE_RANGES.find((r) => r.id === price) || PRICE_RANGES[0]
    list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    if (material !== 'all') list = list.filter((p) => p.variants.includes(material))
    if (q) {
      const ql = q.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(ql) ||
          p.category.toLowerCase().includes(ql) ||
          p.short.toLowerCase().includes(ql)
      )
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
  }, [category, price, material, sort, q])

  const activeCount =
    (category !== 'all' ? 1 : 0) +
    (price !== 'all' ? 1 : 0) +
    (material !== 'all' ? 1 : 0)

  const FilterPanel = (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-4">Category</h3>
        <ul className="space-y-2.5">
          <li>
            <button
              onClick={() => setParam('category', 'all')}
              className={cn(
                'text-sm transition-colors',
                category === 'all' ? 'text-gold' : 'text-taupe hover:text-ink'
              )}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => setParam('category', c.id)}
                className={cn(
                  'text-sm transition-colors',
                  category === c.id ? 'text-gold' : 'text-taupe hover:text-ink'
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                onClick={() => setParam('price', r.id)}
                className={cn(
                  'text-sm transition-colors',
                  price === r.id ? 'text-gold' : 'text-taupe hover:text-ink'
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
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-4">Material</h3>
        <ul className="space-y-2.5">
          <li>
            <button
              onClick={() => setParam('material', 'all')}
              className={cn(
                'text-sm transition-colors',
                material === 'all' ? 'text-gold' : 'text-taupe hover:text-ink'
              )}
            >
              All Tones
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
                onClick={() => setParam('material', m)}
                className={cn(
                  'text-sm transition-colors',
                  material === m ? 'text-gold' : 'text-taupe hover:text-ink'
                )}
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep"
        >
          Clear All ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-sand/60">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            {q ? `Results for “${q}”` : category !== 'all' ? category : 'All Jewelry'}
          </h1>
          <p className="text-taupe mt-4 max-w-md mx-auto">
            Demi-fine gold pieces, crafted to be treasured and worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand/60">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters {activeCount > 0 && `(${activeCount})`}
              </button>
              <p className="hidden md:block text-sm text-taupe">{filtered.length} pieces</p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setParam('sort', e.target.value)}
                  className="appearance-none bg-transparent border border-sand/70 pl-4 pr-9 py-2.5 text-[11px] uppercase tracking-[0.15em] text-ink outline-none cursor-pointer hover:border-ink transition-colors"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-taupe absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  onClick={clearAll}
                  className="mt-5 text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep"
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
          <div className="absolute inset-0 bg-espresso/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream shadow-2xl flex flex-col animate-fade-in">
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand/60">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-ink" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
            <div className="px-6 py-5 border-t border-sand/60">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold text-ivory py-3.5 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors"
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
