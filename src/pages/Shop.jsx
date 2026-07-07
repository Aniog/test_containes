import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { PRODUCTS, CATEGORIES, MATERIALS } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const PRICE_BUCKETS = [
  { id: 'all', label: 'All', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over-75', label: '$75+', min: 75, max: Infinity },
]

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'newest', label: 'Newest' },
]

export default function Shop() {
  const { category } = useParams()
  const [filterCategory, setFilterCategory] = useState(category || 'all')
  const [filterPrice, setFilterPrice] = useState('all')
  const [filterMaterial, setFilterMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Sync :category param with state
  React.useEffect(() => {
    setFilterCategory(category || 'all')
  }, [category])

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice()
    if (filterCategory !== 'all') {
      list = list.filter((p) => p.category === filterCategory)
    }
    if (filterMaterial !== 'all') {
      // Material filter is purely cosmetic in the seed; we map it to the
      // variants available. Every product has at least the gold variant.
      if (filterMaterial === 'sterling-silver') {
        list = list.filter((p) => p.variants.some((v) => v.id === 'silver'))
      }
    }
    const bucket = PRICE_BUCKETS.find((b) => b.id === filterPrice) || PRICE_BUCKETS[0]
    list = list.filter((p) => p.price >= bucket.min && p.price <= bucket.max)

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
      case 'newest':
        list.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0))
        break
      default:
        break
    }
    return list
  }, [filterCategory, filterPrice, filterMaterial, sort])

  const heading = filterCategory === 'all'
    ? { eyebrow: 'The Edit', title: 'All Jewelry' }
    : {
        eyebrow: 'The Collection',
        title: CATEGORIES.find((c) => c.id === filterCategory)?.name || 'Collection',
      }

  return (
    <div className="bg-cream">
      <div className="container-page pt-32 md:pt-40 pb-12">
        <p className="eyebrow text-mocha">{heading.eyebrow}</p>
        <h1 className="display-2 mt-3 text-deep">{heading.title}</h1>
        <p className="body-base mt-3 max-w-xl">
          Demi-fine pieces, hand-finished in our New York studio. Each one made to
          be worn, gifted, and re-worn.
        </p>
      </div>

      <div className="container-page pb-24 md:pb-32">
        <div className="flex items-center justify-between gap-4 border-t border-b border-taupe/40 py-4 mb-8">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="md:hidden inline-flex items-center gap-2 text-[11px] tracking-eyebrow uppercase font-sans text-deep"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} /> Filters
          </button>
          <p className="text-[11px] tracking-eyebrow uppercase font-sans text-mocha hidden md:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <label className="flex items-center gap-2 text-[11px] tracking-eyebrow uppercase font-sans text-deep ml-auto">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border-b border-deep/30 py-1 text-sm font-sans normal-case tracking-normal text-deep focus:outline-none focus:border-gold"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-12">
          <aside className="hidden md:block">
            <FilterPanel
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              filterPrice={filterPrice}
              setFilterPrice={setFilterPrice}
              filterMaterial={filterMaterial}
              setFilterMaterial={setFilterMaterial}
            />
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-deep">No pieces match those filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setFilterCategory('all')
                    setFilterPrice('all')
                    setFilterMaterial('all')
                  }}
                  className="btn-ghost mt-5"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} eager={i < 2} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-50 transition-opacity',
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden={!drawerOpen}
      >
        <div className="absolute inset-0 bg-deep/40" onClick={() => setDrawerOpen(false)} />
        <div
          className={cn(
            'absolute bottom-0 inset-x-0 bg-cream p-6 max-h-[85vh] overflow-y-auto transition-transform duration-400 ease-out-soft',
            drawerOpen ? 'translate-y-0' : 'translate-y-full',
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl text-deep">Filter</h3>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setDrawerOpen(false)}
              className="p-2 text-deep"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <FilterPanel
            filterCategory={filterCategory}
            setFilterCategory={(v) => {
              setFilterCategory(v)
              setDrawerOpen(false)
            }}
            filterPrice={filterPrice}
            setFilterPrice={setFilterPrice}
            filterMaterial={filterMaterial}
            setFilterMaterial={setFilterMaterial}
          />
        </div>
      </div>
    </div>
  )
}

function FilterPanel({
  filterCategory,
  setFilterCategory,
  filterPrice,
  setFilterPrice,
  filterMaterial,
  setFilterMaterial,
}) {
  return (
    <div className="space-y-9">
      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          <li>
            <FilterButton active={filterCategory === 'all'} onClick={() => setFilterCategory('all')}>
              All
            </FilterButton>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <FilterButton active={filterCategory === c.id} onClick={() => setFilterCategory(c.id)}>
                {c.name}
              </FilterButton>
            </li>
          ))}
        </ul>
      </FilterGroup>
      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <FilterButton active={filterPrice === b.id} onClick={() => setFilterPrice(b.id)}>
                {b.label}
              </FilterButton>
            </li>
          ))}
        </ul>
      </FilterGroup>
      <FilterGroup title="Material">
        <ul className="space-y-2.5">
          <li>
            <FilterButton active={filterMaterial === 'all'} onClick={() => setFilterMaterial('all')}>
              All
            </FilterButton>
          </li>
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <FilterButton active={filterMaterial === m.id} onClick={() => setFilterMaterial(m.id)}>
                {m.name}
              </FilterButton>
            </li>
          ))}
        </ul>
      </FilterGroup>
    </div>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="eyebrow text-mocha mb-4">{title}</h3>
      {children}
    </div>
  )
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'text-sm font-sans transition-colors',
        active ? 'text-gold' : 'text-deep hover:text-gold',
      )}
    >
      {children}
    </button>
  )
}
