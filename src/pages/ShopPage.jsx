import { useMemo, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const MATERIALS = ['Gold', 'Silver']
const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
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

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'

  const [category, setCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  )
  const [material, setMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, material, priceRange, sort])

  // Sync category from URL when it changes (e.g. nav clicks)
  useEffect(() => {
    const cat = searchParams.get('category') || 'All'
    if (CATEGORIES.includes(cat)) setCategory(cat)
  }, [searchParams])

  const updateCategory = (cat) => {
    setCategory(cat)
    const next = new URLSearchParams(searchParams)
    if (cat === 'All') next.delete('category')
    else next.set('category', cat)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceRange) || PRICE_RANGES[0]
    let list = products.filter((p) => {
      const catMatch = category === 'All' || p.category === category
      const matMatch =
        material === 'All' || p.tones.includes(material)
      const priceMatch = p.price >= range.min && p.price < range.max
      return catMatch && matMatch && priceMatch
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
  }, [category, material, priceRange, sort])

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">Category</h3>
        <ul className="space-y-2.5">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => updateCategory(cat)}
                className="text-sm transition-colors"
                style={{
                  color: category === cat ? '#1A1714' : '#6B6258',
                  fontWeight: category === cat ? 500 : 400,
                }}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">Material</h3>
        <ul className="space-y-2.5">
          {['All', ...MATERIALS].map((mat) => (
            <li key={mat}>
              <button
                type="button"
                onClick={() => setMaterial(mat)}
                className="text-sm transition-colors"
                style={{
                  color: material === mat ? '#1A1714' : '#6B6258',
                  fontWeight: material === mat ? 500 : 400,
                }}
              >
                {mat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPriceRange(r.id)}
                className="text-sm transition-colors"
                style={{
                  color: priceRange === r.id ? '#1A1714' : '#6B6258',
                  fontWeight: priceRange === r.id ? 500 : 400,
                }}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-widest2 text-champagne-deep mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">Shop All Jewelry</h1>
          <p className="mt-4 text-stone max-w-lg mx-auto">
            Demi-fine gold, designed in studio and made for the everyday.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest3 text-ink"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              <p className="hidden md:block text-xs uppercase tracking-widest3 text-stone">
                {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs uppercase tracking-widest3 text-stone">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-line text-sm text-ink px-3 py-2 focus:outline-none focus:border-champagne transition-colors"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id} className="bg-cream text-ink">
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <p className="mt-2 text-stone text-sm">Try adjusting your selection.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
            className="absolute inset-0 bg-ink/40 animate-overlay-in"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl flex flex-col animate-drawer-in" style={{ animationName: 'velmora-overlay-in' }}>
            <div className="flex items-center justify-between px-6 py-5 border-b border-line">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-champagne-deep"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
            <div className="px-6 py-5 border-t border-line">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3.5 text-xs uppercase tracking-widest2 bg-ink text-cream hover:bg-champagne-deep transition-colors"
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
