import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: 'over-80', label: 'Over $80' },
]

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const categoryParam = searchParams.get('category') || 'all'
  const priceRange = searchParams.get('price') || 'all'
  const material = searchParams.get('material') || 'all'

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [categoryParam, priceRange, material, sort])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (categoryParam !== 'all') {
      result = result.filter((p) => p.category === categoryParam)
    }

    if (priceRange === 'under-50') result = result.filter((p) => p.price < 50)
    else if (priceRange === '50-80') result = result.filter((p) => p.price >= 50 && p.price <= 80)
    else if (priceRange === 'over-80') result = result.filter((p) => p.price > 80)

    if (material === 'gold') result = result.filter((p) => p.material.includes('Gold'))
    else if (material === 'silver') result = result.filter((p) => p.material.includes('Silver'))

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
  }, [categoryParam, priceRange, material, sort])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold tracking-nav uppercase text-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {[
            { value: 'all', label: 'All Jewelry' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'huggies', label: 'Huggies' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateFilter('category', opt.value)}
              className={`block w-full text-left text-sm font-sans transition-colors ${
                categoryParam === opt.value
                  ? 'text-gold font-medium'
                  : 'text-stone-600 hover:text-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold tracking-nav uppercase text-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {PRICE_RANGES.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateFilter('price', opt.value)}
              className={`block w-full text-left text-sm font-sans transition-colors ${
                priceRange === opt.value
                  ? 'text-gold font-medium'
                  : 'text-stone-600 hover:text-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold tracking-nav uppercase text-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {[
            { value: 'all', label: 'All Materials' },
            { value: 'gold', label: 'Gold Plated' },
            { value: 'silver', label: 'Silver Plated' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateFilter('material', opt.value)}
              className={`block w-full text-left text-sm font-sans transition-colors ${
                material === opt.value
                  ? 'text-gold font-medium'
                  : 'text-stone-600 hover:text-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cream-50">
      <div className="max-w-container mx-auto px-6">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal tracking-tight">
            {categoryParam === 'all' ? 'All Jewelry' : categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-sans text-stone-600"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm font-sans text-stone-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-sm font-sans text-stone-600 pr-6 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-stone-500">No pieces match your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-gold font-sans text-sm hover:text-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductGridCard key={product.id} product={product} />
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
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream-50 z-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-stone-200">
              <h2 className="font-serif text-lg font-semibold text-charcoal">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-stone-500 hover:text-charcoal transition-colors"
              >
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

const ProductGridCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-stone-100">
          <img
            data-strk-img-id={`${product.imgId}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`${product.imgId}-shop-hover`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 text-white font-sans text-[11px] font-medium tracking-btn uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            className="font-serif text-xs md:text-sm font-medium tracking-product uppercase text-charcoal"
          >
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-sans font-medium text-charcoal mt-0.5">
          ${product.price}
        </p>
      </div>
    </div>
  )
}

export default Shop
