import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under50', label: 'Under $50' },
  { value: '50to80', label: '$50 — $80' },
  { value: 'over80', label: 'Over $80' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [priceFilter, setPriceFilter] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setActiveCategory(initialCategory)
  }, [initialCategory])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frame)
  }, [activeCategory, priceFilter, sort])

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (priceFilter === 'under50') result = result.filter((p) => p.price < 50)
    if (priceFilter === '50to80')
      result = result.filter((p) => p.price >= 50 && p.price <= 80)
    if (priceFilter === 'over80') result = result.filter((p) => p.price > 80)

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [activeCategory, priceFilter, sort])

  const clearFilters = () => {
    setActiveCategory('all')
    setPriceFilter('all')
    setSearchParams({})
  }

  const categoryCount = (id) =>
    id === 'all'
      ? products.length
      : products.filter((p) => p.category === id).length

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24 bg-velmora-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-velmora-muted mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-velmora-text tracking-wide">
            Shop All
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-velmora-border">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] font-semibold text-velmora-text"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm text-velmora-muted">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-velmora-border pl-4 pr-10 py-2.5 font-sans text-xs uppercase tracking-[0.1em] text-velmora-text focus:outline-none focus:border-velmora-accent"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters */}
          <aside
            className={`md:w-64 flex-shrink-0 ${
              mobileFiltersOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="md:hidden flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-velmora-text mb-4">
                  Category
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory('all')
                        setSearchParams({})
                      }}
                      className={`text-sm transition-colors ${
                        activeCategory === 'all'
                          ? 'text-velmora-accent font-medium'
                          : 'text-velmora-muted hover:text-velmora-text'
                      }`}
                    >
                      All ({categoryCount('all')})
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat.id)
                          setSearchParams({ category: cat.id })
                        }}
                        className={`text-sm transition-colors ${
                          activeCategory === cat.id
                            ? 'text-velmora-accent font-medium'
                            : 'text-velmora-muted hover:text-velmora-text'
                        }`}
                      >
                        {cat.name} ({categoryCount(cat.id)})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-velmora-text mb-4">
                  Price
                </h3>
                <ul className="space-y-2.5">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        type="button"
                        onClick={() => setPriceFilter(range.value)}
                        className={`text-sm transition-colors ${
                          priceFilter === range.value
                            ? 'text-velmora-accent font-medium'
                            : 'text-velmora-muted hover:text-velmora-text'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {(activeCategory !== 'all' || priceFilter !== 'all') && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-[0.15em] font-semibold text-velmora-text border-b border-velmora-text pb-0.5 hover:text-velmora-accent hover:border-velmora-accent transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <main className="flex-1">
            <p className="md:hidden text-sm text-velmora-muted mb-4">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-text">
                  No products match your filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-sm uppercase tracking-[0.15em] font-semibold text-velmora-accent hover:text-velmora-accent-hover"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    imgId={`shop-${product.id}-img`}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
