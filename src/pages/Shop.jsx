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
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-champagne/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-warm-gray text-sm">
            Discover pieces designed to elevate your everyday
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-sm text-charcoal border border-hairline px-3 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <span className="text-sm text-muted">{filteredProducts.length} pieces</span>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm text-charcoal border border-hairline px-3 py-2 bg-transparent focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? 'fixed inset-0 z-50 bg-cream p-6 overflow-y-auto' : 'hidden'} md:block md:static md:w-56 md:flex-shrink-0`}>
            {showFilters && (
              <button
                onClick={() => setShowFilters(false)}
                className="md:hidden absolute top-4 right-4 text-charcoal"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-charcoal mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => { setCategory('all'); setShowFilters(false) }}
                  className={`block text-sm transition-colors ${activeCategory === 'all' ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'}`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { setCategory(cat.id); setShowFilters(false) }}
                    className={`block text-sm transition-colors ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-charcoal mb-4">Price</h3>
              <div className="space-y-2">
                <button className="block text-sm text-warm-gray hover:text-charcoal transition-colors">Under $40</button>
                <button className="block text-sm text-warm-gray hover:text-charcoal transition-colors">$40 – $60</button>
                <button className="block text-sm text-warm-gray hover:text-charcoal transition-colors">$60 – $100</button>
                <button className="block text-sm text-warm-gray hover:text-charcoal transition-colors">Over $100</button>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-charcoal mb-4">Material</h3>
              <div className="space-y-2">
                <button className="block text-sm text-warm-gray hover:text-charcoal transition-colors">18K Gold Plated</button>
                <button className="block text-sm text-warm-gray hover:text-charcoal transition-colors">Sterling Silver</button>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-warm-gray">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
