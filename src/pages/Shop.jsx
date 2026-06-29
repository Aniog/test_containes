import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@/lib/image-helper'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Top Rated', value: 'rating' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || ''
  const activePriceRange = searchParams.get('price') || ''
  const activeMaterial = searchParams.get('material') || ''

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

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory)
    }

    if (activePriceRange) {
      const range = priceRanges.find(r => r.label === activePriceRange)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
    }

    if (activeMaterial) {
      result = result.filter(p => p.materials.toLowerCase().includes(activeMaterial.toLowerCase()))
    }

    switch (sort) {
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
  }, [activeCategory, activePriceRange, activeMaterial, sort])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filteredProducts])

  const hasFilters = activeCategory || activePriceRange || activeMaterial

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-charcoal mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', '')}
            className={`block text-sm transition-colors ${!activeCategory ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block text-sm transition-colors ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-charcoal mb-3">Price</h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setFilter('price', activePriceRange === range.label ? '' : range.label)}
              className={`block text-sm transition-colors ${activePriceRange === range.label ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-charcoal mb-3">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('material', '')}
            className={`block text-sm transition-colors ${!activeMaterial ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('material', activeMaterial === 'gold plated' ? '' : 'gold plated')}
            className={`block text-sm transition-colors ${activeMaterial === 'gold plated' ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'}`}
          >
            Gold Plated
          </button>
          <button
            onClick={() => setFilter('material', activeMaterial === 'crystal' ? '' : 'crystal')}
            className={`block text-sm transition-colors ${activeMaterial === 'crystal' ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'}`}
          >
            Crystal Accent
          </button>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-[0.15em] text-gold hover:text-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            {activeCategory ? categories.find(c => c.id === activeCategory)?.name || 'Shop' : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-sm text-muted hidden md:block">{filteredProducts.length} pieces</p>
          <div className="flex items-center gap-2">
            <label className="text-xs uppercase tracking-[0.15em] text-muted hidden sm:inline">Sort:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm text-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted">No pieces match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-[0.15em] text-gold hover:text-gold-dark transition-colors underline"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductGridCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-charcoal/40 z-40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-72 bg-cream z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-muted hover:text-charcoal">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  )
}

function ProductGridCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`shop-${product.imgId}-alt`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn model gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={(e) => { e.preventDefault(); onAddToCart() }}
        className={`absolute bottom-3 left-3 right-3 bg-cream/95 text-charcoal py-2.5 text-[11px] uppercase tracking-[0.15em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="mt-3">
        <h3 className="font-serif text-xs md:text-sm uppercase tracking-[0.12em] text-charcoal">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-xs text-muted mt-0.5 hidden md:block">{product.shortDescription}</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border-dark'}`} />
            ))}
          </div>
          <span className="text-xs text-muted">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  )
}
