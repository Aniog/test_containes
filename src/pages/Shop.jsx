import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useImageLoader } from '@/hooks/useImageLoader'
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
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]

const MATERIALS = ['Gold', 'Silver']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useImageLoader([searchParams.toString()])

  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const c = searchParams.get('category') || 'All'
    setCategory(c)
  }, [searchParams])

  const setCategoryParam = (c) => {
    setCategory(c)
    if (c === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', c)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === price)
    let list = products.filter((p) => {
      if (category !== 'All' && p.category !== category) return false
      if (range && (p.price < range.min || p.price > range.max)) return false
      if (material !== 'All' && !p.variants.includes(material)) return false
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

  const allCats = ['All', ...categories.map((c) => c.id)]

  const FilterPanel = (
    <div className="space-y-10">
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink font-semibold mb-4">Category</h3>
        <ul className="space-y-2.5">
          {allCats.map((c) => (
            <li key={c}>
              <button
                onClick={() => setCategoryParam(c)}
                className={cn(
                  'text-sm transition-colors',
                  category === c ? 'text-gold font-medium' : 'text-muted hover:text-ink'
                )}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink font-semibold mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                onClick={() => setPrice(r.id)}
                className={cn(
                  'text-sm transition-colors',
                  price === r.id ? 'text-gold font-medium' : 'text-muted hover:text-ink'
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink font-semibold mb-4">Material</h3>
        <ul className="space-y-2.5">
          {['All', ...MATERIALS].map((m) => (
            <li key={m}>
              <button
                onClick={() => setMaterial(m)}
                className={cn(
                  'text-sm transition-colors',
                  material === m ? 'text-gold font-medium' : 'text-muted hover:text-ink'
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
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20 bg-ivory min-h-screen">
      {/* Header */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 pt-8 pb-10 text-center border-b border-sand">
        <p className="text-xs uppercase tracking-widest2 text-gold mb-3">The Collection</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink">Shop All Jewelry</h1>
        <p className="text-sm text-muted mt-4 max-w-md mx-auto">
          Demi-fine gold pieces, hand-finished and made to be worn every day.
        </p>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-10 pt-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
              >
                <SlidersHorizontal size={16} /> Filters
              </button>
              <p className="hidden md:block text-xs uppercase tracking-widest2 text-muted">
                {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs uppercase tracking-widest2 text-muted hidden sm:block">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs uppercase tracking-widest2 text-ink bg-transparent border border-sand px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
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
                <p className="font-serif text-3xl text-ink">No pieces match your filters</p>
                <button
                  onClick={() => {
                    setCategoryParam('All')
                    setPrice('all')
                    setMaterial('All')
                  }}
                  className="mt-6 text-xs uppercase tracking-widest2 text-gold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
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
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-80 max-w-[85%] bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={22} className="text-ink" />
              </button>
            </div>
            {FilterPanel}
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold text-ink text-xs uppercase tracking-widest2 font-semibold py-4"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
