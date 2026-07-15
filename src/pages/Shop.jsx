import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/lib/CartContext'

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)
  const { addItem } = useCart()

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

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <main ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 font-sans text-sm text-brand-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className="px-4 py-1.5 font-sans text-xs uppercase tracking-wide-xl transition-colors"
              style={
                activeCategory === 'all'
                  ? { backgroundColor: '#2C2C2C', color: '#FAF7F2', border: '1px solid #2C2C2C' }
                  : { backgroundColor: 'transparent', color: '#2C2C2C', border: '1px solid #E8E0D4' }
              }
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className="px-4 py-1.5 font-sans text-xs uppercase tracking-wide-xl transition-colors"
                style={
                  activeCategory === cat.id
                    ? { backgroundColor: '#2C2C2C', color: '#FAF7F2', border: '1px solid #2C2C2C' }
                    : { backgroundColor: 'transparent', color: '#2C2C2C', border: '1px solid #E8E0D4' }
                }
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal bg-transparent border border-brand-sand px-3 py-1.5 focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 bg-brand-ivory border border-brand-sand animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal font-medium">
                Category
              </span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-brand-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setFilterOpen(false) }}
                className="px-3 py-1.5 font-sans text-xs uppercase tracking-wide transition-colors"
                style={
                  activeCategory === 'all'
                    ? { backgroundColor: '#2C2C2C', color: '#FAF7F2', border: '1px solid #2C2C2C' }
                    : { backgroundColor: 'transparent', color: '#2C2C2C', border: '1px solid #E8E0D4' }
                }
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setFilterOpen(false) }}
                  className="px-3 py-1.5 font-sans text-xs uppercase tracking-wide transition-colors"
                  style={
                    activeCategory === cat.id
                      ? { backgroundColor: '#2C2C2C', color: '#FAF7F2', border: '1px solid #2C2C2C' }
                      : { backgroundColor: 'transparent', color: '#2C2C2C', border: '1px solid #E8E0D4' }
                  }
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
                <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={`shop-${product.imgId}`}
                    data-strk-img={`[shop-${product.id}-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem(product)
                      }}
                      className="bg-white text-brand-charcoal font-sans text-xs uppercase tracking-wide-xl px-5 py-2 hover:bg-brand-charcoal hover:text-white transition-colors shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <div className="mt-3 text-center">
                <h3 id={`shop-${product.id}-title`} className="font-serif text-xs uppercase tracking-product text-brand-charcoal">
                  {product.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-brand-muted">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-brand-charcoal">No pieces found</p>
            <p className="mt-2 font-sans text-sm text-brand-muted">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </main>
  )
}
