import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { Star, Plus, SlidersHorizontal, X, ChevronDown } from 'lucide-react'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: 'under50', label: 'Under $50' },
  { value: '50to80', label: '$50 – $80' },
  { value: 'over80', label: 'Over $80' },
]

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  const categoryFilter = searchParams.get('category') || 'all'
  const priceFilter = searchParams.get('price') || 'all'
  const materialFilter = searchParams.get('material') || 'all'
  const sort = searchParams.get('sort') || 'featured'

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [categoryFilter, priceFilter, materialFilter, sort])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const filteredProducts = products
    .filter((p) => categoryFilter === 'all' || p.category === categoryFilter)
    .filter((p) => {
      if (priceFilter === 'under50') return p.price < 50
      if (priceFilter === '50to80') return p.price >= 50 && p.price <= 80
      if (priceFilter === 'over80') return p.price > 80
      return true
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-24'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs uppercase tracking-nav font-semibold text-stone-800">Filters</h3>
        {mobile && (
          <button onClick={() => setMobileFiltersOpen(false)} className="text-stone-500">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-nav font-medium text-stone-600 mb-3">Category</h4>
        <div className="space-y-2">
          {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                categoryFilter === cat ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-800'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-nav font-medium text-stone-600 mb-3">Price</h4>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <button
              key={range.value}
              onClick={() => updateFilter('price', range.value)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                priceFilter === range.value ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-800'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-nav font-medium text-stone-600 mb-3">Material</h4>
        <div className="space-y-2">
          {['all', 'Gold', 'Silver'].map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', mat.toLowerCase())}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                materialFilter === mat.toLowerCase() ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-800'
              }`}
            >
              {mat === 'all' ? 'All Materials' : `${mat} Plated`}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-800 tracking-wide">The Collection</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-nav font-medium text-stone-600"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <span className="text-xs text-stone-500 hidden md:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </span>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1.5 text-xs uppercase tracking-nav font-medium text-stone-600"
            >
              Sort: {SORT_OPTIONS.find((o) => o.value === sort)?.label}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-warm-white border border-stone-200 shadow-lg py-1 z-20 min-w-[180px]">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      updateFilter('sort', opt.value)
                      setSortOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      sort === opt.value ? 'text-gold bg-gold-pale/30' : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-600">No pieces found</p>
                <p className="text-sm text-stone-400 mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-3">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className={`absolute bottom-0 left-0 right-0 bg-gold/90 text-warm-white py-2.5 flex items-center justify-center gap-1.5 text-xs uppercase tracking-btn font-semibold transition-all duration-300 ${
                          hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                        }`}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addItem(product)
                        }}
                      >
                        <Plus className="w-3 h-3" />
                        Add to Cart
                      </div>
                    </div>
                    <h3
                      id={product.titleId}
                      className="font-serif text-xs md:text-sm uppercase tracking-ultra-wide text-stone-800"
                    >
                      {product.name}
                    </h3>
                    <p
                      id={product.descId}
                      className="text-[11px] text-stone-500 mt-0.5 line-clamp-1"
                    >
                      {product.description}
                    </p>
                    <div className="flex items-center gap-1 mt-1.5">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-stone-400">({product.reviews})</span>
                    </div>
                    <p className="text-sm font-medium text-stone-800 mt-1">${product.price}</p>
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
            className="fixed inset-0 bg-black/40 z-40 transition-opacity"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-72 bg-warm-white z-50 p-6 overflow-y-auto shadow-2xl animate-[slideInLeft_0.3s_ease-out]">
            <FilterSidebar mobile />
          </div>
        </>
      )}
    </div>
  )
}
