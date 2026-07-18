import { useMemo, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const PRICE_BUCKETS = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 49 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 81, max: Infinity },
]

const MATERIALS = ['18K Gold Plated', 'Crystal Accent', 'Multicolor Crystal', 'Textured Filigree', 'Gift Boxed']

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const initialCategory = searchParams.get('category') || 'all'
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setCategory(searchParams.get('category') || 'all')
  }, [searchParams])

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, price, material, sort])

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      const bucket = PRICE_BUCKETS.find((b) => b.id === price)
      if (bucket && (p.price < bucket.min || p.price > bucket.max)) return false
      if (material !== 'all' && !p.materials.includes(material)) return false
      return true
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

  const updateCategory = (val) => {
    setCategory(val)
    if (val === 'all') {
      searchParams.delete('category')
      setSearchParams(searchParams, { replace: true })
    } else {
      setSearchParams({ category: val }, { replace: true })
    }
  }

  const resetFilters = () => {
    setCategory('all')
    setPrice('all')
    setMaterial('all')
    setSearchParams({}, { replace: true })
  }

  const FilterPanel = () => (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-charcoal mb-4">Category</h3>
        <ul className="space-y-2.5">
          <li>
            <FilterRadio label="All" checked={category === 'all'} onChange={() => updateCategory('all')} />
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <FilterRadio label={c.name} checked={category === c.id} onChange={() => updateCategory(c.id)} />
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-charcoal mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <FilterRadio label={b.label} checked={price === b.id} onChange={() => setPrice(b.id)} />
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-charcoal mb-4">Material</h3>
        <ul className="space-y-2.5">
          <li>
            <FilterRadio label="All" checked={material === 'all'} onChange={() => setMaterial('all')} />
          </li>
          {MATERIALS.map((m) => (
            <li key={m}>
              <FilterRadio label={m} checked={material === m} onChange={() => setMaterial(m)} />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={resetFilters}
        className="text-[11px] uppercase tracking-[0.18em] text-stone hover:text-gold transition-colors border-b border-hairline hover:border-gold pb-1"
      >
        Reset Filters
      </button>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Header */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-8xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            {category === 'all' ? 'All Jewelry' : CATEGORIES.find((c) => c.id === category)?.name}
          </h1>
          <p className="mt-4 text-stone max-w-xl mx-auto">
            Demi-fine gold pieces, hand-finished and made to be worn every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-6 md:px-10 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-charcoal"
              >
                <SlidersHorizontal size={15} strokeWidth={1.5} />
                Filters
              </button>
              <p className="hidden md:block text-xs text-stone uppercase tracking-[0.15em]">
                {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-hairline text-xs uppercase tracking-[0.15em] text-charcoal pl-4 pr-9 py-2.5 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink mb-3">No pieces match your filters</p>
                <p className="text-stone mb-6">Try adjusting or resetting your selection.</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.18em] bg-gold text-cream hover:bg-[#9a763f] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-overlay-in" onClick={() => setMobileFiltersOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-cream shadow-card animate-drawer-in flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters" className="text-charcoal hover:text-gold">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterPanel />
            </div>
            <div className="px-6 py-5 border-t border-hairline">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.18em] bg-gold text-cream hover:bg-[#9a763f] transition-colors"
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

function FilterRadio({ label, checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex items-center gap-3 text-sm text-left w-full group"
    >
      <span
        className={cn(
          'w-4 h-4 rounded-full border flex items-center justify-center transition-colors',
          checked ? 'border-gold' : 'border-hairline group-hover:border-gold'
        )}
      >
        {checked && <span className="w-2 h-2 rounded-full bg-gold" />}
      </span>
      <span className={cn('transition-colors', checked ? 'text-ink' : 'text-stone group-hover:text-charcoal')}>
        {label}
      </span>
    </button>
  )
}
