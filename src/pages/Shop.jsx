import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

const Shop = () => {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''
  const [headerRef, headerRevealed] = useScrollReveal()

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }
    if (selectedPrice) {
      result = result.filter(p => p.price >= selectedPrice.min && p.price < selectedPrice.max)
    }
    if (selectedMaterial) {
      result = result.filter(p => p.material === selectedMaterial)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice(null)
    setSelectedMaterial('')
  }

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-28'}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs font-sans text-velmora-charcoal uppercase tracking-wider mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block text-sm font-sans transition-colors ${!selectedCategory ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`block text-sm font-sans transition-colors ${selectedCategory === cat.slug ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
          <button
            onClick={() => setSelectedCategory('Sets')}
            className={`block text-sm font-sans transition-colors ${selectedCategory === 'Sets' ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
          >
            Gift Sets
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs font-sans text-velmora-charcoal uppercase tracking-wider mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={i}
              onClick={() => setSelectedPrice(selectedPrice === range ? null : range)}
              className={`block text-sm font-sans transition-colors ${selectedPrice === range ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs font-sans text-velmora-charcoal uppercase tracking-wider mb-4">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`block text-sm font-sans transition-colors ${!selectedMaterial ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedMaterial('18K Gold Plated')}
            className={`block text-sm font-sans transition-colors ${selectedMaterial === '18K Gold Plated' ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans text-velmora-gold tracking-wider uppercase hover:underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-10 reveal ${headerRevealed ? 'revealed' : ''}`}>
          <h1 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal tracking-wide">
            {selectedCategory || 'All Jewelry'}
          </h1>
          <div className={`w-12 h-px bg-velmora-gold mx-auto mt-4 ${headerRevealed ? 'line-expand' : ''}`} />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm font-sans text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-sm font-sans text-velmora-muted hidden sm:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm font-sans text-velmora-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-velmora-muted font-sans">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-velmora-gold font-sans tracking-wider uppercase hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50 overlay-enter" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-72 bg-velmora-cream z-50 shadow-2xl p-6 overflow-y-auto drawer-enter" style={{ animationDirection: 'normal' }}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg text-velmora-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-velmora-muted hover:text-velmora-charcoal">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        </>
      )}
    </div>
  )
}

export default Shop
