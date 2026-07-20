import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Plus, SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
]

const CATEGORIES = [
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
  { label: 'Sets', value: 'sets' },
]

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(activeCategory)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedPrice !== null) {
      const range = PRICE_RANGES[selectedPrice]
      result = result.filter((p) => p.price >= range.min && p.price < range.max)
    }

    switch (sort) {
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
  }, [selectedCategory, selectedPrice, sort])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice(null)
    setSort('featured')
    setSearchParams({})
  }

  const hasFilters = selectedCategory || selectedPrice !== null

  const filterContent = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-espresso mb-4 font-medium">
          Category
        </h3>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat.value ? '' : cat.value)
              }
              className={`block text-sm font-sans transition-colors ${
                selectedCategory === cat.value
                  ? 'text-gold font-medium'
                  : 'text-espresso/60 hover:text-espresso'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-espresso mb-4 font-medium">
          Price
        </h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPrice(selectedPrice === idx ? null : idx)}
              className={`block text-sm font-sans transition-colors ${
                selectedPrice === idx
                  ? 'text-gold font-medium'
                  : 'text-espresso/60 hover:text-espresso'
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
          className="text-xs uppercase tracking-widest text-espresso/40 hover:text-espresso transition-colors font-sans"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="serif-heading text-3xl md:text-5xl font-light mb-3">
            {selectedCategory
              ? CATEGORIES.find((c) => c.value === selectedCategory)?.label
              : 'Shop All'}
          </h1>
          <p className="text-espresso/50 text-sm font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">{filterContent}</aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="bg-espresso text-cream px-6 py-3 rounded-full text-xs uppercase tracking-widest shadow-lg font-sans flex items-center gap-2"
            >
              <SlidersHorizontal size={14} />
              Filters
              {hasFilters && (
                <span className="w-5 h-5 bg-gold rounded-full text-[10px] flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          </div>

          {/* Mobile filters overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-warm-black/40"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-cream rounded-t-2xl p-6 animate-slide-up">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl tracking-widest text-espresso">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
                {filterContent}
                <button
                  onClick={() => {
                    setMobileFiltersOpen(false)
                  }}
                  className="btn-primary w-full text-center mt-8"
                >
                  Show Results ({filteredProducts.length})
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-8">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs font-sans uppercase tracking-wider bg-transparent border border-taupe rounded-sm px-3 py-2 text-espresso/70 cursor-pointer focus:outline-none focus:border-gold"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso/50 mb-4">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="btn-outline text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-muted-gold rounded-sm overflow-hidden mb-3">
                        <img
                          src={product.images.primary}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product)
                          }}
                          className="absolute bottom-3 right-3 bg-cream/90 backdrop-blur-sm text-espresso p-2 rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-cream"
                          aria-label={`Add ${product.name} to bag`}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <h3 className="product-name group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>
                      <p className="product-price mt-1">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}