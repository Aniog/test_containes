import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A–Z' },
]

const Shop = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''
  
  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    setCategory(initialCategory)
  }, [initialCategory])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRange, material, sort])

  const filteredProducts = useMemo(() => {
    let result = [...products]
    
    if (category) {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase())
    }
    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50)
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80)
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80)
    }
    
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }
    
    return result
  }, [category, priceRange, material, sort])

  const clearFilters = () => {
    setCategory('')
    setPriceRange('all')
    setMaterial('all')
  }

  const hasFilters = category || priceRange !== 'all' || material !== 'all'

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-btn font-semibold text-brand-stone-800 mb-3">Category</h3>
        <div className="space-y-2">
          {['', 'Earrings', 'Necklaces', 'Huggies'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                category === cat ? 'text-brand-gold font-medium' : 'text-brand-stone-600 hover:text-brand-stone-800'
              }`}
            >
              {cat || 'All Jewelry'}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-btn font-semibold text-brand-stone-800 mb-3">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => setPriceRange(opt.value)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                priceRange === opt.value ? 'text-brand-gold font-medium' : 'text-brand-stone-600 hover:text-brand-stone-800'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-btn font-semibold text-brand-stone-800 mb-3">Material</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Materials' },
            { value: 'gold', label: '18K Gold Plated' },
            { value: 'silver', label: 'Silver Plated' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => setMaterial(opt.value)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                material === opt.value ? 'text-brand-gold font-medium' : 'text-brand-stone-600 hover:text-brand-stone-800'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-btn text-brand-gold hover:text-brand-gold-light transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 md:pt-24 pb-16">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 text-center">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-stone-800">
          {category || 'All Jewelry'}
        </h1>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-stone-200">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-btn font-medium text-brand-stone-800"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-xs text-brand-stone-400">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs uppercase tracking-btn font-medium text-brand-stone-800 pr-6 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-stone-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-brand-stone-800 mb-2">No pieces found</p>
                <p className="text-sm text-brand-stone-400">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-brand-cream">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <img
                          data-strk-img-id={`shop-hover-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] worn`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              addItem(product)
                            }}
                            className="w-full bg-brand-charcoal/90 text-white text-xs uppercase tracking-btn font-medium py-3 flex items-center justify-center gap-2 hover:bg-brand-charcoal transition-colors"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-xs md:text-sm uppercase tracking-product text-brand-stone-800">{product.name}</h3>
                      </Link>
                      <p className="text-xs text-brand-stone-400 mt-0.5">{product.description}</p>
                      <p className="text-sm font-medium text-brand-stone-800 mt-1">${product.price}</p>
                    </div>
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
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-btn font-semibold text-brand-stone-800">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-brand-stone-600" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}

export default Shop
