import { useState, useRef, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ShopProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-surface aspect-[3/4]">
        <img
          alt={product.name}
          data-strk-img-id={`shop-${product.id}-u3v4w5`}
          data-strk-img={`[shop-${product.id}-title] gold jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            addItem(product)
          }}
          className="absolute bottom-0 left-0 right-0 bg-dark/90 text-white text-xs font-medium tracking-wide py-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          Add to Cart
        </button>
      </Link>
      <div className="mt-4">
        <h3 id={`shop-${product.id}-title`} className="text-xs font-medium tracking-product uppercase text-foreground">
          {product.name}
        </h3>
        <p className="text-sm text-muted mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
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

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-foreground">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-sm text-muted mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-medium uppercase tracking-wide text-foreground mb-4">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm transition-colors ${activeCategory === 'all' ? 'text-accent font-medium' : 'text-muted hover:text-foreground'}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm transition-colors ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted hover:text-foreground'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border mt-6 pt-6">
                <h3 className="text-xs font-medium uppercase tracking-wide text-foreground mb-4">Price</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => setSortBy('price-low')} className={`text-sm transition-colors ${sortBy === 'price-low' ? 'text-accent font-medium' : 'text-muted hover:text-foreground'}`}>Low to High</button></li>
                  <li><button onClick={() => setSortBy('price-high')} className={`text-sm transition-colors ${sortBy === 'price-high' ? 'text-accent font-medium' : 'text-muted hover:text-foreground'}`}>High to Low</button></li>
                </ul>
              </div>

              <div className="border-t border-border mt-6 pt-6">
                <h3 className="text-xs font-medium uppercase tracking-wide text-foreground mb-4">Material</h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-muted">18K Gold Plated</span></li>
                  <li><span className="text-sm text-muted">Sterling Silver</span></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter bar */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-foreground bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-foreground bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-accent"
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
              <div className="text-center py-16">
                <p className="text-muted">No products found in this category.</p>
                <button
                  onClick={() => setCategory('all')}
                  className="text-sm text-accent hover:text-accent-hover mt-4 underline underline-offset-4"
                >
                  View all jewelry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex items-center justify-between px-4 py-4 border-b border-border">
            <h2 className="font-serif text-lg text-foreground">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>
          <div className="px-4 py-6 space-y-6">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wide text-foreground mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => { setCategory('all'); setMobileFiltersOpen(false) }}
                  className={`px-4 py-2 text-xs border ${activeCategory === 'all' ? 'border-accent bg-accent text-white' : 'border-border text-foreground'}`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { setCategory(cat.id); setMobileFiltersOpen(false) }}
                    className={`px-4 py-2 text-xs border ${activeCategory === cat.id ? 'border-accent bg-accent text-white' : 'border-border text-foreground'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wide text-foreground mb-3">Sort</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'featured', label: 'Featured' },
                  { value: 'price-low', label: 'Price: Low' },
                  { value: 'price-high', label: 'Price: High' },
                  { value: 'rating', label: 'Top Rated' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setMobileFiltersOpen(false) }}
                    className={`px-4 py-2 text-xs border ${sortBy === opt.value ? 'border-accent bg-accent text-white' : 'border-border text-foreground'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
