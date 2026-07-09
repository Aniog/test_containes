import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, ChevronDown, Grid3X3, List } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < Math.floor(rating) ? 'fill-gold text-gold' : 'fill-warm-beige text-warm-beige'}
        />
      ))}
    </div>
  )
}

const categories = ['all', 'earrings', 'necklaces', 'sets']
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]
const materials = ['gold', 'silver']
const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const activePriceRange = searchParams.get('price') || ''
  const activeMaterial = searchParams.get('material') || ''
  const activeSort = searchParams.get('sort') || 'newest'

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value && value !== 'all') {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial)
    }
    if (activePriceRange) {
      const range = priceRanges.find((r) => r.label === activePriceRange)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }
    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [activeCategory, activeMaterial, activePriceRange, activeSort])

  const activeCount = [activeCategory !== 'all', activeMaterial, activePriceRange].filter(Boolean).length

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-deep-charcoal mb-4 font-medium">Category</h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setFilter('category', cat)}
                className={`text-sm transition-colors ${
                  activeCategory === cat
                    ? 'text-deep-charcoal font-medium'
                    : 'text-taupe hover:text-deep-charcoal'
                }`}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="hairline pt-6">
        <h3 className="text-xs tracking-widest uppercase text-deep-charcoal mb-4 font-medium">Price</h3>
        <ul className="space-y-3">
          {priceRanges.map((r) => (
            <li key={r.label}>
              <button
                onClick={() => setFilter('price', activePriceRange === r.label ? '' : r.label)}
                className={`text-sm transition-colors ${
                  activePriceRange === r.label
                    ? 'text-deep-charcoal font-medium'
                    : 'text-taupe hover:text-deep-charcoal'
                }`}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div className="hairline pt-6">
        <h3 className="text-xs tracking-widest uppercase text-deep-charcoal mb-4 font-medium">Material</h3>
        <ul className="space-y-3">
          {materials.map((m) => (
            <li key={m}>
              <button
                onClick={() => setFilter('material', activeMaterial === m ? '' : m)}
                className={`text-sm transition-colors ${
                  activeMaterial === m
                    ? 'text-deep-charcoal font-medium'
                    : 'text-taupe hover:text-deep-charcoal'
                }`}
              >
                {m === 'gold' ? '18K Gold' : 'Sterling Silver'}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Clear */}
      {activeCount > 0 && (
        <button
          onClick={() => setSearchParams({})}
          className="text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <main className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-warm-beige">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="text-taupe text-sm mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16 py-8">
        <div className="flex gap-10">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-[220px] flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-warm-beige">
              {/* Mobile filter toggle */}
              <button
                className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-deep-charcoal"
                onClick={() => setMobileFilterOpen(true)}
              >
                <SlidersHorizontal size={14} />
                Filters{activeCount > 0 && ` (${activeCount})`}
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <div className="flex items-center gap-3">
                <label className="text-xs tracking-widest uppercase text-taupe">Sort:</label>
                <select
                  value={activeSort}
                  onChange={(e) => setFilter('sort', e.target.value)}
                  className="text-xs tracking-widest uppercase text-deep-charcoal bg-transparent border border-warm-beige px-3 py-2 focus:outline-none focus:border-gold transition-colors"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe text-sm">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
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

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
        <div className={`absolute top-0 left-0 bottom-0 w-[300px] bg-cream p-6 overflow-y-auto transition-transform duration-400 ${
          mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs tracking-widest uppercase font-medium">Filters</span>
            <button onClick={() => setMobileFilterOpen(false)} className="text-taupe hover:text-deep-charcoal">
              Close
            </button>
          </div>
          <FilterSidebar />
        </div>
      </div>
    </main>
  )
}

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-[4/5] bg-warm-beige/30 overflow-hidden mb-3 relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-gold text-white text-[9px] tracking-[0.12em] uppercase px-2 py-0.5 font-sans">
            New
          </span>
        )}
      </div>
      <h3 className="font-serif text-xs uppercase tracking-widest text-deep-charcoal leading-snug">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mt-1">
        <Stars rating={product.rating} />
        <span className="text-[10px] text-taupe">{product.rating}</span>
      </div>
      <p className="font-serif text-sm font-medium mt-1">${product.price}</p>
    </Link>
  )
}
