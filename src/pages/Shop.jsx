import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/data/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Shop = () => {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { addItem } = useCart()

  const categoryParam = searchParams.get('category') || ''
  const sortParam = searchParams.get('sort') || 'default'

  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState(sortParam)

  // Sync URL params to state
  useEffect(() => {
    setSelectedCategory(categoryParam)
    setSortBy(sortParam)
  }, [categoryParam, sortParam])

  // Filter products
  let filtered = [...products]
  if (selectedCategory) {
    filtered = filtered.filter(p => p.category === selectedCategory)
  }
  if (selectedPrice) {
    if (selectedPrice === 'under-50') filtered = filtered.filter(p => p.price < 50)
    if (selectedPrice === '50-75') filtered = filtered.filter(p => p.price >= 50 && p.price <= 75)
    if (selectedPrice === '75-plus') filtered = filtered.filter(p => p.price > 75)
  }
  if (selectedMaterial) {
    filtered = filtered.filter(p => p.material === selectedMaterial)
  }

  // Sort
  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const updateCategory = (cat) => {
    setSelectedCategory(cat)
    const params = new URLSearchParams(searchParams)
    if (cat) params.set('category', cat)
    else params.delete('category')
    setSearchParams(params)
  }

  const priceRanges = [
    { value: '', label: 'All Prices' },
    { value: 'under-50', label: 'Under $50' },
    { value: '50-75', label: '$50 – $75' },
    { value: '75-plus', label: '$75+' },
  ]

  const categoryOptions = [
    { value: '', label: 'All Categories' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
  ]

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {/* Category */}
      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-[0.1em] uppercase font-medium text-textDark mb-3">Category</h4>
        <div className="space-y-2">
          {categoryOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => updateCategory(opt.value)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                selectedCategory === opt.value ? 'text-gold font-medium' : 'text-textMuted hover:text-textDark'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-[0.1em] uppercase font-medium text-textDark mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map(opt => (
            <button
              key={opt.value}
              onClick={() => setSelectedPrice(opt.value)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                selectedPrice === opt.value ? 'text-gold font-medium' : 'text-textMuted hover:text-textDark'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-[0.1em] uppercase font-medium text-textDark mb-3">Material</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
              selectedMaterial === '' ? 'text-gold font-medium' : 'text-textMuted hover:text-textDark'
            }`}
          >
            All Materials
          </button>
          <button
            onClick={() => setSelectedMaterial('18K Gold Plated')}
            className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
              selectedMaterial === '18K Gold Plated' ? 'text-gold font-medium' : 'text-textMuted hover:text-textDark'
            }`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {mobile && (
        <button
          onClick={() => setMobileFiltersOpen(false)}
          className="w-full font-sans text-sm tracking-[0.1em] uppercase font-medium bg-gold text-deepCharcoal py-3 rounded-sm hover:bg-goldLight transition-colors mt-4"
        >
          Apply Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-warmCream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-textDark">
            {selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : 'All Jewelry'}
          </h1>
          <p className="font-sans text-sm text-textMuted mt-2">{filtered.length} pieces</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Mobile filter button */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="font-sans text-sm tracking-wide font-medium text-textDark flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filters
            </button>
            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-sm text-textMuted bg-transparent border border-divider rounded-sm px-3 py-2 focus:outline-none focus:border-gold"
            >
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <>
              <div className="fixed inset-0 bg-deepCharcoal/40 z-40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="fixed top-0 left-0 bottom-0 w-72 bg-warmCream z-50 shadow-2xl overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-divider">
                  <h3 className="font-serif text-lg tracking-[0.15em] uppercase font-medium text-textDark">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)} className="text-textMuted hover:text-textDark transition-colors" aria-label="Close filters">
                    <X className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>
                <FilterSidebar mobile />
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm text-textMuted bg-transparent border border-divider rounded-sm px-3 py-2 focus:outline-none focus:border-gold"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-textDark">No pieces found</p>
                <p className="font-sans text-sm text-textMuted mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filtered.map(product => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-surface rounded-sm">
                        <img
                          data-strk-img-id={`shop-${product.images[0].imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                          data-strk-img-ratio={product.images[0].ratio}
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover: second image */}
                        <img
                          data-strk-img-id={`shop-${product.images[1].imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] worn detail`}
                          data-strk-img-ratio={product.images[1].ratio}
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-opacity duration-500 absolute inset-0 opacity-0 group-hover:opacity-100"
                        />
                      </div>
                    </Link>
                    <div className="mt-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 id={product.titleId} className="font-serif text-sm md:text-base tracking-[0.2em] uppercase font-medium text-textDark">
                          {product.name}
                        </h3>
                      </Link>
                      <p id={product.descId} className="font-sans text-xs text-textMuted mt-1">{product.shortDescription}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-divider'}`} strokeWidth={0} />
                          ))}
                        </div>
                        <span className="font-sans text-xs text-textMuted">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-sans text-sm font-medium text-textDark">${product.price}</p>
                        <button
                          onClick={() => addItem(product)}
                          className="font-sans text-xs tracking-wide font-medium text-gold hover:text-goldLight transition-colors flex items-center gap-1"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
                          Add
                        </button>
                      </div>
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

export default Shop
