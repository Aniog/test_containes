import { useState, useMemo, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || 'all'

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory])

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
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal text-center">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-muted-fg font-sans text-center">
            {activeCategory === 'all'
              ? 'Explore our full collection of demi-fine gold jewelry'
              : categories.find(c => c.id === activeCategory)?.description || ''
            }
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-sans font-medium text-charcoal uppercase tracking-wider mb-4">Category</h3>
              <ul className="space-y-2 list-none p-0 m-0">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm font-sans transition-colors bg-transparent border-none p-0 rounded-none cursor-pointer ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm font-sans transition-colors bg-transparent border-none p-0 rounded-none cursor-pointer ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xs font-sans font-medium text-charcoal uppercase tracking-wider mb-4">Price</h3>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li><span className="text-sm text-muted-fg font-sans">Under $50</span></li>
                  <li><span className="text-sm text-muted-fg font-sans">$50 – $80</span></li>
                  <li><span className="text-sm text-muted-fg font-sans">$80+</span></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm text-charcoal font-sans bg-transparent border border-border px-3 py-2 rounded-none"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <p className="hidden md:block text-sm text-muted-fg font-sans">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-sans text-charcoal bg-transparent border border-border px-3 py-2 rounded-none focus:border-gold focus:outline-none"
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
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No pieces found</p>
                <p className="text-sm text-muted-fg mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-charcoal/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl text-charcoal">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-charcoal bg-transparent border-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h4 className="text-xs font-sans font-medium text-charcoal uppercase tracking-wider mb-3">Category</h4>
            <ul className="space-y-3 list-none p-0 m-0 mb-8">
              <li>
                <button
                  onClick={() => { setCategory('all'); setMobileFiltersOpen(false) }}
                  className={`text-sm font-sans bg-transparent border-none p-0 rounded-none ${activeCategory === 'all' ? 'text-gold font-medium' : 'text-muted-fg'}`}
                >
                  All Jewelry
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => { setCategory(cat.id); setMobileFiltersOpen(false) }}
                    className={`text-sm font-sans bg-transparent border-none p-0 rounded-none ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted-fg'}`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}
