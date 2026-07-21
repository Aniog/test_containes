import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const allCategories = ['All', 'Earrings', 'Necklaces', 'Huggies']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]
const materials = ['All', '18K Gold Plated']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState(0)
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [mobileFilters, setMobileFilters] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [category, priceRange, material, sort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter(p => p.category === category)
    }

    const range = priceRanges[priceRange]
    result = result.filter(p => p.price >= range.min && p.price <= range.max)

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)

    return result
  }, [category, priceRange, material, sort])

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-super-wide text-brand-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors duration-200 ${
                category === cat
                  ? 'text-brand-gold'
                  : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-super-wide text-brand-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setPriceRange(i)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors duration-200 ${
                priceRange === i
                  ? 'text-brand-gold'
                  : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-super-wide text-brand-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map(m => (
            <button
              key={m}
              onClick={() => setMaterial(m)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors duration-200 ${
                material === m
                  ? 'text-brand-gold'
                  : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            The Collection
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Sort + mobile filter toggle */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-extra-wide text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="ml-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-xs uppercase tracking-extra-wide text-brand-muted bg-transparent border border-brand-sand px-4 py-2 focus:outline-none focus:border-brand-gold"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filters */}
          {mobileFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilters(false)} />
              <div className="absolute left-0 top-0 h-full w-72 bg-brand-ivory p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-xs uppercase tracking-super-wide text-brand-charcoal">Filters</h3>
                  <button onClick={() => setMobileFilters(false)}>
                    <X className="w-5 h-5 text-brand-muted" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-brand-muted">No products found</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange(0); }}
                  className="mt-4 text-brand-gold font-sans text-sm hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <img
                          data-strk-img-id={`shop-${product.imgId}-hover`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] hover detail`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${product.name} alternate`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        />
                      </div>
                    </Link>
                    <button
                      onClick={() => addItem(product)}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-onyx/90 text-brand-ivory font-sans text-[10px] uppercase tracking-super-wide px-5 py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-gold flex items-center gap-2"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                    <div className="mt-4 text-center">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          id={product.titleId}
                          className="font-serif text-xs md:text-sm uppercase tracking-ultra-wide text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p className="font-sans text-sm text-brand-muted mt-1">${product.price}</p>
                    </div>
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
