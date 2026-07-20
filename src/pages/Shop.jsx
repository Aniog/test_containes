import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/lib/useStrkImages'
import { cn } from '@/lib/utils'

const PRICE_BUCKETS = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 49 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 81, max: Infinity },
]

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get('category') || 'all'

  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const ref = useStrkImages([category, price, material, sort])

  useEffect(() => {
    const c = params.get('category') || 'all'
    setCategory(c)
  }, [params])

  const filtered = useMemo(() => {
    let list = products.slice()
    if (category !== 'all') list = list.filter((p) => p.category === category)
    const bucket = PRICE_BUCKETS.find((b) => b.id === price)
    if (bucket) list = list.filter((p) => p.price >= bucket.min && p.price <= bucket.max)
    if (material !== 'all') list = list.filter((p) => p.tone.includes(material))

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

  const updateCategory = (c) => {
    setCategory(c)
    if (c === 'all') {
      params.delete('category')
      setParams(params, { replace: true })
    } else {
      params.set('category', c)
      setParams(params, { replace: true })
    }
  }

  const resetFilters = () => {
    setCategory('all')
    setPrice('all')
    setMaterial('all')
    setSort('featured')
    params.delete('category')
    setParams(params, { replace: true })
  }

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-espresso mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          <li>
            <button
              onClick={() => updateCategory('all')}
              className={cn(
                'text-sm transition-colors',
                category === 'all' ? 'text-gold' : 'text-cocoa hover:text-espresso'
              )}
            >
              All
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => updateCategory(c.id)}
                className={cn(
                  'text-sm transition-colors',
                  category === c.id ? 'text-gold' : 'text-cocoa hover:text-espresso'
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-espresso mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <button
                onClick={() => setPrice(b.id)}
                className={cn(
                  'text-sm transition-colors',
                  price === b.id ? 'text-gold' : 'text-cocoa hover:text-espresso'
                )}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-espresso mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {['all', 'Gold', 'Silver'].map((m) => (
            <li key={m}>
              <button
                onClick={() => setMaterial(m)}
                className={cn(
                  'text-sm transition-colors capitalize',
                  material === m ? 'text-gold' : 'text-cocoa hover:text-espresso'
                )}
              >
                {m === 'all' ? 'All' : m}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={resetFilters}
        className="text-[11px] uppercase tracking-[0.2em] text-taupe underline hover:text-gold"
      >
        Reset Filters
      </button>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso">
            Shop All
          </h1>
          <p className="mt-4 text-sm text-taupe max-w-md mx-auto">
            Demi-fine gold jewelry, crafted to be treasured and worn every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-espresso border border-line px-4 py-3"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
          <p className="hidden lg:block text-xs text-taupe">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-line text-[11px] uppercase tracking-[0.18em] text-espresso pl-4 pr-10 py-3 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  Sort: {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-espresso pointer-events-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso">
                  No pieces match your filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 text-gold underline text-sm"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
                {filtered.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    titleId={`shop-${p.id}-title`}
                    descId={`shop-${p.id}-desc`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl uppercase tracking-[0.18em] text-espresso">
                Filters
              </h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={22} className="text-espresso" />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-espresso text-ivory text-[11px] uppercase tracking-[0.2em] py-4"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
