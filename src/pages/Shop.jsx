import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/components/StrkImage'
import { cn } from '@/lib/utils'

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 49 },
  { id: '50to100', label: '$50 – $100', min: 50, max: 100 },
  { id: 'over100', label: 'Over $100', min: 101, max: Infinity },
]

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Sterling Silver' },
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

  const initialCategory = searchParams.get('category') || 'all'

  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL
  useEffect(() => {
    const c = searchParams.get('category') || 'all'
    setCategory(c)
  }, [searchParams])

  const updateCategory = (cat) => {
    setCategory(cat)
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = products.slice()
    if (category !== 'all') {
      list = list.filter((p) => p.type === category || p.category.toLowerCase() === category.toLowerCase())
    }
    const range = priceRanges.find((r) => r.id === price)
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    }
    if (material !== 'all') {
      // Seed data is gold-tone; silver filter shows nothing meaningful, so we
      // keep it as a UI affordance and simply filter by tone match.
      list = list.filter((p) => p.tone === material)
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
  }, [category, price, material, sort])

  const categoryOptions = [
    { id: 'all', label: 'All' },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ]

  const FilterPanel = () => (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink font-medium mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {categoryOptions.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => updateCategory(c.id)}
                className={cn(
                  'text-sm transition-colors',
                  category === c.id ? 'text-gold font-medium' : 'text-ink/70 hover:text-ink'
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink font-medium mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {priceRanges.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPrice(r.id)}
                className={cn(
                  'text-sm transition-colors',
                  price === r.id ? 'text-gold font-medium' : 'text-ink/70 hover:text-ink'
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink font-medium mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {materials.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setMaterial(m.id)}
                className={cn(
                  'text-sm transition-colors',
                  material === m.id ? 'text-gold font-medium' : 'text-ink/70 hover:text-ink'
                )}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">Shop All</h1>
          <p className="mt-4 text-sm text-sand max-w-md mx-auto">
            Demi-fine gold jewelry, hand-finished and made to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink"
              >
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                Filters
              </button>
              <p className="hidden md:block text-sm text-sand">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-hairline text-ink text-xs uppercase tracking-widest2 pl-4 pr-9 py-2.5 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="w-3.5 h-3.5 text-ink absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <p className="mt-2 text-sm text-sand">Try adjusting your selection.</p>
                <button
                  type="button"
                  onClick={() => {
                    updateCategory('all')
                    setPrice('all')
                    setMaterial('all')
                  }}
                  className="mt-6 text-[11px] uppercase tracking-widest2 text-gold underline underline-offset-4"
                >
                  Clear Filters
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
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold text-ivory text-[11px] uppercase tracking-widest2 font-medium py-4"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
