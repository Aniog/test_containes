import { useState, useRef, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

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
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="section-padding pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-brand-charcoal text-center">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 font-sans text-sm text-brand-muted text-center">
            Discover our curated collection of demi-fine gold pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 bg-transparent border-none text-brand-charcoal font-sans text-xs tracking-wider uppercase cursor-pointer p-0"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 font-sans text-xs tracking-wider uppercase border cursor-pointer transition-all rounded-none ${
                activeCategory === 'all'
                  ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                  : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 font-sans text-xs tracking-wider uppercase border cursor-pointer transition-all rounded-none ${
                  activeCategory === cat.id
                    ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                    : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
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
            className="font-sans text-xs tracking-wider uppercase text-brand-charcoal bg-transparent border border-brand-warm px-4 py-2 cursor-pointer focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-8 p-4 bg-brand-ivory border border-brand-warm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-wider uppercase text-brand-charcoal">Category</span>
              <button
                onClick={() => setFilterOpen(false)}
                className="p-0 bg-transparent border-none cursor-pointer text-brand-muted"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setFilterOpen(false) }}
                className={`px-3 py-1.5 font-sans text-xs tracking-wider uppercase border cursor-pointer rounded-none ${
                  activeCategory === 'all'
                    ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                    : 'bg-transparent text-brand-charcoal border-brand-warm'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setFilterOpen(false) }}
                  className={`px-3 py-1.5 font-sans text-xs tracking-wider uppercase border cursor-pointer rounded-none ${
                    activeCategory === cat.id
                      ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                      : 'bg-transparent text-brand-charcoal border-brand-warm'
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
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block no-underline">
                <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
                  <img
                    alt={product.images[0].alt}
                    data-strk-img-id={`shop-${product.id}-main-q1w2e3`}
                    data-strk-img={`[shop-name-${product.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>

              <button
                onClick={() => addItem(product)}
                className="absolute bottom-[calc(4rem+16px)] left-3 right-3 py-2.5 bg-brand-charcoal/90 text-white font-sans text-xs tracking-wider uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border-none cursor-pointer hover:bg-brand-gold"
              >
                Add to Cart
              </button>

              <div className="mt-4 text-center">
                <h3
                  id={`shop-name-${product.id}`}
                  className="font-serif text-xs tracking-product uppercase text-brand-charcoal"
                >
                  {product.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-brand-muted">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-brand-charcoal">No products found</p>
            <p className="mt-2 font-sans text-sm text-brand-muted">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
