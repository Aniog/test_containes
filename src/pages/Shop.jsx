import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
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

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
  ]

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under-50', name: 'Under $50' },
    { id: '50-80', name: '$50 – $80' },
    { id: 'over-80', name: 'Over $80' },
  ]

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-16 text-center">
          <h1 className="font-serif text-3xl lg:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="mt-3 text-muted text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 text-sm text-charcoal bg-transparent border border-border px-4 py-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden lg:flex items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors duration-200 bg-transparent ${
                  activeCategory === cat.id
                    ? 'border-accent text-accent'
                    : 'border-border text-muted hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm text-charcoal bg-transparent border border-border px-4 py-2 focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block w-full text-left text-sm py-1 bg-transparent border-none transition-colors ${
                        activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      className="block w-full text-left text-sm py-1 text-muted hover:text-charcoal bg-transparent border-none transition-colors"
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Material</h3>
                <div className="space-y-2">
                  <button className="block w-full text-left text-sm py-1 text-muted hover:text-charcoal bg-transparent border-none transition-colors">
                    18K Gold Plated
                  </button>
                  <button className="block w-full text-left text-sm py-1 text-muted hover:text-charcoal bg-transparent border-none transition-colors">
                    Sterling Silver
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filters */}
          {showFilters && (
            <div className="fixed inset-0 z-40 bg-cream lg:hidden">
              <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                <h2 className="font-serif text-lg text-charcoal">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 text-charcoal bg-transparent border-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => { setCategory(cat.id); setShowFilters(false) }}
                        className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors bg-transparent ${
                          activeCategory === cat.id
                            ? 'border-accent text-accent'
                            : 'border-border text-muted'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="mt-2 text-sm text-muted">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
