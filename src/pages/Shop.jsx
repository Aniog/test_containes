import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

const CATEGORY_OPTIONS = ['Earrings', 'Necklaces', 'Huggies']
const MATERIAL_OPTIONS = ['18K Gold Plated']
const PRICE_RANGES = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to100', label: '$50 – $100', min: 50, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
]
const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    setSelectedCategories(cat ? [cat] : [])
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategories, selectedPrice, selectedMaterial, sort])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const toggleMaterial = (m) => {
    setSelectedMaterial((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    )
  }

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrice(null)
    setSelectedMaterial([])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let result = [...products]
    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedPrice) {
      const range = PRICE_RANGES.find((r) => r.id === selectedPrice)
      if (range) result = result.filter((p) => p.price >= range.min && p.price < range.max)
    }
    if (selectedMaterial.length) {
      result = result.filter((p) => selectedMaterial.includes(p.material))
    }
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [selectedCategories, selectedPrice, selectedMaterial, sort])

  const hasFilters =
    selectedCategories.length > 0 || selectedPrice || selectedMaterial.length > 0

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] font-medium uppercase tracking-widest2 text-ink">
          Category
        </h3>
        <div className="mt-4 space-y-3">
          {CATEGORY_OPTIONS.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'flex h-4 w-4 items-center justify-center border transition-colors',
                  selectedCategories.includes(cat)
                    ? 'border-gold bg-gold'
                    : 'border-ink/30 group-hover:border-ink'
                )}
              >
                {selectedCategories.includes(cat) && (
                  <span className="h-1.5 w-1.5 bg-ink" />
                )}
              </span>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="sr-only"
              />
              <span className="text-sm text-ink">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[11px] font-medium uppercase tracking-widest2 text-ink">
          Price
        </h3>
        <div className="mt-4 space-y-3">
          {PRICE_RANGES.map((r) => (
            <label key={r.id} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'flex h-4 w-4 items-center justify-center border transition-colors',
                  selectedPrice === r.id
                    ? 'border-gold bg-gold'
                    : 'border-ink/30 group-hover:border-ink'
                )}
              >
                {selectedPrice === r.id && <span className="h-1.5 w-1.5 bg-ink" />}
              </span>
              <input
                type="radio"
                name="price"
                checked={selectedPrice === r.id}
                onChange={() => setSelectedPrice(r.id)}
                className="sr-only"
              />
              <span className="text-sm text-ink">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[11px] font-medium uppercase tracking-widest2 text-ink">
          Material
        </h3>
        <div className="mt-4 space-y-3">
          {MATERIAL_OPTIONS.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'flex h-4 w-4 items-center justify-center border transition-colors',
                  selectedMaterial.includes(m)
                    ? 'border-gold bg-gold'
                    : 'border-ink/30 group-hover:border-ink'
                )}
              >
                {selectedMaterial.includes(m) && <span className="h-1.5 w-1.5 bg-ink" />}
              </span>
              <input
                type="checkbox"
                checked={selectedMaterial.includes(m)}
                onChange={() => toggleMaterial(m)}
                className="sr-only"
              />
              <span className="text-sm text-ink">{m}</span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] font-medium uppercase tracking-widest2 text-gold hover:text-ink"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="bg-cream pt-28 md:pt-32">
      {/* Header */}
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="border-b border-ink/10 pb-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-5xl font-light text-ink md:text-6xl">
            Shop All
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Demi-fine gold jewelry, hand-finished and made to be lived in.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-60 shrink-0 md:block">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 border-b border-ink/10 pb-4">
                <SlidersHorizontal className="h-4 w-4 text-gold" strokeWidth={1.5} />
                <h2 className="text-xs font-medium uppercase tracking-widest2 text-ink">
                  Filters
                </h2>
              </div>
              <div className="pt-6">{FilterPanel}</div>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-[11px] font-medium uppercase tracking-widest2 text-ink md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
                Filters
              </button>
              <p className="hidden text-sm text-stone md:block">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-3">
                <label className="text-[11px] font-medium uppercase tracking-widest2 text-stone">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-ink/20 bg-cream px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="text-sm text-stone">Try adjusting your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-2 bg-gold px-7 py-3.5 text-xs font-medium uppercase tracking-widest2 text-ink hover:bg-gold-soft"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8">
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
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <h2 className="font-serif text-xl uppercase tracking-widest2 text-ink">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-gold"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="pt-6">{FilterPanel}</div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 text-xs font-medium uppercase tracking-widest2 text-ink hover:bg-gold-soft"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
