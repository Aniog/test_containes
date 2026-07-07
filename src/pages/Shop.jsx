import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/lib/CartContext'

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-muted-light overflow-hidden mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.titleId}] [shop-${product.descId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`shop-alt-${product.imgId2}`}
            data-strk-img={`[shop-${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-accent hover:text-white ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        <h3
          id={`shop-${product.titleId}`}
          className="font-serif text-sm uppercase tracking-product text-charcoal"
        >
          {product.name}
        </h3>
        <p id={`shop-${product.descId}`} className="sr-only">{product.description}</p>
        <p className="mt-1 text-sm text-muted">${product.price}</p>
      </Link>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)
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
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-muted text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-4">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm transition-colors ${activeCategory === 'all' ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'}`}
                  >
                    All
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm transition-colors ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-muted-light">
                <h3 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-4">Price</h3>
                <ul className="space-y-2">
                  {['Under $40', '$40 – $60', '$60 – $80', 'Over $80'].map(range => (
                    <li key={range}>
                      <span className="text-sm text-muted hover:text-charcoal transition-colors cursor-pointer">
                        {range}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-muted-light">
                <h3 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-4">Material</h3>
                <ul className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(mat => (
                    <li key={mat}>
                      <span className="text-sm text-muted hover:text-charcoal transition-colors cursor-pointer">
                        {mat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-muted-light">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm text-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden md:flex items-center gap-2">
                {['all', ...categories.map(c => c.id)].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 text-xs uppercase tracking-widest transition-colors ${
                      activeCategory === cat
                        ? 'bg-accent text-white'
                        : 'text-muted hover:text-charcoal border border-muted-light'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs uppercase tracking-wider text-charcoal bg-transparent border border-muted-light px-3 py-2 focus:outline-none focus:border-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted text-sm">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[60]" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-white z-[70] shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg text-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-3">Category</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => { setCategory('all'); setMobileFiltersOpen(false) }}
                    className={`text-sm ${activeCategory === 'all' ? 'text-accent font-medium' : 'text-muted'}`}
                  >
                    All
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => { setCategory(cat.id); setMobileFiltersOpen(false) }}
                      className={`text-sm ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
