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
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-stone text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-charcoal hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setCategory('all')}
              className={`text-xs font-medium tracking-wide uppercase transition-colors ${
                activeCategory === 'all' ? 'text-gold' : 'text-stone hover:text-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`text-xs font-medium tracking-wide uppercase transition-colors ${
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
            className="text-xs font-medium tracking-wide uppercase text-charcoal bg-transparent border border-sand px-3 py-2 rounded-sm focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-linen rounded-sm border border-sand">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium tracking-wide uppercase text-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-4 h-4 text-stone" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-3 py-1.5 text-xs font-medium tracking-wide uppercase rounded-sm border transition-colors ${
                  activeCategory === 'all' ? 'border-gold bg-gold text-ivory' : 'border-sand text-charcoal'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide uppercase rounded-sm border transition-colors ${
                    activeCategory === cat.id ? 'border-gold bg-gold text-ivory' : 'border-sand text-charcoal'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-charcoal">No pieces found</p>
            <p className="mt-2 text-stone text-sm">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
