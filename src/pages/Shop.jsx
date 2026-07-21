import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Check, ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'
import Reveal from '@/components/ui/Reveal'
import { CATEGORIES, PRODUCTS, formatPrice } from '@/data/products'

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', test: () => true },
  { id: 'under-50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50-75', label: '$50 – $75', test: (p) => p.price >= 50 && p.price <= 75 },
  { id: 'over-75', label: 'Over $75', test: (p) => p.price > 75 },
]

const MATERIALS = [
  { id: 'all', label: 'All Materials' },
  { id: '18k-gold', label: '18K Gold Plated' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
]

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

function FilterGroup({ title, children }) {
  return (
    <fieldset className="border-b border-velmora-line py-6 last:border-0">
      <legend className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-velmora-gold">
        {title}
      </legend>
      <div className="space-y-2.5">{children}</div>
    </fieldset>
  )
}

function RadioRow({ name, checked, onChange, label }) {
  return (
    <label className="group flex cursor-pointer items-center gap-3">
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
          checked ? 'border-velmora-gold' : 'border-velmora-line group-hover:border-velmora-muted'
        }`}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-velmora-gold" />}
      </span>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`text-sm transition-colors ${
          checked ? 'text-velmora-ink' : 'text-velmora-muted group-hover:text-velmora-ink'
        }`}
      >
        {label}
      </span>
    </label>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'
  const query = searchParams.get('q') || ''
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceRange) || PRICE_RANGES[0]
    let list = PRODUCTS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (material !== 'all' && p.material !== material) return false
      if (!range.test(p)) return false
      if (query) {
        const hay = `${p.name} ${p.tagline}`.toLowerCase()
        if (!hay.includes(query.toLowerCase())) return false
      }
      return true
    })
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [category, priceRange, material, sort, query])

  const setCategory = (id) => {
    const next = new URLSearchParams(searchParams)
    if (id === 'all') next.delete('category')
    else next.set('category', id)
    setSearchParams(next)
  }

  const activeFilterCount =
    (category !== 'all' ? 1 : 0) + (priceRange !== 'all' ? 1 : 0) + (material !== 'all' ? 1 : 0)

  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filtered])

  const filters = (
    <>
      <FilterGroup title="Category">
        <RadioRow
          name="category"
          checked={category === 'all'}
          onChange={() => setCategory('all')}
          label="All Jewelry"
        />
        {CATEGORIES.map((c) => (
          <RadioRow
            key={c.id}
            name="category"
            checked={category === c.id}
            onChange={() => setCategory(c.id)}
            label={c.label}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <RadioRow
            key={r.id}
            name="price"
            checked={priceRange === r.id}
            onChange={() => setPriceRange(r.id)}
            label={r.label}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <RadioRow
            key={m.id}
            name="material"
            checked={material === m.id}
            onChange={() => setMaterial(m.id)}
            label={m.label}
          />
        ))}
      </FilterGroup>
    </>
  )

  const categoryLabel =
    category === 'all' ? 'All Jewelry' : CATEGORIES.find((c) => c.id === category)?.label

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <header className="border-b border-velmora-line bg-velmora-surface/40 py-14 md:py-20">
        <div className="velmora-container">
          <p className="eyebrow">The Collection</p>
          <h1 className="mt-4 font-display text-4xl font-medium uppercase tracking-[0.12em] text-velmora-ink md:text-6xl">
            {query ? `“${query}”` : categoryLabel}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-velmora-muted">
            Demi-fine pieces in warm 18K gold — hypoallergenic, nickel-free and
            made for everyday ritual.
          </p>
        </div>
      </header>

      <div className="velmora-container py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filters}</div>
          </aside>

          <div>
            <div className="flex items-center justify-between gap-4 border-b border-velmora-line pb-5">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-velmora-ink transition-colors hover:text-velmora-gold lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[9px] font-bold text-[#1d130b]">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <p className="hidden text-xs uppercase tracking-[0.22em] text-velmora-muted lg:block">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-velmora-line bg-velmora-bg py-2.5 pl-4 pr-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-velmora-ink transition-colors focus:border-velmora-gold focus:outline-none"
                  aria-label="Sort products"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id} className="bg-velmora-bg text-velmora-ink">
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-muted" strokeWidth={1.5} />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center py-24 text-center">
                <p className="font-display text-2xl italic text-velmora-muted">
                  Nothing matches those filters — yet.
                </p>
                <button
                  type="button"
                  className="btn-outline mt-8"
                  onClick={() => {
                    setCategory('all')
                    setPriceRange('all')
                    setMaterial('all')
                    const next = new URLSearchParams(searchParams)
                    next.delete('q')
                    setSearchParams(next)
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8">
                {filtered.map((product, i) => (
                  <Reveal key={product.id} delay={Math.min(i, 5) * 60}>
                    <ProductCard product={product} index={i} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto border-t border-velmora-line bg-velmora-surface px-6 pb-10 pt-5 animate-slide-in-right">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg uppercase tracking-[0.24em] text-velmora-ink">
                Filters
              </span>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="p-2 text-velmora-muted hover:text-velmora-gold"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            {filters}
            <button
              type="button"
              className="btn-gold mt-8 w-full"
              onClick={() => setFiltersOpen(false)}
            >
              <Check className="h-4 w-4" strokeWidth={2} />
              Show {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
