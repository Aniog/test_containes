import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'
import ProductCard from '@/components/ProductCard'

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-50', label: 'Under $50', min: 0, max: 49.99 },
  { id: '50-75', label: '$50 — $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75.01, max: Infinity },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useImageLoader()

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  )
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = [...products]

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory)
    }

    if (selectedPrice !== 'all') {
      const range = priceRanges.find((r) => r.id === selectedPrice)
      if (range) {
        list = list.filter((p) => p.price >= range.min && p.price <= range.max)
      }
    }

    if (selectedMaterial !== 'all') {
      list = list.filter((p) => p.material === selectedMaterial)
    }

    switch (sortBy) {
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPrice('all')
    setSelectedMaterial('all')
    setSearchParams({})
  }

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedPrice !== 'all' ? 1 : 0) +
    (selectedMaterial !== 'all' ? 1 : 0)

  const Filters = () => (
    <div className="space-y-10">
      <div>
        <h3 className="text-xs uppercase tracking-widest font-semibold mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          <label className="flex items-center gap-3 text-sm cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'all'}
              onChange={() => {
                setSelectedCategory('all')
                setSearchParams({})
              }}
              className="accent-velmora-espresso"
            />
            <span className="group-hover:text-velmora-taupe transition-colors">
              All
            </span>
          </label>
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 text-sm cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => {
                  setSelectedCategory(cat.id)
                  setSearchParams({ category: cat.id })
                }}
                className="accent-velmora-espresso"
              />
              <span className="group-hover:text-velmora-taupe transition-colors">
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest font-semibold mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 text-sm cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={selectedPrice === range.id}
                onChange={() => setSelectedPrice(range.id)}
                className="accent-velmora-espresso"
              />
              <span className="group-hover:text-velmora-taupe transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest font-semibold mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {['all', '18k-gold-plated'].map((mat) => (
            <label
              key={mat}
              className="flex items-center gap-3 text-sm cursor-pointer group"
            >
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat}
                onChange={() => setSelectedMaterial(mat)}
                className="accent-velmora-espresso"
              />
              <span className="group-hover:text-velmora-taupe transition-colors capitalize">
                {mat === 'all' ? 'All Materials' : '18K Gold Plated'}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-24 sm:pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-velmora-taupe mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Shop All
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Desktop filters */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xs uppercase tracking-widest font-semibold">
                  Filters
                </h2>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs text-velmora-taupe underline hover:text-velmora-espresso"
                  >
                    Clear
                  </button>
                )}
              </div>
              <Filters />
            </div>
          </aside>

          {/* Main grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-medium"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
                {activeFilterCount > 0 && (
                  <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-velmora-espresso text-velmora-cream text-[10px]">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <p className="text-sm text-velmora-taupe hidden sm:block">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-hairline pl-4 pr-10 py-2 text-xs uppercase tracking-widest focus:outline-none focus:border-velmora-espresso"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24 border border-velmora-hairline bg-velmora-card">
                <p className="font-serif text-2xl mb-3">No pieces found</p>
                <p className="text-sm text-velmora-taupe mb-6">
                  Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-6 py-3 border border-velmora-espresso text-xs uppercase tracking-widest hover:bg-velmora-espresso hover:text-velmora-cream transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    queryIds={{
                      titleId: `shop-title-${product.id}`,
                      descId: `shop-desc-${product.id}`,
                    }}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-velmora-espresso/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-velmora-cream p-6 shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl tracking-widest">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <Filters />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-10 py-3.5 bg-velmora-espresso text-velmora-cream text-xs uppercase tracking-widest font-medium"
            >
              Show {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
