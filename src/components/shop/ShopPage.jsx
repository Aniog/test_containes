import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories, priceRanges } from '@/data/products'
import { getImage } from '@/data/images'
import { useCart } from '@/components/cart/CartContext'

const productImageMap = {
  'vivid-aura-jewels': { primary: 'vivid-aura-primary', secondary: 'vivid-aura-secondary' },
  'majestic-flora-nectar': { primary: 'majestic-flora-primary', secondary: 'majestic-flora-secondary' },
  'golden-sphere-huggies': { primary: 'golden-sphere-primary', secondary: 'golden-sphere-secondary' },
  'amber-lace-earrings': { primary: 'amber-lace-primary', secondary: 'amber-lace-secondary' },
  'royal-heirloom-set': { primary: 'royal-heirloom-primary', secondary: 'royal-heirloom-secondary' },
}

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const imgKeys = productImageMap[product.id] || {}

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-warm-100">
          <img
            src={getImage(imgKeys.primary)}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src={getImage(imgKeys.secondary)}
            alt={`${product.name} worn`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-charcoal/90 text-white text-xs tracking-wide-2 uppercase font-medium py-3 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <h3
          id={product.titleId}
          className="font-serif text-xs uppercase tracking-ultra-wide text-charcoal"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="text-xs text-warm-500 mt-1">{product.description}</p>
        <p className="text-sm font-medium text-charcoal mt-1.5">${product.price}</p>
      </div>
    </div>
  )
}

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilters, setMobileFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''

  const setFilter = (key, value) => {
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

  let filtered = [...products]

  if (activeCategory) {
    filtered = filtered.filter((p) => p.category === activeCategory)
  }

  if (activePrice) {
    const range = priceRanges.find((r) => r.id === activePrice)
    if (range) {
      filtered = filtered.filter((p) => p.price >= range.min && p.price <= range.max)
    }
  }

  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'newest':
      filtered.reverse()
      break
    default:
      break
  }

  const hasFilters = activeCategory || activePrice

  return (
    <div className="bg-cream pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal text-center">
          {activeCategory
            ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
            : 'All Jewelry'}
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="md:hidden flex items-center gap-2 text-xs tracking-wide-2 uppercase font-medium text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasFilters && <span className="w-2 h-2 bg-gold rounded-full" />}
          </button>

          <p className="hidden md:block text-sm text-warm-500">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-wider uppercase font-medium text-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-warm-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs tracking-wide-2 uppercase font-semibold text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilter('category', '')}
                    className={`block text-sm transition-colors duration-200 ${!activeCategory ? 'text-charcoal font-medium' : 'text-warm-500 hover:text-charcoal'}`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilter('category', cat.id)}
                      className={`block text-sm transition-colors duration-200 ${activeCategory === cat.id ? 'text-charcoal font-medium' : 'text-warm-500 hover:text-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs tracking-wide-2 uppercase font-semibold text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilter('price', '')}
                    className={`block text-sm transition-colors duration-200 ${!activePrice ? 'text-charcoal font-medium' : 'text-warm-500 hover:text-charcoal'}`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setFilter('price', range.id)}
                      className={`block text-sm transition-colors duration-200 ${activePrice === range.id ? 'text-charcoal font-medium' : 'text-warm-500 hover:text-charcoal'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-gold hover:text-gold-dark transition-colors underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filters */}
          {mobileFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-charcoal/50" onClick={() => setMobileFilters(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-cream p-6 rounded-t-2xl max-h-[70vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm tracking-wide-2 uppercase font-semibold text-charcoal">Filters</h3>
                  <button onClick={() => setMobileFilters(false)}>
                    <X className="w-5 h-5 text-warm-500" />
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs tracking-wide-2 uppercase font-semibold text-charcoal mb-3">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setFilter('category', '')}
                      className={`px-4 py-2 text-xs tracking-wider uppercase ${!activeCategory ? 'bg-charcoal text-white' : 'bg-warm-100 text-warm-600'}`}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setFilter('category', cat.id)}
                        className={`px-4 py-2 text-xs tracking-wider uppercase ${activeCategory === cat.id ? 'bg-charcoal text-white' : 'bg-warm-100 text-warm-600'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs tracking-wide-2 uppercase font-semibold text-charcoal mb-3">Price</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setFilter('price', '')}
                      className={`px-4 py-2 text-xs tracking-wider uppercase ${!activePrice ? 'bg-charcoal text-white' : 'bg-warm-100 text-warm-600'}`}
                    >
                      All
                    </button>
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setFilter('price', range.id)}
                        className={`px-4 py-2 text-xs tracking-wider uppercase ${activePrice === range.id ? 'bg-charcoal text-white' : 'bg-warm-100 text-warm-600'}`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => { clearFilters(); setMobileFilters(false) }}
                  className="w-full border border-gold text-gold text-xs tracking-wide-2 uppercase font-medium py-3 hover:bg-gold hover:text-charcoal transition-all duration-300"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-500 mb-4">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-gold text-xs tracking-wide-2 uppercase hover:text-gold-dark transition-colors underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
