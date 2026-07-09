import { useState, useEffect, useRef, useMemo } from 'react'
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
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, sortBy])

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
    <main ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
        </h1>
        <p className="text-center text-muted text-sm mt-2">
          {activeCategory === 'all'
            ? 'Explore our full collection of demi-fine gold jewelry.'
            : categories.find(c => c.id === activeCategory)?.description || ''}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-charcoal hover:text-accent transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 text-xs uppercase tracking-widest border transition-colors ${
                activeCategory === 'all' ? 'border-accent bg-accent text-white' : 'border-border text-charcoal hover:border-accent'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 text-xs uppercase tracking-widest border transition-colors ${
                  activeCategory === cat.id ? 'border-accent bg-accent text-white' : 'border-border text-charcoal hover:border-accent'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-transparent border border-border px-3 py-1.5 text-charcoal focus:outline-none focus:border-accent cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-white border border-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)} className="text-muted">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-3 py-1.5 text-xs uppercase tracking-widest border transition-colors ${
                  activeCategory === 'all' ? 'border-accent bg-accent text-white' : 'border-border text-charcoal'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-widest border transition-colors ${
                    activeCategory === cat.id ? 'border-accent bg-accent text-white' : 'border-border text-charcoal'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal">No products found</p>
            <p className="text-sm text-muted mt-2">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </main>
  )
}
