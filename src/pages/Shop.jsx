import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/hooks/useStrkImages'
import { cn } from '@/lib/utils'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory === 'all' ? [] : [initialCategory]
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync when arriving via category links.
  useEffect(() => {
    const cat = searchParams.get('category')
    setSelectedCategories(cat && cat !== 'all' ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setter, value) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const range = priceRanges.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
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
  }, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const activeFilterCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length

  const FilterPanel = (
    <div className="space-y-8">
      <FilterGroup title="Category">
        {categories.map((c) => (
          <Checkbox
            key={c.id}
            label={c.name}
            checked={selectedCategories.includes(c.id)}
            onChange={() => toggle(selectedCategories, setSelectedCategories, c.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceRanges.map((r) => (
          <Checkbox
            key={r.id}
            label={r.label}
            checked={selectedPrices.includes(r.id)}
            onChange={() => toggle(selectedPrices, setSelectedPrices, r.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        <Checkbox
          label="Gold"
          checked={selectedMaterials.includes('gold')}
          onChange={() => toggle(selectedMaterials, setSelectedMaterials, 'gold')}
        />
        <Checkbox
          label="Silver"
          checked={selectedMaterials.includes('silver')}
          onChange={() => toggle(selectedMaterials, setSelectedMaterials, 'silver')}
        />
      </FilterGroup>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-[0.15em] text-gold hover:text-gold-deep transition-colors"
        >
          Clear all ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            Shop All
          </h1>
          <p className="text-stone text-base mt-4 max-w-lg mx-auto">
            Demi-fine gold jewelry, designed to be worn every day and treasured for years.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <h2 className="text-xs uppercase tracking-[0.2em] text-ink mb-6 pb-3 border-b border-sand">
              Filter
            </h2>
            {FilterPanel}
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ink border border-sand px-4 py-2.5"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-gold text-ivory rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <p className="hidden md:block text-sm text-stone">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs uppercase tracking-[0.15em] text-stone">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-sand text-sm text-ink px-3 py-2 focus:outline-none focus:border-gold transition-colors"
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
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-xs uppercase tracking-[0.15em] text-gold hover:text-gold-deep"
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
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-ivory shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-sand">
              <h2 className="font-serif text-xl">Filter</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="p-1 text-ink"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">{FilterPanel}</div>
            <div className="border-t border-sand px-5 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold text-ivory text-xs uppercase tracking-[0.2em] py-4 hover:bg-gold-deep transition-colors"
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

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.2em] text-ink mb-3">{title}</h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  )
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          'w-4 h-4 border flex items-center justify-center transition-colors',
          checked ? 'bg-ink border-ink' : 'border-sand group-hover:border-stone'
        )}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="w-3 h-3 text-ivory" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className="text-sm text-stone group-hover:text-ink transition-colors">{label}</span>
    </label>
  )
}
