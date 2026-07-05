import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/lib/CartContext'
import { useSectionReveal } from '@/lib/useSectionReveal'

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const containerRef = useRef(null)
  const revealRef = useSectionReveal()
  const { addItem } = useCart()

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const cat = searchParams.get('category') || 'all'
    setCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [category, priceRange, material, sort])

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => {
      if (priceRange === 'under50') return p.price < 50
      if (priceRange === '50to80') return p.price >= 50 && p.price <= 80
      if (priceRange === 'over80') return p.price > 80
      return true
    })
    .filter(p => material === 'all' || p.material.toLowerCase().includes(material))
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  const clearFilters = () => {
    setCategory('all')
    setPriceRange('all')
    setMaterial('all')
  }

  const hasActiveFilters = category !== 'all' || priceRange !== 'all' || material !== 'all'

  return (
    <div ref={(el) => {
      containerRef.current = el
      revealRef.current = el
    }} className="pt-20 md:pt-24 pb-16">
      <div className="max-w-content mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="section-reveal text-center mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-warm-900">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-warm-300">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-btn uppercase font-medium text-warm-900 hover:text-gold transition-colors md:pointer-events-none"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            )}
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-warm-600 hidden md:inline">Sort by</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent text-xs tracking-btn uppercase font-medium text-warm-900 pr-5 cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-warm-600 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`md:w-56 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="md:sticky md:top-24 space-y-6">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-btn uppercase font-medium text-warm-900 mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'earrings', label: 'Earrings' },
                    { value: 'necklaces', label: 'Necklaces' },
                    { value: 'huggies', label: 'Huggies' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setCategory(opt.value)}
                      className={`block text-sm transition-colors ${
                        category === opt.value
                          ? 'text-warm-900 font-medium'
                          : 'text-warm-600 hover:text-warm-900'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-btn uppercase font-medium text-warm-900 mb-3">
                  Price
                </h3>
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
                      className={`block text-sm transition-colors ${
                        priceRange === opt.value
                          ? 'text-warm-900 font-medium'
                          : 'text-warm-600 hover:text-warm-900'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-btn uppercase font-medium text-warm-900 mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'gold', label: 'Gold Plated' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setMaterial(opt.value)}
                      className={`block text-sm transition-colors ${
                        material === opt.value
                          ? 'text-warm-900 font-medium'
                          : 'text-warm-600 hover:text-warm-900'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-gold hover:text-gold-hover transition-colors underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-xs text-warm-600 mb-4">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-warm-600 text-sm">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-xs text-gold hover:text-gold-hover underline transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-square overflow-hidden rounded bg-warm-200">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        <img
                          data-strk-img-id={`shop-${product.imgId}-alt`}
                          data-strk-img={`[${product.descId}] worn [${product.titleId}]`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </div>
                    </Link>

                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        addItem(product)
                      }}
                      className={`absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-warm-900 text-[10px] tracking-btn uppercase font-medium px-4 py-2 rounded transition-all duration-300 flex items-center gap-1.5 hover:bg-gold hover:text-white ${
                        hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add to Cart
                    </button>

                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          id={product.titleId}
                          className="font-serif text-sm tracking-product uppercase text-warm-900 hover:text-gold transition-colors"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p
                        id={product.descId}
                        className="text-xs text-warm-600 mt-0.5"
                      >
                        {product.description}
                      </p>
                      <p className="text-sm font-medium text-warm-900 mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
