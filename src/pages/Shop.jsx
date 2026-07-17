import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
]

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const activeSort = searchParams.get('sort') || 'featured'
  const activePrice = searchParams.get('price') || ''

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filtered = useMemo(() => {
    let result = [...products]

    // Category filter
    if (activeCategory === 'huggies') {
      result = result.filter(
        (p) => p.name.toLowerCase().includes('huggie') || p.name.toLowerCase().includes('huggies')
      )
    } else if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    // Price filter
    if (activePrice) {
      const range = priceRanges.find((r) => {
        const label = r.label.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        return label === activePrice
      })
      if (range) {
        result = result.filter(
          (p) => p.price >= range.min && p.price < range.max
        )
      }
    }

    // Sort
    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeSort])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value && value !== 'all' && value !== 'featured') {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    setSearchParams(next)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory !== 'all' || activePrice || activeSort !== 'featured'

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-[10px] tracking-widest uppercase text-velmora-text mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          <li>
            <button
              onClick={() => updateParam('category', 'all')}
              className={`font-sans text-sm transition-colors ${
                activeCategory === 'all'
                  ? 'text-velmora-gold'
                  : 'text-velmora-muted hover:text-velmora-text'
              }`}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => updateParam('category', cat.id)}
                className={`font-sans text-sm transition-colors ${
                  activeCategory === cat.id
                    ? 'text-velmora-gold'
                    : 'text-velmora-muted hover:text-velmora-text'
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-[10px] tracking-widest uppercase text-velmora-text mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {priceRanges.map((r) => {
            const val = r.label.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
            return (
              <li key={r.label}>
                <button
                  onClick={() =>
                    updateParam('price', activePrice === val ? '' : val)
                  }
                  className={`font-sans text-sm transition-colors ${
                    activePrice === val
                      ? 'text-velmora-gold'
                      : 'text-velmora-muted hover:text-velmora-text'
                  }`}
                >
                  {r.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs text-velmora-muted hover:text-velmora-gold transition-colors underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-text tracking-wider uppercase">
            Shop All
          </h1>
          <p className="font-sans text-sm text-velmora-muted mt-2">
            {filtered.length} pieces
          </p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Main grid */}
          <div className="flex-1 min-w-0">
            {/* Sort + mobile filter toggle */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-border">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wider text-velmora-text"
              >
                <SlidersHorizontal size={14} />
                Filter & Sort
              </button>
              <div className="hidden md:flex items-center gap-3 ml-auto">
                <span className="font-sans text-xs text-velmora-muted">
                  Sort by:
                </span>
                <select
                  value={activeSort}
                  onChange={(e) => updateParam('sort', e.target.value)}
                  className="font-sans text-xs bg-transparent border border-velmora-border px-3 py-1.5 focus:outline-none focus:border-velmora-gold"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-muted">
                  No products found
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline mt-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-[70] md:hidden">
          <div
            className="absolute inset-0 bg-velmora-base/30"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-velmora-white p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg">Filters</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 hover:text-velmora-gold transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile sort */}
            <div className="mb-8">
              <h3 className="font-sans text-[10px] tracking-widest uppercase text-velmora-text mb-4">
                Sort
              </h3>
              <select
                value={activeSort}
                onChange={(e) => updateParam('sort', e.target.value)}
                className="w-full font-sans text-sm bg-transparent border border-velmora-border px-3 py-2 focus:outline-none focus:border-velmora-gold"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <FilterContent />
          </div>
        </div>
      )}
    </div>
  )
}
