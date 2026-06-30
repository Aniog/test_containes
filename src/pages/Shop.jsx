import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCategories, setSelectedCategories] = useState(initialCategory ? [initialCategory] : [])
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategories, selectedPrice, sortBy])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPrice) {
      result = result.filter((p) => p.price >= selectedPrice.min && p.price < selectedPrice.max)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }

    return result
  }, [selectedCategories, selectedPrice, sortBy])

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPrice(null)
  }

  const hasFilters = selectedCategories.length > 0 || selectedPrice !== null

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-wider uppercase text-stone-900 font-medium mb-4">Category</h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`block text-sm transition-colors duration-200 ${
                selectedCategories.includes(cat.id)
                  ? 'text-stone-900 font-medium'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-wider uppercase text-stone-900 font-medium mb-4">Price</h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(selectedPrice?.label === range.label ? null : range)}
              className={`block text-sm transition-colors duration-200 ${
                selectedPrice?.label === range.label
                  ? 'text-stone-900 font-medium'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-gold hover:text-gold-dark underline transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 tracking-wide">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-stone-600"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm text-stone-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-wider uppercase text-stone-600 pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-cream">
              <div className="flex items-center justify-between px-4 py-4 border-b border-stone-200">
                <h3 className="text-sm tracking-wider uppercase font-medium text-stone-900">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)} className="p-2">
                  <X className="w-5 h-5 text-stone-500" />
                </button>
              </div>
              <div className="px-4 py-6">
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-500 mb-2">No pieces found</p>
                <p className="text-sm text-stone-400">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i + 20} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
