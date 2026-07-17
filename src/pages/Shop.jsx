import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import {
  PRODUCTS,
  CATEGORIES,
  MATERIALS,
  PRICE_BUCKETS,
} from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import ProductCard from '@/components/ui/ProductCard'
import strkImgConfig from '@/strk-img-config.json'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'newest', label: 'Newest' },
]

function applySort(items, sort) {
  const arr = [...items]
  switch (sort) {
    case 'price-asc':
      return arr.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return arr.sort((a, b) => b.price - a.price)
    case 'rating':
      return arr.sort((a, b) => b.rating - a.rating)
    case 'newest':
      return arr.sort((a, b) => {
        const aNew = a.badge === 'New' ? 1 : 0
        const bNew = b.badge === 'New' ? 1 : 0
        return bNew - aNew
      })
    default:
      return arr.sort((a, b) => {
        const aB = a.badge === 'Bestseller' ? 1 : 0
        const bB = b.badge === 'Bestseller' ? 1 : 0
        if (aB !== bB) return bB - aB
        return a.price - b.price
      })
  }
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-taupeLight/60 py-5">
      <h3 className="text-[11px] tracking-widest2 uppercase font-medium text-espresso mb-4">
        {title}
      </h3>
      {children}
    </div>
  )
}

function CheckboxRow({ label, checked, onChange, count }) {
  return (
    <label className="flex items-center justify-between gap-3 py-1.5 cursor-pointer group">
      <span className="flex items-center gap-2.5">
        <span
          className={cn(
            'w-3.5 h-3.5 border flex items-center justify-center transition-colors',
            checked
              ? 'bg-espresso border-espresso'
              : 'border-taupe group-hover:border-espresso/60'
          )}
        >
          {checked && (
            <svg
              viewBox="0 0 12 12"
              className="w-2.5 h-2.5 text-cream"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 6.5l2.5 2.5L10 3.5" strokeLinecap="round" />
            </svg>
          )}
        </span>
        <span className="text-sm text-espresso/85 font-light group-hover:text-espresso transition-colors">
          {label}
        </span>
      </span>
      {typeof count === 'number' && (
        <span className="text-[10px] text-espresso/45 font-light tabular-nums">
          {count}
        </span>
      )}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
    </label>
  )
}

function FilterPanel({ filters, setFilters, counts, onClear }) {
  const toggle = (key, value) => {
    setFilters((f) => {
      const set = new Set(f[key])
      if (set.has(value)) set.delete(value)
      else set.add(value)
      return { ...f, [key]: Array.from(set) }
    })
  }

  const activeCount =
    filters.category.length +
    filters.material.length +
    filters.price.length

  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} strokeWidth={1.5} className="text-espresso" />
          <span className="text-[11px] tracking-widest2 uppercase font-medium text-espresso">
            Filter
          </span>
          {activeCount > 0 && (
            <span className="text-[10px] text-espresso/55 font-light">
              ({activeCount})
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-[10px] tracking-widest2 uppercase text-espresso/65 hover:text-espresso font-light underline-offset-4 hover:underline"
          >
            Clear
          </button>
        )}
      </div>
      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <CheckboxRow
            key={c.id}
            label={c.label}
            checked={filters.category.includes(c.id)}
            onChange={() => toggle('category', c.id)}
            count={counts.category[c.id] || 0}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <CheckboxRow
            key={m.id}
            label={m.label}
            checked={filters.material.includes(m.id)}
            onChange={() => toggle('material', m.id)}
            count={counts.material[m.id] || 0}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((p) => (
          <CheckboxRow
            key={p.id}
            label={p.label}
            checked={filters.price.includes(p.id)}
            onChange={() => toggle('price', p.id)}
            count={counts.price[p.id] || 0}
          />
        ))}
      </FilterGroup>
    </div>
  )
}

