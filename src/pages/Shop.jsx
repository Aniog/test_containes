import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Shop() {
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [hoveredId, setHoveredId] = useState(null)

  const activeCategory = searchParams.get('category') || 'all'

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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, sortBy])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categoryOptions = [
    { value: 'all', label: 'All Jewelry' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
  ]

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
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          {activeCategory === 'all' ? 'All Jewelry' : categoryOptions.find(c => c.value === activeCategory)?.label}
        </h1>
        <p className="mt-3 text-sm text-muted-fg font-sans text-center">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-sans text-charcoal bg-transparent border-none md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2">
            {categoryOptions.map(cat => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-sans transition-all border ${
                  activeCategory === cat.value
                    ? 'border-gold text-gold bg-gold/5'
                    : 'border-border text-charcoal/70 hover:border-gold/50 bg-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm font-sans text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-muted border border-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-muted-fg font-sans">Category</span>
              <button onClick={() => setShowFilters(false)} className="bg-transparent border-none">
                <X className="w-4 h-4 text-muted-fg" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => { setCategory(cat.value); setShowFilters(false) }}
                  className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-widest font-sans transition-all border ${
                    activeCategory === cat.value
                      ? 'border-gold text-gold bg-gold/5'
                      : 'border-border text-charcoal/70 bg-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block no-underline">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    data-strk-img-id={`shop-${product.id}-f3g4h5`}
                    data-strk-img={`[shop-${product.id}-title] gold jewelry editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addItem(product)
                    }}
                    className={`absolute bottom-3 left-3 right-3 bg-white/95 text-charcoal py-2.5 text-xs uppercase tracking-widest font-sans border-none transition-all duration-300 ${
                      hoveredId === product.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>

              <div className="mt-3">
                <h3
                  id={`shop-${product.id}-title`}
                  className="text-xs uppercase tracking-widest text-charcoal font-sans font-medium"
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-charcoal font-sans">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-fg font-sans">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
