import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'
import Reveal from '@/components/ui/Reveal'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import { cn } from '@/lib/utils'

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', test: () => true },
  { id: 'under-50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50-80', label: '$50 – $80', test: (p) => p.price >= 50 && p.price <= 80 },
  { id: 'over-80', label: 'Over $80', test: (p) => p.price > 80 },
]

const MATERIALS = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'crystal', label: 'With Crystals' },
]

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const category = searchParams.get('category') || 'All'

  const setCategory = (cat) => {
    const next = new URLSearchParams(searchParams)
    if (cat === 'All') next.delete('category')
    else next.set('category', cat)
    setSearchParams(next, { replace: true })
  }

  const products = useMemo(() => {
    let list = [...PRODUCTS]
    if (category !== 'All') list = list.filter((p) => p.category === category)
    const priceRange = PRICE_RANGES.find((r) => r.id === price)
    if (priceRange) list = list.filter(priceRange.test)
    if (material === 'crystal') list = list.filter((p) => p.tagline.toLowerCase().includes('crystal'))
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
  }, [category, price, material, sort])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [products])

  const filterPanel = (
    <div className="space-y-9">
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-espresso">Category</h3>
        <ul className="mt-4 space-y-2.5">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  'text-sm transition-colors duration-300',
                  category === cat ? 'font-medium text-gold-deep' : 'text-mocha hover:text-espresso',
                )}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line pt-8">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-espresso">Price</h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_RANGES.map((range) => (
            <li key={range.id}>
              <button
                type="button"
                onClick={() => setPrice(range.id)}
                className={cn(
                  'text-sm transition-colors duration-300',
                  price === range.id ? 'font-medium text-gold-deep' : 'text-mocha hover:text-espresso',
                )}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line pt-8">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-espresso">Material</h3>
        <ul className="mt-4 space-y-2.5">
          {MATERIALS.map((mat) => (
            <li key={mat.id}>
              <button
                type="button"
                onClick={() => setMaterial(mat.id)}
                className={cn(
                  'text-sm transition-colors duration-300',
                  material === mat.id ? 'font-medium text-gold-deep' : 'text-mocha hover:text-espresso',
                )}
              >
                {mat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="border-b border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-10 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">The Collection</p>
          <h1 className="mt-3 font-display text-4xl font-light text-espresso md:text-5xl">
            {category === 'All' ? 'All Jewelry' : category}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-mocha">
            {products.length} piece{products.length === 1 ? '' : 's'}, handcrafted in warm 18K gold.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
        <div className="mb-8 flex items-center justify-between md:mb-10">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 border border-espresso/25 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-espresso md:hidden"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
          </button>
          <p className="hidden text-xs uppercase tracking-[0.2em] text-taupe md:block">
            Showing {products.length} of {PRODUCTS.length}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              className="appearance-none border border-espresso/25 bg-ivory py-2.5 pl-5 pr-10 text-[11px] font-medium uppercase tracking-[0.16em] text-espresso focus:border-gold focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mocha" />
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[200px_1fr] lg:grid-cols-[220px_1fr]">
          <aside className="hidden md:block">
            <div className="sticky top-28">{filterPanel}</div>
          </aside>

          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="font-display text-3xl font-light text-espresso">No pieces match your filters</p>
              <p className="mt-3 text-sm text-mocha">Try widening your selection — every piece is worth a look.</p>
              <button
                type="button"
                onClick={() => {
                  setCategory('All')
                  setPrice('all')
                  setMaterial('all')
                }}
                className="mt-6 border border-espresso/25 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso transition-colors hover:bg-espresso hover:text-ivory"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <div className="anim-fade-in absolute inset-0 bg-espresso/50" onClick={() => setFiltersOpen(false)} />
          <aside className="anim-drawer-in absolute right-0 top-0 flex h-full w-80 max-w-full flex-col bg-ivory p-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-2xl text-espresso">Filters</h2>
              <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Close filters" className="p-1 text-mocha">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{filterPanel}</div>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="mt-6 w-full bg-espresso py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory"
            >
              View {products.length} Piece{products.length === 1 ? '' : 's'}
            </button>
          </aside>
        </div>
      )}
    </div>
  )
}
