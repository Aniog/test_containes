import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 – $100', min: 75, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilters, setMobileFilters] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || ''
  const activeSort = searchParams.get('sort') || 'featured'

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value && value !== 'all') {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    setSearchParams(next)
  }

  const clearFilters = () => setSearchParams({})

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.id === activePrice)
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
    }

    return result
  }, [activeCategory, activePrice, activeSort])

  const hasFilters = activeCategory !== 'all' || activePrice !== ''

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-brand-600 font-sans mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                activeCategory === cat.id
                  ? 'text-brand-900 font-medium'
                  : 'text-brand-400 hover:text-brand-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-brand-200/60" />

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-brand-600 font-sans mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter('price', range.id)}
              className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                activePrice === range.id
                  ? 'text-brand-900 font-medium'
                  : 'text-brand-400 hover:text-brand-600'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase text-brand-500 hover:text-brand-900 font-sans transition-colors underline underline-offset-4"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <main className="bg-cream-50 min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 lg:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-900 tracking-wide text-center">
            All Jewelry
          </h1>
          <p className="text-xs text-brand-400 font-sans text-center mt-2 tracking-wider">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Sort + mobile filter bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-200/60">
              <button
                onClick={() => setMobileFilters(true)}
                className="lg:hidden flex items-center gap-1.5 text-xs tracking-wider uppercase text-brand-500 font-sans"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs text-brand-400 font-sans tracking-wider uppercase">
                  Sort:
                </label>
                <select
                  id="sort"
                  value={activeSort}
                  onChange={(e) => setFilter('sort', e.target.value)}
                  className="text-xs font-sans text-brand-700 bg-transparent border border-brand-200 rounded-sm px-3 py-1.5 focus:outline-none focus:border-brand-400"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-400 mb-4">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest uppercase font-sans text-brand-700 border-b border-brand-400 pb-0.5"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile filters drawer */}
        {mobileFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-brand-900/40"
              onClick={() => setMobileFilters(false)}
            />
            <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream-50 p-6 overflow-y-auto shadow-xl animate-slide-up">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-widest uppercase text-brand-600 font-sans">
                  Filters
                </span>
                <button onClick={() => setMobileFilters(false)}>
                  <X className="w-4 h-4 text-brand-500" />
                </button>
              </div>
              <FilterSidebar />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group bg-white rounded-sm overflow-hidden border border-brand-100 transition-all duration-300">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-[3/4] overflow-hidden bg-brand-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-3 md:p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-serif text-xs md:text-sm uppercase tracking-widest text-brand-900 leading-relaxed">
            {product.name}
          </h3>
        </Link>
        <p className="text-[10px] md:text-xs text-brand-400 mt-1 font-sans truncate">
          {product.tagline}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
          <span className="text-[10px] text-brand-500 font-sans">{product.rating}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-medium text-gold-700">${product.price}</span>
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
            className="text-[10px] tracking-widest uppercase font-sans text-brand-600 border border-brand-300 px-2.5 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-900 hover:text-cream-50 hover:border-brand-900"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}