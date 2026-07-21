import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/components/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)
  const { addItem } = useCart()

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
      result = result.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())
    }
    if (activePrice !== 'all') {
      const [min, max] = activePrice.split('-').map(Number)
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material.toLowerCase().includes(activeMaterial.toLowerCase()))
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
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [filteredProducts])

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-28'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-sans text-xs uppercase tracking-wide font-semibold text-brand-charcoal">Filters</h3>
        {mobile && (
          <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-brand-warm-gray" aria-label="Close filters">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray font-medium mb-3">Category</h4>
        <div className="space-y-2">
          {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter('category', cat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                activeCategory === cat ? 'text-brand-gold font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray font-medium mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '30-50', label: '$30 – $50' },
            { value: '50-70', label: '$50 – $70' },
            { value: '70-120', label: '$70+' },
          ].map((price) => (
            <button
              key={price.value}
              onClick={() => setFilter('price', price.value)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                activePrice === price.value ? 'text-brand-gold font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {price.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray font-medium mb-3">Material</h4>
        <div className="space-y-2">
          {['all', 'gold'].map((mat) => (
            <button
              key={mat}
              onClick={() => setFilter('material', mat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                activeMaterial === mat ? 'text-brand-gold font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {mat === 'all' ? 'All Materials' : '18K Gold Plated'}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-display-sm md:text-display text-brand-charcoal mb-3">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-sans text-sm text-brand-cool-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter button + Sort */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-wide text-brand-charcoal font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs uppercase tracking-wide text-brand-warm-gray pr-6 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 lg:gap-14">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-xs uppercase tracking-wide text-brand-warm-gray pr-6 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-warm-gray pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-brand-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-sm text-brand-cool-gray">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-brand-ivory mb-3">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="flex items-start justify-between gap-2">
                      <Link to={`/product/${product.id}`}>
                        <h3 id={product.titleId} className="font-serif text-xs md:text-sm uppercase tracking-ultra-wide text-brand-charcoal mb-0.5">
                          {product.name}
                        </h3>
                        <p className="font-sans text-sm text-brand-warm-gray">${product.price}</p>
                      </Link>
                      <button
                        onClick={() => addItem(product)}
                        className="p-2 text-brand-warm-gray hover:text-brand-gold transition-colors flex-shrink-0"
                        aria-label="Add to cart"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
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
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-72 bg-brand-cream z-50 p-6 overflow-y-auto shadow-2xl">
            <FilterSidebar mobile />
          </div>
        </>
      )}
    </div>
  )
}

export default ShopPage
