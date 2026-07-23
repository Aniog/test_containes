import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/data/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [category, priceRange, material, sortBy])

  // Filter products
  let filtered = [...products]
  if (category !== 'all') filtered = filtered.filter(p => p.category === category)
  if (priceRange === 'under50') filtered = filtered.filter(p => p.price < 50)
  if (priceRange === '50to80') filtered = filtered.filter(p => p.price >= 50 && p.price <= 80)
  if (priceRange === 'over80') filtered = filtered.filter(p => p.price > 80)
  if (material !== 'all') filtered = filtered.filter(p => p.material === material)

  // Sort
  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating)

  const clearFilters = () => {
    setCategory('all')
    setPriceRange('all')
    setMaterial('all')
  }

  const hasFilters = category !== 'all' || priceRange !== 'all' || material !== 'all'

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {/* Category */}
      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-wide uppercase font-medium text-velmora-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          <button onClick={() => setCategory('all')} className={`block font-sans text-sm ${category === 'all' ? 'text-velmora-gold font-medium' : 'text-velmora-text-secondary hover:text-velmora-charcoal'} transition-colors`}>
            All Jewelry
          </button>
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setCategory(cat.id)} className={`block font-sans text-sm ${category === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-text-secondary hover:text-velmora-charcoal'} transition-colors`}>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-wide uppercase font-medium text-velmora-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map(option => (
            <button key={option.value} onClick={() => setPriceRange(option.value)} className={`block font-sans text-sm ${priceRange === option.value ? 'text-velmora-gold font-medium' : 'text-velmora-text-secondary hover:text-velmora-charcoal'} transition-colors`}>
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-wide uppercase font-medium text-velmora-charcoal mb-3">Material</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Materials' },
            { value: '18K Gold Plated', label: '18K Gold Plated' },
          ].map(option => (
            <button key={option.value} onClick={() => setMaterial(option.value)} className={`block font-sans text-sm ${material === option.value ? 'text-velmora-gold font-medium' : 'text-velmora-text-secondary hover:text-velmora-charcoal'} transition-colors`}>
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {hasFilters && (
        <button onClick={clearFilters} className="font-sans text-xs tracking-wide uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors underline">
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velmora-charcoal">
            {category === 'all' ? 'All Jewelry' : categories.find(c => c.id === category)?.name || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-velmora-text-secondary mt-2">
            {filtered.length} pieces
          </p>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Sort + mobile filter toggle */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 font-sans text-sm text-velmora-text-secondary"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-2">
                <label className="font-sans text-xs text-velmora-text-secondary">Sort by</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-sans text-sm text-velmora-charcoal bg-transparent border border-velmora-warm/30 px-3 py-1.5 focus:outline-none focus:border-velmora-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map(product => (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-velmora-sand/30">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'}`}
                      />
                      <img
                        data-strk-img-id={`shop-hover-${product.images[1].imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}
                      />

                      {/* Quick add */}
                      <div className={`absolute inset-0 flex items-end justify-center pb-4 transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product, 'gold', 1)
                          }}
                          className="accent-button px-5 py-2 text-xs rounded-none flex items-center gap-2"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>

                  <div className="mt-3">
                    <Link to={`/product/${product.id}`}>
                      <h3 id={product.titleId} className="font-product-name text-sm text-velmora-charcoal">{product.name}</h3>
                    </Link>
                    <p id={product.descId} className="font-sans text-sm text-velmora-text-secondary mt-1 line-clamp-1">{product.description}</p>
                    <p className="font-sans text-sm font-medium text-velmora-charcoal mt-2">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-lg text-velmora-text-secondary">No pieces match your filters</p>
                <button onClick={clearFilters} className="mt-4 accent-button-outline px-6 py-2 text-sm rounded-none">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-72 bg-velmora-cream z-50 shadow-xl animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-warm/30">
              <h3 className="font-sans text-sm tracking-wide uppercase font-medium">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-velmora-charcoal hover:text-velmora-gold">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        </>
      )}
    </div>
  )
}

export default ShopPage
