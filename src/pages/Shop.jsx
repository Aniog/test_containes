import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over-80', label: 'Over $80', min: 80, max: Infinity },
]

const MATERIALS = ['Gold', 'Silver']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef(null)

  const initialCategory = searchParams.get('category') || ''
  const initialQuery = searchParams.get('q') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [query] = useState(initialQuery)

  // Sync category from URL when it changes
  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCategories(cat ? [cat] : [])
  }, [searchParams])

  // Load stock images for the visible product grid
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategories, selectedPrices, selectedMaterials, sort, query])

  const toggle = (list, setList, value) => {
    setList((current) =>
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    )
  }

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (query) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      )
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((id) => {
          const range = PRICE_RANGES.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
        })
      )
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        p.variants.some((v) => selectedMaterials.includes(v))
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
  }, [query, selectedCategories, selectedPrices, selectedMaterials, sort])

  const activeFilterCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length

  const FilterPanel = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {categories.map((cat) => (
            <li key={cat.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.slug)}
                  onChange={() => toggle(selectedCategories, setSelectedCategories, cat.slug)}
                  className="w-4 h-4 accent-ink"
                />
                <span className="text-sm text-ink group-hover:text-gold transition-colors">
                  {cat.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((range) => (
            <li key={range.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range.id)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, range.id)}
                  className="w-4 h-4 accent-ink"
                />
                <span className="text-sm text-ink group-hover:text-gold transition-colors">
                  {range.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((mat) => (
            <li key={mat}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => toggle(selectedMaterials, setSelectedMaterials, mat)}
                  className="w-4 h-4 accent-ink"
                />
                <span className="text-sm text-ink group-hover:text-gold transition-colors">
                  {mat} Tone
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.18em] text-gold hover:text-gold-deep transition-colors"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="bg-cream pt-16 md:pt-20 min-h-screen">
      {/* Header */}
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            {query ? `Results for “${query}”` : 'All Jewelry'}
          </h1>
          <p className="text-stone text-sm mt-4 max-w-md mx-auto">
            Demi-fine gold pieces, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-ink text-cream rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="hidden md:block text-sm text-stone">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="flex items-center gap-3">
            <label className="text-[11px] uppercase tracking-[0.2em] text-stone hidden md:block">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-cream border border-hairline text-sm text-ink px-4 py-2.5 outline-none focus:border-ink transition-colors cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-ink mb-3">No pieces match your filters</p>
                <p className="text-sm text-stone mb-6">Try adjusting or clearing your selection.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[11px] uppercase tracking-[0.2em] border border-ink px-8 py-3 hover:bg-ink hover:text-cream transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    sectionTitleId="shop-title"
                  />
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
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-cream shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
            <div className="border-t border-hairline px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-ink text-cream text-[11px] uppercase tracking-[0.2em] py-4"
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
