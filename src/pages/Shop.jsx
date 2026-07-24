import { useState, useEffect, useRef, useMemo } from 'react'
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

  const categoryOptions = [
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
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 id="shop-page-title" className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="mt-3 text-muted-fg text-sm">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs uppercase tracking-extra-wide text-charcoal mb-4">Category</h3>
              <div className="space-y-2">
                {categoryOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setCategory(opt.value)}
                    className={`block text-sm transition-colors ${
                      activeCategory === opt.value
                        ? 'text-gold font-medium'
                        : 'text-muted-fg hover:text-charcoal'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="h-px bg-gold-light/20 my-6" />

              <h3 className="text-xs uppercase tracking-extra-wide text-charcoal mb-4">Price</h3>
              <div className="space-y-2">
                {['Under $40', '$40 – $60', '$60 – $100', 'Over $100'].map(range => (
                  <span key={range} className="block text-sm text-muted-fg cursor-pointer hover:text-charcoal transition-colors">
                    {range}
                  </span>
                ))}
              </div>

              <div className="h-px bg-gold-light/20 my-6" />

              <h3 className="text-xs uppercase tracking-extra-wide text-charcoal mb-4">Material</h3>
              <div className="space-y-2">
                {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(mat => (
                  <span key={mat} className="block text-sm text-muted-fg cursor-pointer hover:text-charcoal transition-colors">
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm text-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm text-charcoal bg-transparent border border-charcoal/20 px-3 py-1.5"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden bg-muted p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-extra-wide text-charcoal">Category</span>
                <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                  <X className="w-4 h-4 text-muted-fg" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setCategory(opt.value); setFilterOpen(false) }}
                    className={`px-4 py-2 text-xs uppercase tracking-wide border transition-colors ${
                      activeCategory === opt.value
                        ? 'border-gold bg-gold text-white'
                        : 'border-charcoal/20 text-charcoal'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-charcoal bg-transparent border border-charcoal/20 px-3 py-1.5 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-[3/4] bg-muted overflow-hidden">
                      <img
                        data-strk-img-id={`shop-${product.id}-img`}
                        data-strk-img={`[shop-${product.id}-name] [shop-page-title] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-4">
                      <h3
                        id={`shop-${product.id}-name`}
                        className="font-serif text-sm uppercase tracking-extra-wide text-charcoal"
                      >
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-fg">${product.price}</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => addItem(product)}
                    className="mt-3 w-full border border-charcoal/20 text-charcoal text-xs uppercase tracking-extra-wide py-2.5 hover:border-gold hover:text-gold transition-colors opacity-0 group-hover:opacity-100"
                  >
                    Add to Cart
                  </button>
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
      </div>
    </div>
  )
}
