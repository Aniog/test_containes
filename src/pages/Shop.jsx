import React, { useState, useRef, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A–Z' },
]

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies']
const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]
const MATERIALS = ['18K Gold Plated', 'Sterling Silver']

const Shop = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [category, setCategory] = useState(initialCategory ? initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1) : 'All')
  const [priceRange, setPriceRange] = useState(null)
  const [material, setMaterial] = useState(null)
  const [sort, setSort] = useState('featured')
  const [mobileFilters, setMobileFilters] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRange, material, sort])

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1))
    }
  }, [initialCategory])

  const filtered = useMemo(() => {
    let result = [...products]
    if (category !== 'All') result = result.filter(p => p.category === category)
    if (priceRange) result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max)
    if (material) result = result.filter(p => p.material === material)
    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break
      case 'price-desc': result.sort((a, b) => b.price - a.price); break
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break
      default: break
    }
    return result
  }, [category, priceRange, material, sort])

  const clearFilters = () => {
    setCategory('All')
    setPriceRange(null)
    setMaterial(null)
  }

  const hasFilters = category !== 'All' || priceRange || material

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : ''}>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-xs font-sans uppercase tracking-product text-charcoal font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block text-sm font-sans transition-colors ${
                category === cat ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs font-sans uppercase tracking-product text-charcoal font-semibold mb-3">Price</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range, i) => (
            <button
              key={i}
              onClick={() => setPriceRange(priceRange?.label === range.label ? null : range)}
              className={`block text-sm font-sans transition-colors ${
                priceRange?.label === range.label ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs font-sans uppercase tracking-product text-charcoal font-semibold mb-3">Material</h3>
        <div className="space-y-2">
          {MATERIALS.map(m => (
            <button
              key={m}
              onClick={() => setMaterial(material === m ? null : m)}
              className={`block text-sm font-sans transition-colors ${
                material === m ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans uppercase tracking-wide text-gold hover:text-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">The Collection</h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-sand">
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="md:hidden flex items-center gap-2 text-xs font-sans uppercase tracking-wide text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="hidden md:block text-xs font-sans text-warm-gray">{filtered.length} products</p>
          <div className="flex items-center gap-2">
            <label className="text-xs font-sans text-warm-gray" htmlFor="sort">Sort:</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs font-sans text-charcoal bg-transparent border border-sand px-2 py-1.5 focus:outline-none focus:border-gold"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filters */}
          {mobileFilters && (
            <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
              <div className="flex items-center justify-between px-5 py-4 border-b border-sand">
                <h2 className="font-serif text-lg text-charcoal">Filters</h2>
                <button onClick={() => setMobileFilters(false)} className="text-charcoal p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-5 py-6">
                <FilterSidebar mobile />
              </div>
              <div className="px-5 py-4 border-t border-sand">
                <button
                  onClick={() => setMobileFilters(false)}
                  className="w-full bg-gold hover:bg-gold-dark text-white font-sans text-xs tracking-product uppercase py-3 transition-colors duration-300"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-lg text-charcoal mb-2">No products found</p>
                <p className="text-sm text-warm-gray">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6">
                {filtered.map(product => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-linen mb-3">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-charcoal/90 py-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product)
                          }}
                        >
                          <ShoppingBag className="w-3.5 h-3.5 text-white" />
                          <span className="text-xs text-white font-sans tracking-wide uppercase">Add to Cart</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/product/${product.id}`}>
                      <h3 id={product.titleId} className="font-serif text-xs md:text-sm uppercase tracking-product text-charcoal mb-0.5">{product.name}</h3>
                      <p id={product.descId} className="text-xs text-warm-gray font-sans mb-1 hidden md:block">{product.description}</p>
                      <p className="text-sm font-sans font-medium text-charcoal">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
