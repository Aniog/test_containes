import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies']
const priceOptions = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]
const materialOptions = ['All', '18K Gold Plated']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const navigate = useNavigate()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative aspect-[3x4] bg-warm-100 cursor-pointer"
        onClick={() => navigate(`/product/${product.slug}`)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`shop-${product.imgId2}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn jewelry closeup`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        {/* Add to Cart overlay - not clipped by overflow-hidden */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-cream/95 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 z-20 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-warm-900 hover:text-gold transition-colors"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      <Link to={`/product/${product.slug}`}>
        <h3 className="mt-4 font-serif text-sm uppercase tracking-wider text-warm-900">
          {product.name}
        </h3>
        <p className="sr-only" id={product.descId}>{product.description}</p>
        <p className="mt-1 font-sans text-sm text-warm-600">${product.price}</p>
      </Link>
    </div>
  )
}

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'

  const [category, setCategory] = useState(
    categoryOptions.includes(initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1))
      ? initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)
      : 'All'
  )
  const [priceRange, setPriceRange] = useState(0)
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, priceRange, sort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter(p => p.category === category)
    }

    const price = priceOptions[priceRange]
    if (price.min > 0 || price.max < Infinity) {
      result = result.filter(p => p.price >= price.min && p.price < price.max)
    }

    if (material !== 'All') {
      result = result.filter(p => p.material === material)
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
  }, [category, priceRange, material, sort])

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-28'}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-warm-900 mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categoryOptions.map(opt => (
            <button
              key={opt}
              onClick={() => { setCategory(opt); if (mobile) setMobileFiltersOpen(false) }}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                category === opt ? 'text-gold font-medium' : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-warm-900 mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceOptions.map((opt, i) => (
            <button
              key={opt.label}
              onClick={() => { setPriceRange(i); if (mobile) setMobileFiltersOpen(false) }}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                priceRange === i ? 'text-gold font-medium' : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-warm-900 mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {materialOptions.map(opt => (
            <button
              key={opt}
              onClick={() => { setMaterial(opt); if (mobile) setMobileFiltersOpen(false) }}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                material === opt ? 'text-gold font-medium' : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-warm-900">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-200">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-warm-900"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm font-sans text-warm-500">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs font-sans font-medium uppercase tracking-wider text-warm-900 pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-warm-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-warm-600">No pieces match your filters</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange(0); setMaterial('All') }}
                  className="mt-4 text-xs font-sans font-medium uppercase tracking-widest text-gold hover:text-gold-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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
          <div className="fixed top-0 left-0 bottom-0 w-72 bg-cream z-50 p-6 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl tracking-wider text-warm-900">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-warm-600 hover:text-warm-900">
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
