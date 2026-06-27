import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const CATEGORY_OPTIONS = ['Earrings', 'Necklaces', 'Huggies']
const MATERIAL_OPTIONS = ['18K Gold Plated']
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
  const ref = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const selectedCategories = searchParams.get('category')
    ? [searchParams.get('category')]
    : []
  const selectedPrice = searchParams.get('price') || ''
  const sort = searchParams.get('sort') || 'featured'

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next, { replace: true })
  }

  const toggleCategory = (cat) => {
    const next = new URLSearchParams(searchParams)
    const current = next.get('category')
    if (current === cat) next.delete('category')
    else next.set('category', cat)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = [...products]
    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedPrice) {
      const bucket = PRICE_BUCKETS.find((b) => b.id === selectedPrice)
      if (bucket) {
        list = list.filter((p) => p.price >= bucket.min && p.price < bucket.max)
      }
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
  }, [selectedCategories, selectedPrice, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filtered])

  const clearAll = () => {
    setSearchParams({}, { replace: true })
  }

  const hasFilters = selectedCategories.length > 0 || selectedPrice

  const FilterPanel = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-deep">
          Category
        </h3>
        <ul className="space-y-3">
          {CATEGORY_OPTIONS.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => toggleCategory(cat)}
                className="flex items-center gap-3 text-sm text-stone-muted transition-colors hover:text-stone-deep"
              >
                <span
                  className={`flex h-4 w-4 items-center justify-center border transition-colors ${
                    selectedCategories.includes(cat)
                      ? 'border-gold-deep bg-gold'
                      : 'border-stone-deep/30'
                  }`}
                >
                  {selectedCategories.includes(cat) && (
                    <span className="h-2 w-2 bg-espresso" />
                  )}
                </span>
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-deep">
          Price
        </h3>
        <ul className="space-y-3">
          {PRICE_BUCKETS.map((bucket) => (
            <li key={bucket.id}>
              <button
                onClick={() =>
                  updateParam('price', selectedPrice === bucket.id ? '' : bucket.id)
                }
                className="flex items-center gap-3 text-sm text-stone-muted transition-colors hover:text-stone-deep"
              >
                <span
                  className={`flex h-4 w-4 items-center justify-center border transition-colors ${
                    selectedPrice === bucket.id
                      ? 'border-gold-deep bg-gold'
                      : 'border-stone-deep/30'
                  }`}
                >
                  {selectedPrice === bucket.id && (
                    <span className="h-2 w-2 bg-espresso" />
                  )}
                </span>
                {bucket.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-deep">
          Material
        </h3>
        <ul className="space-y-3">
          {MATERIAL_OPTIONS.map((mat) => (
            <li key={mat}>
              <span className="flex items-center gap-3 text-sm text-stone-muted">
                <span className="flex h-4 w-4 items-center justify-center border border-gold-deep bg-gold">
                  <span className="h-2 w-2 bg-espresso" />
                </span>
                {mat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-xs uppercase tracking-[0.15em] text-gold-deep underline-offset-4 hover:underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="bg-stone pt-24">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 py-10 text-center md:px-10 md:py-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl text-stone-deep md:text-5xl">
          Shop All Jewelry
        </h1>
        <div className="mx-auto mt-5 h-px w-16 bg-gold/40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between border-y border-stone-deep/10 py-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-deep md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
            Filters
          </button>
          <p className="hidden text-xs uppercase tracking-[0.15em] text-stone-muted md:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-stone-deep"
            >
              Sort: {SORT_OPTIONS.find((o) => o.id === sort)?.label}
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setSortOpen(false)}
                />
                <ul className="absolute right-0 z-20 mt-2 w-52 border border-stone-deep/10 bg-stone py-2 shadow-lg">
                  {SORT_OPTIONS.map((opt) => (
                    <li key={opt.id}>
                      <button
                        onClick={() => {
                          updateParam('sort', opt.id === 'featured' ? '' : opt.id)
                          setSortOpen(false)
                        }}
                        className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-stone-deep/5 ${
                          sort === opt.id ? 'text-gold-deep' : 'text-stone-deep'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                <p className="font-serif text-2xl text-stone-deep">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearAll}
                  className="border border-gold-deep bg-gold px-8 py-3 text-xs uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-gold-soft"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:gap-x-6">
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
            className="absolute inset-0 bg-espresso-deep/60 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-stone p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-2xl text-stone-deep">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-stone-deep"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            {FilterPanel}
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 text-xs uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-gold-soft"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
