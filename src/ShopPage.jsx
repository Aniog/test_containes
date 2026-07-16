import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import products from './data'
import ProductCard from './ProductCard'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
]

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50', filter: (p) => p.price < 50 },
  { value: '50-80', label: '$50 – $80', filter: (p) => p.price >= 50 && p.price <= 80 },
  { value: 'over-80', label: 'Over $80', filter: (p) => p.price > 80 },
]

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [sort, setSort] = useState('featured')
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState('all')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [category, priceRange, sort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category === 'huggies') {
      result = result.filter((p) => p.subcategory === 'huggies')
    } else if (category !== 'all') {
      result = result.filter((p) => p.category === category)
    }

    const priceFilter = priceRanges.find((r) => r.value === priceRange)
    if (priceFilter?.filter) {
      result = result.filter(priceFilter.filter)
    }

    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0))
        break
      default:
        break
    }

    return result
  }, [category, priceRange, sort])

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={`block w-full text-left text-sm transition-colors ${
                category === c.value
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-charcoal'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((r) => (
            <button
              key={r.value}
              onClick={() => setPriceRange(r.value)}
              className={`block w-full text-left text-sm transition-colors ${
                priceRange === r.value
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-charcoal'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal mb-4">Material</h4>
        <div className="space-y-2">
          {['18K Gold Plated'].map((m) => (
            <button
              key={m}
              className="block w-full text-left text-sm text-velmora-taupe hover:text-velmora-charcoal transition-colors"
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 md:py-14">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-taupe mb-4">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
            {category === 'all' ? 'Shop All' : categories.find((c) => c.value === category)?.label}
          </h1>
          <div className="mx-auto mt-4 w-12 hairline-divider" />
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <FiltersContent />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-mist/30">
              <button
                className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-wide uppercase text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>
              <p className="font-sans text-xs text-velmora-taupe hidden lg:block">
                {filtered.length} products
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none font-sans text-xs text-velmora-charcoal bg-transparent border border-velmora-mist/50 px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:border-velmora-charcoal"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-taupe pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal mb-2">No products found</p>
                <p className="font-sans text-sm text-velmora-taupe">
                  Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div className="absolute inset-0 bg-velmora-softblack/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-velmora-warmwhite p-6 animate-slide-in-right shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg text-velmora-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-velmora-taupe">
                <X size={18} />
              </button>
            </div>
            <FiltersContent />
          </div>
        </div>
      )}
    </div>
  )
}