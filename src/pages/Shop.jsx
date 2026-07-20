import { useEffect, useRef, useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/lib/data'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
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
    <div ref={containerRef} className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl lg:text-4xl text-primary">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-muted-foreground text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 text-xs uppercase tracking-widest font-medium border transition-colors ${
                activeCategory === 'all'
                  ? 'border-accent bg-accent text-white'
                  : 'border-border text-muted-foreground hover:border-accent hover:text-accent'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 text-xs uppercase tracking-widest font-medium border transition-colors ${
                  activeCategory === cat.id
                    ? 'border-accent bg-accent text-white'
                    : 'border-border text-muted-foreground hover:border-accent hover:text-accent'
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
            className="text-sm text-muted-foreground bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-accent cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="lg:hidden mb-8 p-4 bg-muted border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-primary">Category</span>
              <button onClick={() => setShowFilters(false)} className="text-muted-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-4 py-1.5 text-xs uppercase tracking-widest font-medium border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-accent bg-accent text-white'
                    : 'border-border text-muted-foreground hover:border-accent'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-4 py-1.5 text-xs uppercase tracking-widest font-medium border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-accent bg-accent text-white'
                      : 'border-border text-muted-foreground hover:border-accent'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-primary">No products found</p>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
