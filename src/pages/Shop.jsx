import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Check } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/lib/strk-images'
import { cn } from '@/lib/utils'

const CATEGORY_OPTIONS = ['Earrings', 'Necklaces', 'Huggies']
const MATERIAL_OPTIONS = ['Gold', 'Silver']
const PRICE_BUCKETS = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const [categories, setCategories] = useState(() => {
    const c = searchParams.get('category')
    return c ? [c] : []
  })
  const [materials, setMaterials] = useState([])
  const [priceBuckets, setPriceBuckets] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL (e.g. /shop?category=Earrings)
  useEffect(() => {
    const c = searchParams.get('category')
    setCategories(c ? [c] : [])
  }, [searchParams])

  const toggle = (setter, value, current) => {
    setter(current.includes(value) ? current.filter((v) => v !== value) : [...current, value])
  }

  const clearAll = () => {
    setCategories([])
    setMaterials([])
    setPriceBuckets([])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false
      if (materials.length && !materials.some((m) => p.variants.includes(m))) return false
      if (priceBuckets.length) {
        const matches = priceBuckets.some((bid) => {
          const bucket = PRICE_BUCKETS.find((b) => b.id === bid)
          return bucket && p.price >= bucket.min && p.price < bucket.max
        })
        if (!matches) return false
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
  }, [categories, materials, priceBuckets, sort])

  const hasFilters = categories.length || materials.length || priceBuckets.length

  const FilterContent = () => (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink mb-4">Category</h3>
        <div className="space-y-3">
          {CATEGORY_OPTIONS.map((c) => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  categories.includes(c) ? 'bg-ink border-ink' : 'border-ink/30 group-hover:border-ink'
                )}
              >
                {categories.includes(c) && <Check className="w-3 h-3 text-cream" strokeWidth={3} />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={categories.includes(c)}
                onChange={() => toggle(setCategories, c, categories)}
              />
              <span className="text-sm text-ink">{c}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink mb-4">Material</h3>
        <div className="space-y-3">
          {MATERIAL_OPTIONS.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  materials.includes(m) ? 'bg-ink border-ink' : 'border-ink/30 group-hover:border-ink'
                )}
              >
                {materials.includes(m) && <Check className="w-3 h-3 text-cream" strokeWidth={3} />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={materials.includes(m)}
                onChange={() => toggle(setMaterials, m, materials)}
              />
              <span className="text-sm text-ink">{m} Tone</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink mb-4">Price</h3>
        <div className="space-y-3">
          {PRICE_BUCKETS.map((b) => (
            <label key={b.id} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  priceBuckets.includes(b.id) ? 'bg-ink border-ink' : 'border-ink/30 group-hover:border-ink'
                )}
              >
                {priceBuckets.includes(b.id) && <Check className="w-3 h-3 text-cream" strokeWidth={3} />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={priceBuckets.includes(b.id)}
                onChange={() => toggle(setPriceBuckets, b.id, priceBuckets)}
              />
              <span className="text-sm text-ink">{b.label}</span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters ? (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs text-stone underline underline-offset-2 hover:text-ink transition-colors"
        >
          Clear all filters
        </button>
      ) : null}
    </div>
  )

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-10 md:py-14 text-center border-b border-ink/10">
        <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-3">The Collection</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink">Shop All Jewelry</h1>
        <p className="mt-4 text-stone max-w-xl mx-auto">
          Demi-fine gold pieces, designed to be worn and re-worn. Find your everyday heirloom.
        </p>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <FilterContent />
        </aside>

        {/* Main */}
        <div>
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-ink border border-ink/25 px-4 py-2.5"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <p className="text-sm text-stone hidden lg:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
            <div className="flex items-center gap-3">
              <label className="text-[11px] uppercase tracking-[0.2em] text-stone hidden sm:block">Sort</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-cream border border-ink/20 text-sm text-ink px-4 py-2.5 focus:outline-none focus:border-champagne transition-colors"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.id} value={o.id}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-4 text-[11px] uppercase tracking-[0.2em] font-medium text-ink border-b border-ink/30 pb-1 hover:text-champagne hover:border-champagne transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-ink/40 animate-overlay-in" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-cream shadow-soft-lg animate-slide-in flex flex-col" style={{ animationName: 'velmora-slide-in', transform: 'translateX(0)' }}>
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-champagne transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterContent />
            </div>
            <div className="px-6 py-5 border-t border-ink/10">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-ink text-cream text-[11px] uppercase tracking-[0.2em] font-semibold py-4 hover:bg-espresso transition-colors"
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
