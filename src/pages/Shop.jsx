import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products, categories, formatPrice } from '@/data/products'

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-plus', label: '$75 & Above', min: 75, max: Infinity },
]

const materials = [
  { id: '18k-gold-plated', label: '18K Gold Plated' },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || 'all'
  const activeMaterial = searchParams.get('material') || 'all'

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'all' || !value) {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = [...products]

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory)
    }

    if (activePrice !== 'all') {
      const range = priceRanges.find((r) => r.id === activePrice)
      if (range) {
        list = list.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    if (activeMaterial !== 'all') {
      list = list.filter((p) => p.material === activeMaterial)
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating)
    }

    return list
  }, [activeCategory, activePrice, activeMaterial, sortBy])

  const activeFiltersCount = [activeCategory, activePrice, activeMaterial].filter(
    (v) => v !== 'all'
  ).length

  const FilterContent = ({ prefix }) => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">
          Category
        </h4>
        <div className="mt-4 space-y-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-velmora-warmgray">
            <input
              type="radio"
              name={`${prefix}-category`}
              checked={activeCategory === 'all'}
              onChange={() => updateParam('category', 'all')}
              className="accent-velmora-rust"
            />
            All
          </label>
          {categories.map((c) => (
            <label
              key={c.id}
              className="flex cursor-pointer items-center gap-2 text-sm text-velmora-warmgray"
            >
              <input
                type="radio"
                name={`${prefix}-category`}
                checked={activeCategory === c.id}
                onChange={() => updateParam('category', c.id)}
                className="accent-velmora-rust"
              />
              {c.label}
            </label>
          ))}
          <label className="flex cursor-pointer items-center gap-2 text-sm text-velmora-warmgray">
            <input
              type="radio"
              name={`${prefix}-category`}
              checked={activeCategory === 'sets'}
              onChange={() => updateParam('category', 'sets')}
              className="accent-velmora-rust"
            />
            Gift Sets
          </label>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">Price</h4>
        <div className="mt-4 space-y-2">
          {priceRanges.map((r) => (
            <label
              key={r.id}
              className="flex cursor-pointer items-center gap-2 text-sm text-velmora-warmgray"
            >
              <input
                type="radio"
                name={`${prefix}-price`}
                checked={activePrice === r.id}
                onChange={() => updateParam('price', r.id)}
                className="accent-velmora-rust"
              />
              {r.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">
          Material
        </h4>
        <div className="mt-4 space-y-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-velmora-warmgray">
            <input
              type="radio"
              name={`${prefix}-material`}
              checked={activeMaterial === 'all'}
              onChange={() => updateParam('material', 'all')}
              className="accent-velmora-rust"
            />
            All
          </label>
          {materials.map((m) => (
            <label
              key={m.id}
              className="flex cursor-pointer items-center gap-2 text-sm text-velmora-warmgray"
            >
              <input
                type="radio"
                name={`${prefix}-material`}
                checked={activeMaterial === m.id}
                onChange={() => updateParam('material', m.id)}
                className="accent-velmora-rust"
              />
              {m.label}
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          type="button"
          onClick={() => setSearchParams({}, { replace: true })}
          className="text-xs font-medium uppercase tracking-widest text-velmora-rust underline-offset-4 hover:underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="animate-fadeIn bg-velmora-ivory pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-rust">
            Shop
          </p>
          <h1 className="mt-2 font-serif text-3xl font-medium text-velmora-ink md:text-4xl">
            The Collection
          </h1>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Sidebar filters - desktop */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <FilterContent prefix="desktop" />
          </aside>

          {/* Main grid */}
          <main className="flex-1">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-velmora-stone px-4 py-2 text-xs font-medium uppercase tracking-widest text-velmora-ink lg:hidden"
              >
                <SlidersHorizontal size={14} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-1 rounded-full bg-velmora-ink px-1.5 py-0.5 text-[9px] text-velmora-ivory">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <p className="text-sm text-velmora-warmgray">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs uppercase tracking-widest text-velmora-warmgray">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-full border border-velmora-stone bg-velmora-ivory px-4 py-2 text-xs text-velmora-ink focus:border-velmora-rust focus:outline-none"
                >
                  {sortOptions.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-velmora-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={() => setSearchParams({}, { replace: true })}
                  className="mt-4 text-sm text-velmora-rust underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                {filtered.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/40 transition-opacity lg:hidden ${
          mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileFiltersOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed bottom-0 left-0 right-0 z-50 transform overflow-y-auto rounded-t-2xl bg-velmora-ivory p-6 shadow-2xl transition-transform duration-500 ease-lux lg:hidden ${
          mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '85vh' }}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-serif text-xl text-velmora-ink">Filters</h3>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="rounded-full p-2 text-velmora-warmgray hover:bg-velmora-stone"
            aria-label="Close filters"
          >
            <X size={20} />
          </button>
        </div>
        <FilterContent prefix="mobile" />
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(false)}
          className="mt-8 w-full rounded-full bg-velmora-ink py-3 text-xs font-semibold uppercase tracking-widest text-velmora-ivory"
        >
          Show {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
        </button>
      </aside>
    </div>
  )
}
