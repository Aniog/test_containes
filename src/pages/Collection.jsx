import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { useCart } from '../context/CartContext'
import { products, categories } from '../data/products'
import { formatPrice } from '../lib/utils'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [mobileFilters, setMobileFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [selectedPriceRange, setSelectedPriceRange] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedPriceRange) {
      result = result.filter(
        (p) => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
      )
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial)
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
      case 'newest':
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPriceRange(null)
    setSelectedMaterial('')
    setSearchParams({})
  }

  const hasActiveFilters = selectedCategory || selectedPriceRange || selectedMaterial

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? '' : 'w-56 flex-shrink-0'}`}>
      <div className="space-y-8">
        {/* Category */}
        <div>
          <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-charcoal mb-4">
            Category
          </h3>
          <div className="space-y-2.5">
            <button
              onClick={() => { setSelectedCategory(''); setSearchParams({}) }}
              className={`block text-sm transition-colors ${
                !selectedCategory ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              All Jewelry
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id)
                  setSearchParams({ category: cat.id })
                }}
                className={`block text-sm transition-colors ${
                  selectedCategory === cat.id
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-stone hover:text-velmora-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-charcoal mb-4">
            Price
          </h3>
          <div className="space-y-2.5">
            <button
              onClick={() => setSelectedPriceRange(null)}
              className={`block text-sm transition-colors ${
                !selectedPriceRange ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              All Prices
            </button>
            {priceRanges.map((range) => (
              <button
                key={range.label}
                onClick={() => setSelectedPriceRange(range)}
                className={`block text-sm transition-colors ${
                  selectedPriceRange?.label === range.label
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-stone hover:text-velmora-charcoal'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Material */}
        <div>
          <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-charcoal mb-4">
            Material
          </h3>
          <div className="space-y-2.5">
            <button
              onClick={() => setSelectedMaterial('')}
              className={`block text-sm transition-colors ${
                !selectedMaterial ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              All Materials
            </button>
            {['gold', 'silver'].map((mat) => (
              <button
                key={mat}
                onClick={() => setSelectedMaterial(mat)}
                className={`block text-sm transition-colors capitalize ${
                  selectedMaterial === mat
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-stone hover:text-velmora-charcoal'
                }`}
              >
                {mat === 'gold' ? '18K Gold Plated' : 'Sterling Silver'}
              </button>
            ))}
          </div>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-velmora-stone underline hover:text-velmora-gold transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  )

  return (
    <main ref={containerRef} className="pt-20 sm:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center border-b border-velmora-sand/50">
        <p className="text-xs tracking-mega-wide uppercase text-velmora-gold font-sans font-medium mb-3">
          Velmora
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal mb-3">
          {selectedCategory
            ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
            : 'Shop All'}
        </h1>
        <p className="text-sm text-velmora-stone">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(true)}
            className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-sans font-medium text-velmora-charcoal"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Active filters - desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {selectedCategory && (
              <span className="inline-flex items-center gap-1.5 bg-velmora-warm px-3 py-1.5 text-xs text-velmora-charcoal">
                {categories.find((c) => c.id === selectedCategory)?.name}
                <button onClick={() => { setSelectedCategory(''); setSearchParams({}) }}>
                  <X size={12} className="text-velmora-stone hover:text-velmora-charcoal" />
                </button>
              </span>
            )}
            {selectedPriceRange && (
              <span className="inline-flex items-center gap-1.5 bg-velmora-warm px-3 py-1.5 text-xs text-velmora-charcoal">
                {selectedPriceRange.label}
                <button onClick={() => setSelectedPriceRange(null)}>
                  <X size={12} className="text-velmora-stone hover:text-velmora-charcoal" />
                </button>
              </span>
            )}
            {selectedMaterial && (
              <span className="inline-flex items-center gap-1.5 bg-velmora-warm px-3 py-1.5 text-xs text-velmora-charcoal capitalize">
                {selectedMaterial}
                <button onClick={() => setSelectedMaterial('')}>
                  <X size={12} className="text-velmora-stone hover:text-velmora-charcoal" />
                </button>
              </span>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-wider uppercase font-sans font-medium text-velmora-charcoal pr-6 pl-0 py-2 border-none focus:outline-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-stone pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar - desktop */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal mb-2">No products found</p>
                <p className="text-sm text-velmora-stone mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-gold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.slug}`} className="group block">
                    <div className="relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-4">
                      <img
                        data-strk-img-id={`collection-${product.id}`}
                        data-strk-img={`[${product.id}-name] [product-category] luxury gold jewelry product`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Quick add */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product, product.variants[0])
                          }}
                          className="w-full bg-velmora-charcoal/90 backdrop-blur-sm text-white py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <ShoppingBag size={14} />
                          Add to Cart
                        </button>
                      </div>
                      {product.new && (
                        <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
                          New
                        </span>
                      )}
                    </div>
                    <p className="font-serif text-sm tracking-wider uppercase text-velmora-charcoal mb-1">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-velmora-charcoal">
                        {formatPrice(product.price)}
                      </span>
                      <div className="flex items-center gap-0.5">
                        <Star size={11} className="fill-velmora-gold text-velmora-gold" />
                        <span className="text-[11px] text-velmora-stone">{product.rating}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-50"
            onClick={() => setMobileFilters(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-velmora-ivory z-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
              <h2 className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-charcoal">
                Filters
              </h2>
              <button
                onClick={() => setMobileFilters(false)}
                className="p-2 text-velmora-stone hover:text-velmora-charcoal"
              >
                <X size={18} />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar mobile />
            </div>
            <div className="sticky bottom-0 bg-velmora-ivory border-t border-velmora-sand px-6 py-4">
              <button
                onClick={() => setMobileFilters(false)}
                className="w-full bg-velmora-charcoal text-velmora-ivory py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold transition-colors"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  )
}
