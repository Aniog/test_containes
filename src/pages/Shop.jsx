import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

const priceRanges = [
  { label: 'Under $40', value: 'under-40', min: 0, max: 40 },
  { label: '$40 – $60', value: '40-60', min: 40, max: 60 },
  { label: '$60 – $80', value: '60-80', min: 60, max: 80 },
  { label: '$80+', value: '80-plus', min: 80, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeSort = searchParams.get('sort') || 'newest'
  const activeMaterial = searchParams.get('material') || ''

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value && value !== activeFilter(key)) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const activeFilter = (key) => {
    switch (key) {
      case 'category': return activeCategory
      case 'price': return activePrice
      case 'sort': return activeSort
      case 'material': return activeMaterial
      default: return ''
    }
  }

  const clearFilters = () => {
    setSearchParams(new URLSearchParams())
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      if (activeCategory === 'huggies') {
        // huggies are earrings, match by name
        result = result.filter(
          (p) => p.name.toLowerCase().includes('huggie')
        )
      } else {
        result = result.filter(
          (p) => p.category === activeCategory
        )
      }
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.value === activePrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    if (activeMaterial) {
      result = result.filter((p) =>
        p.materials?.toLowerCase().includes(activeMaterial.toLowerCase())
      )
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
  }, [activeCategory, activePrice, activeSort, activeMaterial])

  const hasActiveFilters = activeCategory || activePrice || activeMaterial

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [searchParams])

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h4 className="text-[11px] tracking-widest uppercase font-sans text-ink-500 mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                activeCategory === cat.slug
                  ? 'text-ink-950 font-medium'
                  : 'text-ink-400 hover:text-ink-700'
              }`}
              onClick={() => updateFilter('category', cat.slug)}
            >
              {cat.name}
              <span className="text-ink-300 ml-1">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[11px] tracking-widest uppercase font-sans text-ink-500 mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                activePrice === range.value
                  ? 'text-ink-950 font-medium'
                  : 'text-ink-400 hover:text-ink-700'
              }`}
              onClick={() => updateFilter('price', range.value)}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[11px] tracking-widest uppercase font-sans text-ink-500 mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {['gold', 'silver'].map((mat) => (
            <button
              key={mat}
              className={`block w-full text-left text-sm capitalize font-sans py-1.5 transition-colors ${
                activeMaterial === mat
                  ? 'text-ink-950 font-medium'
                  : 'text-ink-400 hover:text-ink-700'
              }`}
              onClick={() => updateFilter('material', mat)}
            >
              {mat}-plated
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase font-sans text-ink-400 hover:text-ink-950 transition-colors underline underline-offset-2"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="bg-cream-50">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-gold-600 text-xs tracking-extra-wide uppercase font-sans mb-2">
              Collection
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-ink-950">
              {activeCategory
                ? categories.find((c) => c.slug === activeCategory)?.name || 'Shop'
                : 'All Jewelry'}
            </h1>
            <p className="text-ink-400 text-sm font-sans mt-2">
              {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          {/* Sort + Mobile filter trigger */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-ink-600 hover:text-ink-950 transition-colors"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>

            <div className="flex items-center gap-2">
              <label className="text-[11px] tracking-widest uppercase font-sans text-ink-400">
                Sort
              </label>
              <select
                value={activeSort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-sm font-sans text-ink-700 bg-transparent border border-ink-200 rounded px-3 py-1.5 focus:outline-none focus:border-ink-400 transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          {filteredProducts.length === 0 ? (
            <div className="flex-1 text-center py-16">
              <p className="font-serif text-xl text-ink-500">No pieces found.</p>
              <p className="text-sm text-ink-400 mt-2">Try adjusting your filters.</p>
              <button onClick={clearFilters} className="btn-outline text-xs mt-6">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="group"
                >
                  <div className="product-card-image-wrapper bg-ink-100 aspect-[3/4] rounded-sm overflow-hidden relative">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="product-main-img w-full h-full object-cover transition-all duration-500"
                    />
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} alternate view`}
                      className="product-hover-img absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-ink-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem(product, 1, product.variant || 'gold')
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          addItem(product, 1, product.variant || 'gold')
                        }
                      }}
                    >
                      <span className="text-cream-50 text-[11px] tracking-widest uppercase font-sans block text-center">
                        Quick Add
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="product-name truncate">{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-gold-500 fill-gold-500'
                              : 'text-ink-200'
                          }`}
                        />
                      ))}
                      <span className="text-[10px] text-ink-400 ml-1 font-sans">
                        ({product.reviewCount})
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-cream-50 shadow-xl p-6 animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-widest uppercase font-sans text-ink-700">
                Filters
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-ink-400 hover:text-ink-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </div>
  )
}