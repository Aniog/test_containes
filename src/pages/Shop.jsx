import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { fetchProducts } from '../api/products'
import ProductCard from '../components/ProductCard'
import { categories, formatPrice } from '../lib/data'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
]

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 & Over', min: 80, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category') || 'all'
  )
  const [activePrice, setActivePrice] = useState('all')
  const [activeMaterial, setActiveMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchProducts()
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [products])

  const filtered = products
    .filter((p) => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false
      if (activePrice !== 'all') {
        const range = priceRanges.find((r) => r.label === activePrice)
        if (range && (p.price < range.min || p.price > range.max)) return false
      }
      if (activeMaterial !== 'all' && p.material !== activeMaterial) return false
      return true
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'name-asc') return a.name.localeCompare(b.name)
      return 0
    })

  const activeFiltersCount =
    (activeCategory !== 'all' ? 1 : 0) +
    (activePrice !== 'all' ? 1 : 0) +
    (activeMaterial !== 'all' ? 1 : 0)

  const clearFilters = () => {
    setActiveCategory('all')
    setActivePrice('all')
    setActiveMaterial('all')
  }

  const FilterPanel = ({ mobile = false }) => (
    <div className="space-y-8">
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
          Category
        </h4>
        <div className="mt-4 space-y-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`block text-sm ${
              activeCategory === 'all'
                ? 'font-semibold text-velmora-gold'
                : 'text-velmora-taupe hover:text-velmora-espresso'
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`block text-sm ${
                activeCategory === c.id
                  ? 'font-semibold text-velmora-gold'
                  : 'text-velmora-taupe hover:text-velmora-espresso'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
          Price
        </h4>
        <div className="mt-4 space-y-2">
          <button
            type="button"
            onClick={() => setActivePrice('all')}
            className={`block text-sm ${
              activePrice === 'all'
                ? 'font-semibold text-velmora-gold'
                : 'text-velmora-taupe hover:text-velmora-espresso'
            }`}
          >
            All
          </button>
          {priceRanges.map((r) => (
            <button
              key={r.label}
              type="button"
              onClick={() => setActivePrice(r.label)}
              className={`block text-sm ${
                activePrice === r.label
                  ? 'font-semibold text-velmora-gold'
                  : 'text-velmora-taupe hover:text-velmora-espresso'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
          Material
        </h4>
        <div className="mt-4 space-y-2">
          {['all', '18k gold plated', 'sterling silver'].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setActiveMaterial(m)}
              className={`block text-sm capitalize ${
                activeMaterial === m
                  ? 'font-semibold text-velmora-gold'
                  : 'text-velmora-taupe hover:text-velmora-espresso'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {mobile && activeFiltersCount > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          className="text-sm text-velmora-espresso underline underline-offset-4"
        >
          Clear all
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl text-velmora-espresso md:text-4xl">
          Shop the Collection
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-velmora-taupe">
          Discover demi-fine gold jewelry designed for everyday luxury.
        </p>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row">
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <FilterPanel />
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-velmora-border pb-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-espresso lg:hidden"
              >
                <SlidersHorizontal size={16} className="pointer-events-none" />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="sort"
                  className="hidden font-sans text-xs font-medium uppercase tracking-widest text-velmora-taupe sm:inline"
                >
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-velmora-border bg-white px-3 py-2 font-sans text-xs uppercase tracking-widest text-velmora-espresso outline-none focus:border-velmora-gold"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {loading ? (
              <p className="py-24 text-center text-sm text-velmora-taupe">
                Loading products…
              </p>
            ) : error ? (
              <p className="py-24 text-center text-sm text-red-600">{error}</p>
            ) : filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-velmora-taupe">No products match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-sm font-semibold text-velmora-gold underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <p className="mb-4 text-xs text-velmora-taupe">
                  {filtered.length} product{filtered.length !== 1 && 's'}
                </p>
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-velmora-cream p-6 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-velmora-espresso">
                Filters
              </h3>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={22} className="pointer-events-none text-velmora-taupe" />
              </button>
            </div>
            <FilterPanel mobile />
          </aside>
        </div>
      )}
    </div>
  )
}
