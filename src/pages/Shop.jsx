import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

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
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeSort = searchParams.get('sort') || 'featured'

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory)
    }

    if (activePrice) {
      const range = priceRanges.find(r => r.label === activePrice)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeSort])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [filteredProducts, hoveredId])

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tone[0], 1)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePrice

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-nav uppercase font-semibold text-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          <button
            onClick={() => updateFilter('category', '')}
            className={`block text-sm transition-colors ${!activeCategory ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.slug)}
              className={`block text-sm transition-colors ${activeCategory === cat.slug ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-nav uppercase font-semibold text-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          <button
            onClick={() => updateFilter('price', '')}
            className={`block text-sm transition-colors ${!activePrice ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'}`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => updateFilter('price', range.label)}
              className={`block text-sm transition-colors ${activePrice === range.label ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-nav uppercase text-gold hover:text-gold-dark transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="bg-cream min-h-screen pt-24 md:pt-28">
      <div className="max-w-content mx-auto px-5 md:px-8">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
            {activeCategory || 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-nav uppercase font-semibold text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-sm text-stone-500 hidden md:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort */}
          <div className="relative">
            <select
              value={activeSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-nav uppercase font-semibold text-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 text-stone-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal">No pieces found</p>
                <p className="text-sm text-stone-500 mt-2">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs tracking-nav uppercase text-gold hover:text-gold-dark"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-3">
                      <img
                        data-strk-img-id={hoveredId === product.id ? product.imgId2 : product.imgId}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-charcoal/80 backdrop-blur-sm py-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="flex items-center gap-2 text-cream text-[11px] tracking-nav uppercase font-semibold hover:text-gold transition-colors"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <h3
                      id={product.titleId}
                      className="font-serif text-xs md:text-sm tracking-product uppercase text-charcoal text-center"
                    >
                      {product.name}
                    </h3>
                    <p
                      id={product.descId}
                      className="text-[11px] text-stone-500 text-center mt-0.5 hidden"
                    >
                      {product.description}
                    </p>
                    <p className="text-sm font-medium text-charcoal text-center mt-1">
                      ${product.price}
                    </p>
                  </Link>
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
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs tracking-nav uppercase font-semibold text-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-stone-500" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  )
}
