import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const filteredProducts = useMemo(() => {
    let result = [...products]
    
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedPrice) {
      if (selectedPrice === 'under-50') result = result.filter((p) => p.price < 50)
      if (selectedPrice === '50-80') result = result.filter((p) => p.price >= 50 && p.price <= 80)
      if (selectedPrice === 'over-80') result = result.filter((p) => p.price > 80)
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial)
    }

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filteredProducts])

  useEffect(() => {
    setSelectedCategory(initialCategory)
  }, [initialCategory])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice('')
    setSelectedMaterial('')
  }

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-section uppercase font-semibold text-base mb-4">Category</h3>
        <div className="space-y-3">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block text-sm transition-colors ${!selectedCategory ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-section uppercase font-semibold text-base mb-4">Price</h3>
        <div className="space-y-3">
          {[
            { value: '', label: 'All Prices' },
            { value: 'under-50', label: 'Under $50' },
            { value: '50-80', label: '$50 – $80' },
            { value: 'over-80', label: 'Over $80' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedPrice(option.value)}
              className={`block text-sm transition-colors ${selectedPrice === option.value ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-section uppercase font-semibold text-base mb-4">Material</h3>
        <div className="space-y-3">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`block text-sm transition-colors ${!selectedMaterial ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
          >
            All Materials
          </button>
          <button
            onClick={() => setSelectedMaterial('18K Gold Plated')}
            className={`block text-sm transition-colors ${selectedMaterial === '18K Gold Plated' ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-wide uppercase text-gold hover:text-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-cream">
      {/* Page header */}
      <div className="max-w-content mx-auto px-6 lg:px-8 pt-8 pb-8">
        <h1 className="font-serif text-3xl md:text-4xl tracking-product uppercase text-base text-center">
          {selectedCategory ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop' : 'All Jewelry'}
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4" />
      </div>

      <div ref={containerRef} className="max-w-content mx-auto px-6 lg:px-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-divider">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-muted hover:text-base transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-sm text-muted hidden lg:block">{filteredProducts.length} pieces</p>

          <div className="flex items-center gap-2">
            <label className="text-xs text-muted">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-transparent border-b border-divider focus:border-gold outline-none py-1 text-base"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted mb-4">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="text-sm tracking-wide uppercase text-gold hover:text-gold-dark underline transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-ivory">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-cream/95 backdrop-blur-sm py-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ShoppingBag className="w-4 h-4 text-base" />
                          <span className="text-xs tracking-wide font-medium text-base uppercase">Quick Add</span>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-4">
                      <h3 id={product.titleId} className="font-serif text-sm tracking-product uppercase text-base">
                        {product.name}
                      </h3>
                      <p id={product.descId} className="text-xs text-muted mt-1">{product.description}</p>
                      <p className="text-sm font-medium text-base mt-2">${product.price}</p>
                    </div>
                    <button
                      onClick={() => addItem(product)}
                      className="mt-3 w-full border border-divider hover:border-gold text-xs tracking-wide uppercase py-2.5 font-medium text-base hover:text-gold transition-colors lg:hidden"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-base/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-cream z-50 shadow-2xl overflow-y-auto animate-slide-in-left">
            <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
              <h2 className="font-serif text-lg tracking-product uppercase text-base">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-muted hover:text-base" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterContent />
            </div>
          </div>

          <style>{`
            @keyframes slideInLeft {
              from { transform: translateX(-100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in-left {
              animation: slideInLeft 0.3s ease-out;
            }
          `}</style>
        </>
      )}
    </div>
  )
}

export default Shop
