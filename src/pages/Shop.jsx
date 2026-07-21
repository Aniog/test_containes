import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const activeCategory = searchParams.get('category') || ''
  const priceRange = searchParams.get('price') || ''
  const material = searchParams.get('material') || ''

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

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory)
    }
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true))
    }
    if (material) {
      result = result.filter(p => p.materials.toLowerCase().includes(material.toLowerCase()))
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
  }, [activeCategory, priceRange, material, sortBy])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filteredProducts])

  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $75', value: '50-75' },
    { label: '$75 - $100', value: '75-100' },
    { label: 'Over $100', value: '100-' },
  ]

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-product font-sans font-semibold text-charcoal uppercase mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          <button
            onClick={() => updateFilter('category', '')}
            className={`block text-sm font-sans transition-colors ${
              !activeCategory ? 'text-gold font-medium' : 'text-charcoal/60 hover:text-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={`block text-sm font-sans transition-colors ${
                activeCategory === cat.id ? 'text-gold font-medium' : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-product font-sans font-semibold text-charcoal uppercase mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          <button
            onClick={() => updateFilter('price', '')}
            className={`block text-sm font-sans transition-colors ${
              !priceRange ? 'text-gold font-medium' : 'text-charcoal/60 hover:text-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.value}
              onClick={() => updateFilter('price', range.value)}
              className={`block text-sm font-sans transition-colors ${
                priceRange === range.value ? 'text-gold font-medium' : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-product font-sans font-semibold text-charcoal uppercase mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          <button
            onClick={() => updateFilter('material', '')}
            className={`block text-sm font-sans transition-colors ${
              !material ? 'text-gold font-medium' : 'text-charcoal/60 hover:text-charcoal'
            }`}
          >
            All Materials
          </button>
          <button
            onClick={() => updateFilter('material', 'gold')}
            className={`block text-sm font-sans transition-colors ${
              material === 'gold' ? 'text-gold font-medium' : 'text-charcoal/60 hover:text-charcoal'
            }`}
          >
            Gold Plated
          </button>
          <button
            onClick={() => updateFilter('material', 'crystal')}
            className={`block text-sm font-sans transition-colors ${
              material === 'crystal' ? 'text-gold font-medium' : 'text-charcoal/60 hover:text-charcoal'
            }`}
          >
            Crystal
          </button>
        </div>
      </div>

      {/* Clear filters */}
      {(activeCategory || priceRange || material) && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans text-gold hover:text-gold-hover underline transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            {activeCategory ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-product font-sans font-medium text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            FILTERS
          </button>

          <p className="hidden md:block text-sm text-charcoal/40 font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-2">
            <label className="text-xs text-charcoal/40 font-sans">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-sans text-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal/40">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-gold font-sans hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-ivory">
                        <img
                          data-strk-img-id={`${product.imageId}-shop`}
                          data-strk-img={`[prod-${product.id}-desc] [prod-${product.id}-name]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              addItem(product)
                            }}
                            className="w-full py-3 bg-charcoal/90 text-cream text-xs tracking-product font-sans font-medium hover:bg-charcoal transition-colors flex items-center justify-center gap-2"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            ADD TO BAG
                          </button>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-xs md:text-sm tracking-product text-charcoal uppercase">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm font-sans font-medium text-charcoal mt-0.5">${product.price}</p>
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
          <div
            className="fixed inset-0 bg-charcoal/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-72 bg-cream z-50 p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg tracking-wide text-charcoal">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-charcoal/60 hover:text-charcoal"
                aria-label="Close filters"
              >
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

export default ShopPage
