import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const MATERIALS = ['Gold', 'Silver']

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all')
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam)
  }, [categoryParam])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory)
    }

    if (selectedPrice !== null) {
      const range = PRICE_RANGES[selectedPrice]
      result = result.filter(p => p.price >= range.min && p.price < range.max)
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

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPrice(null)
    setSelectedMaterial(null)
  }

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== null || selectedMaterial !== null

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-28'}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-super-wide uppercase font-sans font-semibold text-brand-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                selectedCategory === cat
                  ? 'text-brand-charcoal font-medium'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-super-wide uppercase font-sans font-semibold text-brand-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range, i) => (
            <button
              key={i}
              onClick={() => setSelectedPrice(selectedPrice === i ? null : i)}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                selectedPrice === i
                  ? 'text-brand-charcoal font-medium'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs tracking-super-wide uppercase font-sans font-semibold text-brand-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {MATERIALS.map(mat => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                selectedMaterial === mat
                  ? 'text-brand-charcoal font-medium'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
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
          className="text-xs tracking-widest uppercase font-sans text-brand-gold hover:text-brand-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            {selectedCategory === 'all' ? 'All Jewelry' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-sm text-brand-warm-gray font-sans hidden md:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort */}
          <div className="relative flex items-center gap-2">
            <label className="text-xs tracking-widest uppercase font-sans text-brand-warm-gray hidden sm:block">
              Sort
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-sans bg-transparent border border-brand-pale-gray rounded-none px-3 py-2 text-brand-charcoal focus:outline-none focus:border-brand-gold appearance-none pr-8"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-warm-gray">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs tracking-widest uppercase font-sans text-brand-gold hover:text-brand-gold-dark underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
                        <img
                          alt={product.name}
                          data-strk-img-id={`${product.imgId}-shop`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute bottom-0 left-0 right-0 bg-brand-charcoal/90 backdrop-blur-sm py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
                            hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                          }`}
                        >
                          <ShoppingBag className="w-4 h-4 text-brand-cream" />
                          <span className="text-[11px] tracking-widest uppercase text-brand-cream font-sans">
                            Quick Add
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-3">
                      <h3
                        id={product.titleId}
                        className="font-serif text-xs md:text-sm tracking-ultra-wide uppercase text-brand-charcoal"
                      >
                        {product.name}
                      </h3>
                      <p id={product.descId} className="sr-only">{product.description}</p>
                      <p className="text-sm font-sans text-brand-warm-gray mt-1">${product.price}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        addItem(product)
                      }}
                      className="md:hidden mt-2 w-full border border-brand-charcoal text-brand-charcoal py-2 text-[11px] tracking-widest uppercase font-sans hover:bg-brand-charcoal hover:text-brand-cream transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
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
            className="fixed inset-0 bg-black/30 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-brand-cream z-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-pale-gray">
              <h2 className="font-serif text-lg tracking-widest uppercase">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar mobile />
            </div>
            <div className="px-6 py-4 border-t border-brand-pale-gray">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-brand-charcoal text-brand-cream py-3 text-xs tracking-super-wide uppercase font-sans font-medium hover:bg-brand-gold transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ShopPage
