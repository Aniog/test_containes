import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
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
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 81, max: Infinity },
]

const MATERIALS = ['18K Gold Plated']

export default function Shop() {
  const ref = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setCategory(searchParams.get('category') || 'All')
  }, [searchParams])

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, price, sort])

  const setCategoryParam = (val) => {
    setCategory(val)
    if (val === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', val)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === price) || PRICE_RANGES[0]
    let list = products.filter((p) => {
      const catOk = category === 'All' || p.category === category
      const priceOk = p.price >= range.min && p.price <= range.max
      const matOk = material === 'All' || p.material === material
      return catOk && priceOk && matOk
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
  }, [category, price, material, sort])

  const catOptions = ['All', ...categories.map((c) => c.name)]

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-gold">Category</h3>
        <ul className="mt-4 space-y-2">
          {catOptions.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => setCategoryParam(c)}
                className={cn(
                  'text-sm transition-colors',
                  category === c ? 'text-ink' : 'text-muted hover:text-charcoal',
                )}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-gold">Price</h3>
        <ul className="mt-4 space-y-2">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPrice(r.id)}
                className={cn(
                  'text-sm transition-colors',
                  price === r.id ? 'text-ink' : 'text-muted hover:text-charcoal',
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-gold">Material</h3>
        <ul className="mt-4 space-y-2">
          {['All', ...MATERIALS].map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setMaterial(m)}
                className={cn(
                  'text-sm transition-colors',
                  material === m ? 'text-ink' : 'text-muted hover:text-charcoal',
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
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      {/* Header */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center md:px-10 md:py-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">
            {category === 'All' ? 'All Jewelry' : category}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-[11px] uppercase tracking-widest3 text-ink md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
              <p className="hidden text-[11px] uppercase tracking-widest3 text-muted md:block">
                {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-[11px] uppercase tracking-widest3 text-muted">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border-b border-line bg-transparent py-1 text-sm text-charcoal focus:border-gold focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
                <p className="font-serif text-2xl text-charcoal">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={() => {
                    setCategoryParam('All')
                    setPrice('all')
                    setMaterial('All')
                  }}
                  className="mt-4 text-[11px] uppercase tracking-widest3 text-gold"
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
        <div className="fixed inset-0 z-[80] md:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">Filters</h2>
              <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="h-5 w-5 text-ink" />
              </button>
            </div>
            <div className="mt-6">{FilterPanel}</div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold px-8 py-4 text-[11px] uppercase tracking-widest3 text-ink"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
