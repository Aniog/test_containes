import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/lib/CartContext'

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
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

  const categories = [
    { value: 'all', label: 'All' },
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
    <main ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-display-sm text-brand-charcoal font-light">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-brand-taupe font-sans">
            Timeless pieces designed to elevate your everyday.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          {/* Category pills - desktop */}
          <div className="hidden md:flex items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-1.5 text-xs tracking-widest-plus uppercase font-sans border transition-colors ${
                  activeCategory === cat.value
                    ? 'border-brand-charcoal bg-brand-charcoal text-white'
                    : 'border-brand-sand text-brand-charcoal hover:border-brand-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            className="md:hidden flex items-center gap-2 text-xs tracking-widest-plus uppercase font-sans text-brand-charcoal"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-1.5 focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 bg-brand-ivory border border-brand-sand">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs tracking-widest-plus uppercase font-sans font-medium text-brand-charcoal">
                Category
              </span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-brand-charcoal" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => { setCategory(cat.value); setFilterOpen(false) }}
                  className={`px-3 py-1.5 text-xs tracking-wider uppercase font-sans border transition-colors ${
                    activeCategory === cat.value
                      ? 'border-brand-charcoal bg-brand-charcoal text-white'
                      : 'border-brand-sand text-brand-charcoal'
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
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
                  <img
                    data-strk-img-id={`shop-${product.imgId}-s2t4`}
                    data-strk-img={`[shop-${product.id}-title] [shop-${product.id}-desc] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem(product)
                      }}
                      className="w-full bg-brand-charcoal/90 backdrop-blur-sm text-white py-2.5 text-[10px] tracking-widest-plus uppercase font-sans font-medium hover:bg-brand-gold transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <h3
                    id={`shop-${product.id}-title`}
                    className="font-serif text-xs uppercase tracking-widest-plus text-brand-charcoal"
                  >
                    {product.name}
                  </h3>
                  <p id={`shop-${product.id}-desc`} className="sr-only">
                    {product.description}
                  </p>
                  <p className="mt-1 text-sm text-brand-taupe font-sans">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-brand-charcoal">No products found</p>
            <p className="mt-2 text-sm text-brand-taupe">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </main>
  )
}
