import { useMemo, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to100', label: '$50 - $100', min: 50, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
]

const MATERIALS = ['18K Gold Plated']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRange, material, sort])

  // Keep URL in sync with category
  useEffect(() => {
    if (category === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', category)
    }
    setSearchParams(searchParams, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  const filtered = useMemo(() => {
    let list = products.slice()
    if (category !== 'all') {
      list = list.filter((p) => p.categoryId === category)
    }
    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price < range.max)
    }
    if (material !== 'all') {
      list = list.filter((p) => p.material === material)
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
  }, [category, priceRange, material, sort])

  const activeCount =
    (category !== 'all' ? 1 : 0) +
    (priceRange !== 'all' ? 1 : 0) +
    (material !== 'all' ? 1 : 0)

  const clearAll = () => {
    setCategory('all')
    setPriceRange('all')
    setMaterial('all')
  }

  const FilterPanel = () => (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">
          Category
        </h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setCategory('all')}
              className={`text-sm transition-colors ${
                category === 'all' ? 'text-gold' : 'text-stone hover:text-ink'
              }`}
            >
              All Jewelry
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategory(c.id)}
                className={`text-sm transition-colors ${
                  category === c.id
                    ? 'text-gold'
                    : 'text-stone hover:text-ink'
                }`}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">
          Price
        </h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPriceRange(r.id)}
                className={`text-sm transition-colors ${
                  priceRange === r.id
                    ? 'text-gold'
                    : 'text-stone hover:text-ink'
                }`}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">
          Material
        </h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setMaterial('all')}
              className={`text-sm transition-colors ${
                material === 'all' ? 'text-gold' : 'text-stone hover:text-ink'
              }`}
            >
              All Materials
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setMaterial(m)}
                className={`text-sm transition-colors ${
                  material === m ? 'text-gold' : 'text-stone hover:text-ink'
                }`}
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-widest2 text-stone underline underline-offset-4 hover:text-ink"
        >
          Clear All ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="bg-cream">
      {/* Header */}
      <div className="border-b border-line bg-cream-deep">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">
            Shop All Jewelry
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-stone">
            Demi-fine gold pieces, designed to be worn and treasured every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        {/* Mobile filter toggle + sort */}
        <div className="mb-8 flex items-center justify-between gap-4 md:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-[11px] uppercase tracking-widest2 text-ink"
          >
            <SlidersHorizontal width={14} height={14} strokeWidth={1.5} />
            Filters
            {activeCount > 0 && (
              <span className="bg-gold px-1.5 text-[10px] text-ink">
                {activeCount}
              </span>
            )}
          </button>
          <SortDropdown sort={sort} setSort={setSort} />
        </div>

        <div className="flex gap-12">
          {/* Sidebar - desktop */}
          <aside className="hidden w-56 shrink-0 md:block">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1">
            <div className="mb-8 hidden items-center justify-between md:flex">
              <p className="text-xs uppercase tracking-widest2 text-stone">
                {filtered.length}{' '}
                {filtered.length === 1 ? 'Piece' : 'Pieces'}
              </p>
              <SortDropdown sort={sort} setSort={setSort} />
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">
                  No pieces match your filters
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-5 border-b border-gold pb-1 text-xs uppercase tracking-widest2 text-ink"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8">
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
        <div className="fixed inset-0 z-[80] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-cream p-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X width={22} height={22} strokeWidth={1.5} />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold py-4 text-xs uppercase tracking-widest2 text-ink"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function SortDropdown({ sort, setSort }) {
  const [open, setOpen] = useState(false)
  const current = SORTS.find((s) => s.id === sort)
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-[11px] uppercase tracking-widest2 text-ink"
      >
        Sort: {current?.label}
        <ChevronDown
          width={14}
          height={14}
          strokeWidth={1.5}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />
          <ul className="absolute right-0 z-20 mt-1 w-52 border border-line bg-cream py-2 shadow-lg">
            {SORTS.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSort(s.id)
                    setOpen(false)
                  }}
                  className={`block w-full px-4 py-2.5 text-left text-xs uppercase tracking-widest2 transition-colors hover:bg-cream-deep ${
                    sort === s.id ? 'text-gold' : 'text-stone'
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
