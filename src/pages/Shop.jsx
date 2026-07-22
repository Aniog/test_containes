import { useState, useMemo, useRef, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
]

const materials = [
  { id: 'gold', label: '18K Gold' },
  { id: 'silver', label: 'Sterling Silver' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilters, setMobileFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeMaterial = searchParams.get('material') || ''

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.id === activePrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial)
    }

    switch (sortBy) {
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
  }, [activeCategory, activePrice, activeMaterial, sortBy])

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(raf)
  }, [filteredProducts])

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

  const hasActiveFilters = activeCategory || activePrice || activeMaterial

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Page header */}
      <div className="container-narrow py-10 lg:py-14 text-center">
        <p className="text-caption uppercase tracking-mega-wide text-gold mb-3">
          {activeCategory ? categories.find((c) => c.id === activeCategory)?.name || 'Collection' : 'Our Collection'}
        </p>
        <h1 className="font-serif text-heading-1 text-charcoal">
          {activeCategory ? categories.find((c) => c.id === activeCategory)?.name : 'Shop All Jewelry'}
        </h1>
        <p className="text-body text-warm-gray mt-3 max-w-lg mx-auto">
          Discover handcrafted demi-fine jewelry designed to elevate every moment.
        </p>
      </div>

      <div className="container-narrow pb-20">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent
              activeCategory={activeCategory}
              activePrice={activePrice}
              activeMaterial={activeMaterial}
              setFilter={setFilter}
              clearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal/8">
              <button
                onClick={() => setMobileFilters(true)}
                className="lg:hidden flex items-center gap-2 text-body-sm text-charcoal"
              >
                <SlidersHorizontal size={16} strokeWidth={1.5} />
                Filters
                {hasActiveFilters && (
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                )}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-body-sm text-warm-gray hidden sm:inline">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-body-sm text-charcoal pr-6 pl-2 py-1.5 border border-charcoal/10 rounded cursor-pointer focus:outline-none focus:border-gold"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCategory && (
                  <FilterTag
                    label={categories.find((c) => c.id === activeCategory)?.name}
                    onRemove={() => setFilter('category', '')}
                  />
                )}
                {activePrice && (
                  <FilterTag
                    label={priceRanges.find((r) => r.id === activePrice)?.label}
                    onRemove={() => setFilter('price', '')}
                  />
                )}
                {activeMaterial && (
                  <FilterTag
                    label={materials.find((m) => m.id === activeMaterial)?.label}
                    onRemove={() => setFilter('material', '')}
                  />
                )}
                <button
                  onClick={clearFilters}
                  className="text-body-sm text-warm-gray underline hover:text-charcoal transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ShopProductCard key={product.id} product={product} onAdd={addItem} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-heading-3 text-charcoal mb-2">
                  No products found
                </p>
                <p className="text-body text-warm-gray mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40"
            onClick={() => setMobileFilters(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-cream shadow-elevated overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-charcoal/10">
              <h3 className="font-serif text-heading-3 text-charcoal">Filters</h3>
              <button
                onClick={() => setMobileFilters(false)}
                className="p-2 text-charcoal hover:text-gold"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-6">
              <FilterContent
                activeCategory={activeCategory}
                activePrice={activePrice}
                activeMaterial={activeMaterial}
                setFilter={setFilter}
                clearFilters={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
              <button
                onClick={() => setMobileFilters(false)}
                className="btn-primary w-full text-center mt-8"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterContent({ activeCategory, activePrice, activeMaterial, setFilter, clearFilters, hasActiveFilters }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-caption uppercase tracking-ultra-wide text-charcoal font-medium mb-4">
          Category
        </h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', activeCategory === cat.id ? '' : cat.id)}
              className={`block text-body-sm transition-colors ${
                activeCategory === cat.id
                  ? 'text-gold font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-caption uppercase tracking-ultra-wide text-charcoal font-medium mb-4">
          Price
        </h4>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter('price', activePrice === range.id ? '' : range.id)}
              className={`block text-body-sm transition-colors ${
                activePrice === range.id
                  ? 'text-gold font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-caption uppercase tracking-ultra-wide text-charcoal font-medium mb-4">
          Material
        </h4>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setFilter('material', activeMaterial === mat.id ? '' : mat.id)}
              className={`block text-body-sm transition-colors ${
                activeMaterial === mat.id
                  ? 'text-gold font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-body-sm text-warm-gray underline hover:text-charcoal transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )
}

function FilterTag({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-dark text-body-sm text-charcoal rounded-full">
      {label}
      <button onClick={onRemove} className="hover:text-gold transition-colors">
        <X size={12} />
      </button>
    </span>
  )
}

function ShopProductCard({ product, onAdd }) {
  const defaultVariant = product.variants.find((v) => v.available) || product.variants[0]

  return (
    <div className="group">
      <Link
        to={`/product/${product.id}`}
        className="product-image-wrapper block relative aspect-square bg-cream-dark rounded overflow-hidden mb-3"
      >
        <img
          data-strk-img-id={`${product.id}-shop`}
          data-strk-img={`[shop-name-${product.id}] [shop-sub-${product.id}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Hover add to bag */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onAdd(product, defaultVariant)
            }}
            className="bg-cream text-charcoal px-4 py-2 text-caption uppercase tracking-wide flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-cream"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Add to Bag
          </button>
        </div>

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-charcoal text-cream text-[10px] uppercase tracking-wider px-2 py-1 font-sans">
            New
          </span>
        )}
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3
          id={`shop-name-${product.id}`}
          className="text-product-name text-body-sm mb-1 group-hover:text-gold transition-colors"
        >
          {product.name}
        </h3>
        <p
          id={`shop-sub-${product.id}`}
          className="text-body-sm text-warm-gray mb-1.5"
        >
          {product.subtitle}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-warm-gray-light'}
                strokeWidth={0}
              />
            ))}
          </div>
          <span className="text-body-sm font-semibold text-charcoal">
            ${product.price}
          </span>
        </div>
      </Link>
    </div>
  )
}
