import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { useState } from 'react'
import ProductCard from '@/components/shared/ProductCard'
import FilterSidebar, { PRICE_BUCKETS } from '@/components/shop/FilterSidebar'
import SortDropdown from '@/components/shop/SortDropdown'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import { cn } from '@/lib/utils'

const DEFAULT_FILTERS = {
  category: 'all',
  material: 'all',
  price: 'all',
}

function matchesPrice(product, bucketId) {
  const bucket = PRICE_BUCKETS.find((b) => b.id === bucketId)
  if (!bucket) return true
  const [min, max] = bucket.range
  return product.price >= min && product.price < max
}

function sortProducts(items, sort) {
  const arr = [...items]
  switch (sort) {
    case 'price-asc':
      return arr.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return arr.sort((a, b) => b.price - a.price)
    case 'rating':
      return arr.sort((a, b) => b.rating - a.rating)
    case 'new':
      return arr.sort((a, b) => Number(b.id.replace(/\D/g, '')) - Number(a.id.replace(/\D/g, '')))
    default:
      return arr
  }
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get('category') || 'all'
  const initialSort = params.get('sort') === 'new' ? 'new' : 'featured'
  const [filters, setFilters] = useState({ ...DEFAULT_FILTERS, category: initialCategory })
  const [sort, setSort] = useState(initialSort)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (filters.category !== 'all' && p.category !== filters.category) return false
      if (filters.material !== 'all' && p.material !== filters.material) return false
      if (!matchesPrice(p, filters.price)) return false
      return true
    })
  }, [filters])

  const sorted = useMemo(() => sortProducts(filtered, sort), [filtered, sort])

  const counts = useMemo(() => {
    const c = { total: PRODUCTS.length, category: {} }
    CATEGORIES.forEach((cat) => {
      c.category[cat.id] = PRODUCTS.filter((p) => p.category === cat.id).length
    })
    return c
  }, [])

  const heading =
    filters.category === 'all'
      ? 'Shop the collection'
      : CATEGORIES.find((c) => c.id === filters.category)?.label || 'Shop'

  const handleFilterChange = (next) => {
    setFilters(next)
    if (next.category !== 'all') {
      setParams({ category: next.category }, { replace: true })
    } else {
      setParams({}, { replace: true })
    }
  }

  return (
    <>
      {/* Hero strip */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14 bg-ivory-50">
        <div className="container-x">
          <div className="text-center max-w-[720px] mx-auto">
            <span className="eyebrow">Collection</span>
            <h1 className="mt-4 font-serif text-ink-900 text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.05] tracking-[-0.01em] text-balance">
              {heading}
            </h1>
            <p className="mt-5 text-[15px] text-ink-500 max-w-[520px] mx-auto">
              Demi-fine pieces in 18K gold plating and sterling silver.
              Hand-finished, hypoallergenic, made to be worn.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-ivory-50">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Sidebar (desktop) */}
            <div className="hidden lg:block lg:col-span-3">
              <FilterSidebar
                filters={filters}
                onChange={handleFilterChange}
                onReset={() => handleFilterChange(DEFAULT_FILTERS)}
                counts={counts}
              />
            </div>

            {/* Grid */}
            <div className="lg:col-span-9">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-ink-900/10">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ink-900"
                >
                  <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                  Filter
                </button>
                <p className="hidden lg:block text-[12px] uppercase tracking-[0.18em] text-ink-500">
                  {sorted.length} {sorted.length === 1 ? 'piece' : 'pieces'}
                </p>
                <SortDropdown
                  value={sort}
                  onChange={(v) => {
                    setSort(v)
                    if (v === 'new') {
                      setParams({ sort: 'new' }, { replace: true })
                    } else {
                      setParams({}, { replace: true })
                    }
                  }}
                />
              </div>

              {sorted.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-serif text-[24px] text-ink-900">Nothing matches those filters.</p>
                  <p className="mt-2 text-[13px] text-ink-500">Try widening your selection.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                  {sorted.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-50 transition-opacity duration-300',
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden={!drawerOpen}
      >
        <div
          className="absolute inset-0 bg-ink-900/50"
          onClick={() => setDrawerOpen(false)}
        />
        <aside
          className={cn(
            'absolute top-0 left-0 bottom-0 w-[88%] max-w-[360px] bg-ivory-50 text-ink-900 p-6 overflow-y-auto transition-transform duration-500',
            drawerOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[12px] uppercase tracking-[0.22em] text-ink-900 font-medium">
              Filter
            </h2>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close filters"
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterSidebar
            filters={filters}
            onChange={(next) => {
              handleFilterChange(next)
            }}
            onReset={() => handleFilterChange(DEFAULT_FILTERS)}
            counts={counts}
          />
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="btn-primary w-full mt-6"
          >
            Show {sorted.length} pieces
          </button>
        </aside>
      </div>
    </>
  )
}
