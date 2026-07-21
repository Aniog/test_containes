import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ShopPage = () => {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory)
    }

    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice.split('-').map(Number)
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial)
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

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
        <h3 className="font-sans text-xs font-semibold tracking-section uppercase text-base mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => { setSelectedCategory('all'); setSearchParams({}) }}
            className={`block w-full text-left font-sans text-sm transition-colors ${
              selectedCategory === 'all' ? 'text-gold font-medium' : 'text-muted hover:text-base'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }) }}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                selectedCategory === cat.id ? 'text-gold font-medium' : 'text-muted hover:text-base'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs font-semibold tracking-section uppercase text-base mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setSelectedPrice(range.value)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                selectedPrice === range.value ? 'text-gold font-medium' : 'text-muted hover:text-base'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs font-semibold tracking-section uppercase text-base mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('all')}
            className={`block w-full text-left font-sans text-sm transition-colors ${
              selectedMaterial === 'all' ? 'text-gold font-medium' : 'text-muted hover:text-base'
            }`}
          >
            All Materials
          </button>
          <button
            onClick={() => setSelectedMaterial('18K Gold Plated')}
            className={`block w-full text-left font-sans text-sm transition-colors ${
              selectedMaterial === '18K Gold Plated' ? 'text-gold font-medium' : 'text-muted hover:text-base'
            }`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-20 lg:pt-24 bg-cream min-h-screen">
      {/* Page header */}
      <div className="max-w-content mx-auto px-6 lg:px-8 pt-8 pb-6">
        <h1 className="font-serif text-3xl md:text-4xl font-medium text-base">The Collection</h1>
        <p className="font-sans text-sm text-muted mt-2">{filteredProducts.length} pieces</p>
      </div>

      <div ref={containerRef} className="max-w-content mx-auto px-6 lg:px-8 pb-20">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs font-semibold tracking-wide-custom uppercase text-base"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-border pl-4 pr-10 py-2.5 font-sans text-xs font-medium tracking-wide-custom uppercase text-base cursor-pointer focus:outline-none focus:border-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted mb-4">No pieces match your filters</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedPrice('all'); setSelectedMaterial('all'); setSearchParams({}) }}
                  className="text-gold font-sans text-sm underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-border/20">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <img
                          data-strk-img-id={`shop-${product.imgId}-alt`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] jewelry worn`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                        />
                      </div>
                    </Link>

                    <button
                      onClick={() => addItem(product)}
                      className={`absolute bottom-3 left-3 right-3 bg-cream/95 backdrop-blur-sm text-base font-sans text-[11px] font-semibold tracking-wide-custom uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
                        hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>

                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          id={product.titleId}
                          className="font-serif text-xs md:text-sm font-medium tracking-product uppercase text-base"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p id={product.descId} className="text-xs text-muted mt-0.5 hidden md:block">{product.description}</p>
                      <p className="font-sans text-sm font-medium text-base mt-1">${product.price}</p>
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
          <div className="fixed inset-0 bg-base/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-cream z-50 overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <h2 className="font-serif text-lg font-semibold text-base">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-base" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterContent />
            </div>
            <div className="px-6 py-4 border-t border-border">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold text-base font-sans text-xs font-semibold tracking-section uppercase py-3 hover:bg-gold-dark transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ShopPage
