import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/data/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

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

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const categoryParam = searchParams.get('category')
  useEffect(() => {
    if (categoryParam && !selectedCategories.includes(categoryParam)) {
      setSelectedCategories([categoryParam])
    }
  }, [categoryParam])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategories, selectedPriceRanges, sortBy])

  const toggleCategory = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    )
  }

  const togglePriceRange = (idx) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRanges([])
    setSearchParams({})
  }

  let filtered = products.filter((p) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false
    if (selectedPriceRanges.length > 0) {
      const inRange = selectedPriceRanges.some((idx) => {
        const range = priceRanges[idx]
        return p.price >= range.min && p.price <= range.max
      })
      if (!inRange) return false
    }
    return true
  })

  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price)
  else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price)

  const hasFilters = selectedCategories.length > 0 || selectedPriceRanges.length > 0

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-28'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal">Filters</h3>
        {hasFilters && (
          <button onClick={clearFilters} className="text-xs font-sans text-brand-gold hover:underline">
            Clear All
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-8">
        <h4 className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.slug)}
                onChange={() => toggleCategory(cat.slug)}
                className="w-4 h-4 accent-brand-gold"
              />
              <span className="text-sm font-sans text-brand-warm-gray group-hover:text-brand-charcoal transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range, idx) => (
            <label key={idx} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes(idx)}
                onChange={() => togglePriceRange(idx)}
                className="w-4 h-4 accent-brand-gold"
              />
              <span className="text-sm font-sans text-brand-warm-gray group-hover:text-brand-charcoal transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal mb-3">Material</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2.5 cursor-pointer group">
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-gold" />
            <span className="text-sm font-sans text-brand-warm-gray group-hover:text-brand-charcoal transition-colors">
              18K Gold Plated
            </span>
          </label>
          <label className="flex items-center gap-2.5 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-brand-gold" />
            <span className="text-sm font-sans text-brand-warm-gray group-hover:text-brand-charcoal transition-colors">
              Sterling Silver
            </span>
          </label>
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-extra-wide uppercase">
            The Collection
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand/60">
          <button
            className="md:hidden flex items-center gap-2 text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm font-sans text-brand-warm-gray">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal"
            >
              Sort: {sortOptions.find((o) => o.value === sortBy)?.label}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg border border-brand-sand/60 py-1 z-20 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false) }}
                    className={`w-full text-left px-4 py-2 text-sm font-sans transition-colors ${sortBy === opt.value ? 'text-brand-gold bg-brand-cream' : 'text-brand-charcoal hover:bg-brand-cream'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-3">No pieces found</p>
                <p className="text-sm font-sans text-brand-warm-gray mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-gold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filtered.map((product) => (
                  <ProductGridCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-[70]" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-brand-cream z-[80] shadow-xl p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-brand-charcoal" />
              </button>
            </div>
            <FilterSidebar mobile />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-brand-gold text-white text-xs font-sans font-medium tracking-extra-wide uppercase py-3 hover:bg-brand-gold-dark transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  )
}

const ProductGridCard = ({ product, onAddToCart }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-brand-warm mb-3">
          <img
            data-strk-img-id={`${product.id}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`${product.id}-shop-hover`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAddToCart() }}
              className="w-full bg-brand-charcoal/90 text-white text-xs font-sans font-medium tracking-extra-wide uppercase py-3 flex items-center justify-center gap-2 hover:bg-brand-charcoal transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-brand-charcoal text-center">
          {product.name}
        </h3>
        <p className="text-sm font-sans text-brand-warm-gray text-center mt-1">${product.price}</p>
      </Link>
    </div>
  )
}

export default ShopPage
