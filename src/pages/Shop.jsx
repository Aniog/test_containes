import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/lib/useStrkImages'
import { cn } from '@/lib/utils'

const CATEGORY_OPTIONS = ['Earrings', 'Necklaces', 'Huggies']
const MATERIAL_OPTIONS = ['Gold Plated', 'Crystal', 'Hypoallergenic', 'Filigree', 'Gift Boxed']
const PRICE_RANGES = [
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

const matchesMaterial = (product, selected) => {
  if (selected.length === 0) return true
  const mat = product.materials.toLowerCase()
  return selected.some((m) => {
    if (m === 'Gold Plated') return mat.includes('gold plated')
    if (m === 'Crystal') return mat.includes('crystal')
    if (m === 'Hypoallergenic') return mat.includes('hypoallergenic')
    if (m === 'Filigree') return mat.includes('filigree')
    if (m === 'Gift Boxed') return mat.includes('gift boxed')
    return false
  })
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get('category')

  const [categories, setCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [materials, setMaterials] = useState([])
  const [priceRanges, setPriceRanges] = useState([])
  const [sort, setSort] = useState('featured')
  const [sortOpen, setSortOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL when it changes
  useEffect(() => {
    const cat = searchParams.get('category')
    setCategories(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setter, value) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const clearAll = () => {
    setCategories([])
    setMaterials([])
    setPriceRanges([])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false
      if (!matchesMaterial(p, materials)) return false
      if (priceRanges.length) {
        const inRange = priceRanges.some((id) => {
          const range = PRICE_RANGES.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
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
  }, [categories, materials, priceRanges, sort])

  const activeFilterCount =
    categories.length + materials.length + priceRanges.length

  const FilterPanel = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-wide2 text-ink">Category</h3>
        <ul className="mt-4 space-y-2.5">
          {CATEGORY_OPTIONS.map((c) => (
            <li key={c}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft">
                <input
                  type="checkbox"
                  checked={categories.includes(c)}
                  onChange={() => {
                    toggle(categories, setCategories, c)
                    setSearchParams(categories.includes(c) ? {} : { category: c })
                  }}
                  className="h-4 w-4 accent-gold"
                />
                {c}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-wide2 text-ink">Price</h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft">
                <input
                  type="checkbox"
                  checked={priceRanges.includes(r.id)}
                  onChange={() => toggle(priceRanges, setPriceRanges, r.id)}
                  className="h-4 w-4 accent-gold"
                />
                {r.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-wide2 text-ink">Material</h3>
        <ul className="mt-4 space-y-2.5">
          {MATERIAL_OPTIONS.map((m) => (
            <li key={m}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft">
                <input
                  type="checkbox"
                  checked={materials.includes(m)}
                  onChange={() => toggle(materials, setMaterials, m)}
                  className="h-4 w-4 accent-gold"
                />
                {m}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-wide2 text-gold-deep underline underline-offset-4 hover:text-ink"
        >
          Clear all ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-deep">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">All Jewelry</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Demi-fine gold pieces, designed to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] uppercase tracking-wide2 text-ink lg:hidden"
          >
            <SlidersHorizontal size={14} /> Filters
            {activeFilterCount > 0 && (
              <span className="bg-gold px-1.5 text-cream">{activeFilterCount}</span>
            )}
          </button>

          <p className="hidden text-sm text-muted lg:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((v) => !v)}
              className="inline-flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] uppercase tracking-wide2 text-ink"
            >
              Sort: {SORT_OPTIONS.find((o) => o.id === sort)?.label}
              <ChevronDown size={13} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                <ul className="absolute right-0 z-20 mt-1 w-56 border border-sand bg-cream py-1 shadow-card">
                  {SORT_OPTIONS.map((o) => (
                    <li key={o.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setSort(o.id)
                          setSortOpen(false)
                        }}
                        className={cn(
                          'block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-cream-deep',
                          sort === o.id ? 'text-gold-deep' : 'text-ink-soft'
                        )}
                      >
                        {o.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <p className="mt-2 text-sm text-muted">Try adjusting or clearing your selection.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 border border-ink px-7 py-3 text-xs uppercase tracking-wide2 text-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
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
          'fixed inset-0 z-[80] lg:hidden',
          mobileFiltersOpen ? '' : 'pointer-events-none'
        )}
      >
        <div
          onClick={() => setMobileFiltersOpen(false)}
          className={cn(
            'absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity',
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
          )}
        />
        <div
          className={cn(
            'absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 shadow-soft transition-transform duration-300',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between border-b border-sand pb-4">
            <h2 className="font-serif text-xl text-ink">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="text-ink-soft"
            >
              <X size={20} />
            </button>
          </div>
          <div className="mt-6 overflow-y-auto pb-24">
            {FilterPanel}
          </div>
          <div className="absolute inset-x-0 bottom-0 border-t border-sand bg-cream p-4">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-gold py-3.5 text-xs uppercase tracking-wide2 text-cream transition-colors hover:bg-gold-deep"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
