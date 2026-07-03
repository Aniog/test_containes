import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-border">
          <img
            data-strk-img-id={`${product.imgId}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`${product.imgId2}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}] styled`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <div
        className={`absolute bottom-0 left-0 right-0 bg-velmora-charcoal/90 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <button
          onClick={(e) => {
            e.preventDefault()
            addItem(product)
          }}
          className="flex items-center gap-2 text-velmora-cream font-sans text-xs font-semibold tracking-ultra-wide uppercase hover:text-velmora-gold transition-colors duration-300"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      <div className="mt-3">
        <h3 className="font-serif text-sm tracking-ultra-wide uppercase text-velmora-charcoal">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-velmora-warm-gray mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCategory(cat)
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      const catName = categories.find(c => c.slug === selectedCategory)?.name
      if (catName) {
        result = result.filter(p => p.category === catName)
      }
    }

    if (selectedPrice) {
      const range = priceRanges.find(r => r.label === selectedPrice)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
    }

    if (selectedMaterial) {
      result = result.filter(p =>
        p.materials.toLowerCase().includes(selectedMaterial.toLowerCase())
      )
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filtered])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice('')
    setSelectedMaterial('')
  }

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-velmora-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-3">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block font-sans text-sm transition-colors duration-300 ${!selectedCategory ? 'text-velmora-gold' : 'text-velmora-warm-gray hover:text-velmora-charcoal'}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`block font-sans text-sm transition-colors duration-300 ${selectedCategory === cat.slug ? 'text-velmora-gold' : 'text-velmora-warm-gray hover:text-velmora-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-velmora-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-3">
          <button
            onClick={() => setSelectedPrice('')}
            className={`block font-sans text-sm transition-colors duration-300 ${!selectedPrice ? 'text-velmora-gold' : 'text-velmora-warm-gray hover:text-velmora-charcoal'}`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range.label)}
              className={`block font-sans text-sm transition-colors duration-300 ${selectedPrice === range.label ? 'text-velmora-gold' : 'text-velmora-warm-gray hover:text-velmora-charcoal'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-velmora-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-3">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`block font-sans text-sm transition-colors duration-300 ${!selectedMaterial ? 'text-velmora-gold' : 'text-velmora-warm-gray hover:text-velmora-charcoal'}`}
          >
            All
          </button>
          {['Gold Plated', 'Crystal', 'Filigree'].map(m => (
            <button
              key={m}
              onClick={() => setSelectedMaterial(m)}
              className={`block font-sans text-sm transition-colors duration-300 ${selectedMaterial === m ? 'text-velmora-gold' : 'text-velmora-warm-gray hover:text-velmora-charcoal'}`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs tracking-wide text-velmora-gold hover:text-velmora-gold-dark underline transition-colors duration-300"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-velmora-charcoal">
            The Collection
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between pb-6 border-b border-velmora-border">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wide text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="hidden md:block font-sans text-xs text-velmora-warm-gray">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="font-sans text-xs text-velmora-warm-gray">Sort:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs text-velmora-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8 mt-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-sans text-sm text-velmora-warm-gray mb-4">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-gold hover:text-velmora-gold-dark underline"
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
          <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 z-50 h-full w-72 bg-velmora-white shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-ultra-wide uppercase text-velmora-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-velmora-warm-gray hover:text-velmora-charcoal" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}
