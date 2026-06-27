import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { PRODUCTS, CATEGORIES, formatPrice } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/components/StrkImage'
import { cn } from '@/lib/utils'

const PRICE_RANGES = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]

const MATERIALS = ['Gold', 'Silver']

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const [categories, setCategories] = useState(() => {
    const c = searchParams.get('category')
    return c ? [c] : []
  })
  const [priceRanges, setPriceRanges] = useState([])
  const [materials, setMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const query = searchParams.get('q') || ''

  // Sync category from URL (e.g. /shop?category=earrings).
  useEffect(() => {
    const c = searchParams.get('category')
    setCategories(c ? [c] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((current) =>
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    )
  }

  const filtered = useMemo(() => {
    let result = [...PRODUCTS]

    if (query) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }
    if (categories.length) {
      result = result.filter((p) => categories.includes(p.category))
    }
    if (priceRanges.length) {
      result = result.filter((p) =>
        priceRanges.some((id) => {
          const range = PRICE_RANGES.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
        })
      )
    }
    if (materials.length) {
      result = result.filter((p) => p.tones.some((t) => materials.includes(t)))
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
  }, [query, categories, priceRanges, materials, sort])

  const clearAll = () => {
    setCategories([])
    setPriceRanges([])
    setMaterials([])
    setSearchParams({})
  }

  const activeCount = categories.length + priceRanges.length + materials.length

  const FilterPanel = (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink mb-4">Category</h3>
        <ul className="space-y-3">
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={categories.includes(cat.id)}
                  onChange={() => toggle(categories, setCategories, cat.id)}
                  className="w-4 h-4 accent-gold border-sand"
                />
                <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">
                  {cat.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink mb-4">Price</h3>
        <ul className="space-y-3">
          {PRICE_RANGES.map((range) => (
            <li key={range.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={priceRanges.includes(range.id)}
                  onChange={() => toggle(priceRanges, setPriceRanges, range.id)}
                  className="w-4 h-4 accent-gold border-sand"
                />
                <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">
                  {range.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink mb-4">Material</h3>
        <ul className="space-y-3">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={materials.includes(m)}
                  onChange={() => toggle(materials, setMaterials, m)}
                  className="w-4 h-4 accent-gold border-sand"
                />
                <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">
                  {m} Tone
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.22em] text-gold hover:text-gold-deep transition-colors border-b border-gold pb-0.5"
        >
          Clear All ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Page header */}
      <section className="bg-cream py-14 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            {query ? `“${query}”` : 'Shop All'}
          </h1>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto">
            Demi-fine gold jewelry, crafted to be treasured and worn every day.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-sand">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeCount > 0 && (
                    <span className="bg-gold text-ivory text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                      {activeCount}
                    </span>
                  )}
                </button>
                <p className="hidden md:block text-sm text-ink-soft">
                  {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
                </p>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-sand text-[11px] uppercase tracking-[0.18em] text-ink pl-4 pr-9 py-2.5 cursor-pointer focus:outline-none focus:border-gold"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      Sort: {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink mb-3">No pieces match your filters</p>
                <p className="text-sm text-ink-soft mb-6">Try adjusting or clearing your selection.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[11px] uppercase tracking-[0.22em] text-gold hover:text-gold-deep border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 pt-8">
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
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-ivory shadow-2xl flex flex-col animate-fade-in">
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink-soft"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
            <div className="px-6 py-5 border-t border-sand">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold text-ivory text-[11px] uppercase tracking-[0.22em] py-4 hover:bg-gold-deep transition-colors"
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
