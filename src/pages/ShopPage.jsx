import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import products from '../data/products'

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToCart } = useCart()
  
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured')

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material.includes(selectedMaterial))
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      filtered = filtered.filter(p => p.price >= min && p.price <= max)
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'new':
        filtered.sort((a, b) => b.id - a.id)
        break
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets']
  const materials = ['all', '18K Gold Plated', 'Silver Plated']
  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $80', value: '50-80' },
    { label: 'Over $80', value: '80-1000' }
  ]

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setPriceRange('all')
    setSortBy('featured')
    setSearchParams({})
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-center mb-4">Shop All</h1>
          <div className="w-16 h-px bg-amber-600 mx-auto" />
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center space-x-2 font-sans text-sm uppercase tracking-wide"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <div className="flex items-center space-x-4">
            <span className="font-sans text-sm text-gray-600">
              {filteredProducts.length} products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-sm border border-gray-300 px-4 py-2 focus:outline-none focus:border-amber-600"
            >
              <option value="featured">Featured</option>
              <option value="new">New Arrivals</option>
              <option value="bestsellers">Bestsellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="bg-gray-50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="font-sans text-sm text-amber-600 hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-sm uppercase tracking-wide mb-4">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block font-sans text-sm capitalize ${
                        selectedCategory === category ? 'text-amber-600 font-medium' : 'text-gray-600 hover:text-amber-600'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-sm uppercase tracking-wide mb-4">Material</h4>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block font-sans text-sm ${
                        selectedMaterial === material ? 'text-amber-600 font-medium' : 'text-gray-600 hover:text-amber-600'
                      } transition-colors`}
                    >
                      {material === 'all' ? 'All' : material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-sm uppercase tracking-wide mb-4">Price</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block font-sans text-sm ${
                        priceRange === range.value ? 'text-amber-600 font-medium' : 'text-gray-600 hover:text-amber-600'
                      } transition-colors`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative overflow-hidden bg-gray-50 aspect-square mb-4">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Quick add button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          addToCart(product, 1)
                        }}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                                 opacity-0 group-hover:opacity-100 transition-all duration-300
                                 bg-white text-gray-900 px-6 py-3 font-sans text-sm uppercase tracking-wide
                                 hover:bg-gray-900 hover:text-white"
                      >
                        <ShoppingBag size={16} className="inline-block mr-2" />
                        Quick Add
                      </button>
                    </div>
                  </Link>

                  <div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-lg uppercase tracking-wider mb-2 hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < Math.floor(product.rating) ? 'text-amber-600 fill-amber-600' : 'text-gray-300'} 
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <p className="font-sans text-xl">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-2xl mb-4">No products found</p>
                <p className="font-sans text-gray-600 mb-8">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 font-sans text-sm uppercase tracking-wide"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
