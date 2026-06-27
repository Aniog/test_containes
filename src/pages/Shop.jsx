import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Check } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/lib/strk'
import { cn } from '@/lib/utils'

const categoryOptions = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialOptions = ['Gold', 'Silver']
const priceBands = [
  { id: 'under50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50to80', label: '$50 – $80', test: (p) => p.price >= 50 && p.price <= 80 },
  { id: 'over80', label: 'Over $80', test: (p) => p.price > 80 },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const initialCategory = searchParams.get('category')
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState('featured')

  useStrkImages(containerRef, [selectedCats, selectedMaterials, selectedPrices, sort])

  // Keep URL in sync when category filter changes from elsewhere
  useEffect(() => {
    const urlCat = searchParams.get('category')
    if (urlCat && !selectedCats.includes(urlCat)) {
      setSelectedCats((prev) => [...prev, urlCat])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedMaterials.length) {
        const hasMat = selectedMaterials.some((m) => p.variants.includes(m))
        if (!hasMat) return false
      }
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const band = priceBands.find((b) => b.id === id)
          return band ? band.test(p) : false
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
  }, [selectedCats, selectedMaterials, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedMaterials([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const activeCount =
    selectedCats.length + selectedMaterials.length + selectedPrices.length

  const FilterPanel = () => (
    <div className="space-y-9">
      <div>
        <h3 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-ink mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categoryOptions.map((c) => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedCats.includes(c) ? 'bg-gold border-gold' : 'border-stone group-hover:border-ink'
                )}
              >
                {selectedCats.includes(c) && <Check className="w-3 h-3 text-cream" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCats.includes(c)}
                onChange={() => toggle(selectedCats, setSelectedCats, c)}
              />
              <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">
                {c}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-ink mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {materialOptions.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedMaterials.includes(m) ? 'bg-gold border-gold' : 'border-stone group-hover:border-ink'
                )}
              >
                {selectedMaterials.includes(m) && <Check className="w-3 h-3 text-cream" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedMaterials.includes(m)}
                onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
              />
              <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">
                {m} Tone
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-ink mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceBands.map((b) => (
            <label key={b.id} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedPrices.includes(b.id) ? 'bg-gold border-gold' : 'border-stone group-hover:border-ink'
                )}
              >
                {selectedPrices.includes(b.id) && <Check className="w-3 h-3 text-cream" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPrices.includes(b.id)}
                onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
              />
              <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">
                {b.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-[0.15em] text-gold hover:text-gold-deep transition-colors underline underline-offset-4"
        >
          Clear all ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-8 text-center border-b border-line">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-3">The Collection</p>
        <h1 className="font-serif text-4xl md:text-5xl">Shop All Jewelry</h1>
        <p className="mt-4 text-ink-soft max-w-lg mx-auto text-sm">
          Demi-fine gold pieces, designed in small batches and made to be worn
          every day.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-12 grid md:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block">
          <FilterPanel />
        </aside>

        {/* Main */}
        <div>
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold border border-line px-4 py-2.5"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
              {activeCount > 0 && <span className="text-gold">({activeCount})</span>}
            </button>
            <p className="hidden md:block text-sm text-ink-soft">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-xs uppercase tracking-[0.15em] text-ink-soft">
                Sort
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm border border-line bg-cream px-3 py-2 focus:outline-none focus:border-gold transition-colors"
              >
                {sortOptions.map((o) => (
                  <option key={o.id} value={o.id}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-ink mb-2">No pieces match your filters</p>
              <button
                type="button"
                onClick={clearAll}
                className="text-gold underline underline-offset-4 text-sm"
              >
                Clear filters
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

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-[85%] max-w-sm bg-cream p-6 overflow-y-auto animate-fade">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-10 bg-gold text-cream py-4 text-[0.7rem] uppercase tracking-[0.2em] font-semibold hover:bg-gold-deep transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
