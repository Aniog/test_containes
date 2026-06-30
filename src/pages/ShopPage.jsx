import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeMaterial = searchParams.get('material') || ''

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())
    }
    if (activePrice) {
      if (activePrice === 'under-50') result = result.filter((p) => p.price < 50)
      else if (activePrice === '50-80') result = result.filter((p) => p.price >= 50 && p.price <= 80)
      else if (activePrice === 'over-80') result = result.filter((p) => p.price > 80)
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material.toLowerCase().includes(activeMaterial.toLowerCase()))
    }

    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break
      case 'price-high': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      default: break
    }

    return result
  }, [activeCategory, activePrice, activeMaterial, sortBy])

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [filteredProducts])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePrice || activeMaterial

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-24'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-sans text-xs uppercase tracking-wider-custom text-charcoal font-semibold">Filters</h3>
        {hasFilters && (
          <button onClick={clearFilters} className="font-sans text-[11px] uppercase tracking-wider text-gold hover:text-gold-hover transition-colors">
            Clear All
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-sans text-xs uppercase tracking-wider-custom text-stone-500 font-medium mb-3">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', '')}
            className={`block font-sans text-sm transition-colors ${!activeCategory ? 'text-charcoal font-medium' : 'text-stone-400 hover:text-charcoal'}`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.slug)}
              className={`block font-sans text-sm transition-colors ${activeCategory === cat.slug ? 'text-charcoal font-medium' : 'text-stone-400 hover:text-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="font-sans text-xs uppercase tracking-wider-custom text-stone-500 font-medium mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { value: '', label: 'All Prices' },
            { value: 'under-50', label: 'Under $50' },
            { value: '50-80', label: '$50 – $80' },
            { value: 'over-80', label: 'Over $80' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => updateFilter('price', option.value)}
              className={`block font-sans text-sm transition-colors ${activePrice === option.value ? 'text-charcoal font-medium' : 'text-stone-400 hover:text-charcoal'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="font-sans text-xs uppercase tracking-wider-custom text-stone-500 font-medium mb-3">Material</h4>
        <div className="space-y-2">
          {[
            { value: '', label: 'All Materials' },
            { value: 'gold', label: '18K Gold Plated' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => updateFilter('material', option.value)}
              className={`block font-sans text-sm transition-colors ${activeMaterial === option.value ? 'text-charcoal font-medium' : 'text-stone-400 hover:text-charcoal'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="bg-cream pt-20 md:pt-24">
      <div className="max-w-content mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-light">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-wider-custom text-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <span className="font-sans text-xs text-stone-400">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs uppercase tracking-wider-custom text-stone-500 bg-transparent border-none focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-400 mb-4">No pieces found</p>
                <button onClick={clearFilters} className="btn-outline">View All</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.slug}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
                        <img
                          data-strk-img-id={product.imgId + '-shop'}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <img
                          data-strk-img-id={product.imgId2 + '-shop'}
                          data-strk-img={`[${product.descId}] [${product.titleId}] side view`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                        />

                        {/* Quick add */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm transition-all duration-300 ${
                            hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                          }`}
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              addItem(product)
                            }}
                            className="w-full flex items-center justify-center gap-2 py-3 font-sans text-xs uppercase tracking-wider-custom text-cream hover:text-gold transition-colors"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>

                    <div className="mt-3">
                      <Link to={`/product/${product.slug}`}>
                        <h3 id={product.titleId + '-shop'} className="product-name text-charcoal">{product.name}</h3>
                      </Link>
                      <p id={product.descId + '-shop'} className="sr-only">{product.description}</p>
                      <p className="font-sans text-sm text-stone-500 mt-1">${product.price}</p>
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
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl animate-fade-in overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
              <h3 className="font-sans text-xs uppercase tracking-wider-custom text-charcoal font-semibold">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-stone-500" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar mobile />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default ShopPage
