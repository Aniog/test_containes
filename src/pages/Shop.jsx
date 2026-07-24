import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || ''
  const activePriceRange = searchParams.get('price') || ''
  const activeMaterial = searchParams.get('material') || ''

  const setFilter = (key, value) => {
    setSearchParams(prev => {
      if (value) prev.set(key, value)
      else prev.delete(key)
      return prev
    })
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, activePriceRange, activeMaterial])

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory)
    }

    if (activePriceRange) {
      const range = priceRanges.find(r => r.label === activePriceRange)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
    }

    if (activeMaterial) {
      result = result.filter(p => p.material === activeMaterial)
    }

    switch (sort) {
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
        // featured order = original order
        break
    }

    return result
  }, [activeCategory, activePriceRange, activeMaterial, sort])

  const hasFilters = activeCategory || activePriceRange || activeMaterial

  const FilterContent = () => (
    <div className="flex flex-col gap-6">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-foreground mb-3">Category</h3>
        <div className="flex flex-col gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', activeCategory === cat.id ? '' : cat.id)}
              className={`font-sans text-sm text-left transition-colors ${
                activeCategory === cat.id ? 'text-accent font-medium' : 'text-foregroundMuted hover:text-foreground'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-foreground mb-3">Price</h3>
        <div className="flex flex-col gap-2">
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setFilter('price', activePriceRange === range.label ? '' : range.label)}
              className={`font-sans text-sm text-left transition-colors ${
                activePriceRange === range.label ? 'text-accent font-medium' : 'text-foregroundMuted hover:text-foreground'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-foreground mb-3">Material</h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setFilter('material', activeMaterial === '18K Gold Plated' ? '' : '18K Gold Plated')}
            className={`font-sans text-sm text-left transition-colors ${
              activeMaterial === '18K Gold Plated' ? 'text-accent font-medium' : 'text-foregroundMuted hover:text-foreground'
            }`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs tracking-widest uppercase text-accent hover:text-accentHover transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-surface pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-6 md:px-10 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground">
            {activeCategory ? categories.find(c => c.id === activeCategory)?.name || 'Shop' : 'All Jewelry'}
          </h1>
          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-xs tracking-wide text-foregroundMuted bg-transparent border border-hairline px-3 py-2 focus:border-accent focus:outline-none rounded-none appearance-none cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wide text-foregroundMuted hover:text-foreground transition-colors"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-lg text-foregroundMuted">No products match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 font-sans text-sm tracking-widest uppercase text-accent hover:text-accentHover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-surface z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-widest uppercase text-foreground">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-foregroundMuted hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}
