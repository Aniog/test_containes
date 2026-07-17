import React, { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { SlidersHorizontal, X } from 'lucide-react'

export default function Shop() {
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategory])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page Header */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-16 text-center border-b border-divider">
        <h1 className="font-serif text-3xl md:text-5xl text-foreground">The Collection</h1>
        <p className="mt-3 font-sans text-sm text-muted">
          Timeless pieces crafted in 18K gold. Find your next everyday luxury.
        </p>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 font-sans text-sm text-foreground bg-transparent border border-divider px-4 py-2 rounded-none"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Desktop Category Filters */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`font-sans text-sm px-3 py-1.5 border transition-colors rounded-none ${
                  selectedCategory === 'all'
                    ? 'border-gold text-gold bg-transparent'
                    : 'border-divider text-muted bg-transparent hover:border-gold hover:text-gold'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`font-sans text-sm px-3 py-1.5 border transition-colors rounded-none capitalize ${
                    selectedCategory === cat.id
                      ? 'border-gold text-gold bg-transparent'
                      : 'border-divider text-muted bg-transparent hover:border-gold hover:text-gold'
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
              className="font-sans text-sm text-foreground bg-transparent border border-divider px-4 py-2 rounded-none focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-foreground">No products found</p>
              <p className="mt-2 font-sans text-sm text-muted">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[60]" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-[70] shadow-xl p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg text-foreground">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-foreground bg-transparent border-none p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-muted mb-3">Category</p>
              <div className="space-y-2">
                <button
                  onClick={() => { setSelectedCategory('all'); setMobileFiltersOpen(false) }}
                  className={`block w-full text-left font-sans text-sm py-2 px-3 border transition-colors rounded-none ${
                    selectedCategory === 'all' ? 'border-gold text-gold bg-transparent' : 'border-transparent text-foreground bg-transparent hover:text-gold'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.id); setMobileFiltersOpen(false) }}
                    className={`block w-full text-left font-sans text-sm py-2 px-3 border transition-colors rounded-none capitalize ${
                      selectedCategory === cat.id ? 'border-gold text-gold bg-transparent' : 'border-transparent text-foreground bg-transparent hover:text-gold'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
