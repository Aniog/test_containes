import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f2ed] mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          <div
            className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
              isHovered
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addToCart(product, product.variants[0])
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-[#1a1a1a] py-3 text-sm tracking-widest uppercase hover:bg-[#b8956a] hover:text-white transition-colors"
            >
              Add to Cart
            </button>
          </div>

          {product.bestseller && (
            <span className="absolute top-3 left-3 bg-[#b8956a] text-white text-xs px-2 py-1 tracking-wider uppercase">
              Bestseller
            </span>
          )}
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3 className="product-name text-sm md:text-base mb-1">{product.name}</h3>
      </Link>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < Math.floor(product.rating)
                ? 'text-[#b8956a] fill-[#b8956a]'
                : 'text-[#e8e2d9]'
            }`}
          />
        ))}
        <span className="text-xs text-[#6b6560] ml-1">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </div>
  )
}

export default function CollectionPage() {
  const [searchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  )
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Gift Sets' },
  ]

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under-50', name: 'Under $50' },
    { id: '50-75', name: '$50 - $75' },
    { id: 'over-75', name: 'Over $75' },
  ]

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-asc', name: 'Price: Low to High' },
    { id: 'price-desc', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
  ]

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    if (selectedPriceRange === 'under-50') {
      filtered = filtered.filter((p) => p.price < 50)
    } else if (selectedPriceRange === '50-75') {
      filtered = filtered.filter((p) => p.price >= 50 && p.price <= 75)
    } else if (selectedPriceRange === 'over-75') {
      filtered = filtered.filter((p) => p.price > 75)
    }

    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [selectedCategory, selectedPriceRange, sortBy])

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedPriceRange !== 'all',
  ].filter(Boolean).length

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPriceRange('all')
    setSortBy('featured')
  }

  return (
    <main className="pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif-heading text-4xl md:text-5xl mb-2">
            Shop All Jewelry
          </h1>
          <p className="text-[#6b6560]">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#e8e2d9]">
          {/* Mobile Filter Toggle */}
          <button
            className="md:hidden flex items-center gap-2 text-sm tracking-widest uppercase"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="bg-[#b8956a] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop Category Pills */}
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-sm tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-[#f5f2ed] text-[#6b6560] hover:bg-[#e8e2d9]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-4">
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-[#b8956a] hover:text-[#a6845a] transition-colors flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Clear
              </button>
            )}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sm border border-[#e8e2d9] px-3 py-2 focus:outline-none focus:border-[#b8956a]"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filter Panel */}
        {isFilterOpen && (
          <div className="md:hidden bg-[#f5f2ed] p-6 mb-6 space-y-6">
            <div>
              <h3 className="text-sm tracking-widest uppercase mb-3">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 text-sm tracking-wider transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-white text-[#6b6560]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase mb-3">
                Price Range
              </h3>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPriceRange(range.id)}
                    className={`px-4 py-2 text-sm tracking-wider transition-all ${
                      selectedPriceRange === range.id
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-white text-[#6b6560]'
                    }`}
                  >
                    {range.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Desktop Sidebar + Grid */}
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-[#b8956a] font-medium'
                          : 'text-[#6b6560] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        selectedPriceRange === range.id
                          ? 'text-[#b8956a] font-medium'
                          : 'text-[#6b6560] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-2xl mb-2">No pieces found</p>
                <p className="text-[#6b6560] mb-4">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
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
