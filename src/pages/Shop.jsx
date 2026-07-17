import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/lib/data'
import { useCart } from '@/context/CartContext'

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sort, setSort] = useState('featured')
  const { addItem } = useCart()

  const activeCategory = searchParams.get('category') || 'all'

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price
    if (sort === 'price-high') return b.price - a.price
    if (sort === 'rating') return b.rating - a.rating
    return 0
  })

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, sort])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 id="shop-page-title" className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="mt-3 text-stone text-sm">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-charcoal hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs uppercase tracking-widest font-medium text-charcoal bg-transparent border border-sand px-4 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-4 md:hidden">
                <span className="text-xs uppercase tracking-widest font-medium text-charcoal">Filters</span>
                <button onClick={() => setShowFilters(false)} className="text-stone hover:text-charcoal">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-3">Category</h3>
                <div className="space-y-2">
                  {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`block text-sm capitalize transition-colors ${
                        activeCategory === cat ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {cat === 'all' ? 'All' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-3">Price</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSort('price-low')}
                    className="block text-sm text-stone hover:text-charcoal transition-colors"
                  >
                    Under $50
                  </button>
                  <button
                    onClick={() => setSort('price-high')}
                    className="block text-sm text-stone hover:text-charcoal transition-colors"
                  >
                    $50 – $100
                  </button>
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-3">Material</h3>
                <div className="space-y-2">
                  <span className="block text-sm text-stone">18K Gold Plated</span>
                  <span className="block text-sm text-stone">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map(product => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-[3/4] bg-cream overflow-hidden">
                      <img
                        data-strk-img-id={`shop-${product.id}-img`}
                        data-strk-img={`[shop-${product.id}-title] [shop-page-title] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-4">
                      <h3
                        id={`shop-${product.id}-title`}
                        className="text-xs uppercase tracking-product font-sans font-medium text-charcoal"
                      >
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-stone">${product.price}</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => addItem(product)}
                    className="mt-2 w-full border border-sand text-charcoal text-xs uppercase tracking-widest py-2.5 font-medium opacity-0 group-hover:opacity-100 hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
