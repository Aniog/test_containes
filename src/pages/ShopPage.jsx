import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-80', label: '$50 - $80' },
  { value: '80-120', label: '$80 - $120' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category') || 'all'
    setSelectedCategory(cat)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter((p) => p.price >= min && p.price <= max)
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
  }, [selectedCategory, priceRange, sortBy])

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    const next = new URLSearchParams(searchParams)
    if (cat === 'all') {
      next.delete('category')
    } else {
      next.set('category', cat)
    }
    setSearchParams(next, { replace: true })
  }

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) + (priceRange !== 'all' ? 1 : 0)

  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return undefined
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filteredProducts.map((p) => p.id).join(',')])

  const FilterContent = () => (
    <>
      <div>
        <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-espresso-900">Category</h3>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => handleCategoryChange('all')}
            className={`text-left font-sans text-sm transition-colors ${selectedCategory === 'all' ? 'font-semibold text-espresso-900' : 'text-warmgray-500 hover:text-espresso-900'}`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryChange(cat.id)}
              className={`text-left font-sans text-sm transition-colors ${selectedCategory === cat.id ? 'font-semibold text-espresso-900' : 'text-warmgray-500 hover:text-espresso-900'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-espresso-900">Price</h3>
        <div className="flex flex-col gap-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              type="button"
              onClick={() => setPriceRange(range.value)}
              className={`text-left font-sans text-sm transition-colors ${priceRange === range.value ? 'font-semibold text-espresso-900' : 'text-warmgray-500 hover:text-espresso-900'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          type="button"
          onClick={() => {
            handleCategoryChange('all')
            setPriceRange('all')
          }}
          className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-warmgray-500 hover:text-espresso-900"
        >
          <X size={12} />
          Clear Filters
        </button>
      )}
    </>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-cream-100 pt-24 pb-16 md:pt-32">
      <div className="container-velmora">
        <div className="mb-8 md:mb-12">
          <span className="section-label">The Collection</span>
          <h1 id="shop-title" className="mt-2 font-display text-4xl font-medium md:text-5xl">Shop All</h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop sidebar */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <FilterContent />
          </aside>

          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 border border-warmgray-200 bg-transparent px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-espresso-900"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-espresso-900">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border border-warmgray-200 bg-transparent py-2.5 pl-4 pr-10 font-sans text-xs font-semibold uppercase tracking-widest text-espresso-900 focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-warmgray-500" />
            </div>
          </div>

          {/* Mobile filters drawer */}
          {mobileFiltersOpen && (
            <>
              <div
                className="fixed inset-0 z-40 bg-espresso-900/40 md:hidden"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="fixed inset-y-0 left-0 z-50 w-[min(85vw,320px)] bg-cream-100 p-6 shadow-2xl md:hidden">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="font-serif text-xl font-medium uppercase tracking-widest">Filters</h2>
                  <button type="button" onClick={() => setMobileFiltersOpen(false)}>
                    <X size={20} strokeWidth={1.5} />
                  </button>
                </div>
                <FilterContent />
              </div>
            </>
          )}

          <main className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="font-sans text-sm text-warmgray-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none border border-warmgray-200 bg-transparent py-2.5 pl-4 pr-10 font-sans text-xs font-semibold uppercase tracking-widest text-espresso-900 focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-warmgray-500" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center border border-warmgray-200 py-20 text-center">
                <p className="font-serif text-xl">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    handleCategoryChange('all')
                    setPriceRange('all')
                  }}
                  className="btn-secondary mt-6"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} contextId="shop-title" />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
