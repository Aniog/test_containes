import { useState, useMemo, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const allCategories = ['All', 'Earrings', 'Necklaces', 'Huggies']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export default function Shop() {
  const { addItem } = useCart()
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const containerRef = useRef(null)

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState(0)
  const [sort, setSort] = useState('featured')
  const [mobileFilters, setMobileFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter(p => p.category === category)
    }

    const range = priceRanges[priceRange]
    result = result.filter(p => p.price >= range.min && p.price < range.max)

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)

    return result
  }, [category, priceRange, sort])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [category, priceRange, sort])

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                category === cat ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setPriceRange(i)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                priceRange === i ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <button className="block w-full text-left text-sm py-1 text-muted hover:text-charcoal transition-colors">
            18K Gold Plated
          </button>
          <button className="block w-full text-left text-sm py-1 text-muted hover:text-charcoal transition-colors">
            Sterling Silver
          </button>
        </div>
      </div>
    </>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
          <button
            onClick={() => setMobileFilters(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="hidden md:block text-xs text-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="flex items-center gap-2">
            <label className="text-xs text-muted" htmlFor="sort">Sort:</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs text-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted">No pieces match your filters.</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange(0) }}
                  className="mt-4 text-xs tracking-[0.1em] uppercase text-gold underline underline-offset-4 hover:text-gold-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry shop`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                        />
                        <img
                          data-strk-img-id={`shop-${product.imgId2}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] worn model gold jewelry`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                        />
                      </div>
                    </Link>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          className="font-serif text-sm uppercase tracking-[0.1em] text-charcoal group-hover:text-gold transition-colors duration-300"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-muted mt-0.5">{product.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-medium text-charcoal">${product.price}</span>
                        <button
                          onClick={() => addItem(product)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold hover:text-gold-hover"
                          aria-label={`Add ${product.name} to cart`}
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
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
            className="fixed inset-0 bg-charcoal/40 z-50"
            onClick={() => setMobileFilters(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal">Filters</h3>
              <button onClick={() => setMobileFilters(false)} className="text-charcoal hover:text-gold transition-colors" aria-label="Close filters">
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
