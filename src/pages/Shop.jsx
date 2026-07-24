import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies']
const MATERIALS = ['Gold', 'Silver']
const PRICE_RANGES = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to100', label: '$50 – $100', min: 50, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
]
const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef(null)

  const initialCategory = searchParams.get('category') || ''
  const initialQuery = searchParams.get('q') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [query, setQuery] = useState(initialQuery)

  // Sync category from URL when it changes
  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCategories(cat ? [cat] : [])
    setQuery(searchParams.get('q') || '')
  }, [searchParams])

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [searchParams.toString()])

  const toggle = (value, list, setter) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => p.featured)

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => p.variants.some((v) => selectedMaterials.includes(v)))
    }
    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((id) => {
          const range = PRICE_RANGES.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
        })
      )
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      )
    }

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [selectedCategories, selectedMaterials, selectedPrices, sort, query])

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + selectedPrices.length

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium mb-4">Category</h3>
        <div className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(c)}
                onChange={() => toggle(c, selectedCategories, setSelectedCategories)}
                className="h-4 w-4 accent-gold border-sand"
              />
              <span className="text-sm text-stone group-hover:text-charcoal transition-colors">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium mb-4">Material</h3>
        <div className="space-y-2.5">
          {MATERIALS.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(m)}
                onChange={() => toggle(m, selectedMaterials, setSelectedMaterials)}
                className="h-4 w-4 accent-gold border-sand"
              />
              <span className="text-sm text-stone group-hover:text-charcoal transition-colors">{m} Tone</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium mb-4">Price</h3>
        <div className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <label key={r.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPrices.includes(r.id)}
                onChange={() => toggle(r.id, selectedPrices, setSelectedPrices)}
                className="h-4 w-4 accent-gold border-sand"
              />
              <span className="text-sm text-stone group-hover:text-charcoal transition-colors">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearAll}
          className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-deep transition-colors"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory min-h-screen">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="mx-auto max-w-8xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal">
            {selectedCategories.length === 1 ? selectedCategories[0] : 'All Jewelry'}
          </h1>
          <p className="mt-4 text-sm text-stone max-w-md mx-auto">
            Demi-fine gold pieces, hand-finished and made to be treasured.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 md:px-10 py-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal"
              >
                <SlidersHorizontal size={15} strokeWidth={1.5} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-gold text-ink rounded-full px-1.5 text-[10px]">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <p className="hidden md:block text-sm text-stone">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-sand pl-4 pr-9 py-2.5 text-xs uppercase tracking-[0.15em] text-charcoal focus:outline-none focus:border-gold cursor-pointer"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  strokeWidth={1.5}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone"
                />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-charcoal">No pieces match your selection.</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-deep"
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
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-ink/40 animate-overlay-in" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-ivory shadow-card animate-slide-in-right p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters" className="text-ink">
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold text-ink py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-deep hover:text-ivory transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
