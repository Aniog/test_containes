import React, { useMemo, useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/data/products'
import { cn } from '@/lib/utils'

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over-80', label: 'Over $80', min: 80, max: Infinity },
]

const MATERIALS = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'crystal', label: 'Crystal Accent' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const query = searchParams.get('q') || ''

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    setCategory(searchParams.get('category') || 'all')
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = [...products]

    if (category !== 'all') {
      const catName = categories.find((c) => c.slug === category)?.name
      if (catName) list = list.filter((p) => p.category === catName)
    }

    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price < range.max)
    }

    if (material === 'crystal') {
      list = list.filter((p) =>
        /crystal|zirconia/i.test(p.materials)
      )
    } else if (material === 'gold') {
      list = list.filter((p) => /gold/i.test(p.materials))
    }

    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
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
  }, [category, priceRange, material, sort, query])

  const updateCategory = (slug) => {
    setCategory(slug)
    const next = new URLSearchParams(searchParams)
    if (slug === 'all') next.delete('category')
    else next.set('category', slug)
    setSearchParams(next)
  }

  const resetFilters = () => {
    setCategory('all')
    setPriceRange('all')
    setMaterial('all')
    setSort('featured')
    setSearchParams({})
  }

  const activeFilterCount =
    (category !== 'all' ? 1 : 0) +
    (priceRange !== 'all' ? 1 : 0) +
    (material !== 'all' ? 1 : 0)

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">Category</h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => updateCategory('all')}
              className={cn(
                'text-sm transition-colors',
                category === 'all' ? 'text-gold' : 'text-muted hover:text-ink'
              )}
            >
              All Jewelry
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => updateCategory(c.slug)}
                className={cn(
                  'text-sm transition-colors',
                  category === c.slug ? 'text-gold' : 'text-muted hover:text-ink'
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPriceRange(r.id)}
                className={cn(
                  'text-sm transition-colors',
                  priceRange === r.id ? 'text-gold' : 'text-muted hover:text-ink'
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">Material</h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setMaterial(m.id)}
                className={cn(
                  'text-sm transition-colors',
                  material === m.id ? 'text-gold' : 'text-muted hover:text-ink'
                )}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={resetFilters}
          className="text-xs uppercase tracking-widest2 text-ink border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-28 md:pt-32 pb-20 md:pb-28">
      {/* Header */}
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <p className="text-xs uppercase tracking-widest3 text-gold mb-3">The Collection</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink">
          {query ? `Results for “${query}”` : 'Shop All Jewelry'}
        </h1>
        <p className="mt-3 text-muted">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-10 mt-10 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <FilterContent />
        </aside>

        {/* Mobile filter toggle */}
        <div className="lg:hidden flex items-center justify-between">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink border border-sand px-4 py-3"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
            {activeFilterCount > 0 && (
              <span className="bg-gold text-ivory rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort dropdown */}
          <div className="relative">
            <SortDropdown sort={sort} setSort={setSort} />
          </div>
        </div>

        {/* Grid + sort (desktop) */}
        <div>
          <div className="hidden lg:flex items-center justify-end mb-6">
            <SortDropdown sort={sort} setSort={setSort} />
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
              <p className="mt-2 text-muted">Try adjusting or clearing your filters.</p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 bg-gold text-ivory text-xs uppercase tracking-widest2 px-8 py-3 hover:bg-gold-soft transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-80 max-w-[85%] bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="text-ink hover:text-gold"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="mt-8 w-full bg-gold text-ivory text-xs uppercase tracking-widest2 py-4 hover:bg-gold-soft transition-colors"
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
  const current = SORT_OPTIONS.find((o) => o.id === sort)
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
      >
        Sort: <span className="text-muted">{current?.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <ul className="absolute right-0 mt-2 w-52 bg-ivory border border-sand shadow-lg z-20 py-2">
            {SORT_OPTIONS.map((o) => (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSort(o.id)
                    setOpen(false)
                  }}
                  className={cn(
                    'w-full text-left px-4 py-2.5 text-sm transition-colors',
                    sort === o.id ? 'text-gold bg-cream' : 'text-ink hover:bg-cream'
                  )}
                >
                  {o.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
