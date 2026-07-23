import { useState, useRef, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [sort, setSort] = useState('featured')
  const { addItem } = useCart()

  const activeCategory = searchParams.get('category') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
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

  const categories = ['all', 'earrings', 'necklaces', 'huggies']

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <h1 className="font-serif text-3xl lg:text-4xl font-light text-charcoal text-center">
          {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
        </h1>
        <p className="mt-3 text-sm text-muted-fg font-sans text-center">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-medium text-charcoal bg-transparent border-none cursor-pointer hover:text-gold transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden lg:flex items-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 text-xs uppercase tracking-widest font-sans border cursor-pointer transition-all ${
                  activeCategory === cat
                    ? 'border-gold bg-gold text-white'
                    : 'border-border bg-transparent text-charcoal hover:border-gold'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs font-sans text-charcoal bg-transparent border border-border px-3 py-2 cursor-pointer focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`block w-full text-left text-sm font-sans py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
                      activeCategory === cat ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                    }`}
                  >
                    {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-4">Price</h3>
                <div className="space-y-2 text-sm font-sans text-muted-fg">
                  <p>$30 – $50</p>
                  <p>$50 – $75</p>
                  <p>$75 – $120</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-4">Material</h3>
                <div className="space-y-2 text-sm font-sans text-muted-fg">
                  <p>18K Gold Plated</p>
                  <p>Sterling Silver</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-charcoal/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-72 bg-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-charcoal">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} className="bg-transparent border-none text-charcoal p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setCategory(cat); setFilterOpen(false) }}
                      className={`block w-full text-left text-sm font-sans py-2 bg-transparent border-none cursor-pointer transition-colors ${
                        activeCategory === cat ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="block no-underline">
                    <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-${product.id}-img`}
                        data-strk-img={`[shop-${product.id}-title] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => addItem(product)}
                    className="absolute bottom-[calc(3.5rem+16px)] left-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal text-xs uppercase tracking-widest font-sans font-medium py-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border-none cursor-pointer hover:bg-gold hover:text-white"
                  >
                    Add to Cart
                  </button>
                  <div className="mt-3">
                    <h3 id={`shop-${product.id}-title`} className="text-xs uppercase tracking-product font-sans font-medium text-charcoal">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm font-sans text-muted-fg">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted-fg">No pieces found</p>
                <button
                  onClick={() => setCategory('all')}
                  className="mt-4 text-sm text-gold font-sans bg-transparent border-none cursor-pointer underline"
                >
                  View all jewelry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
