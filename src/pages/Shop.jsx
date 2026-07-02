import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

const allCategories = ['all', 'earrings', 'necklaces', 'huggies', 'sets']
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const categoryParam = searchParams.get('category') || 'all'
  const sortParam = searchParams.get('sort') || 'featured'
  const priceParam = searchParams.get('price') || ''

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

    if (categoryParam !== 'all') {
      result = result.filter((p) => p.category === categoryParam)
    }

    if (priceParam) {
      const range = priceRanges.find((r) => `${r.min}-${r.max}` === priceParam)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    switch (sortParam) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
      case 'featured':
      default:
        break
    }

    return result
  }, [categoryParam, priceParam, sortParam])

  const isFiltered = categoryParam !== 'all' || priceParam || sortParam !== 'featured'

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-taupe">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
              {categoryParam === 'all' ? 'All Jewelry' : `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)}`}
            </h1>
            <p className="text-sm text-secondary mt-1">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-taupe rounded-full text-xs tracking-wider uppercase"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
            <select
              value={sortParam}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="px-4 py-2 border border-taupe rounded-full text-xs tracking-wider uppercase bg-transparent text-charcoal focus:outline-none focus:border-charcoal/30 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8 mt-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {/* Category */}
            <div className="mb-8">
              <h3 className="text-xs tracking-[0.2em] uppercase text-secondary mb-4">Category</h3>
              <ul className="space-y-2.5">
                {allCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setFilter('category', cat)}
                      className={`text-sm transition-colors ${
                        categoryParam === cat
                          ? 'text-charcoal font-medium'
                          : 'text-secondary hover:text-charcoal'
                      }`}
                    >
                      {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-xs tracking-[0.2em] uppercase text-secondary mb-4">Price Range</h3>
              <ul className="space-y-2.5">
                {priceRanges.map((range) => {
                  const key = `${range.min}-${range.max}`
                  return (
                    <li key={key}>
                      <button
                        onClick={() => setFilter('price', priceParam === key ? '' : key)}
                        className={`text-sm transition-colors ${
                          priceParam === key
                            ? 'text-charcoal font-medium'
                            : 'text-secondary hover:text-charcoal'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            {isFiltered && (
              <button
                onClick={() => setSearchParams({})}
                className="text-xs tracking-wider uppercase text-gold hover:text-gold-hover transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-secondary text-sm">No pieces match your filter.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="btn-outline mt-6 inline-block"
                >
                  Clear Filters
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
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm tracking-[0.2em] uppercase">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-8">
              <h4 className="text-xs tracking-wider uppercase text-secondary mb-3">Category</h4>
              <div className="space-y-2">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setFilter('category', cat); setMobileFiltersOpen(false) }}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      categoryParam === cat ? 'text-charcoal font-medium' : 'text-secondary'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs tracking-wider uppercase text-secondary mb-3">Price</h4>
              <div className="space-y-2">
                {priceRanges.map((range) => {
                  const key = `${range.min}-${range.max}`
                  return (
                    <button
                      key={key}
                      onClick={() => { setFilter('price', priceParam === key ? '' : key); setMobileFiltersOpen(false) }}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        priceParam === key ? 'text-charcoal font-medium' : 'text-secondary'
                      }`}
                    >
                      {range.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}