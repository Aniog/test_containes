import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PRODUCTS, CATEGORIES } from '@/data/products'
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
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]

const MATERIALS = ['18K Gold Plated']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const category = searchParams.get('category') || 'all'
  const price = searchParams.get('price') || 'all'
  const material = searchParams.get('material') || 'all'
  const sort = searchParams.get('sort') || 'featured'

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'all' || !value) {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next, { replace: true })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, price, material, sort])

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]
    if (category !== 'all') list = list.filter((p) => p.category === category)
    const range = PRICE_RANGES.find((r) => r.id === price) || PRICE_RANGES[0]
    list = list.filter((p) => p.price >= range.min && p.price < range.max)
    if (material !== 'all') list = list.filter((p) => p.material === material)

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
    (category !== 'all' ? 1 : 0) +
    (price !== 'all' ? 1 : 0) +
    (material !== 'all' ? 1 : 0)

  const clearAll = () => setSearchParams({}, { replace: true })

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-ink/10 py-6">
      <h3 className="text-[11px] uppercase tracking-widest2 text-ink">{title}</h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  )

  const FilterOption = ({ name, value, current, onSelect }) => (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={cn(
        'block text-sm transition-colors',
        current === value ? 'text-gold' : 'text-stone hover:text-ink'
      )}
    >
      {name}
    </button>
  )

  const Sidebar = (
    <div>
      <FilterGroup title="Category">
        <FilterOption name="All" value="all" current={category} onSelect={(v) => updateParam('category', v)} />
        {CATEGORIES.map((c) => (
          <FilterOption
            key={c.id}
            name={c.name}
            value={c.id}
            current={category}
            onSelect={(v) => updateParam('category', v)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <FilterOption
            key={r.id}
            name={r.label}
            value={r.id}
            current={price}
            onSelect={(v) => updateParam('price', v)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        <FilterOption name="All" value="all" current={material} onSelect={(v) => updateParam('material', v)} />
        {MATERIALS.map((m) => (
          <FilterOption
            key={m}
            name={m}
            value={m}
            current={material}
            onSelect={(v) => updateParam('material', v)}
          />
        ))}
      </FilterGroup>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="mt-6 text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-24">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">The Collection</p>
        <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop All</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-stone">
          Demi-fine gold jewelry, crafted to be treasured and worn every day.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between border-y border-ink/10 py-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink lg:hidden"
          >
            <SlidersHorizontal width={14} height={14} />
            Filters {activeCount > 0 && <span className="text-gold">({activeCount})</span>}
          </button>
          <p className="hidden text-[11px] uppercase tracking-widest2 text-stone lg:block">
            {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-[11px] uppercase tracking-widest2 text-stone">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="border border-ink/20 bg-cream px-3 py-2 text-xs text-ink focus:border-gold focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden w-56 shrink-0 lg:block">{Sidebar}</aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 border-b border-ink pb-1 text-[11px] uppercase tracking-widest2 text-ink hover:border-gold hover:text-gold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
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
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-cream px-6 py-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">Filters</h2>
              <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X width={20} height={20} className="text-ink" />
              </button>
            </div>
            {Sidebar}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full bg-ink py-3 text-[11px] uppercase tracking-widest2 text-cream"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
