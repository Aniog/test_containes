import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, ShoppingBag, Star, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 200])
  const [showFilters, setShowFilters] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || 'all'

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory)
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => b.id.localeCompare(a.id))
        break
      default:
        break
    }

    return filtered
  }, [activeCategory, sortBy, priceRange])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [activeCategory, sortBy])

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-stone-500 mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setCategory('all')}
            className={cn(
              'block w-full text-left font-sans text-sm py-1.5 transition-colors',
              activeCategory === 'all' ? 'text-gold-500 font-medium' : 'text-stone-700 hover:text-gold-500'
            )}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={cn(
                'block w-full text-left font-sans text-sm py-1.5 transition-colors',
                activeCategory === cat.id ? 'text-gold-500 font-medium' : 'text-stone-700 hover:text-gold-500'
              )}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-stone-500 mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { label: 'Under $50', range: [0, 50] },
            { label: '$50 - $75', range: [50, 75] },
            { label: '$75 - $100', range: [75, 100] },
            { label: '$100+', range: [100, 200] },
          ].map(option => (
            <button
              key={option.label}
              onClick={() => setPriceRange(option.range)}
              className={cn(
                'block w-full text-left font-sans text-sm py-1.5 transition-colors',
                priceRange[0] === option.range[0] && priceRange[1] === option.range[1]
                  ? 'text-gold-500 font-medium'
                  : 'text-stone-700 hover:text-gold-500'
              )}
            >
              {option.label}
            </button>
          ))}
          <button
            onClick={() => setPriceRange([0, 200])}
            className="block w-full text-left font-sans text-xs text-stone-400 hover:text-gold-500 transition-colors pt-1"
          >
            Clear price filter
          </button>
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-stone-500 mb-4">Material</h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Stainless Steel'].map(material => (
            <label key={material} className="flex items-center gap-2.5 cursor-pointer group">
              <div className="w-4 h-4 border border-stone-300 rounded-sm group-hover:border-gold-500 transition-colors flex items-center justify-center">
                <div className="w-2 h-2 bg-gold-500 rounded-sm hidden" />
              </div>
              <span className="font-sans text-sm text-stone-700 group-hover:text-gold-500 transition-colors">
                {material}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <p className="section-subheading mb-2">Collection</p>
        <h1 className="section-heading">
          {activeCategory !== 'all'
            ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
            : 'All Jewelry'
          }
        </h1>
      </div>

      <div className="hairline" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 font-sans text-sm text-stone-600 hover:text-gold-500 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="font-sans text-sm text-stone-500 hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-sans text-sm text-stone-700 bg-transparent border border-stone-200 px-3 py-2 pr-8 rounded-sm focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="w-4 h-4 text-stone-400 -ml-7 pointer-events-none" />
              </div>
            </div>

            {/* Mobile filter drawer */}
            {showFilters && (
              <div className="lg:hidden mb-8 p-6 bg-white rounded-sm border border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-sans text-sm font-medium text-stone-900">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-4 h-4 text-stone-400" />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            )}

            {/* Active filters */}
            {activeCategory !== 'all' && (
              <div className="flex items-center gap-2 mb-6">
                <span className="font-sans text-xs text-stone-500">Active:</span>
                <button
                  onClick={() => setCategory('all')}
                  className="flex items-center gap-1.5 font-sans text-xs bg-cream-200 text-stone-700 px-3 py-1.5 rounded-full hover:bg-cream-300 transition-colors"
                >
                  {categories.find(c => c.id === activeCategory)?.name}
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <article key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-square overflow-hidden bg-cream-200 rounded-sm">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product photo elegant`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-stone-900/90 text-cream-50 font-sans text-[10px] tracking-ultra-wide uppercase px-3 py-1.5 rounded-sm">
                            {product.badge}
                          </span>
                        )}
                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              addItem(product)
                            }}
                            className="w-full bg-stone-900/90 backdrop-blur-sm text-cream-50 font-sans text-xs tracking-wider uppercase py-3 flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors rounded-sm"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 space-y-1">
                        <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-stone-800 group-hover:text-gold-500 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  'w-3 h-3',
                                  i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-stone-300'
                                )}
                              />
                            ))}
                          </div>
                          <span className="font-sans text-[11px] text-stone-400">({product.reviewCount})</span>
                        </div>
                        <p className="font-serif text-lg text-stone-900">{formatPrice(product.price)}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-700 mb-2">No products found</p>
                <p className="font-sans text-sm text-stone-400 mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => {
                    setCategory('all')
                    setPriceRange([0, 200])
                  }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
