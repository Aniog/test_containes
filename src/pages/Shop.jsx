import { useEffect, useRef, useState } from 'react'
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
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, sortBy])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-muted-fg">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-charcoal bg-transparent border-none cursor-pointer hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm text-charcoal bg-transparent border border-border px-3 py-2 cursor-pointer focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-48 flex-shrink-0`}>
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-4 md:hidden">
                <span className="text-sm font-medium text-charcoal">Filters</span>
                <button onClick={() => setShowFilters(false)} className="bg-transparent border-none cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-xs font-medium text-charcoal uppercase tracking-wide mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`block w-full text-left text-sm py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block w-full text-left text-sm py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xs font-medium text-charcoal uppercase tracking-wide mb-3">Price</h3>
                <div className="space-y-2">
                  <span className="block text-sm text-muted-fg">$30 — $120</span>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-medium text-charcoal uppercase tracking-wide mb-3">Material</h3>
                <div className="space-y-2">
                  <span className="block text-sm text-muted-fg">18K Gold Plated</span>
                  <span className="block text-sm text-muted-fg">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map(product => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`} className="block no-underline">
                    <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-3">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-${product.id}-n0o1p2`}
                        data-strk-img={`[shop-${product.id}-title] gold jewelry product`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addItem(product)
                        }}
                        className="absolute bottom-3 left-3 right-3 py-2.5 bg-cream/95 text-charcoal text-xs font-sans font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border-none cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                  <span id={`shop-${product.id}-title`} className="block font-sans text-xs font-medium uppercase tracking-product text-charcoal">
                    {product.name}
                  </span>
                  <span className="block mt-1 text-sm text-muted-fg">${product.price}</span>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal">No pieces found</p>
                <p className="mt-2 text-sm text-muted-fg">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
