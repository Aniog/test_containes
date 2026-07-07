import React, { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Check } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/hooks/useStrkImages'
import { cn } from '@/lib/utils'

const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
const MATERIALS = ['Gold', 'Silver']
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
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useStrkImages([])

  const initialCategory = searchParams.get('category') || ''
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMats, setSelectedMats] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL when it changes
  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((current) =>
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (
        selectedMats.length &&
        !p.tone.some((t) => selectedMats.includes(t))
      )
        return false
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const bucket = PRICE_BUCKETS.find((b) => b.id === id)
          if (!bucket) return false
          return p.price >= bucket.min && p.price < bucket.max
        })
        if (!matches) return false
      }
      return true
    })

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
  }, [selectedCats, selectedMats, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedMats([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const activeCount =
    selectedCats.length + selectedMats.length + selectedPrices.length

  const FilterPanel = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-ink">
          Category
        </h3>
        <ul className="mt-4 space-y-2.5">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => toggle(selectedCats, setSelectedCats, cat)}
                className="flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                <span
                  className={cn(
                    'flex h-4 w-4 items-center justify-center border',
                    selectedCats.includes(cat)
                      ? 'border-gold bg-gold text-ivory'
                      : 'border-sand'
                  )}
                >
                  {selectedCats.includes(cat) && (
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  )}
                </span>
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-ink">
          Material
        </h3>
        <ul className="mt-4 space-y-2.5">
          {MATERIALS.map((mat) => (
            <li key={mat}>
              <button
                type="button"
                onClick={() => toggle(selectedMats, setSelectedMats, mat)}
                className="flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                <span
                  className={cn(
                    'flex h-4 w-4 items-center justify-center border',
                    selectedMats.includes(mat)
                      ? 'border-gold bg-gold text-ivory'
                      : 'border-sand'
                  )}
                >
                  {selectedMats.includes(mat) && (
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  )}
                </span>
                {mat} Tone
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-ink">Price</h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_BUCKETS.map((bucket) => (
            <li key={bucket.id}>
              <button
                type="button"
                onClick={() =>
                  toggle(selectedPrices, setSelectedPrices, bucket.id)
                }
                className="flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                <span
                  className={cn(
                    'flex h-4 w-4 items-center justify-center border',
                    selectedPrices.includes(bucket.id)
                      ? 'border-gold bg-gold text-ivory'
                      : 'border-sand'
                  )}
                >
                  {selectedPrices.includes(bucket.id) && (
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  )}
                </span>
                {bucket.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.2em] text-gold underline-offset-4 hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-ivory pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="mx-auto max-w-8xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop All Jewelry
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Demi-fine 18K gold plated pieces, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-5 py-10 md:px-8">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 flex-shrink-0 md:block">
            <div className="sticky top-28">
              <div className="mb-6 flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-ink" strokeWidth={1.5} />
                <h2 className="text-[11px] uppercase tracking-[0.25em] text-ink">
                  Filters
                </h2>
              </div>
              {FilterPanel}
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-ink md:hidden"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
                Filters
                {activeCount > 0 && (
                  <span className="bg-gold px-1.5 text-[10px] text-ivory">
                    {activeCount}
                  </span>
                )}
              </button>
              <p className="hidden text-sm text-stone md:block">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-[11px] uppercase tracking-[0.2em] text-stone">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-sand bg-ivory px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
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
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 border border-ink px-8 py-3 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:bg-ink hover:text-ivory"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
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
        <div className="fixed inset-0 z-[80] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-ivory p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            {FilterPanel}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 text-[11px] uppercase tracking-[0.25em] text-ivory"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
