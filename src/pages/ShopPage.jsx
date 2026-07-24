import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useReveal } from '@/hooks/useReveal'
import { CATEGORIES, PRODUCTS, formatPrice } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import NewsletterSection from '@/components/NewsletterSection'

const PRICE_RANGES = [
  { id: 'under-50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50-75', label: '$50 – $75', test: (p) => p.price >= 50 && p.price <= 75 },
  { id: 'over-75', label: 'Over $75', test: (p) => p.price > 75 },
]

const MATERIALS = [
  { id: '18k-gold', label: '18K Gold Plated' },
  { id: 'sterling', label: 'Sterling Silver' },
  { id: 'crystal', label: 'Crystal Accents' },
]

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')
  const [materials, setMaterials] = useState([])

  const category = searchParams.get('category') || 'all'
  const priceRanges = searchParams.get('price')?.split(',').filter(Boolean) ?? []

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [category])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [category, priceRanges.join(','), sort, materials])

  useReveal(containerRef, [category, priceRanges.join(','), sort, materials])

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'all' || value === '' || (Array.isArray(value) && value.length === 0)) {
      next.delete(key)
    } else {
      next.set(key, Array.isArray(value) ? value.join(',') : value)
    }
    setSearchParams(next, { replace: true })
  }

  const togglePrice = (id) => {
    const next = priceRanges.includes(id)
      ? priceRanges.filter((p) => p !== id)
      : [...priceRanges, id]
    setParam('price', next)
  }

  const toggleMaterial = (id) => {
    setMaterials((current) =>
      current.includes(id) ? current.filter((m) => m !== id) : [...current, id]
    )
  }

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]
    if (category !== 'all') list = list.filter((p) => p.category === category)
    if (priceRanges.length > 0) {
      const tests = PRICE_RANGES.filter((r) => priceRanges.includes(r.id)).map((r) => r.test)
      list = list.filter((p) => tests.some((t) => t(p)))
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
  }, [category, priceRanges, sort])

  const activeFilterCount =
    (category !== 'all' ? 1 : 0) + priceRanges.length + materials.length

  const clearAll = () => {
    setSearchParams({}, { replace: true })
    setMaterials([])
  }

  const filterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">Category</h3>
        <ul className="mt-4 space-y-2.5">
          {[{ id: 'all', label: 'All Jewelry' }, ...CATEGORIES].map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setParam('category', c.id)}
                className={`text-sm transition-colors ${
                  category === c.id
                    ? 'font-semibold text-gold-deep'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line pt-8">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">Price</h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_RANGES.map((range) => (
            <li key={range.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft">
                <input
                  type="checkbox"
                  checked={priceRanges.includes(range.id)}
                  onChange={() => togglePrice(range.id)}
                  className="h-4 w-4 appearance-none border border-line bg-cream transition-colors checked:border-gold-deep checked:bg-gold-deep"
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line pt-8">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">Material</h3>
        <ul className="mt-4 space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft">
                <input
                  type="checkbox"
                  checked={materials.includes(m.id)}
                  onChange={() => toggleMaterial(m.id)}
                  className="h-4 w-4 appearance-none border border-line bg-cream transition-colors checked:border-gold-deep checked:bg-gold-deep"
                />
                {m.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted underline underline-offset-4 transition-colors hover:text-gold-deep"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  const categoryLabel =
    category === 'all' ? 'All Jewelry' : CATEGORIES.find((c) => c.id === category)?.label

  return (
    <div ref={containerRef} className="pt-24 md:pt-32">
      {/* Page header */}
      <header className="border-b border-line bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
            The Velmora collection
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium uppercase tracking-[0.08em] text-ink md:text-6xl">
            {categoryLabel}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
            Demi-fine pieces in 18k gold — hypoallergenic, waterproof, and boxed for gifting.
            Prices {formatPrice(30)}–{formatPrice(120)}.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold-deep lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
            Filters
            {activeFilterCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-deep text-[10px] font-bold text-cream">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="hidden text-xs uppercase tracking-[0.18em] text-ink-muted lg:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <label htmlFor="sort" className="sr-only">Sort products</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-11 cursor-pointer appearance-none border border-line bg-cream pl-4 pr-10 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink focus:border-gold-deep focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" strokeWidth={1.5} />
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">{filterPanel}</div>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center border border-dashed border-line px-6 py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match these filters</p>
                <p className="mt-2 text-sm text-ink-muted">
                  Try widening your price range or browsing the full collection.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 inline-flex h-12 items-center bg-ink px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-deep"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:gap-x-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${filtersOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!filtersOpen}
      >
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${filtersOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 max-h-[82vh] overflow-y-auto bg-cream px-6 pb-8 pt-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            filtersOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          role="dialog"
          aria-label="Filters"
        >
          <div className="flex items-center justify-between border-b border-line pb-4">
            <h2 className="font-serif text-xl uppercase tracking-[0.18em] text-ink">Filters</h2>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center text-ink"
              aria-label="Close filters"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="py-6">{filterPanel}</div>
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="h-13 w-full bg-gold-deep py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream transition-colors hover:bg-ink"
          >
            Show {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </button>
        </div>
      </div>

      <NewsletterSection />
    </div>
  )
}
