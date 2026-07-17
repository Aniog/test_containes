import { useState, useRef, useEffect, useMemo } from 'react'
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
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
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
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-5xl text-brand-charcoal mb-3">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-sm text-brand-muted max-w-lg mx-auto">
            Discover our curated collection of demi-fine gold jewelry. Each piece is designed to be worn every day.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-colors ${
                activeCategory === 'all'
                  ? 'border-brand-charcoal bg-brand-charcoal text-white'
                  : 'border-brand-sand text-brand-charcoal hover:border-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-colors ${
                  activeCategory === cat.id
                    ? 'border-brand-charcoal bg-brand-charcoal text-white'
                    : 'border-brand-sand text-brand-charcoal hover:border-brand-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-brand-muted hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-medium text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 focus:outline-none focus:border-brand-gold cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 bg-white border border-brand-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-medium text-brand-charcoal">Category</span>
              <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-brand-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setFilterOpen(false) }}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-brand-charcoal bg-brand-charcoal text-white'
                    : 'border-brand-sand text-brand-charcoal'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setFilterOpen(false) }}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-brand-charcoal bg-brand-charcoal text-white'
                      : 'border-brand-sand text-brand-charcoal'
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
          <div className="text-center py-16">
            <p className="text-brand-muted">No products found in this category.</p>
          </div>
        )}

        {/* Results count */}
        <div className="mt-8 text-center">
          <p className="text-xs text-brand-muted-light">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
      </div>
    </div>
  )
}
