import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { cn } from '@/lib/utils'

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies']
const MATERIALS = ['All', '18K Gold Plated']
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const categoryParam = searchParams.get('category') || 'All'
  const qParam = searchParams.get('q') || ''

  const [category, setCategory] = useState(
    CATEGORIES.includes(categoryParam) ? categoryParam : 'All',
  )
  const [material, setMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState(PRICE_RANGES[0])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync from URL
  useEffect(() => {
    if (CATEGORIES.includes(categoryParam)) setCategory(categoryParam)
    else setCategory('All')
  }, [categoryParam])

  // Update URL when category changes
  const updateCategory = (cat) => {
    setCategory(cat)
    const next = new URLSearchParams(searchParams)
    if (cat === 'All') next.delete('category')
    else next.set('category', cat)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (category !== 'All' && p.category !== category) return false
      if (material !== 'All' && p.material !== material) return false
      if (p.price < priceRange.min || p.price > priceRange.max) return false
      if (qParam) {
        const q = qParam.toLowerCase()
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.shortDesc.toLowerCase().includes(q) &&
          !p.category.toLowerCase().includes(q)
        )
          return false
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
    }
    return result
  }, [category, material, priceRange, sort, qParam])

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filtered.length, category, sort])

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.2em] uppercase text-espresso mb-4">Category</h3>
        <div className="space-y-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => updateCategory(cat)}
              className={cn(
                'block text-sm transition-colors',
                category === cat ? 'text-gold' : 'text-cocoa hover:text-espresso',
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.2em] uppercase text-espresso mb-4">Price</h3>
        <div className="space-y-2.5">
          {PRICE_RANGES.map((range) => (
            <button
              key={range.label}
              onClick={() => setPriceRange(range)}
              className={cn(
                'block text-sm transition-colors',
                priceRange.label === range.label ? 'text-gold' : 'text-cocoa hover:text-espresso',
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.2em] uppercase text-espresso mb-4">Material</h3>
        <div className="space-y-2.5">
          {MATERIALS.map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={cn(
                'block text-sm transition-colors',
                material === mat ? 'text-gold' : 'text-cocoa hover:text-espresso',
              )}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <div ref={containerRef} className="pt-16 md:pt-20 min-h-screen bg-ivory">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-espresso">
            {qParam ? `Results for "${qParam}"` : 'All Jewelry'}
          </h1>
          <p className="text-cocoa text-sm mt-4">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-espresso"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <span className="hidden md:block text-xs tracking-[0.2em] uppercase text-taupe">
                {filtered.length} {filtered.length === 1 ? 'Item' : 'Items'}
              </span>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-sand text-xs tracking-[0.1em] uppercase text-espresso pl-4 pr-10 py-2.5 cursor-pointer focus:outline-none focus:border-gold"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-taupe absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-espresso mb-3">No pieces found</p>
                <p className="text-sm text-taupe mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => {
                    updateCategory('All')
                    setMaterial('All')
                    setPriceRange(PRICE_RANGES[0])
                  }}
                  className="text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-deep"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[70] md:hidden">
          <div
            className="absolute inset-0 bg-espresso-bg/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-72 max-w-[80%] bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-espresso">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-espresso" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-gold text-cream py-3 text-xs tracking-[0.25em] uppercase hover:bg-gold-deep transition-colors mt-4"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
