import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Check } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { cn } from '@/lib/utils'

const categoryOptions = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialOptions = ['Gold', 'Silver']
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const initialCategory = searchParams.get('category')
  const q = searchParams.get('q') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const c = searchParams.get('category')
    setSelectedCategories(c ? [c] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (q) {
      const ql = q.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(ql) ||
          p.shortDesc.toLowerCase().includes(ql) ||
          p.category.toLowerCase().includes(ql)
      )
    }
    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedMaterials.length) {
      result = result.filter((p) => p.tones.some((t) => selectedMaterials.includes(t)))
    }
    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((idx) => {
          const r = priceRanges[idx]
          return p.price >= r.min && p.price < r.max
        })
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
  }, [q, selectedCategories, selectedMaterials, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">Category</h3>
        <div className="space-y-3">
          {categoryOptions.map((c) => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedCategories.includes(c) ? 'bg-gold border-gold' : 'border-gold/40 group-hover:border-gold'
                )}
              >
                {selectedCategories.includes(c) && <Check size={11} className="text-cream" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(c)}
                onChange={() => toggle(selectedCategories, setSelectedCategories, c)}
              />
              <span className="text-sm text-ink">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">Material</h3>
        <div className="space-y-3">
          {materialOptions.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedMaterials.includes(m) ? 'bg-gold border-gold' : 'border-gold/40 group-hover:border-gold'
                )}
              >
                {selectedMaterials.includes(m) && <Check size={11} className="text-cream" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedMaterials.includes(m)}
                onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
              />
              <span className="text-sm text-ink">{m} Tone</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((r, i) => (
            <label key={r.label} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedPrices.includes(i) ? 'bg-gold border-gold' : 'border-gold/40 group-hover:border-gold'
                )}
              >
                {selectedPrices.includes(i) && <Check size={11} className="text-cream" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPrices.includes(i)}
                onChange={() => toggle(selectedPrices, setSelectedPrices, i)}
              />
              <span className="text-sm text-ink">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      {(selectedCategories.length || selectedMaterials.length || selectedPrices.length) > 0 && (
        <button
          onClick={clearAll}
          className="text-xs uppercase tracking-widest2 text-gold hover:text-ink transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      {/* Header */}
      <div className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">
            {q ? `Results for “${q}”` : 'Shop All'}
          </h1>
          <p className="text-muted mt-3 text-sm">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>
              <p className="hidden md:block text-xs uppercase tracking-widest2 text-muted">
                {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs uppercase tracking-widest2 text-muted hidden sm:block">Sort</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-gold/30 text-xs text-ink px-3 py-2 outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-ink mb-3">No pieces found</p>
                <p className="text-sm text-muted mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearAll}
                  className="text-xs uppercase tracking-widest2 text-gold hover:text-ink"
                >
                  Clear Filters
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
        <div className="md:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl uppercase tracking-wider text-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-ink">
                <X size={22} />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 bg-gold text-cream text-xs uppercase tracking-widest2 py-4 hover:bg-gold-soft transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
