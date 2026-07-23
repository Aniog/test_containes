import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrice, selectedMaterial])

  const filteredProducts = products.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false
    if (selectedPrice === 'under50' && p.price >= 50) return false
    if (selectedPrice === '50to80' && (p.price < 50 || p.price > 80)) return false
    if (selectedPrice === 'over80' && p.price < 80) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  const handleAddToCart = (product) => {
    addItem(product, 'gold', 1)
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPrice('all')
    setSelectedMaterial('all')
    setSearchParams({})
  }

  const hasFilters = selectedCategory !== 'all' || selectedPrice !== 'all' || selectedMaterial !== 'all'

  return (
    <div ref={containerRef} className="min-h-screen bg-warm-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 id="shop-title" className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-warm-black">
            The Collection
          </h1>
          <p id="shop-subtitle" className="font-sans text-sm text-warm-black/50 mt-2">Discover pieces crafted to complement your everyday</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 border-b border-warm-sand pb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-warm-black hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasFilters && <span className="w-2 h-2 bg-gold rounded-full" />}
          </button>

          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-warm-black/40">{sortedProducts.length} pieces</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-xs uppercase tracking-wider text-warm-black bg-transparent border border-warm-sand px-3 py-2 appearance-none cursor-pointer hover:border-gold transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 text-warm-black/40 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filters panel */}
        {showFilters && (
          <div className="mb-8 p-6 bg-warm-ivory border border-warm-sand">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-sans text-xs uppercase tracking-wider text-warm-black">Filter by</h3>
              {hasFilters && (
                <button onClick={clearFilters} className="flex items-center gap-1 font-sans text-xs text-warm-black/40 hover:text-warm-black transition-colors">
                  <X className="w-3 h-3" />
                  Clear all
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category */}
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-warm-black/40 mb-3">Category</p>
                <div className="space-y-2">
                  <button
                    onClick={() => { setSelectedCategory('all'); setSearchParams({}) }}
                    className={`font-sans text-sm ${selectedCategory === 'all' ? 'text-gold' : 'text-warm-black/60 hover:text-warm-black'} transition-colors`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }) }}
                      className={`font-sans text-sm ${selectedCategory === cat.id ? 'text-gold' : 'text-warm-black/60 hover:text-warm-black'} transition-colors`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-warm-black/40 mb-3">Price</p>
                <div className="space-y-2">
                  {[
                    { key: 'all', label: 'All Prices' },
                    { key: 'under50', label: 'Under $50' },
                    { key: '50to80', label: '$50 – $80' },
                    { key: 'over80', label: 'Over $80' },
                  ].map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setSelectedPrice(opt.key)}
                      className={`font-sans text-sm ${selectedPrice === opt.key ? 'text-gold' : 'text-warm-black/60 hover:text-warm-black'} transition-colors`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-warm-black/40 mb-3">Material</p>
                <div className="space-y-2">
                  {[
                    { key: 'all', label: 'All Materials' },
                    { key: 'gold', label: '18K Gold Plated' },
                    { key: 'silver', label: 'Silver Plated' },
                  ].map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setSelectedMaterial(opt.key)}
                      className={`font-sans text-sm ${selectedMaterial === opt.key ? 'text-gold' : 'text-warm-black/60 hover:text-warm-black'} transition-colors`}
                    >
                      {opt.label}
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
            <p className="font-serif text-lg text-warm-black/50">No pieces match your filters</p>
            <button onClick={clearFilters} className="mt-4 font-sans text-sm uppercase tracking-wider text-gold hover:text-gold-dark transition-colors underline">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedProducts.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group block"
              >
                <div className="relative aspect-[3x4] bg-warm-ivory overflow-hidden">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [shop-subtitle] [shop-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    data-strk-img-id={product.imgId2}
                    data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  {/* Quick add */}
                  <div className="absolute inset-0 bg-warm-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAddToCart(product) }}
                      className="bg-gold text-warm-black font-sans text-xs uppercase tracking-wider px-6 py-2.5 hover:bg-gold-light transition-colors flex items-center gap-2"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-3 md:mt-4">
                  <h3 id={product.titleId} className="font-serif text-xs md:text-sm uppercase tracking-widest text-warm-black">{product.name}</h3>
                  <p id={product.descId} className="font-sans text-xs text-warm-black/50 mt-1 hidden md:block">{product.shortDescription}</p>
                  <p className="font-sans font-semibold text-sm text-warm-black mt-1">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
