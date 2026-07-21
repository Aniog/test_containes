import {useMemo, useState, useEffect, useRef} from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

const categoryOptions = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceBands = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]
const materialOptions = ['18K Gold Plated', 'Silver Tone']

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const initialCategory = searchParams.get('category')
  const [categories, setCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [priceBand, setPriceBand] = useState(null)
  const [materials, setMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL when it changes
  useEffect(() => {
    const c = searchParams.get('category')
    setCategories(c ? [c] : [])
  }, [searchParams])

  const toggle = (setter, value) =>
    setter((current) =>
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    )

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false
      if (priceBand) {
        const band = priceBands.find((b) => b.id === priceBand)
        if (band && (p.price < band.min || p.price >= band.max)) return false
      }
      if (materials.length) {
        const hasGold = materials.includes('18K Gold Plated')
        const hasSilver = materials.includes('Silver Tone')
        if (hasGold && !hasSilver && p.tone !== 'gold') return false
        if (hasSilver && !hasGold && p.tone !== 'silver') return false
      }
      return true
    })

    list = [...list]
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)

    return list
  }, [categories, priceBand, materials, sort])

  const clearAll = () => {
    setCategories([])
    setPriceBand(null)
    setMaterials([])
    setSearchParams({})
  }

  const FilterPanel = (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest3 text-ink font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categoryOptions.map((c) => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={categories.includes(c)}
                onChange={() => {
                  toggle(setCategories, c)
                  setSearchParams({})
                }}
                className="w-4 h-4 accent-gold border-line"
              />
              <span className="text-sm text-ink group-hover:text-gold transition-colors">
                {c}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest3 text-ink font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceBands.map((b) => (
            <label key={b.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={priceBand === b.id}
                onChange={() => setPriceBand(b.id)}
                className="w-4 h-4 accent-gold border-line"
              />
              <span className="text-sm text-ink group-hover:text-gold transition-colors">
                {b.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest3 text-ink font-medium mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {materialOptions.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={materials.includes(m)}
                onChange={() => toggle(setMaterials, m)}
                className="w-4 h-4 accent-gold border-line"
              />
              <span className="text-sm text-ink group-hover:text-gold transition-colors">
                {m}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={clearAll}
        className="text-[11px] uppercase tracking-widest3 text-sand hover:text-gold transition-colors underline underline-offset-4"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28">
      {/* Header */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-10 md:py-14 text-center border-b border-line">
        <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
          The Collection
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink">
          Shop All Jewelry
        </h1>
        <p className="mt-4 text-sand max-w-md mx-auto">
          Demi-fine gold pieces, designed to be worn and treasured.
        </p>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="flex gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
              <p className="text-sm text-sand">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest3 text-ink"
                >
                  <SlidersHorizontal size={15} /> Filters
                </button>
                <label className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-widest3 text-sand hidden sm:inline">
                    Sort
                  </span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-transparent border border-line text-sm text-ink px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {sortOptions.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-gold underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
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
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-ivory p-6 overflow-y-auto animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="text-ink"
                aria-label="Close filters"
              >
                <X size={22} />
              </button>
            </div>
            {FilterPanel}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className={cn(
                'mt-8 w-full bg-gold text-espresso text-[11px] uppercase tracking-widest3 py-3.5'
              )}
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
