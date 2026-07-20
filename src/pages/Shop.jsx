import { useMemo, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

const CATEGORY_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' },
]

const PRICE_OPTIONS = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 49 },
  { id: '50to100', label: '$50 – $100', min: 50, max: 100 },
  { id: 'over100', label: 'Over $100', min: 101, max: Infinity },
]

const MATERIAL_OPTIONS = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: '18K Gold Plated' },
]

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

function matchesCategory(product, categoryId) {
  if (categoryId === 'all') return true
  if (categoryId === 'sets') return product.type === 'set'
  return product.type === categoryId.slice(0, -1) || product.type === categoryId
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef(null)

  const initialCategory = searchParams.get('category') || 'all'
  const query = searchParams.get('q') || ''

  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setCategory(searchParams.get('category') || 'all')
  }, [searchParams])

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, price, material, sort, query])

  const filtered = useMemo(() => {
    let list = products.slice()

    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      )
    }

    list = list.filter((p) => matchesCategory(p, category))

    const priceOpt = PRICE_OPTIONS.find((o) => o.id === price)
    if (priceOpt) {
      list = list.filter((p) => p.price >= priceOpt.min && p.price <= priceOpt.max)
    }

    if (material !== 'all') {
      list = list.filter((p) => p.tone === material)
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
  }, [query, category, price, material, sort])

  const updateCategory = (id) => {
    setCategory(id)
    const next = new URLSearchParams(searchParams)
    if (id === 'all') next.delete('category')
    else next.set('category', id)
    setSearchParams(next, { replace: true })
  }

  const FilterPanel = (
    <div className="space-y-10">
      <FilterGroup label="Category">
        {CATEGORY_OPTIONS.map((o) => (
          <FilterOption
            key={o.id}
            label={o.label}
            active={category === o.id}
            onClick={() => updateCategory(o.id)}
          />
        ))}
      </FilterGroup>
      <FilterGroup label="Price">
        {PRICE_OPTIONS.map((o) => (
          <FilterOption
            key={o.id}
            label={o.label}
            active={price === o.id}
            onClick={() => setPrice(o.id)}
          />
        ))}
      </FilterGroup>
      <FilterGroup label="Material">
        {MATERIAL_OPTIONS.map((o) => (
          <FilterOption
            key={o.id}
            label={o.label}
            active={material === o.id}
            onClick={() => setMaterial(o.id)}
          />
        ))}
      </FilterGroup>
    </div>
  )

  return (
    <div ref={ref} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-8 text-center border-b border-line">
        <p className="text-xs tracking-[0.3em] uppercase text-stone mb-3">The Collection</p>
        <h1 className="font-serif text-4xl md:text-6xl">
          {query ? `Results for “${query}”` : 'Shop All Jewelry'}
        </h1>
        <p className="text-stone mt-3 text-sm">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-[0.2em] uppercase border border-ink px-4 py-2.5"
              >
                <SlidersHorizontal width={14} height={14} />
                Filters
              </button>
              <p className="hidden md:block text-xs tracking-[0.2em] uppercase text-stone">
                {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs tracking-[0.2em] uppercase text-stone">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs tracking-wide border border-line bg-cream py-2.5 px-3 outline-none focus:border-ink transition-colors"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-3xl mb-3">No pieces found</p>
                <p className="text-stone text-sm">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
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
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-ink/40 overlay-in" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-cream slide-in flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-line">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X width={22} height={22} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
            <div className="px-6 py-5 border-t border-line">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-champagne text-cream text-xs tracking-[0.2em] uppercase py-4 hover:bg-champagne-deep transition-colors"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterGroup({ label, children }) {
  return (
    <div>
      <h3 className="text-xs tracking-[0.25em] uppercase text-stone mb-4">{label}</h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  )
}

function FilterOption({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'text-sm text-left py-1 transition-colors',
        active ? 'text-ink font-medium' : 'text-stone hover:text-ink',
      )}
    >
      <span className={cn('inline-block w-3 mr-2', active && 'text-champagne')}>{active ? '—' : ''}</span>
      {label}
    </button>
  )
}
