import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
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
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
        <Link to={`/product/${product.id}`} className="block absolute inset-0 z-0">
          <img
            data-strk-img-id={`shop-${product.id}-1`}
            data-strk-img={`[shop-desc-${product.id}] [shop-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`shop-${product.id}-2`}
            data-strk-img={`[shop-desc-${product.id}] [shop-name-${product.id}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </Link>

        {/* Quick add overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 z-20 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product) }}
            className="w-full bg-white/95 text-charcoal text-xs tracking-[0.1em] uppercase font-medium py-2.5 flex items-center justify-center gap-2 hover:bg-white"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3">
        <h3
          id={`shop-name-${product.id}`}
          className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal"
        >
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p id={`shop-desc-${product.id}`} className="text-xs text-warm-gray mt-0.5">{product.shortDescription}</p>
        <p className="text-sm font-medium mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeSort = searchParams.get('sort') || 'featured'

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory)
    }

    if (activePrice) {
      const range = priceRanges.find(r => r.label === activePrice)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
    }

    switch (activeSort) {
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
  }, [activeCategory, activePrice, activeSort])

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePrice

  const filterContent = (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', '')}
            className={`block text-sm transition-colors ${!activeCategory ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.slug)}
              className={`block text-sm transition-colors ${activeCategory === cat.slug ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-3">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('price', '')}
            className={`block text-sm transition-colors ${!activePrice ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'}`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setFilter('price', range.label)}
              className={`block text-sm transition-colors ${activePrice === range.label ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-[0.1em] uppercase text-gold hover:text-gold-dark underline transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </>
  )

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.05em] text-charcoal">The Collection</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-warm-gray"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-xs text-warm-gray hidden md:block">{filtered.length} items</p>

          <div className="flex items-center gap-2">
            <label className="text-xs text-warm-gray" htmlFor="sort-select">Sort:</label>
            <select
              id="sort-select"
              value={activeSort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="text-xs text-charcoal bg-transparent border border-warm-border px-2 py-1.5 focus:outline-none focus:border-gold"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            {filterContent}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-gray">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-gold text-sm underline hover:text-gold-dark transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-charcoal/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 bg-cream shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-warm-gray" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      )}
    </div>
  )
}
