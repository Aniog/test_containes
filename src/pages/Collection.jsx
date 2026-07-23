import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 81, max: 999 },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')
  const [activePriceRange, setActivePriceRange] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const pageRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const container = pageRef.current
    if (!container) return
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, container)
    })
    return () => cancelAnimationFrame(raf)
  }, [activeCategory, activePriceRange, sortBy])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    if (activePriceRange !== null) {
      const range = priceRanges[activePriceRange]
      result = result.filter(p => p.price >= range.min && p.price <= range.max)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePriceRange, sortBy])

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const clearFilters = () => {
    setActiveCategory('all')
    setActivePriceRange(null)
    setSortBy('featured')
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== null

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
              activeCategory === 'all' ? 'text-gold font-medium' : 'text-graphite hover:text-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                activeCategory === cat.id ? 'text-gold font-medium' : 'text-graphite hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range, index) => (
            <button
              key={index}
              onClick={() => setActivePriceRange(activePriceRange === index ? null : index)}
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                activePriceRange === index ? 'text-gold font-medium' : 'text-graphite hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal mb-4">
          Material
        </h3>
        <p className="font-sans text-sm text-graphite">
          18K Gold Plated
        </p>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs uppercase tracking-widest text-gold hover:text-gold-dark transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={pageRef} className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-warm-gray py-12 md:py-16 text-center">
        <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-4">
          Our Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal">
          {activeCategory !== 'all'
            ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
            : 'All Jewelry'
          }
        </h1>
        <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
      </section>

      {/* Filters + Grid */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Mobile filter toggle + Sort */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-charcoal"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            <div className="flex items-center gap-3 ml-auto">
              <span className="font-sans text-xs text-graphite">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>

              {/* Sort dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-sand py-2 pl-4 pr-10 font-sans text-xs uppercase tracking-widest text-charcoal cursor-pointer focus:outline-none focus:border-gold transition-colors"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-graphite pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex gap-8 lg:gap-12">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <FilterSidebar />
            </aside>

            {/* Mobile filter drawer */}
            {filterOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
                <div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-serif text-xl text-charcoal">Filters</h3>
                    <button onClick={() => setFilterOpen(false)} className="text-charcoal">
                      <X size={20} />
                    </button>
                  </div>
                  <FilterSidebar />
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="font-serif text-2xl text-charcoal mb-3">
                    No products found
                  </p>
                  <p className="font-sans text-sm text-graphite mb-6">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <button onClick={clearFilters} className="btn-outline">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
