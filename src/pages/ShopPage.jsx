import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check, ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import { CATEGORIES, MATERIALS, products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import Reveal from '@/components/Reveal'
import { cn } from '@/lib/utils'

const priceRanges = [
  { id: 'all', label: 'All Prices', test: () => true },
  { id: 'under-50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50-75', label: '$50 – $75', test: (p) => p.price >= 50 && p.price <= 75 },
  { id: 'over-75', label: 'Over $75', test: (p) => p.price > 75 },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'name', label: 'Alphabetical' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const setCategory = (cat) => {
    if (cat === 'All') searchParams.delete('category')
    else searchParams.set('category', cat)
    setSearchParams(searchParams, { replace: true })
  }

  const filtered = useMemo(() => {
    const range = priceRanges.find((r) => r.id === priceRange) ?? priceRanges[0]
    let list = products.filter((p) => {
      const catOk =
        activeCategory === 'All' ||
        p.category === activeCategory ||
        (activeCategory === 'Sets' && p.category === 'Sets')
      return catOk && range.test(p)
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
      case 'name':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }
    return list
  }, [activeCategory, priceRange, sort])

  const hasActiveFilters = activeCategory !== 'All' || priceRange !== 'all' || material !== 'all'
  const clearAll = () => {
    setCategory('All')
    setPriceRange('all')
    setMaterial('all')
  }

  useEffect(() => {
    if (!filtersOpen) return undefined
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setFiltersOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [filtersOpen])

  const filterContent = (
    <div className="space-y-10">
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">Category</h3>
        <ul className="mt-5 space-y-3">
          {['All', ...CATEGORIES, 'Sets'].map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  'text-sm tracking-wide transition-colors duration-300',
                  activeCategory === cat ? 'font-semibold text-gold' : 'text-sand hover:text-ivory',
                )}
              >
                {cat === 'All' ? 'All Jewelry' : cat}
                <span className="ml-2 text-xs text-taupe">
                  {cat === 'All'
                    ? `(${products.length})`
                    : `(${products.filter((p) => p.category === cat).length})`}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line/60 pt-8">
        <h3 className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">Price</h3>
        <ul className="mt-5 space-y-3">
          {priceRanges.map((range) => (
            <li key={range.id}>
              <button
                type="button"
                onClick={() => setPriceRange(range.id)}
                className="group flex items-center gap-3 text-sm tracking-wide"
              >
                <span
                  className={cn(
                    'flex h-4 w-4 items-center justify-center border transition-all duration-300',
                    priceRange === range.id
                      ? 'border-gold bg-gold text-inkonaccent'
                      : 'border-line group-hover:border-sand',
                  )}
                >
                  {priceRange === range.id && <Check className="h-3 w-3" />}
                </span>
                <span className={priceRange === range.id ? 'text-ivory' : 'text-sand group-hover:text-ivory'}>
                  {range.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line/60 pt-8">
        <h3 className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">Material</h3>
        <ul className="mt-5 space-y-3">
          {['all', ...MATERIALS].map((mat) => (
            <li key={mat}>
              <button
                type="button"
                onClick={() => setMaterial(mat)}
                className="group flex items-center gap-3 text-sm tracking-wide"
              >
                <span
                  className={cn(
                    'flex h-4 w-4 items-center justify-center border transition-all duration-300',
                    material === mat
                      ? 'border-gold bg-gold text-inkonaccent'
                      : 'border-line group-hover:border-sand',
                  )}
                >
                  {material === mat && <Check className="h-3 w-3" />}
                </span>
                <span className={material === mat ? 'text-ivory' : 'text-sand group-hover:text-ivory'}>
                  {mat === 'all' ? 'All Materials' : mat}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="border-b border-gold/50 pb-1 text-[11px] font-semibold uppercase tracking-widest2 text-gold transition-colors hover:border-gold hover:text-goldlight"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-16 md:pt-20">
      <header className="border-b border-line/60 bg-coal">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-10 md:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">
            The Collection
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light text-ivory md:text-6xl">
            {activeCategory === 'All' ? (
              <>All <span className="italic text-goldlight">Pieces</span></>
            ) : (
              <span className="italic text-goldlight">{activeCategory}</span>
            )}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-sand">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} in demi-fine 18K gold —
            designed to be worn daily and kept forever.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filterContent}</div>
          </aside>

          <div>
            <div className="flex items-center justify-between gap-4 border-b border-line/60 pb-5">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="flex items-center gap-2 border border-line px-4 py-2.5 text-[11px] font-semibold uppercase tracking-widest2 text-sand transition-colors hover:border-gold hover:text-gold lg:hidden"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filters
              </button>
              <p className="hidden text-xs uppercase tracking-widest2 text-taupe lg:block">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="relative">
                <label htmlFor="sort" className="sr-only">Sort by</label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-line bg-ink py-2.5 pl-4 pr-10 text-[11px] font-semibold uppercase tracking-widest2 text-sand transition-colors hover:border-gold focus:border-gold focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center gap-4 py-24 text-center">
                <p className="font-serif text-3xl font-light text-ivory">No pieces match</p>
                <p className="text-sm text-sand">Try widening your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-2 bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-widest2 text-inkonaccent transition-colors hover:bg-goldlight"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8">
                {filtered.map((product, i) => (
                  <Reveal key={product.id} delay={Math.min(i, 5) * 70}>
                    <ProductCard product={product} ratio="3x4" />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <button
            type="button"
            aria-label="Close filters"
            className="absolute inset-0 animate-fade-in bg-ink/70 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-sm animate-slide-in-right flex-col border-l border-line bg-coal">
            <div className="flex items-center justify-between border-b border-line/60 px-6 py-5">
              <h2 className="font-serif text-xl font-medium uppercase tracking-[0.18em] text-ivory">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                aria-label="Close filters"
                className="flex h-9 w-9 items-center justify-center text-sand transition-colors hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-8">{filterContent}</div>
            <div className="border-t border-line/60 px-6 py-5">
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="w-full bg-gold py-4 text-xs font-semibold uppercase tracking-widest2 text-inkonaccent transition-colors hover:bg-goldlight"
              >
                View {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
