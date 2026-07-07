import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import { products, categories } from '@/data/products'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const sortBy = searchParams.get('sort') || 'featured'

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
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
  }, [activeCategory, activePrice, sortBy])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    setSearchParams(next)
  }

  const clearAll = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePrice

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-truffle-600 mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => updateParam('category', activeCategory === cat.slug ? '' : cat.slug)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.slug ? 'text-gold font-medium' : 'text-truffle-500 hover:text-truffle-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-truffle-600 mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => updateParam('price', activePrice === range.label ? '' : range.label)}
              className={`block text-sm transition-colors ${
                activePrice === range.label ? 'text-gold font-medium' : 'text-truffle-500 hover:text-truffle-800'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-xs tracking-wide text-truffle-400 hover:text-truffle-800 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-wider uppercase text-truffle-800">
            {activeCategory ? categories.find((c) => c.slug === activeCategory)?.name || 'Shop' : 'Shop All'}
          </h1>
          <p className="mt-3 text-sm text-truffle-500">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-48 shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden w-full mb-6">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 text-sm text-truffle-600 border-b border-truffle-200/40 pb-3 w-full"
            >
              <SlidersHorizontal size={16} />
              Filters {hasFilters && `(${filtered.length})`}
            </button>
            {mobileFiltersOpen && (
              <div className="mt-4 p-4 bg-cream-200/50 animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs tracking-widest uppercase text-truffle-600">Filters</span>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={16} className="text-truffle-400" />
                  </button>
                </div>
                <FilterContent />
              </div>
            )}
          </div>

          {/* Sort + Grid */}
          <div className="flex-1">
            <div className="flex justify-end mb-8">
              <select
                value={sortBy}
                onChange={(e) => updateParam('sort', e.target.value === 'featured' ? '' : e.target.value)}
                className="bg-transparent text-sm text-truffle-600 border-b border-truffle-300/40 py-2 pr-6 outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-truffle-400 text-sm">No products match your filters.</p>
                <button onClick={clearAll} className="mt-4 text-gold text-sm">Clear all filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
