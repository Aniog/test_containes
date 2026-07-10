import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/data/CartContext'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { addItem } = useCart()

  const categoryFilter = searchParams.get('category') || 'all'
  const priceFilter = searchParams.get('price') || 'all'
  const materialFilter = searchParams.get('material') || 'all'
  const sort = searchParams.get('sort') || 'featured'

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter)
    }
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number)
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true))
    }
    if (materialFilter !== 'all') {
      result = result.filter(p => p.material.toLowerCase().includes(materialFilter))
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
  }, [categoryFilter, priceFilter, materialFilter, sort])

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs tracking-ultra-wide uppercase font-sans font-semibold text-base">Filters</h3>
        {mobile && (
          <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-stone-500">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xs tracking-widest uppercase font-sans font-semibold text-stone-600 mb-3">Category</h4>
        {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter('category', cat)}
            className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
              categoryFilter === cat ? 'text-gold font-medium' : 'text-stone-600 hover:text-base'
            }`}
          >
            {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="text-xs tracking-widest uppercase font-sans font-semibold text-stone-600 mb-3">Price</h4>
        {[
          { value: 'all', label: 'All Prices' },
          { value: '30-50', label: '$30 – $50' },
          { value: '50-80', label: '$50 – $80' },
          { value: '80-200', label: '$80+' },
        ].map(opt => (
          <button
            key={opt.value}
            onClick={() => setFilter('price', opt.value)}
            className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
              priceFilter === opt.value ? 'text-gold font-medium' : 'text-stone-600 hover:text-base'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="text-xs tracking-widest uppercase font-sans font-semibold text-stone-600 mb-3">Material</h4>
        {['all', 'gold'].map(mat => (
          <button
            key={mat}
            onClick={() => setFilter('material', mat)}
            className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
              materialFilter === mat ? 'text-gold font-medium' : 'text-stone-600 hover:text-base'
            }`}
          >
            {mat === 'all' ? 'All Materials' : '18K Gold Plated'}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-ultra-wide uppercase text-base font-light">
            Shop All
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-sans font-medium text-base"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-sm text-stone-500 font-sans hidden md:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-widest uppercase font-sans font-medium text-base pr-6 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-500 font-sans mb-4">No pieces match your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-gold text-xs tracking-ultra-wide uppercase font-sans font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} addItem={addItem} />
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
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 shadow-2xl overflow-y-auto">
            <FilterSidebar mobile />
          </div>
        </>
      )}
    </div>
  )
}

const ShopProductCard = ({ product, addItem }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          <img
            alt={product.name}
            data-strk-img-id={`shop-${product.id}-img1`}
            data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-name] jewelry`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            alt={`${product.name} alternate`}
            data-strk-img-id={`shop-${product.id}-img2`}
            data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-name] worn detail`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 bg-cream/95 backdrop-blur-sm text-base text-xs tracking-widest uppercase font-sans font-medium px-5 py-2.5 transition-all duration-300 hover:bg-gold hover:text-white z-10 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
        Add to Cart
      </button>

      <div className="mt-3 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`shop-${product.id}-name`}
            className="font-serif text-sm tracking-wide-product uppercase text-base hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.id}-desc`} className="text-xs text-stone-500 font-sans mt-0.5">
          {product.shortDescription}
        </p>
        <p className="text-sm font-sans font-medium text-base mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default ShopPage
