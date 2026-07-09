import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory])

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
    <main ref={containerRef} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 py-8 md:py-12 text-center">
        <h1 className="font-serif text-3xl md:text-5xl text-charcoal font-light">
          {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
        </h1>
        <p className="mt-3 text-sm text-stone font-sans">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      {/* Toolbar */}
      <div className="px-6 md:px-12 lg:px-20 pb-8 flex items-center justify-between border-b border-border">
        {/* Filter toggle (mobile) */}
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-medium text-charcoal bg-transparent border-none cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>

        {/* Desktop category filters */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setCategory('all')}
            className={`text-xs uppercase tracking-widest font-sans font-medium transition-colors bg-transparent border-none cursor-pointer ${
              activeCategory === 'all' ? 'text-gold' : 'text-stone hover:text-charcoal'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`text-xs uppercase tracking-widest font-sans font-medium transition-colors bg-transparent border-none cursor-pointer ${
                activeCategory === cat.id ? 'text-gold' : 'text-stone hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs uppercase tracking-wider font-sans text-charcoal bg-transparent border border-border px-4 py-2 cursor-pointer focus:outline-none focus:border-gold rounded-none"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Mobile filter panel */}
      {filterOpen && (
        <div className="md:hidden px-6 py-6 border-b border-border bg-ivory">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal">Category</span>
            <button onClick={() => setFilterOpen(false)} className="p-1 bg-transparent border-none cursor-pointer">
              <X className="w-4 h-4 text-stone" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setCategory('all'); setFilterOpen(false) }}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-sans border cursor-pointer rounded-none ${
                activeCategory === 'all' ? 'bg-charcoal text-cream border-charcoal' : 'bg-transparent text-charcoal border-border'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setCategory(cat.id); setFilterOpen(false) }}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-sans border cursor-pointer rounded-none ${
                  activeCategory === cat.id ? 'bg-charcoal text-cream border-charcoal' : 'bg-transparent text-charcoal border-border'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product grid */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-14">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-charcoal">No products found</p>
            <p className="mt-2 text-sm text-stone font-sans">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
