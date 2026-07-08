import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/product/ProductCard'

const allCategories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A-Z' },
]

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 120])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory)
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [selectedCategory, sortBy, priceRange])

  const clearFilters = () => {
    setSelectedCategory('All')
    setPriceRange([0, 120])
    setSortBy('featured')
  }

  const hasActiveFilters = selectedCategory !== 'All' || priceRange[0] > 0 || priceRange[1] < 120

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
      {/* Page Header */}
      <div className="text-center mb-12 lg:mb-16">
        <p className="text-velmora-gold text-sm tracking-widest uppercase mb-3 font-medium">Collection</p>
        <h1
          className="font-serif text-3xl md:text-4xl text-velmora-text"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          All Jewelry
        </h1>
        <div className="w-16 h-[1px] bg-velmora-gold mx-auto mt-6" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex items-center justify-between w-full px-6 py-4 border border-velmora-border rounded-lg"
        >
          <span className="flex items-center gap-2 text-sm uppercase tracking-wide">
            <SlidersHorizontal size={16} />
            Filter & Sort
          </span>
          {hasActiveFilters && (
            <span className="text-xs bg-velmora-gold text-velmora-deep px-2 py-0.5 rounded-full font-medium">
              Active
            </span>
          )}
        </button>

        {/* Filter Sidebar */}
        <div className={`${isFilterOpen ? 'fixed inset-0 z-50 bg-velmora-cream p-6 overflow-y-auto' : 'hidden'} lg:block lg:static lg:z-auto lg:bg-transparent lg:p-0 lg:w-64 xl:w-72 lg:flex-shrink-0`}>
          {/* Mobile filter header */}
          {isFilterOpen && (
            <div className="flex items-center justify-between mb-8 lg:hidden">
              <h3 className="font-serif text-xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Filters</h3>
              <button onClick={() => setIsFilterOpen(false)} className="p-2">
                <X size={20} />
              </button>
            </div>
          )}

          <div className={`space-y-8 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            {/* Categories */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">Category</h4>
              <div className="space-y-2">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left text-sm py-2 px-3 transition-colors ${
                      selectedCategory === cat
                        ? 'text-velmora-gold font-medium bg-velmora-gold/5'
                        : 'text-velmora-textMuted hover:text-velmora-text'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">Price</h4>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-velmora-gold"
                />
                <div className="flex items-center justify-between text-sm text-velmora-textMuted">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-gold hover:text-velmora-goldDark transition-colors uppercase tracking-wide"
              >
                Clear All Filters
              </button>
            )}

            {/* Apply on mobile */}
            {isFilterOpen && (
              <button
                onClick={() => setIsFilterOpen(false)}
                className="lg:hidden w-full bg-velmora-deep text-velmora-cream py-3 text-sm uppercase tracking-wider font-medium mt-8"
              >
                Apply Filters
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-border">
            <p className="text-sm text-velmora-textMuted">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-velmora-border px-4 py-2 bg-transparent focus:border-velmora-gold outline-none cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-velmora-textMuted mb-4">No products match your filters.</p>
              <button
                onClick={clearFilters}
                className="text-velmora-gold hover:text-velmora-goldDark transition-colors text-sm uppercase tracking-wide"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product, i) => (
                <div
                  key={product.id}
                  style={{ animationDelay: `${i * 0.05}s` }}
                  className="animate-smooth-appear opacity-0"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
