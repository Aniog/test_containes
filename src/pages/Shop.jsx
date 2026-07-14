import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/lib/strk-image'
import { cn } from '@/lib/utils'

const categoryOptions = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]
const materialOptions = ['18K Gold Plated']

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL when it changes (e.g. nav clicks)
  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCategories(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((current) =>
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false
      if (selectedPrices.length) {
        const inRange = selectedPrices.some((key) => {
          const range = priceRanges.find((r) => r.label === key)
          if (!range) return true
          return p.price >= range.min && p.price < range.max
        })
        if (!inRange) return false
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sort])

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const hasFilters =
    selectedCategories.length || selectedPrices.length || selectedMaterials.length

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {categoryOptions.map((c) => (
            <li key={c}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(c)}
                  onChange={() => toggle(selectedCategories, setSelectedCategories, c)}
                  className="w-4 h-4 accent-gold border-champagne"
                />
                <span className="text-sm text-charcoal group-hover:text-ink transition-colors">
                  {c}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {priceRanges.map((r) => (
            <li key={r.label}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(r.label)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, r.label)}
                  className="w-4 h-4 accent-gold border-champagne"
                />
                <span className="text-sm text-charcoal group-hover:text-ink transition-colors">
                  {r.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {materialOptions.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m)}
                  onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
                  className="w-4 h-4 accent-gold border-champagne"
                />
                <span className="text-sm text-charcoal group-hover:text-ink transition-colors">
                  {m}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters ? (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-deep transition-colors"
        >
          Clear All
        </button>
      ) : null}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-cream min-h-screen">
      {/* Header */}
      <div className="border-b border-champagne/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">Shop All</h1>
          <p className="text-muted mt-4 max-w-md mx-auto">
            Demi-fine gold jewelry, hand-finished and made to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <p className="hidden md:block text-sm text-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="flex items-center gap-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted hidden sm:block">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm text-charcoal bg-transparent border-b border-champagne/60 py-1.5 pr-6 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-deep"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85%] bg-cream shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-5 border-b border-champagne/40">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <FilterPanel />
            </div>
            <div className="px-5 py-4 border-t border-champagne/40">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-ink text-cream py-3.5 text-xs uppercase tracking-[0.25em] font-semibold"
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
