import React, { useState, useRef, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || 'all'
  const activeMaterial = searchParams.get('material') || 'all'
  const sortBy = searchParams.get('sort') || 'featured'

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (activePrice !== 'all') {
      const [min, max] = activePrice.split('-').map(Number)
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }

    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial)
    }

    switch (sortBy) {
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
  }, [activeCategory, activePrice, activeMaterial, sortBy])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filteredProducts])

  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $75', value: '50-75' },
    { label: '$75 - $100', value: '75-100' },
    { label: 'Over $100', value: '100-999' },
  ]

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-superwide uppercase text-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', 'all')}
            className={`block font-sans text-sm transition-colors ${
              activeCategory === 'all' ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.slug)}
              className={`block font-sans text-sm transition-colors ${
                activeCategory === cat.slug ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-superwide uppercase text-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setFilter('price', range.value)}
              className={`block font-sans text-sm transition-colors ${
                activePrice === range.value ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-superwide uppercase text-charcoal mb-4">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('material', 'all')}
            className={`block font-sans text-sm transition-colors ${
              activeMaterial === 'all' ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'
            }`}
          >
            All Materials
          </button>
          <button
            onClick={() => setFilter('material', '18K Gold Plated')}
            className={`block font-sans text-sm transition-colors ${
              activeMaterial === '18K Gold Plated' ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'
            }`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <main ref={containerRef} className="bg-cream pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-charcoal">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block font-sans text-sm text-stone-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-wider uppercase text-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-sm text-stone-500">Try adjusting your filters</p>
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
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3x4] overflow-hidden bg-cream-dark">
                        <img
                          alt={product.name}
                          data-strk-img-id={`${product.imgId}-shop`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        <img
                          alt={`${product.name} alternate`}
                          data-strk-img-id={`${product.imgId}-shop-alt`}
                          data-strk-img={`[${product.descId}] worn [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                        <div
                          className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm transition-all duration-300 ${
                            hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                          }`}
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              addItem(product)
                            }}
                            className="w-full flex items-center justify-center gap-2 py-3 text-cream font-sans text-xs tracking-superwide uppercase hover:text-gold transition-colors"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-4">
                      <h3 id={product.titleId} className="product-name text-sm text-charcoal">
                        {product.name}
                      </h3>
                      <p id={product.descId} className="text-xs text-stone-500 mt-1 font-sans">
                        {product.description}
                      </p>
                      <p className="font-sans text-sm font-medium text-charcoal mt-2">${product.price}</p>
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
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-cream z-50 shadow-2xl animate-fade-in overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
              <h2 className="font-sans text-sm tracking-superwide uppercase text-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-stone-500" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterContent />
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default ShopPage
