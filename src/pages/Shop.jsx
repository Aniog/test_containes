import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || 'all'
  const activeMaterial = searchParams.get('material') || 'all'

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
      result = result.filter((p) =>
        p.material.toLowerCase().includes(activeMaterial.toLowerCase())
      )
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
  }, [activeCategory, activePrice, activeMaterial, sortBy])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filteredProducts])

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '30-50', label: '$30 – $50' },
    { value: '50-80', label: '$50 – $80' },
    { value: '80-120', label: '$80 – $120' },
  ]

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-cream/50 mb-4 font-sans">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', 'all')}
            className={`block text-sm font-light transition-colors ${
              activeCategory === 'all' ? 'text-gold' : 'text-warm-gray hover:text-cream'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.slug)}
              className={`block text-sm font-light transition-colors ${
                activeCategory === cat.slug ? 'text-gold' : 'text-warm-gray hover:text-cream'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-cream/50 mb-4 font-sans">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setFilter('price', range.value)}
              className={`block text-sm font-light transition-colors ${
                activePrice === range.value ? 'text-gold' : 'text-warm-gray hover:text-cream'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-cream/50 mb-4 font-sans">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('material', 'all')}
            className={`block text-sm font-light transition-colors ${
              activeMaterial === 'all' ? 'text-gold' : 'text-warm-gray hover:text-cream'
            }`}
          >
            All Materials
          </button>
          <button
            onClick={() => setFilter('material', 'gold')}
            className={`block text-sm font-light transition-colors ${
              activeMaterial === 'gold' ? 'text-gold' : 'text-warm-gray hover:text-cream'
            }`}
          >
            Gold Plated
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-cream tracking-wide">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-pearl/10">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-cream/70 font-sans"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <span className="text-xs text-warm-gray font-light">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-[0.1em] uppercase text-cream/70 font-sans pr-6 cursor-pointer focus:outline-none"
            >
              <option value="featured" className="bg-charcoal">Featured</option>
              <option value="price-low" className="bg-charcoal">Price: Low to High</option>
              <option value="price-high" className="bg-charcoal">Price: High to Low</option>
              <option value="rating" className="bg-charcoal">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-gray font-light">No pieces match your filters.</p>
                <button
                  onClick={() => {
                    setSearchParams({})
                    setSortBy('featured')
                  }}
                  className="mt-4 text-xs tracking-[0.15em] uppercase text-gold font-sans"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-warm-black">
                        <img
                          alt={product.name}
                          data-strk-img-id={`${product.imgId}-shop`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Quick add */}
                        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              addItem(product)
                            }}
                            className="w-full bg-charcoal/90 backdrop-blur-sm text-cream text-xs tracking-[0.15em] uppercase font-sans py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-charcoal transition-colors duration-300"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-4">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          id={product.titleId}
                          className="font-serif text-xs md:text-sm tracking-[0.12em] text-cream uppercase font-light"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-gold mt-1 font-light">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-charcoal z-50 md:hidden transform transition-transform duration-500 ${
          mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-pearl/10">
          <h2 className="text-xs tracking-[0.15em] uppercase text-cream font-sans">Filters</h2>
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="text-cream/50 hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-6">
          <FilterContent />
        </div>
      </div>
    </div>
  )
}

export default Shop
