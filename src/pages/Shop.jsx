import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 — $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
]

const materialOptions = [
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilters, setMobileFilters] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const categoryFilter = searchParams.get('category') || ''
  const sortFilter = searchParams.get('sort') || 'featured'
  const priceFilter = searchParams.get('price') || ''
  const materialFilter = searchParams.get('material') || ''

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [categoryFilter, sortFilter, priceFilter, materialFilter])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter)
    }

    if (materialFilter) {
      result = result.filter(p => p.material === materialFilter)
    }

    if (priceFilter) {
      const range = priceRanges.find(r => r.label === priceFilter)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
    }

    switch (sortFilter) {
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
  }, [categoryFilter, sortFilter, priceFilter, materialFilter])

  const activeFiltersCount = [categoryFilter, priceFilter, materialFilter].filter(Boolean).length

  const clearAllFilters = () => {
    setSearchParams({})
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-cream-100 pt-20 lg:pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-3">
          {categoryFilter
            ? categories.find(c => c.id === categoryFilter)?.name || 'Shop'
            : 'Our Collection'
          }
        </h1>
        <p className="text-charcoal-400 text-sm max-w-lg mx-auto">
          Discover our curated selection of premium demi-fine jewelry, designed to be treasured.
        </p>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFilters(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-gold text-white text-2xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-charcoal-400 hover:text-gold underline transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-charcoal-400">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
            <select
              value={sortFilter}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="bg-transparent border border-cream-400 text-sm text-charcoal px-3 py-2 pr-8 appearance-none cursor-pointer focus:outline-none focus:border-gold transition-colors"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar
              categoryFilter={categoryFilter}
              priceFilter={priceFilter}
              materialFilter={materialFilter}
              setFilter={setFilter}
            />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-400 mb-4">No products found</p>
                <button onClick={clearAllFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal/40" onClick={() => setMobileFilters(false)} />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-cream-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300/40">
              <h3 className="font-serif text-lg text-charcoal">Filters</h3>
              <button onClick={() => setMobileFilters(false)} className="text-charcoal-400 p-1">
                <X size={20} />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar
                categoryFilter={categoryFilter}
                priceFilter={priceFilter}
                materialFilter={materialFilter}
                setFilter={(key, val) => {
                  setFilter(key, val)
                  setMobileFilters(false)
                }}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function FilterSidebar({ categoryFilter, priceFilter, materialFilter, setFilter }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-charcoal mb-4 font-medium">
          Category
        </h4>
        <div className="space-y-2.5">
          <FilterOption
            label="All"
            active={!categoryFilter}
            onClick={() => setFilter('category', '')}
          />
          {categories.map(cat => (
            <FilterOption
              key={cat.id}
              label={cat.name}
              active={categoryFilter === cat.id}
              onClick={() => setFilter('category', categoryFilter === cat.id ? '' : cat.id)}
            />
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-charcoal mb-4 font-medium">
          Price
        </h4>
        <div className="space-y-2.5">
          <FilterOption
            label="All Prices"
            active={!priceFilter}
            onClick={() => setFilter('price', '')}
          />
          {priceRanges.map(range => (
            <FilterOption
              key={range.label}
              label={range.label}
              active={priceFilter === range.label}
              onClick={() => setFilter('price', priceFilter === range.label ? '' : range.label)}
            />
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-charcoal mb-4 font-medium">
          Material
        </h4>
        <div className="space-y-2.5">
          <FilterOption
            label="All Materials"
            active={!materialFilter}
            onClick={() => setFilter('material', '')}
          />
          {materialOptions.map(mat => (
            <FilterOption
              key={mat.value}
              label={mat.label}
              active={materialFilter === mat.value}
              onClick={() => setFilter('material', materialFilter === mat.value ? '' : mat.value)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function FilterOption({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`block text-sm transition-colors ${
        active ? 'text-gold font-medium' : 'text-charcoal-500 hover:text-charcoal'
      }`}
    >
      {label}
    </button>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] bg-cream-200 overflow-hidden mb-4">
          <img
            data-strk-img-id={`shop-${product.id}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onAddToCart()
            }}
            className="absolute bottom-0 left-0 right-0 bg-charcoal text-white text-xs tracking-widest uppercase py-3 text-center
            translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3 className="font-serif text-sm sm:text-base font-medium tracking-wider uppercase text-charcoal group-hover:text-gold transition-colors line-clamp-2">
          {product.name}
        </h3>
      </Link>

      <div className="flex items-center gap-1.5 mt-1.5">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-cream-400'}
            />
          ))}
        </div>
        <span className="text-xs text-charcoal-300">({product.reviewCount})</span>
      </div>

      <p className="text-sm font-medium text-charcoal mt-1">
        {formatPrice(product.price)}
      </p>
    </div>
  )
}
