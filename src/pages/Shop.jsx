import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/hooks/useStrkImages'
import { cn } from '@/lib/utils'

const categoryOptions = ['Earrings', 'Necklaces', 'Huggies']
const materialOptions = ['18K Gold Plated']
const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to100', label: '$50 – $100', min: 50, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrice, setSelectedPrice] = useState('')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCategories(cat ? [cat] : [])
  }, [searchParams])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrice('')
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedPrice) {
      const range = priceRanges.find((r) => r.id === selectedPrice)
      if (range) result = result.filter((p) => p.price >= range.min && p.price < range.max)
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
  }, [selectedCategories, selectedPrice, sort])

  const hasFilters = selectedCategories.length > 0 || selectedPrice

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">Category</h3>
        <div className="mt-4 space-y-3">
          {categoryOptions.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-ink-muted group-hover:text-ink">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">Price</h3>
        <div className="mt-4 space-y-3">
          {priceRanges.map((r) => (
            <label key={r.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === r.id}
                onChange={() => setSelectedPrice(r.id)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-ink-muted group-hover:text-ink">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">Material</h3>
        <div className="mt-4 space-y-3">
          {materialOptions.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" defaultChecked className="h-4 w-4 accent-gold" />
              <span className="text-sm text-ink-muted group-hover:text-ink">{m}</span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-[11px] uppercase tracking-widest2 text-gold transition-colors hover:text-gold-deep"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="border-b border-ink/10 bg-cream-soft">
        <div className="mx-auto max-w-content px-6 py-12 text-center md:px-10 md:py-16 lg:px-16">
          <p className="text-[11px] uppercase tracking-widest3 text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl lg:text-6xl">
            Shop All Jewelry
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-ink-muted">
            Demi-fine gold pieces, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-content px-6 py-10 md:px-10 lg:px-16">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-[11px] uppercase tracking-widest2 text-ink lg:hidden"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters
          </button>
          <p className="hidden text-sm text-ink-muted lg:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="flex items-center gap-3">
            <label className="text-[11px] uppercase tracking-widest2 text-ink-muted">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-ink/20 bg-transparent px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="mt-2 text-sm text-ink-muted">Try adjusting your filters.</p>
                <button
                  onClick={clearAll}
                  className="mt-6 border border-ink px-8 py-3 text-[11px] uppercase tracking-widest2 text-ink hover:bg-ink hover:text-cream-soft"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity lg:hidden',
          mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <aside
        className={cn(
          'fixed left-0 top-0 z-[70] flex h-full w-full max-w-xs flex-col bg-cream-soft shadow-soft transition-transform duration-300 ease-elegant lg:hidden',
          mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-serif text-lg uppercase tracking-widest2 text-ink">Filters</h2>
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
            <X className="h-5 w-5 text-ink" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
        <div className="border-t border-ink/10 px-6 py-4">
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="w-full bg-gold py-3.5 text-[11px] uppercase tracking-widest2 text-cream-soft hover:bg-gold-deep"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </aside>
    </div>
  )
}
