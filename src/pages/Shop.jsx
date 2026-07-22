import React, { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCartDispatch } from '@/components/cart/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Shop = () => {
  const containerRef = useRef(null)
  const dispatch = useCartDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const [hoveredId, setHoveredId] = useState(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || 'all'
  const activeMaterial = searchParams.get('material') || 'all'

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory, activePrice, activeMaterial])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const filteredProducts = products.filter((p) => {
    if (activeCategory !== 'all' && p.category.toLowerCase() !== activeCategory) return false
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

  const handleQuickAdd = (product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        tone: product.tone[0],
        quantity: 1,
      }
    })
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== 'all' || activePrice !== 'all' || activeMaterial !== 'all'

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="font-serif text-sm uppercase tracking-widest text-stone-800 mb-4">Category</h3>
        <div className="space-y-2">
          {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat)}
              className={`block font-sans text-sm transition-colors ${
                activeCategory === cat
                  ? 'text-velmora-gold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-serif text-sm uppercase tracking-widest text-stone-800 mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map((price) => (
            <button
              key={price.value}
              onClick={() => updateFilter('price', price.value)}
              className={`block font-sans text-sm transition-colors ${
                activePrice === price.value
                  ? 'text-velmora-gold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {price.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="font-serif text-sm uppercase tracking-widest text-stone-800 mb-4">Material</h3>
        <div className="space-y-2">
          {['all', '18K Gold Plated'].map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', mat)}
              className={`block font-sans text-sm transition-colors ${
                activeMaterial === mat
                  ? 'text-velmora-gold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {mat === 'all' ? 'All Materials' : mat}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-sm text-velmora-gold hover:text-velmora-gold-dark transition-colors underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-800 tracking-wide">
            The Collection
          </h1>
          <p className="font-sans text-sm text-stone-500 mt-3 tracking-wider uppercase">
            {sortedProducts.length} pieces
          </p>
        </div>

        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 font-sans text-sm text-stone-600"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          {/* Sort dropdown - mobile */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-sm text-stone-600 bg-transparent border-none appearance-none pr-4"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile filters overlay */}
        {mobileFiltersOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="fixed left-0 top-0 bottom-0 w-3/4 max-w-xs bg-velmora-cream z-50 shadow-lg overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-stone-200">
                <h2 className="font-serif text-lg tracking-widest uppercase text-stone-800">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-stone-500 p-1"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterSidebar mobile />
            </div>
          </>
        )}

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort - desktop */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm text-stone-600 bg-transparent border border-stone-200 px-3 py-2 appearance-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map((product) => (
                <article
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <Link to={`/product/${product.slug}`} className="block">
                    <div className="relative aspect-[3x4] overflow-hidden bg-stone-200">
                      <img
                        data-strk-img-id={`shop-${product.images[0].imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.images[0].alt}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                          hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      <img
                        data-strk-img-id={`shop-${product.images[1].imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] worn detail`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.images[1].alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </div>
                  </Link>

                  {/* Quick add */}
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className={`absolute bottom-3 left-1/2 -translate-x-1/2 bg-velmora-gold text-stone-900 font-sans text-xs uppercase tracking-wider px-4 py-2 transition-all duration-300 ${
                      hoveredId === product.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    } hover:bg-velmora-gold-dark`}
                    aria-label={`Quick add ${product.name} to cart`}
                  >
                    <ShoppingBag className="w-3 h-3 inline mr-1" />
                    Add to Cart
                  </button>

                  {/* Info */}
                  <div className="mt-4">
                    <Link to={`/product/${product.slug}`}>
                      <h3
                        id={product.titleId}
                        className="product-name text-xs md:text-sm text-stone-800 hover:text-velmora-gold transition-colors"
                      >
                        {product.name}
                      </h3>
                    </Link>
                    <p
                      id={product.descId}
                      className="font-sans text-xs text-stone-500 mt-1 line-clamp-2 hidden md:block"
                    >
                      {product.description}
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-3 h-3 text-velmora-gold fill-velmora-gold" />
                      <span className="font-sans text-xs text-stone-500">{product.rating}</span>
                    </div>
                    <p className="font-serif text-sm md:text-base text-velmora-gold mt-1">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty state */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-600">No pieces match your filters</p>
                <button
                  onClick={clearFilters}
                  className="btn-outline inline-block mt-6"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
