import React, { useState, useRef, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [activeCategory, sortBy])

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-brand-ivory border-b border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-brand-muted font-sans">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-brand-charcoal md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setCategory('all')}
              className={`text-xs tracking-widest uppercase font-sans px-3 py-1.5 transition-colors ${
                activeCategory === 'all'
                  ? 'text-brand-gold border-b border-brand-gold'
                  : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`text-xs tracking-widest uppercase font-sans px-3 py-1.5 transition-colors ${
                  activeCategory === cat.id
                    ? 'text-brand-gold border-b border-brand-gold'
                    : 'text-brand-muted hover:text-brand-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-brand-muted font-sans hidden md:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-1.5 cursor-pointer focus:outline-none focus:border-brand-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-brand-ivory border border-brand-sand">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs tracking-widest uppercase font-sans text-brand-charcoal font-medium">
                Category
              </span>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-4 h-4 text-brand-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`text-xs tracking-wide uppercase font-sans px-3 py-1.5 border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-brand-gold text-brand-gold'
                    : 'border-brand-sand text-brand-muted'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`text-xs tracking-wide uppercase font-sans px-3 py-1.5 border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-brand-gold text-brand-gold'
                      : 'border-brand-sand text-brand-muted'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-brand-charcoal">No pieces found</p>
            <p className="mt-2 text-sm text-brand-muted">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
