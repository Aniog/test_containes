import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 49 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 81, max: Infinity },
]

const MATERIALS = ['Gold', 'Silver']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('featured')
  const [priceRange, setPriceRange] = useState('all')
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'

  const setCategory = (slug) => {
    if (slug === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', slug)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const toggleMaterial = (m) => {
    setSelectedMaterials((cur) =>
      cur.includes(m) ? cur.filter((x) => x !== m) : [...cur, m]
    )
  }

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    let list = products.filter((p) => {
      const catOk = activeCategory === 'all' || p.type === activeCategory
      const priceOk = p.price >= range.min && p.price <= range.max
      const matOk =
        selectedMaterials.length === 0 ||
        selectedMaterials.some((m) => p.variants.includes(m))
      return catOk && priceOk && matOk
    })

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [activeCategory, priceRange, selectedMaterials, sort])

  // Close mobile filters when results change
  useEffect(() => {
    setMobileFiltersOpen(false)
  }, [activeCategory])

  const FilterPanel = () => (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
          Category
        </h3>
        <ul className="mt-4 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setCategory('all')}
              className={cn(
                'text-sm transition-colors',
                activeCategory === 'all' ? 'text-gold' : 'text-taupe hover:text-ink'
              )}
            >
              All Jewelry
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategory(c.slug)}
                className={cn(
                  'text-sm transition-colors',
                  activeCategory === c.slug ? 'text-gold' : 'text-taupe hover:text-ink'
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
        <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
          Price
        </h3>
        <ul className="mt-4 space-y-3">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPriceRange(r.id)}
                className={cn(
                  'text-sm transition-colors',
                  priceRange === r.id ? 'text-gold' : 'text-taupe hover:text-ink'
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
        <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
          Material
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {MATERIALS.map((m) => {
            const active = selectedMaterials.includes(m)
            return (
              <button
                key={m}
                type="button"
                onClick={() => toggleMaterial(m)}
                className={cn(
                  'border px-4 py-2 text-[11px] uppercase tracking-widest2 transition-colors',
                  active
                    ? 'border-ink bg-ink text-ivory'
                    : 'border-sand text-taupe hover:border-ink hover:text-ink'
                )}
              >
                {m}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-ivory pt-24">
      {/* Page header */}
      <div className="mx-auto max-w-7xl px-5 pb-10 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">The Collection</p>
        <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">
          {activeCategory === 'all'
            ? 'All Jewelry'
            : categories.find((c) => c.slug === activeCategory)?.name || 'Shop'}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-taupe">
          Demi-fine 18K gold plated pieces, crafted to be treasured.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-y border-sand py-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink md:hidden"
          >
            <SlidersHorizontal size={15} />
            Filters
          </button>
          <p className="hidden text-xs text-taupe md:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-sand bg-ivory py-2 pl-4 pr-10 text-[11px] uppercase tracking-widest2 text-ink focus:border-ink focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  Sort: {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-taupe"
            />
          </div>
        </div>

        <div className="flex gap-10 py-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="mt-2 text-sm text-taupe">
                  Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('all')
                    setPriceRange('all')
                    setSelectedMaterials([])
                  }}
                  className="mt-6 border border-ink px-8 py-3 text-[11px] uppercase tracking-widest2 text-ink hover:bg-ink hover:text-ivory"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[80] md:hidden',
          mobileFiltersOpen ? '' : 'pointer-events-none'
        )}
      >
        <div
          onClick={() => setMobileFiltersOpen(false)}
          className={cn(
            'absolute inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300',
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
          )}
        />
        <div
          className={cn(
            'absolute left-0 top-0 h-full w-80 max-w-[85%] bg-ivory p-6 shadow-2xl transition-transform duration-300',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between border-b border-sand pb-4">
            <h2 className="font-serif text-xl text-ink">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="text-ink"
            >
              <X size={20} />
            </button>
          </div>
          <div className="mt-6 overflow-y-auto">
            <FilterPanel />
          </div>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-8 w-full bg-gold py-3.5 text-[11px] uppercase tracking-widest2 text-ivory hover:bg-gold-deep"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </div>
    </div>
  )
}
