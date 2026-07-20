import React, { useEffect, useMemo, useState, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { PRODUCTS, CATEGORIES, MATERIALS } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { formatPrice, cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

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

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const gridRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (gridRef.current) {
        ImageHelper.loadImages(strkImgConfig, gridRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const initialCategory = searchParams.get('category') || 'all'
  const initialQ = searchParams.get('q') || ''

  const [category, setCategory] = useState(initialCategory)
  const [material, setMaterial] = useState('all')
  const [price, setPrice] = useState('all')
  const [sort, setSort] = useState('featured')
  const [q] = useState(initialQ)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL when it changes (e.g. nav clicks).
  useEffect(() => {
    setCategory(searchParams.get('category') || 'all')
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    if (category !== 'all') {
      list = list.filter((p) => p.category === category)
    }
    if (material !== 'all') {
      list = list.filter((p) => p.material === material)
    }
    const range = PRICE_RANGES.find((r) => r.id === price)
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    }
    if (q.trim()) {
      const needle = q.trim().toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(needle) ||
          p.tagline.toLowerCase().includes(needle) ||
          p.categoryName.toLowerCase().includes(needle)
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
        list.sort((a, b) => Number(b.bestseller) - Number(a.bestseller))
    }
    return list
  }, [category, material, price, sort, q])

  const updateCategoryUrl = (next) => {
    setCategory(next)
    const params = new URLSearchParams(searchParams)
    if (next === 'all') params.delete('category')
    else params.set('category', next)
    setSearchParams(params, { replace: true })
  }

  const resetFilters = () => {
    setCategory('all')
    setMaterial('all')
    setPrice('all')
    setSort('featured')
    setSearchParams({}, { replace: true })
  }

  const activeFilterCount =
    (category !== 'all' ? 1 : 0) +
    (material !== 'all' ? 1 : 0) +
    (price !== 'all' ? 1 : 0)

  const FilterPanel = (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-espresso mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => updateCategoryUrl('all')}
              className={cn(
                'text-sm transition-colors',
                category === 'all' ? 'text-champagne-deep' : 'text-espresso/70 hover:text-espresso'
              )}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => updateCategoryUrl(c.id)}
                className={cn(
                  'text-sm transition-colors',
                  category === c.id ? 'text-champagne-deep' : 'text-espresso/70 hover:text-espresso'
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
        <h3 className="text-xs uppercase tracking-widest2 text-espresso mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPrice(r.id)}
                className={cn(
                  'text-sm transition-colors',
                  price === r.id ? 'text-champagne-deep' : 'text-espresso/70 hover:text-espresso'
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
        <h3 className="text-xs uppercase tracking-widest2 text-espresso mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setMaterial('all')}
              className={cn(
                'text-sm transition-colors',
                material === 'all' ? 'text-champagne-deep' : 'text-espresso/70 hover:text-espresso'
              )}
            >
              All Materials
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setMaterial(m.id)}
                className={cn(
                  'text-sm transition-colors',
                  material === m.id ? 'text-champagne-deep' : 'text-espresso/70 hover:text-espresso'
                )}
              >
                {m.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={resetFilters}
          className="text-xs uppercase tracking-widest2 text-taupe underline underline-offset-4 hover:text-espresso transition-colors"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <>
      {/* Header */}
      <div className="pt-24 md:pt-28 bg-sand">
        <div className="container-velmora py-12 md:py-16 text-center">
          <p className="eyebrow mb-3">The Collection</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl text-ink">
            {q ? `Results for “${q}”` : 'Shop All Jewelry'}
          </h1>
          <p className="mt-4 text-espresso/70 max-w-xl mx-auto">
            Demi-fine 18K gold plated pieces, designed to be worn every day.
          </p>
        </div>
      </div>

      <section className="bg-cream py-12 md:py-16">
        <div className="container-velmora">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
            {/* Sidebar (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">{FilterPanel}</div>
            </aside>

            {/* Main */}
            <div>
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-linen">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-espresso border border-linen px-4 py-2.5"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="bg-champagne text-ink text-[10px] px-1.5 rounded-full">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
                <p className="hidden lg:block text-xs uppercase tracking-widest2 text-taupe">
                  {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
                </p>

                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-linen text-xs uppercase tracking-widest2 text-espresso pl-4 pr-9 py-2.5 outline-none cursor-pointer hover:border-espresso transition-colors"
                  >
                    {SORTS.map((s) => (
                      <option key={s.id} value={s.id} className="bg-cream text-espresso">
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-espresso pointer-events-none"
                  />
                </div>
              </div>

              {/* Grid */}
              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-serif text-3xl text-ink">No pieces found</p>
                  <p className="mt-3 text-sm text-taupe">
                    Try adjusting your filters or search.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="btn-outline-dark mt-8"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div
                  ref={gridRef}
                  className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 mt-8"
                >
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-[2px] animate-overlay-in"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-cream flex flex-col animate-drawer-in shadow-lift">
            <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
              <h2 className="text-xs uppercase tracking-widest2 text-espresso">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-espresso hover:text-champagne-deep"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-7">{FilterPanel}</div>
            <div className="border-t border-linen px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-primary w-full"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
