import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const MATERIALS = ['18K Gold Plated']

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
          <img
            data-strk-img-id={`bestseller-${product.id}-a`}
            data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`bestseller-${product.id}-b`}
            data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}] gold jewelry worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-brand-gold text-white text-[10px] font-sans font-semibold tracking-wide uppercase px-2.5 py-1">
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      <button
        onClick={() => addItem(product, 'gold', 1)}
        className={`absolute bottom-3 left-3 right-3 bg-brand-charcoal/90 text-white font-sans text-xs tracking-wide uppercase font-semibold py-2.5 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag size={14} />
        Add to Cart
      </button>

      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`product-name-${product.id}`}
            className="font-serif text-sm tracking-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`product-desc-${product.id}`} className="text-xs text-brand-muted mt-0.5">
          {product.description}
        </p>
        <p className="font-sans text-sm font-medium text-brand-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [sort, setSort] = useState('featured')
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || '')
  const [priceFilter, setPriceFilter] = useState(null)
  const [materialFilter, setMaterialFilter] = useState('')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategoryFilter(cat)
  }, [searchParams])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filtered = useMemo(() => {
    let result = [...products]

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter)
    }
    if (priceFilter !== null) {
      result = result.filter((p) => p.price >= priceFilter.min && p.price < priceFilter.max)
    }
    if (materialFilter) {
      result = result.filter((p) => p.material === materialFilter)
    }

    switch (sort) {
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
  }, [sort, categoryFilter, priceFilter, materialFilter])

  const clearFilters = () => {
    setCategoryFilter('')
    setPriceFilter(null)
    setMaterialFilter('')
  }

  const hasActiveFilters = categoryFilter || priceFilter || materialFilter

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-wide uppercase font-semibold text-brand-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {['', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                categoryFilter === cat ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {cat === '' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-wide uppercase font-semibold text-brand-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setPriceFilter(null)}
            className={`block w-full text-left font-sans text-sm transition-colors ${
              priceFilter === null ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
            }`}
          >
            All Prices
          </button>
          {PRICE_RANGES.map((range) => (
            <button
              key={range.label}
              onClick={() => setPriceFilter(range)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                priceFilter?.label === range.label ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-wide uppercase font-semibold text-brand-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setMaterialFilter('')}
            className={`block w-full text-left font-sans text-sm transition-colors ${
              materialFilter === '' ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
            }`}
          >
            All
          </button>
          {MATERIALS.map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterialFilter(mat)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                materialFilter === mat ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs tracking-wide uppercase text-brand-gold hover:text-brand-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            {categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wide uppercase text-brand-charcoal"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>

          <p className="hidden md:block font-sans text-xs text-brand-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="font-sans text-xs text-brand-muted">Sort:</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-xs text-brand-charcoal bg-transparent border border-brand-sand px-2 py-1.5 focus:outline-none focus:border-brand-gold"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-muted">No pieces match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 font-sans text-xs tracking-wide uppercase text-brand-gold hover:text-brand-gold-dark underline transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-72 bg-brand-cream z-50 p-6 overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-sans text-xs tracking-wide uppercase font-semibold text-brand-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-brand-muted" aria-label="Close filters">
                <X size={18} />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  )
}
