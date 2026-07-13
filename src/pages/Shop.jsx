import { useState, useRef, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
          <img
            data-strk-img-id={`shop-${product.slug}-img-h7j8`}
            data-strk-img={`[shop-${product.slug}-name] gold jewelry elegant`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-velmora-charcoal text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-velmora-charcoal py-2.5 text-[11px] uppercase tracking-extra-wide font-medium hover:bg-velmora-gold hover:text-white transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h3
            id={`shop-${product.slug}-name`}
            className="text-[11px] uppercase tracking-extra-wide font-medium text-velmora-charcoal"
          >
            {product.name}
          </h3>
          <p className="mt-1 text-sm font-serif text-velmora-stone">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const priceRange = searchParams.get('price') || ''

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat) {
      params.set('category', cat)
    } else {
      params.delete('category')
    }
    setSearchParams(params)
  }

  const setPriceRange = (range) => {
    const params = new URLSearchParams(searchParams)
    if (range) {
      params.set('price', range)
    } else {
      params.delete('price')
    }
    setSearchParams(params)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory)
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter(p => p.price >= min && p.price <= max)
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
  }, [activeCategory, priceRange, sortBy])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [filteredProducts])

  const priceRanges = [
    { label: 'Under $40', value: '0-40' },
    { label: '$40 – $60', value: '40-60' },
    { label: '$60 – $100', value: '60-100' },
    { label: 'Over $100', value: '100-999' },
  ]

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-extra-wide font-medium text-velmora-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setCategory('')}
            className={`block text-sm transition-colors ${!activeCategory ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.slug}
              onClick={() => setCategory(cat.slug)}
              className={`block text-sm transition-colors ${activeCategory === cat.slug ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-extra-wide font-medium text-velmora-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setPriceRange('')}
            className={`block text-sm transition-colors ${!priceRange ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'}`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block text-sm transition-colors ${priceRange === range.value ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-extra-wide font-medium text-velmora-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <span className="block text-sm text-velmora-gold font-medium">18K Gold Plated</span>
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl text-velmora-charcoal font-light">
            {activeCategory ? categories.find(c => c.slug === activeCategory)?.name || 'Shop' : 'The Collection'}
          </h1>
          <p className="mt-3 text-sm text-velmora-stone">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter toggle + sort */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-extra-wide text-velmora-charcoal font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs bg-transparent border border-velmora-border px-3 py-2 text-velmora-charcoal focus:outline-none focus:border-velmora-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <FilterSidebar className="hidden lg:block w-48 flex-shrink-0" />

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs bg-transparent border border-velmora-border px-3 py-2 text-velmora-charcoal focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal">No pieces found</p>
                <p className="mt-2 text-sm text-velmora-stone">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-cream lg:hidden">
          <div className="flex items-center justify-between px-4 py-4 border-b border-velmora-border">
            <h2 className="text-xs uppercase tracking-extra-wide font-medium text-velmora-charcoal">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X className="w-5 h-5 text-velmora-charcoal" />
            </button>
          </div>
          <div className="p-6">
            <FilterSidebar />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 bg-velmora-gold text-white py-3 text-xs uppercase tracking-extra-wide font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
