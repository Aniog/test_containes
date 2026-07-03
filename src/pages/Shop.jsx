import React, { useMemo, useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'
import { cn, formatPrice } from '@/lib/utils'
import ProductCard from '@/components/ProductCard'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 49 },
  { id: '50to100', label: '$50 – $100', min: 50, max: 100 },
  { id: 'over100', label: 'Over $100', min: 101, max: Infinity },
]

const MATERIALS = ['18K Gold Plated']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || 'all'
  const activeMaterial = searchParams.get('material') || 'all'
  const query = searchParams.get('q') || ''

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (!value || value === 'all') {
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

    const range = PRICE_RANGES.find((r) => r.id === activePrice)
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    }

    if (activeMaterial !== 'all') {
      list = list.filter((p) => p.material === activeMaterial)
    }

    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      )
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
  }, [activeCategory, activePrice, activeMaterial, query, sort])

  // Re-scan images when filtered list changes.
  const ref = useStrkImages([activeCategory, activePrice, activeMaterial, query, sort])

  // Close mobile filters when route changes
  useEffect(() => {
    setMobileFiltersOpen(false)
  }, [activeCategory, activePrice, activeMaterial, query])

  const clearAll = () => {
    setSearchParams({}, { replace: true })
    setSort('featured')
  }

  const hasFilters =
    activeCategory !== 'all' ||
    activePrice !== 'all' ||
    activeMaterial !== 'all' ||
    query

  const FilterContent = () => (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-ink mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setParam('category', 'all')}
              className={cn(
                'text-sm transition-colors',
                activeCategory === 'all' ? 'text-gold' : 'text-stone hover:text-ink'
              )}
            >
              All Jewelry
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setParam('category', c.id)}
                className={cn(
                  'text-sm transition-colors',
                  activeCategory === c.id ? 'text-gold' : 'text-stone hover:text-ink'
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => setParam('category', 'Sets')}
              className={cn(
                'text-sm transition-colors',
                activeCategory === 'Sets' ? 'text-gold' : 'text-stone hover:text-ink'
              )}
            >
              Sets
            </button>
          </li>
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-ink mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setParam('price', r.id)}
                className={cn(
                  'text-sm transition-colors',
                  activePrice === r.id ? 'text-gold' : 'text-stone hover:text-ink'
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
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-ink mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setParam('material', 'all')}
              className={cn(
                'text-sm transition-colors',
                activeMaterial === 'all' ? 'text-gold' : 'text-stone hover:text-ink'
              )}
            >
              All Materials
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setParam('material', m)}
                className={cn(
                  'text-sm transition-colors',
                  activeMaterial === m ? 'text-gold' : 'text-stone hover:text-ink'
                )}
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.25em] text-stone underline hover:text-ink transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
          The Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-3">
          {query ? `Results for “${query}”` : 'Shop All Jewelry'}
        </h1>
        <p className="text-stone max-w-md mx-auto">
          Demi-fine gold pieces, designed to be worn every day.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-t border-b border-sand py-4 mb-8">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-ink md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="hidden md:block text-[11px] uppercase tracking-[0.25em] text-stone">
            {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-[11px] uppercase tracking-[0.25em] text-ink pr-7 pl-2 py-1 outline-none cursor-pointer border-b border-transparent hover:border-sand transition-colors"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id} className="bg-cream text-ink">
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-ink mb-3">No pieces found</p>
                <p className="text-stone mb-6">
                  Try adjusting your filters or search.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[11px] uppercase tracking-[0.25em] text-gold hover:text-ink transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
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
          <div className="absolute top-0 left-0 h-full w-[85%] max-w-sm bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[11px] uppercase tracking-[0.25em] text-ink">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-10 bg-gold text-ink text-[11px] uppercase tracking-[0.25em] py-4"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
