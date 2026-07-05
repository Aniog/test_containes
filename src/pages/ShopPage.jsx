import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Star, SlidersHorizontal, X } from 'lucide-react'
import { products } from '../data/products'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
  const materials = ['All', '18K Gold Plated', 'Silver Plated']
  const priceRanges = [
    { label: 'All', min: 0, max: 1000 },
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $80', min: 50, max: 80 },
    { label: 'Over $80', min: 80, max: 1000 },
  ]

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial)
    }

    if (priceRange !== 'All') {
      const range = priceRanges.find(r => r.label === priceRange)
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price < range.max)
      }
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const clearFilters = () => {
    setSelectedCategory('All')
    setSelectedMaterial('All')
    setPriceRange('All')
  }

  const hasActiveFilters = selectedCategory !== 'All' || selectedMaterial !== 'All' || priceRange !== 'All'

  return (
    <div className="bg-velmora-ivory min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-4xl md:text-5xl text-center">Shop All</h1>
          <p className="font-sans text-sm text-center text-gray-500 mt-2 uppercase tracking-wider">
            {filteredProducts.length} products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center justify-between w-full p-4 border border-velmora-taupe font-sans text-sm uppercase tracking-wider"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </span>
            {hasActiveFilters && (
              <span className="text-velmora-gold">Active</span>
            )}
          </button>

          {/* Filter Sidebar */}
          <aside className={`
            ${isFilterOpen ? 'block' : 'hidden'} lg:block
            w-full lg:w-64 flex-shrink-0
          `}>
            <div className="bg-white p-6 lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-lg">Filters</h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="font-sans text-xs text-velmora-gold uppercase tracking-wider"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block font-sans text-sm ${
                        selectedCategory === category
                          ? 'text-velmora-gold font-medium'
                          : 'text-gray-600 hover:text-velmora-charcoal'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block font-sans text-sm ${
                        selectedMaterial === material
                          ? 'text-velmora-gold font-medium'
                          : 'text-gray-600 hover:text-velmora-charcoal'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(range.label)}
                      className={`block font-sans text-sm ${
                        priceRange === range.label
                          ? 'text-velmora-gold font-medium'
                          : 'text-gray-600 hover:text-velmora-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {/* Sort Dropdown */}
            <div className="flex justify-between items-center mb-8">
              <p className="font-sans text-sm text-gray-500">
                Showing {filteredProducts.length} results
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm border border-velmora-taupe px-4 py-2 focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl mb-4">No products found</p>
                <p className="font-sans text-sm text-gray-500 mb-8">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="aspect-square bg-velmora-cream mb-4 overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                      />
                    </div>
                    <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'text-velmora-gold fill-velmora-gold'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-sans text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                    <p className="font-serif text-lg">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
