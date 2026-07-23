import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Shop() {
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sort, setSort] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }
    switch (sort) {
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
  }, [activeCategory, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, sort])

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-muted-fg">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-charcoal hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setCategory('all')}
              className={`text-xs font-medium tracking-wide uppercase px-3 py-1.5 border transition-colors ${
                activeCategory === 'all' ? 'border-gold text-gold' : 'border-border text-muted-fg hover:border-charcoal hover:text-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`text-xs font-medium tracking-wide uppercase px-3 py-1.5 border transition-colors ${
                  activeCategory === cat.id ? 'border-gold text-gold' : 'border-border text-muted-fg hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs text-charcoal bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters panel */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-muted border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)} className="text-muted-fg">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`text-xs px-3 py-1.5 border transition-colors ${
                  activeCategory === 'all' ? 'border-gold text-gold' : 'border-border text-muted-fg'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`text-xs px-3 py-1.5 border transition-colors ${
                    activeCategory === cat.id ? 'border-gold text-gold' : 'border-border text-muted-fg'
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
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`shop-${product.imgId}`}
                    data-strk-img={`[shop-${product.id}-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem(product)
                      }}
                      className="w-full bg-white/90 backdrop-blur-sm text-charcoal text-xs font-medium tracking-wide py-2.5 hover:bg-gold hover:text-white transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <div className="mt-3">
                <h3 id={`shop-${product.id}-title`} className="product-name text-xs text-charcoal">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted-fg">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal">No products found</p>
            <p className="mt-2 text-sm text-muted-fg">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
