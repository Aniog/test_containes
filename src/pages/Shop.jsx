import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { PRODUCTS, CATEGORIES, MATERIALS } from '@/data/products'
import useStockImages from '@/lib/useStockImages'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const PRICE_BUCKETS = [
  { id: 'all', label: 'All prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over-80', label: 'Over $80', min: 80, max: Infinity },
]

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'rating', label: 'Top rated' },
  { id: 'new', label: 'Newest' },
]

function FilterGroup({ title, children }) {
  return (
    <div className="py-5 border-b border-line last:border-b-0">
      <h3 className="eyebrow mb-4">{title}</h3>
      {children}
    </div>
  )
}

function RadioRow({ options, value, onChange, name }) {
  return (
    <ul className="space-y-2.5">
      {options.map((opt) => (
        <li key={opt.id}>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name={name}
              value={opt.id}
              checked={value === opt.id}
              onChange={() => onChange(opt.id)}
              className="sr-only"
            />
            <span
              className={cn(
                'w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors duration-300',
                value === opt.id ? 'border-espresso' : 'border-muted/50 group-hover:border-ink'
              )}
            >
              <span
                className={cn(
                  'w-1.5 h-1.5 rounded-full bg-espresso transition-transform duration-300',
                  value === opt.id ? 'scale-100' : 'scale-0'
                )}
              />
            </span>
            <span
              className={cn(
                'text-sm transition-colors duration-300',
                value === opt.id ? 'text-espresso' : 'text-ink/80 group-hover:text-espresso'
              )}
            >
              {opt.label}
            </span>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const ref = useRef(null)
  useStockImages(ref, [params.toString()])

  const initialCategory = params.get('category') || 'all'
  const initialSort = params.get('sort') || 'featured'
  const initialPrice = params.get('price') || 'all'
  const initialMaterial = params.get('material') || 'all'

  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState(initialPrice)
  const [material, setMaterial] = useState(initialMaterial)
  const [sort, setSort] = useState(initialSort)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Sync state → URL
  useEffect(() => {
    const next = new URLSearchParams()
    if (category !== 'all') next.set('category', category)
    if (price !== 'all') next.set('price', price)
    if (material !== 'all') next.set('material', material)
    if (sort !== 'featured') next.set('sort', sort)
    setParams(next, { replace: true })
  }, [category, price, material, sort, setParams])

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === price) || PRICE_BUCKETS[0]
    let list = PRODUCTS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (material !== 'all' && p.material !== material) return false
      if (p.price < bucket.min || p.price > bucket.max) return false
      return true
    })
    switch (sort) {
      case 'price-asc':
        list = list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list = list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list = list.sort((a, b) => b.rating - a.rating)
        break
      case 'new':
        list = list.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0))
        break
      default:
        break
    }
    return list
  }, [category, price, material, sort])

  const filterCount =
    (category !== 'all' ? 1 : 0) +
    (price !== 'all' ? 1 : 0) +
    (material !== 'all' ? 1 : 0)

  return (
    <>
      {/* Page header */}
      <section className="pt-32 md:pt-40 pb-10 md:pb-14 bg-cream border-b border-line">
        <div className="container-x">
          <p className="eyebrow mb-3">Shop · All Jewelry</p>
          <h1
            id="shop-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso"
            style={{ fontWeight: 400 }}
          >
            The <span className="italic">collection</span>
          </h1>
          <p id="shop-subtitle" className="mt-4 text-sm md:text-base text-muted max-w-md">
            Five pieces, hand-finished. Each one designed to be the most-worn in your jewelry box.
          </p>
        </div>
      </section>

      <section ref={ref} className="container-x py-10 md:py-14">
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-ink border border-line px-4 py-2.5"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.4} />
            Filter
            {filterCount > 0 && (
              <span className="ml-1 text-[10px] bg-espresso text-cream px-1.5 py-0.5 rounded-full">
                {filterCount}
              </span>
            )}
          </button>

          <p className="hidden md:block text-xs text-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-2 ml-auto">
            <label htmlFor="sort" className="sr-only">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border border-line text-xs uppercase tracking-widest-2 text-ink px-4 py-2.5 focus:outline-none focus:border-espresso"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-28">
              <p className="font-serif text-xl text-espresso mb-2">Refine</p>
              <FilterGroup title="Category">
                <RadioRow
                  name="category"
                  value={category}
                  onChange={setCategory}
                  options={[{ id: 'all', label: 'All' }, ...CATEGORIES]}
                />
              </FilterGroup>
              <FilterGroup title="Price">
                <RadioRow
                  name="price"
                  value={price}
                  onChange={setPrice}
                  options={PRICE_BUCKETS}
                />
              </FilterGroup>
              <FilterGroup title="Material">
                <RadioRow
                  name="material"
                  value={material}
                  onChange={setMaterial}
                  options={[{ id: 'all', label: 'All materials' }, ...MATERIALS]}
                />
              </FilterGroup>
              {filterCount > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setCategory('all')
                    setPrice('all')
                    setMaterial('all')
                  }}
                  className="mt-5 text-[11px] uppercase tracking-widest-2 text-muted hover:text-espresso transition-colors duration-300"
                >
                  Clear all
                </button>
              )}
            </div>
          </aside>

          {/* Grid */}
          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso mb-3">
                  Nothing here yet.
                </p>
                <p className="text-sm text-muted">
                  Try a different filter — we're always adding new pieces.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('all')
                    setPrice('all')
                    setMaterial('all')
                  }}
                  className="mt-7 btn-ghost"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] md:hidden transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-espresso/40" onClick={() => setMobileOpen(false)} />
        <aside
          className={cn(
            'absolute bottom-0 left-0 right-0 bg-bone max-h-[85vh] overflow-y-auto rounded-t-2xl',
            'transition-transform duration-500 ease-out-soft',
            mobileOpen ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-line">
            <h2 className="font-serif text-xl">Filter</h2>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close filters"
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <div className="px-6">
            <FilterGroup title="Category">
              <RadioRow
                name="m-category"
                value={category}
                onChange={setCategory}
                options={[{ id: 'all', label: 'All' }, ...CATEGORIES]}
              />
            </FilterGroup>
            <FilterGroup title="Price">
              <RadioRow
                name="m-price"
                value={price}
                onChange={setPrice}
                options={PRICE_BUCKETS}
              />
            </FilterGroup>
            <FilterGroup title="Material">
              <RadioRow
                name="m-material"
                value={material}
                onChange={setMaterial}
                options={[{ id: 'all', label: 'All materials' }, ...MATERIALS]}
              />
            </FilterGroup>
          </div>
          <div className="sticky bottom-0 bg-bone border-t border-line px-6 py-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setCategory('all')
                setPrice('all')
                setMaterial('all')
              }}
              className="btn-ghost flex-1"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="btn-primary flex-1"
            >
              Show {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </button>
          </div>
        </aside>
      </div>
    </>
  )
}
