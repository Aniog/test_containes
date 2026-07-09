import React, { useState, useMemo } from 'react'
import { products, categories } from '../data/products'
import ProductCard from '../components/home/ProductCard'
import { ChevronDown } from 'lucide-react'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max
        return p.price >= min
      })
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
      case 'newest':
        result.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        break
    }

    return result
  }, [selectedCategory, priceRange, sortBy])

  const FilterContent = () => (
    <>
      {/* Category filter */}
      <div className="mb-8">
        <h3 className="text-sm tracking-wider text-velmora-base mb-4">CATEGORY</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-sm transition-colors ${
              selectedCategory === 'all' ? 'text-velmora-base font-medium' : 'text-velmora-muted hover:text-velmora-base'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.id ? 'text-velmora-base font-medium' : 'text-velmora-muted hover:text-velmora-base'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="mb-8">
        <h3 className="text-sm tracking-wider text-velmora-base mb-4">PRICE</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '0-50', label: 'Under $50' },
            { value: '50-100', label: '$50 - $100' },
            { value: '100-999', label: 'Over $100' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setPriceRange(option.value)}
              className={`block text-sm transition-colors ${
                priceRange === option.value ? 'text-velmora-base font-medium' : 'text-velmora-muted hover:text-velmora-base'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h3 className="text-sm tracking-wider text-velmora-base mb-4">MATERIAL</h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Crystal', 'Brass'].map((mat) => (
            <label key={mat} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-velmora-gold" />
              <span className="text-sm text-velmora-muted">{mat}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <main className="bg-velmora-cream min-h-screen">
      {/* Page header */}
      <div className="bg-velmora-base py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-velmora-gold text-sm tracking-widest mb-3">THE COLLECTION</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-cream">Shop All</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 text-sm tracking-wider text-velmora-base"
            >
              <ChevronDown size={16} className={`transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
              FILTERS
            </button>
            <span className="text-sm text-velmora-muted">{filteredProducts.length} pieces</span>
          </div>

          {/* Sidebar */}
          <aside
            className={`md:w-64 md:flex-shrink-0 ${
              mobileFiltersOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="md:sticky md:top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort and count (desktop) */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <span className="text-sm text-velmora-muted">{filteredProducts.length} pieces</span>
              <div className="flex items-center gap-3">
                <span className="text-sm text-velmora-muted">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm bg-transparent border border-velmora-warm-dark px-3 py-2 text-velmora-base focus:outline-none focus:border-velmora-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-base mb-2">No pieces found</p>
                <p className="text-velmora-muted">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