function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = SORTS.find((s) => s.id === value) || SORTS[0]

  useEffect(() => {
    const onClick = (e) => {
      if (!ref.current) return
      if (!ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 text-[11px] tracking-widest2 uppercase font-medium text-espresso hover:text-gold-dark transition-colors"
        aria-expanded={open}
      >
        Sort · <span className="text-gold-dark">{current.label}</span>
        <ChevronDown
          size={13}
          strokeWidth={1.5}
          className={cn('transition-transform', open && 'rotate-180')}
        />
      </button>
      {open && (
        <ul className="absolute right-0 top-full mt-3 z-30 bg-creamLight border border-taupeLight shadow-soft min-w-[220px] py-2 animate-fade-in">
          {SORTS.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => {
                  onChange(s.id)
                  setOpen(false)
                }}
                className={cn(
                  'w-full text-left px-5 py-2.5 text-[11px] tracking-widest2 uppercase font-medium transition-colors',
                  s.id === value
                    ? 'text-gold-dark bg-beige/60'
                    : 'text-espresso/80 hover:text-espresso hover:bg-beige/40'
                )}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') ? [searchParams.get('category')] : [],
    material: [],
    price: [],
  })
  const [sort, setSort] = useState('featured')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const containerRef = useRef(null)
  const { addItem, openCart } = useCart()

  // Keep URL in sync for category links
  useEffect(() => {
    const next = new URLSearchParams(searchParams)
    if (filters.category.length === 1) {
      next.set('category', filters.category[0])
    } else {
      next.delete('category')
    }
    setSearchParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [sort, filters])

  // Filter & sort
  const filtered = useMemo(() => {
    let list = PRODUCTS
    if (filters.category.length) {
      list = list.filter((p) => filters.category.includes(p.category))
    }
    if (filters.material.length) {
      list = list.filter((p) => filters.material.includes(p.material))
    }
    if (filters.price.length) {
      list = list.filter((p) =>
        filters.price.some((id) => {
          const bucket = PRICE_BUCKETS.find((b) => b.id === id)
          return bucket && p.price >= bucket.min && p.price <= bucket.max
        })
      )
    }
    return applySort(list, sort)
  }, [filters, sort])

  // Counts for filter sidebar
  const counts = useMemo(() => {
    const category = {}
    const material = {}
    const price = {}
    for (const p of PRODUCTS) {
      category[p.category] = (category[p.category] || 0) + 1
      material[p.material] = (material[p.material] || 0) + 1
      for (const b of PRICE_BUCKETS) {
        if (p.price >= b.min && p.price <= b.max) {
          price[b.id] = (price[b.id] || 0) + 1
        }
      }
    }
    return { category, material, price }
  }, [])

  const clearFilters = () =>
    setFilters({ category: [], material: [], price: [] })

  const activeChips = [
    ...filters.category.map((id) => ({
      key: `category-${id}`,
      label: CATEGORIES.find((c) => c.id === id)?.label || id,
      onRemove: () =>
        setFilters((f) => ({ ...f, category: f.category.filter((x) => x !== id) })),
    })),
    ...filters.material.map((id) => ({
      key: `material-${id}`,
      label: MATERIALS.find((m) => m.id === id)?.label || id,
      onRemove: () =>
        setFilters((f) => ({ ...f, material: f.material.filter((x) => x !== id) })),
    })),
    ...filters.price.map((id) => ({
      key: `price-${id}`,
      label: PRICE_BUCKETS.find((b) => b.id === id)?.label || id,
      onRemove: () =>
        setFilters((f) => ({ ...f, price: f.price.filter((x) => x !== id) })),
    })),
  ]

  return (
    <div className="pt-24 md:pt-28 pb-24" ref={containerRef}>
      {/* Page header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-8 md:pt-12 pb-10">
        <p className="eyebrow">The Collection</p>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl text-espresso font-light tracking-tight leading-[1.05]">
          Demi-fine jewelry, <em className="italic">made to last</em>.
        </h1>
        <p className="mt-5 text-espresso/70 font-light text-sm md:text-base max-w-xl">
          Eight pieces, all in 18K gold plate. Designed to be lived in — every
          day, not just on special occasions.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-3">
            <div className="md:sticky md:top-32">
              <FilterPanel
                filters={filters}
                setFilters={setFilters}
                counts={counts}
                onClear={clearFilters}
              />
            </div>
          </aside>

          {/* Grid */}
          <div className="md:col-span-9 lg:col-span-9">
            {/* Toolbar */}
            <div className="flex items-center justify-between pb-6 border-b border-taupeLight/60">
              <p className="text-[10px] tracking-widest2 uppercase text-espresso/65 font-light">
                {filtered.length} piece{filtered.length === 1 ? '' : 's'}
              </p>
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="md:hidden flex items-center gap-2 text-[11px] tracking-widest2 uppercase font-medium text-espresso"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.5} />
                  Filter
                </button>
                <SortDropdown value={sort} onChange={setSort} />
              </div>
            </div>

            {/* Active filter chips */}
            {activeChips.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 py-5">
                {activeChips.map((chip) => (
                  <button
                    key={chip.key}
                    type="button"
                    onClick={chip.onRemove}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-beige/60 border border-taupeLight text-[10px] tracking-widest2 uppercase text-espresso font-medium hover:bg-beige transition-colors"
                  >
                    {chip.label}
                    <X size={11} strokeWidth={1.5} />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-[10px] tracking-widest2 uppercase text-espresso/55 hover:text-espresso font-light underline-offset-4 hover:underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="eyebrow">Nothing here</p>
                <h2 className="mt-4 font-serif text-3xl text-espresso font-light">
                  No pieces match those filters.
                </h2>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-8 btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                className={cn(
                  'grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-12 pt-8',
                  'lg:grid-cols-3'
                )}
              >
                {filtered.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onAddToCart={(prod) => {
                      addItem(prod.id, 'gold', 1)
                      openCart()
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-[60] transition-opacity duration-300',
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 max-h-[88vh] bg-cream rounded-t-2xl overflow-y-auto',
            'transition-transform duration-500 ease-out',
            drawerOpen ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <div className="sticky top-0 bg-cream border-b border-taupeLight/60 px-6 py-4 flex items-center justify-between">
            <h2 className="font-serif text-xl text-espresso font-light">Filter</h2>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="p-2 text-espresso"
              aria-label="Close filters"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="px-6 pb-8">
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              counts={counts}
              onClear={clearFilters}
            />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="w-full btn-primary mt-6"
            >
              Show {filtered.length} Pieces
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
