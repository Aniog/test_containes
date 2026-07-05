import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'
  const activePriceRange = searchParams.get('price') || 'all'

  const priceRanges = [
    { label: 'Under $40', value: 'under-40', min: 0, max: 40 },
    { label: '$40 – $60', value: '40-60', min: 40, max: 60 },
    { label: '$60 – $80', value: '60-80', min: 60, max: 80 },
    { label: '$80+', value: '80-plus', min: 80, max: Infinity },
  ]

  const handleCategoryChange = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === 'all') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    setSearchParams(params)
  }

  const handlePriceChange = (val) => {
    const params = new URLSearchParams(searchParams)
    if (val === 'all') {
      params.delete('price')
    } else {
      params.set('price', val)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
    setSortBy('featured')
  }

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory)
    }

    // Price filter
    if (activePriceRange !== 'all') {
      const range = priceRanges.find((r) => r.value === activePriceRange)
      if (range) {
        filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        // featured: bestsellers first
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0))
    }

    return filtered
  }, [activeCategory, activePriceRange, sortBy])

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all'

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      variant: product.variants[0],
      image: product.images[0],
      quantity: 1,
    })
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-velvet-900 font-medium mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block text-sm w-full text-left py-1.5 transition-colors ${
              activeCategory === 'all' ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-900'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-sm w-full text-left py-1.5 transition-colors ${
                activeCategory === cat.id ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-900'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-velvet-900 font-medium mb-4">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => handlePriceChange('all')}
            className={`block text-sm w-full text-left py-1.5 transition-colors ${
              activePriceRange === 'all' ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-900'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => handlePriceChange(range.value)}
              className={`block text-sm w-full text-left py-1.5 transition-colors ${
                activePriceRange === range.value ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-900'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-velvet-900 font-medium mb-4">Material</h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Gold Plated Brass', 'Gold with Crystal'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 py-1 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 border-velvet-300 text-gold focus:ring-gold/30 rounded" />
              <span className="text-sm text-velvet-600 group-hover:text-velvet-900 transition-colors">{mat}</span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-[0.12em] text-gold hover:text-gold-dark transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="bg-velvet-50 border-b border-velvet-200">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-16">
          <p className="text-gold text-xs uppercase tracking-[0.15em] font-medium mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-velvet-900 font-light">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find((c) => c.id === activeCategory)?.name || 'All Jewelry'}
          </h1>
          <p className="text-velvet-600 text-sm mt-3">{filteredProducts.length} pieces</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-8 md:py-12">
        <div className="flex gap-8 md:gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-velvet-200">
              <div className="flex items-center gap-4">
                {/* Mobile filter toggle */}
                <button
                  className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-velvet-900 hover:text-gold transition-colors"
                  onClick={() => setSidebarOpen(true)}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <span className="text-velvet-500 text-xs hidden md:inline">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-velvet-500 text-xs uppercase tracking-wider">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs uppercase tracking-[0.08em] text-velvet-900 bg-transparent border border-velvet-300 px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-500 font-serif text-xl">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="text-gold text-xs uppercase tracking-wider mt-4 hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-velvet-100">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                      />
                      {product.images[1] && (
                        <img
                          src={product.images[1]}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
                        />
                      )}
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velvet-900 p-2.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gold hover:text-white z-10"
                        aria-label={`Quick add ${product.name}`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      </button>
                      <div className="absolute top-3 left-3 flex gap-2">
                        {product.isNew && (
                          <span className="bg-velvet-900 text-white text-[10px] uppercase tracking-wider px-2.5 py-1">
                            New
                          </span>
                        )}
                        {product.originalPrice && (
                          <span className="bg-gold text-white text-[10px] uppercase tracking-wider px-2.5 py-1">
                            Sale
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 space-y-1">
                      <h3 className="text-xs uppercase tracking-[0.15em] text-velvet-900 font-medium truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-gold text-sm font-medium">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-velvet-400 text-xs line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-[300px] max-w-[85vw] bg-[#f8f6f3] shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-6 border-b border-velvet-200">
              <h3 className="text-xs uppercase tracking-[0.12em] text-velvet-900 font-medium">Filters</h3>
              <button onClick={() => setSidebarOpen(false)} className="text-velvet-600 hover:text-velvet-900">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}