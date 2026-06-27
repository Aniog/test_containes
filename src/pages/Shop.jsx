import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const ALL_CATEGORIES = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
const MATERIALS = ['18K Gold Plated']
const PRICE_BUCKETS = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]
const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')

  // Keep category filter in sync with URL ?category=
  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCategories(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((current) =>
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const bucket = PRICE_BUCKETS.find((b) => b.id === id)
          return bucket && p.price >= bucket.min && p.price < bucket.max
        })
        if (!matches) return false
      }
      return true
    })

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const activeCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length

  // Re-scan stock images when filtered list changes.
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filtered])

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-velmora-ink">
          Category
        </h3>
        <ul className="space-y-2.5">
          {ALL_CATEGORIES.map((cat) => (
            <li key={cat}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-velmora-stone transition-colors hover:text-velmora-ink">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggle(selectedCategories, setSelectedCategories, cat)}
                  className="h-3.5 w-3.5 accent-velmora-gold"
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-velmora-ink">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((bucket) => (
            <li key={bucket.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-velmora-stone transition-colors hover:text-velmora-ink">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(bucket.id)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, bucket.id)}
                  className="h-3.5 w-3.5 accent-velmora-gold"
                />
                {bucket.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-velmora-ink">
          Material
        </h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((mat) => (
            <li key={mat}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-velmora-stone transition-colors hover:text-velmora-ink">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => toggle(selectedMaterials, setSelectedMaterials, mat)}
                  className="h-3.5 w-3.5 accent-velmora-gold"
                />
                {mat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.15em] text-velmora-gold underline underline-offset-4"
        >
          Clear All ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-28">
      {/* Page header */}
      <div className="border-b border-velmora-line">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-velmora-ink md:text-5xl">
            All Jewelry
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-velmora-stone">
            Demi-fine gold, designed to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between border-b border-velmora-line pb-4">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-velmora-ink md:hidden"
              >
                Filters {activeCount > 0 && `(${activeCount})`}
              </button>
              <p className="hidden text-xs text-velmora-stone md:block">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-[11px] uppercase tracking-[0.15em] text-velmora-stone">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-velmora-line bg-velmora-cream px-3 py-2 text-xs text-velmora-ink focus:border-velmora-gold focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-velmora-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-[0.15em] text-velmora-gold underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[80] md:hidden',
          filtersOpen ? '' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-velmora-ink/40 transition-opacity duration-300',
            filtersOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-velmora-cream p-6 transition-transform duration-300',
            filtersOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-xl text-velmora-ink">Filters</h2>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="text-[11px] uppercase tracking-[0.15em] text-velmora-gold"
            >
              Close
            </button>
          </div>
          {FilterPanel}
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="mt-8 w-full bg-velmora-gold py-4 text-[11px] uppercase tracking-[0.18em] text-white"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </div>
    </div>
  )
}
