import { useMemo, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const PRICE_BUCKETS = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over75', label: 'Over $75', min: 75, max: Infinity },
]

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get('category') || ''
  const [selectedCats, setSelectedCats] = useState(initialCategory ? [initialCategory] : [])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCats, selectedPrices, selectedMaterials])

  // Sync category from URL when it changes
  useEffect(() => {
    const cat = params.get('category') || ''
    setSelectedCats(cat ? [cat] : [])
  }, [params])

  const toggle = (list, setList, value) => {
    setList((cur) => (cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]))
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false
      if (selectedPrices.length) {
        const match = selectedPrices.some((id) => {
          const b = PRICE_BUCKETS.find((x) => x.id === id)
          return b && p.price >= b.min && p.price < b.max
        })
        if (!match) return false
      }
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
  }, [selectedCats, selectedPrices, selectedMaterials, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setParams({})
  }

  const FilterPanel = () => (
    <div className="space-y-10">
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink mb-4">Category</h3>
        <ul className="space-y-2.5">
          {categories.map((c) => (
            <li key={c.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCats.includes(c.slug)}
                  onChange={() => toggle(selectedCats, setSelectedCats, c.slug)}
                  className="accent-gold w-4 h-4"
                />
                <span className="text-sm text-charcoal font-light group-hover:text-gold transition-colors">
                  {c.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(b.id)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
                  className="accent-gold w-4 h-4"
                />
                <span className="text-sm text-charcoal font-light group-hover:text-gold transition-colors">
                  {b.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink mb-4">Material</h3>
        <ul className="space-y-2.5">
          <li>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMaterials.includes('18K Gold Plated')}
                onChange={() => toggle(selectedMaterials, setSelectedMaterials, '18K Gold Plated')}
                className="accent-gold w-4 h-4"
              />
              <span className="text-sm text-charcoal font-light group-hover:text-gold transition-colors">
                18K Gold Plated
              </span>
            </label>
          </li>
        </ul>
      </div>

      {(selectedCats.length || selectedPrices.length || selectedMaterials.length) > 0 && (
        <button
          onClick={clearAll}
          className="text-[10px] uppercase tracking-[0.2em] text-muted hover:text-gold transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-24 md:pt-28 pb-20 bg-ivory min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 text-center border-b border-sand">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
          The Collection
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink">Shop All</h1>
        <p className="mt-4 text-sm text-muted font-light max-w-xl mx-auto">
          Demi-fine 18K gold plated jewelry, crafted to be treasured.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 mt-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block">
          <FilterPanel />
        </aside>

        {/* Main */}
        <div>
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-charcoal"
            >
              <SlidersHorizontal width={15} height={15} strokeWidth={1.5} />
              Filters
            </button>
            <p className="hidden md:block text-sm text-muted font-light">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
            <div className="flex items-center gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted hidden sm:block">
                Sort
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border border-sand px-3 py-2 text-xs text-charcoal focus:outline-none focus:border-gold cursor-pointer"
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
              <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
              <button
                onClick={clearAll}
                className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold underline"
              >
                Clear filters
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

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] md:hidden transition-opacity duration-300',
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={cn(
            'absolute left-0 top-0 h-full w-[80%] max-w-xs bg-ivory p-8 overflow-y-auto transition-transform duration-300',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-ink">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters" className="text-charcoal">
              <X width={22} height={22} strokeWidth={1.5} />
            </button>
          </div>
          <FilterPanel />
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-10 w-full bg-ink text-ivory py-4 text-[11px] uppercase tracking-[0.2em]"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </div>
    </div>
  )
}
