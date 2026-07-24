import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || 'all'
  const sortBy = searchParams.get('sort') || 'featured'

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
    const params = new URLSearchParams(searchParams)
    if (cat === 'all') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    setSearchParams(params)
  }

  const setSort = (sort) => {
    const params = new URLSearchParams(searchParams)
    params.set('sort', sort)
    setSearchParams(params)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-surface py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal border border-border px-4 py-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 text-xs tracking-wider uppercase border transition-colors ${
                activeCategory === 'all'
                  ? 'border-accent bg-accent text-white'
                  : 'border-border text-charcoal hover:border-accent'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 text-xs tracking-wider uppercase border transition-colors ${
                  activeCategory === cat.id
                    ? 'border-accent bg-accent text-white'
                    : 'border-border text-charcoal hover:border-accent'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs tracking-wider uppercase text-charcoal bg-transparent border border-border px-4 py-2 focus:outline-none focus:border-accent cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-8 p-4 bg-surface border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs tracking-wider uppercase text-charcoal font-medium">Category</span>
              <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setFilterOpen(false) }}
                className={`px-3 py-1.5 text-xs tracking-wider uppercase border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-accent bg-accent text-white'
                    : 'border-border text-charcoal'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setFilterOpen(false) }}
                  className={`px-3 py-1.5 text-xs tracking-wider uppercase border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-accent bg-accent text-white'
                      : 'border-border text-charcoal'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal">No products found</p>
            <p className="text-sm text-muted mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
