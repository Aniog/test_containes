import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products, categories } from '@/data/products'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
]

const priceRanges = [
  { value: 'under-50', label: 'Under $50', filter: (p) => p.price < 50 },
  { value: '50-75', label: '$50 – $75', filter: (p) => p.price >= 50 && p.price <= 75 },
  { value: '75-100', label: '$75 – $100', filter: (p) => p.price >= 75 && p.price <= 100 },
]

const materials = ['18K Gold Plated', 'Silver Tone']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeMaterial = searchParams.get('material') || ''

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    setSearchParams(next, { replace: true })
  }

  const clearFilters = () => {
    setSearchParams({}, { replace: true })
    setSortBy('featured')
  }

  const hasFilters = activeCategory || activePrice || activeMaterial

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.value === activePrice)
      if (range) {
        result = result.filter(range.filter)
      }
    }
    if (activeMaterial) {
      result = result.filter((p) =>
        p.variants.some((v) => v.toLowerCase().includes(activeMaterial.toLowerCase()))
      )
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeMaterial, sortBy])

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-[10px] tracking-[0.2em] text-velvet-500 uppercase mb-3">
          Category
        </h3>
        <div className="space-y-1">
          <button
            onClick={() => setFilter('category', '')}
            className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
              !activeCategory
                ? 'text-velvet-950 font-medium'
                : 'text-velvet-500 hover:text-velvet-900'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', activeCategory === cat.id ? '' : cat.id)}
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                activeCategory === cat.id
                  ? 'text-velvet-950 font-medium'
                  : 'text-velvet-500 hover:text-velvet-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-[10px] tracking-[0.2em] text-velvet-500 uppercase mb-3">
          Price
        </h3>
        <div className="space-y-1">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() =>
                setFilter('price', activePrice === range.value ? '' : range.value)
              }
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                activePrice === range.value
                  ? 'text-velvet-950 font-medium'
                  : 'text-velvet-500 hover:text-velvet-900'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-[10px] tracking-[0.2em] text-velvet-500 uppercase mb-3">
          Material
        </h3>
        <div className="space-y-1">
          {materials.map((mat) => {
            const matValue = mat.toLowerCase().replace(/\s+/g, '-')
            return (
              <button
                key={mat}
                onClick={() =>
                  setFilter('material', activeMaterial === matValue ? '' : matValue)
                }
                className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                  activeMaterial === matValue
                    ? 'text-velvet-950 font-medium'
                    : 'text-velvet-500 hover:text-velvet-900'
                }`}
              >
                {mat}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-[10px] tracking-[0.35em] text-velvet-500 uppercase mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-velvet-950 font-medium tracking-tight">
            {activeCategory
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'Shop All'}
          </h1>
          <div className="hairline-divider w-16 mx-auto mt-6" />
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-6 font-sans text-[10px] tracking-[0.15em] text-velvet-400 hover:text-velvet-900 uppercase transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-5 py-3 bg-velvet-950 text-cream-50 text-xs font-sans tracking-wider uppercase shadow-xl"
            >
              <SlidersHorizontal size={14} strokeWidth={1} />
              Filters
              {hasFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-cream-50" />
              )}
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-cream-50 px-6 py-8 rounded-t-2xl max-h-[70vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-lg tracking-wider">Filters</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-1 text-velvet-500"
                  >
                    <X size={18} strokeWidth={1} />
                  </button>
                </div>
                <FilterContent />
                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => {
                      clearFilters()
                      setMobileFiltersOpen(false)
                    }}
                    className="flex-1 font-sans text-xs tracking-wider uppercase py-3 border border-velvet-200 text-velvet-600"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="flex-1 font-sans text-xs tracking-wider uppercase py-3 bg-velvet-950 text-cream-50"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort + Results */}
            <div className="flex items-center justify-between mb-8">
              <p className="font-sans text-xs text-velvet-500">
                {filteredProducts.length}{' '}
                {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none font-sans text-xs text-velvet-700 bg-transparent pr-6 py-1 border-b border-velvet-200 cursor-pointer focus:outline-none focus:border-velvet-950 transition-colors"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={12}
                  strokeWidth={1}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-velvet-400"
                />
              </div>
            </div>

            {/* Active filter tags */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCategory && (
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-sans tracking-wider uppercase bg-velvet-950 text-cream-50 px-2.5 py-1">
                    {categories.find((c) => c.id === activeCategory)?.name ||
                      activeCategory}
                    <button
                      onClick={() => setFilter('category', '')}
                      className="ml-0.5"
                    >
                      <X size={10} strokeWidth={1.5} />
                    </button>
                  </span>
                )}
                {activePrice && (
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-sans tracking-wider uppercase bg-velvet-950 text-cream-50 px-2.5 py-1">
                    {priceRanges.find((r) => r.value === activePrice)?.label ||
                      activePrice}
                    <button
                      onClick={() => setFilter('price', '')}
                      className="ml-0.5"
                    >
                      <X size={10} strokeWidth={1.5} />
                    </button>
                  </span>
                )}
                {activeMaterial && (
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-sans tracking-wider uppercase bg-velvet-950 text-cream-50 px-2.5 py-1">
                    {activeMaterial}
                    <button
                      onClick={() => setFilter('material', '')}
                      className="ml-0.5"
                    >
                      <X size={10} strokeWidth={1.5} />
                    </button>
                  </span>
                )}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-velvet-500 mb-4">
                  No products match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline text-xs"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
