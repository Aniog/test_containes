import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || 'all'
  const activeMaterial = searchParams.get('material') || 'all'
  const sortBy = searchParams.get('sort') || 'default'

  const filteredProducts = products.filter(p => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false
    if (activePrice === 'under50' && p.price >= 50) return false
    if (activePrice === '50to80' && (p.price < 50 || p.price > 80)) return false
    if (activePrice === 'over80' && p.price < 80) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [hoveredProduct, activeCategory, activePrice, activeMaterial, sortBy])

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 – $80' },
    { value: 'over80', label: 'Over $80' },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-stone-50">
            {activeCategory !== 'all'
              ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
              : 'Shop All'}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
          <p className="text-stone-400 text-sm mt-4">
            {sortedProducts.length} pieces
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-stone-700 pb-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest text-stone-300 hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop filters */}
          <div className="hidden md:flex items-center gap-6">
            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-stone-400">Category:</span>
              <select
                value={activeCategory}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="bg-stone-800 border border-stone-600 text-stone-50 text-sm px-3 py-1.5 focus:border-gold focus:outline-none"
              >
                <option value="all">All</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-stone-400">Price:</span>
              <select
                value={activePrice}
                onChange={(e) => updateFilter('price', e.target.value)}
                className="bg-stone-800 border border-stone-600 text-stone-50 text-sm px-3 py-1.5 focus:border-gold focus:outline-none"
              >
                {priceRanges.map(pr => (
                  <option key={pr.value} value={pr.value}>{pr.label}</option>
                ))}
              </select>
            </div>

            {/* Material */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-stone-400">Material:</span>
              <select
                value={activeMaterial}
                onChange={(e) => updateFilter('material', e.target.value)}
                className="bg-stone-800 border border-stone-600 text-stone-50 text-sm px-3 py-1.5 focus:border-gold focus:outline-none"
              >
                <option value="all">All</option>
                <option value="gold-plated">18K Gold Plated</option>
                <option value="silver-plated">Silver Plated</option>
              </select>
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-stone-400 hidden md:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="bg-stone-800 border border-stone-600 text-stone-50 text-sm px-3 py-1.5 focus:border-gold focus:outline-none"
            >
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile filter sidebar */}
        {sidebarOpen && (
          <div className="md:hidden mb-8 bg-stone-800 border border-stone-700 p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-sm uppercase tracking-widest text-stone-50">Filters</h3>
              <button onClick={() => setSidebarOpen(false)} className="text-stone-400 hover:text-stone-50">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Category</p>
                <div className="flex flex-wrap gap-2">
                  {['all', ...categories.map(c => c.id)].map(val => (
                    <button
                      key={val}
                      onClick={() => updateFilter('category', val)}
                      className={`px-3 py-1.5 text-xs uppercase tracking-widest transition-colors ${
                        activeCategory === val
                          ? 'border border-gold text-gold bg-gold/10'
                          : 'border border-stone-600 text-stone-400 hover:border-stone-500'
                      }`}
                    >
                      {val === 'all' ? 'All' : categories.find(c => c.id === val)?.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Price</p>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map(pr => (
                    <button
                      key={pr.value}
                      onClick={() => updateFilter('price', pr.value)}
                      className={`px-3 py-1.5 text-xs uppercase tracking-widest transition-colors ${
                        activePrice === pr.value
                          ? 'border border-gold text-gold bg-gold/10'
                          : 'border border-stone-600 text-stone-400 hover:border-stone-500'
                      }`}
                    >
                      {pr.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-serif text-lg text-stone-400">No pieces match your filters.</p>
            <button
              onClick={() => setSearchParams({})}
              className="mt-4 text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedProducts.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group block"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Image */}
                <div className="relative aspect-[4x3] overflow-hidden bg-stone-800">
                  <img
                    data-strk-img-id={product.images[0].imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio={product.images[0].ratio}
                    data-strk-img-width={product.images[0].width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img
                    data-strk-img-id={product.images[1].imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio={product.images[1].ratio}
                    data-strk-img-width={product.images[1].width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {/* Quick add */}
                  <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem(product.id, 1, 'gold')
                      }}
                      className="w-full bg-gold text-stone-900 font-serif uppercase tracking-widest text-xs py-2 hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-3">
                  <h3
                    id={product.titleId}
                    className="font-serif text-sm md:text-base uppercase tracking-widest text-stone-50 group-hover:text-gold transition-colors"
                  >
                    {product.name}
                  </h3>
                  <p className="text-gold text-sm mt-1">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
