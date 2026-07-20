import { useEffect, useMemo, useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories, formatPrice } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

const PRICE_BUCKETS = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const initialCategory = params.get('category') || ''
  const initialQuery = params.get('q') || ''

  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [query] = useState(initialQuery)

  useEffect(() => {
    const cat = params.get('category') || ''
    setSelectedCats(cat ? [cat] : [])
  }, [params])

  const toggle = (list, setter, value) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let list = [...products]

    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      )
    }

    if (selectedCats.length) {
      list = list.filter((p) => selectedCats.includes(p.category))
    }

    if (selectedPrices.length) {
      list = list.filter((p) =>
        selectedPrices.some((id) => {
          const b = PRICE_BUCKETS.find((x) => x.id === id)
          return b && p.price >= b.min && p.price < b.max
        })
      )
    }

    if (selectedMaterials.length) {
      list = list.filter((p) =>
        selectedMaterials.some((m) => p.variants.includes(m))
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
  }, [query, selectedCats, selectedPrices, selectedMaterials, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setParams({})
  }

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink font-medium mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {categories.map((c) => (
            <li key={c.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCats.includes(c.id)}
                  onChange={() => toggle(selectedCats, setSelectedCats, c.id)}
                  className="accent-champagne w-4 h-4"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {c.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink font-medium mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(b.id)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
                  className="accent-champagne w-4 h-4"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {b.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink font-medium mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {['Gold', 'Silver'].map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m)}
                  onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
                  className="accent-champagne w-4 h-4"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {m} Tone
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={clearAll}
        className="text-[11px] uppercase tracking-widest2 text-taupe hover:text-champagne transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory min-h-screen">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            {query ? `Results for “${query}”` : 'Shop All Jewelry'}
          </h1>
          <p className="mt-4 text-sm text-stone max-w-md mx-auto">
            Demi-fine 18K gold plated pieces, crafted to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
              >
                <SlidersHorizontal size={15} /> Filters
              </button>
              <p className="hidden md:block text-xs uppercase tracking-widest2 text-stone">
                {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-[11px] uppercase tracking-widest2 text-taupe">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border-b border-sand text-sm text-ink py-1 pr-6 focus:outline-none focus:border-champagne cursor-pointer"
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
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-xs uppercase tracking-widest2 text-champagne hover:text-champagne-deep"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-cream shadow-soft animate-drawer-in p-6 overflow-y-auto" style={{ animationName: 'velmora-fade-in' }}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-ink">Filters</h2>
              <button
                type="button"
                aria-label="Close filters"
                onClick={() => setMobileFiltersOpen(false)}
                className="text-stone hover:text-ink"
              >
                <X size={22} />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-champagne text-ivory hover:bg-champagne-deep transition-colors py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
            >
              Show {filtered.length} Results
            </button>
          </aside>
        </div>
      )}
    </div>
  )
}
