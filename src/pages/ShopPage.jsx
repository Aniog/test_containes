import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products, categories, priceRanges } from '@/data/products'

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeMaterial = searchParams.get('material') || ''

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.id === activePrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max)
      }
    }
    if (activeMaterial) {
      result = result.filter((p) =>
        p.material.toLowerCase().includes(activeMaterial.toLowerCase())
      )
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeMaterial, sortBy])

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePrice || activeMaterial

  const materials = ['18K Gold Plated']

  return (
    <main className="pt-20 sm:pt-24">
      {/* Header */}
      <div className="bg-cream-dark py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-overline font-medium tracking-[0.25em] text-gold uppercase mb-2">
            {activeCategory ? categories.find(c => c.id === activeCategory)?.name || 'Shop' : 'Our Collection'}
          </p>
          <h1 className="font-serif text-display-sm text-charcoal">
            {activeCategory ? categories.find(c => c.id === activeCategory)?.name || 'Shop All' : 'Shop All'}
          </h1>
          <p className="text-body text-warm-gray mt-3 max-w-lg mx-auto">
            Discover our curated selection of demi-fine gold jewelry, designed to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-parchment rounded text-body-sm font-medium text-charcoal hover:border-warm-gray-lighter transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-body-sm text-warm-gray hover:text-charcoal transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-body-sm text-warm-gray hidden sm:inline">
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-cream border border-parchment rounded px-4 py-2 pr-8 text-body-sm text-charcoal cursor-pointer focus:outline-none focus:border-gold transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-warm-gray pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar filters */}
          <aside
            className={`${
              filtersOpen ? 'fixed inset-0 z-50 bg-cream p-6 pt-20 overflow-auto' : 'hidden'
            } lg:block lg:relative lg:w-56 lg:flex-shrink-0 lg:p-0 lg:pt-0 lg:bg-transparent`}
          >
            {filtersOpen && (
              <button
                onClick={() => setFiltersOpen(false)}
                className="absolute top-5 right-5 lg:hidden p-1"
                aria-label="Close filters"
              >
                <X className="w-5 h-5 text-charcoal" />
              </button>
            )}

            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-body-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
                  Category
                </h3>
                <div className="space-y-2.5">
                  <button
                    onClick={() => setFilter('category', '')}
                    className={`block text-body-sm transition-colors ${
                      !activeCategory ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilter('category', cat.id)}
                      className={`block text-body-sm transition-colors ${
                        activeCategory === cat.id
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-body-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
                  Price
                </h3>
                <div className="space-y-2.5">
                  <button
                    onClick={() => setFilter('price', '')}
                    className={`block text-body-sm transition-colors ${
                      !activePrice ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setFilter('price', range.id)}
                      className={`block text-body-sm transition-colors ${
                        activePrice === range.id
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-body-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
                  Material
                </h3>
                <div className="space-y-2.5">
                  <button
                    onClick={() => setFilter('material', '')}
                    className={`block text-body-sm transition-colors ${
                      !activeMaterial ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    All Materials
                  </button>
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setFilter('material', mat)}
                      className={`block text-body-sm transition-colors ${
                        activeMaterial === mat
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-serif text-heading text-charcoal mb-2">
                  No products found
                </p>
                <p className="text-body text-warm-gray mb-6">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-charcoal text-white text-body-sm font-medium tracking-wider uppercase rounded hover:bg-charcoal-light transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
