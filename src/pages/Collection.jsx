import React, { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/lib/useStrkImages'

const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies']
const MATERIALS = ['18K Gold Plated']
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

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useStrkImages([searchParams.toString()])

  const initialCategory = searchParams.get('category') || ''
  const initialQuery = searchParams.get('q') || ''

  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [query, setQuery] = useState(initialQuery)

  // Sync category from URL when it changes
  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCats(cat ? [cat] : [])
    setQuery(searchParams.get('q') || '')
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((current) =>
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    )
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCats.length) {
      result = result.filter((p) => selectedCats.includes(p.category))
    }
    if (selectedMats.length) {
      result = result.filter((p) => selectedMats.includes(p.material))
    }
    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((id) => {
          const bucket = PRICE_BUCKETS.find((b) => b.id === id)
          return bucket && p.price >= bucket.min && p.price < bucket.max
        })
      )
    }
    if (query) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
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
  }, [selectedCats, selectedMats, selectedPrices, query, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMats([])
    setQuery('')
    setSearchParams({})
  }

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCats.includes(cat)}
                  onChange={() => toggle(selectedCats, setSelectedCats, cat)}
                  className="accent-gold w-4 h-4"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {cat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((bucket) => (
            <li key={bucket.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(bucket.id)}
                  onChange={() =>
                    toggle(selectedPrices, setSelectedPrices, bucket.id)
                  }
                  className="accent-gold w-4 h-4"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {bucket.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((mat) => (
            <li key={mat}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedMats.includes(mat)}
                  onChange={() => toggle(selectedMats, setSelectedMats, mat)}
                  className="accent-gold w-4 h-4"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {mat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={clearAll}
        className="text-xs uppercase tracking-widest2 text-stone underline underline-offset-4 hover:text-ink transition-colors"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-28 md:pt-32">
      {/* Header */}
      <div className="container-velmora pb-8 md:pb-12 text-center">
        <p className="eyebrow mb-3">The Collection</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink">
          Shop All Jewelry
        </h1>
        <p className="mt-4 text-stone max-w-xl mx-auto">
          Demi-fine gold pieces, hand-finished and made to be worn every day.
        </p>
      </div>

      <div className="container-velmora pb-20">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
              >
                <SlidersHorizontal size={16} /> Filters
              </button>
              <p className="hidden md:block text-sm text-stone">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs uppercase tracking-widest2 text-stone">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-line text-sm text-ink px-3 py-2 outline-none focus:border-ink transition-colors"
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
                <p className="font-serif text-2xl text-ink">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearAll}
                  className="btn-outline mt-6 inline-flex"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
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
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X size={22} />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-primary w-full mt-8"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
