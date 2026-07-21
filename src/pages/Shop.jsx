import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import products from '../data/products'

export default function Shop() {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories = ['all', 'Earrings', 'Necklaces', 'Huggies']
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 - $80' },
    { value: 'over80', label: 'Over $80' }
  ]
  const materials = ['all', 'gold', 'silver']

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(p => {
        if (priceRange === 'under50') return p.price < 50
        if (priceRange === '50to80') return p.price >= 50 && p.price <= 80
        if (priceRange === 'over80') return p.price > 80
        return true
      })
    }

    // Filter by material
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial)
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      return 0
    })

    return filtered
  }, [selectedCategory, priceRange, selectedMaterial, sortBy])

  return (
    <div className="min-h-screen bg-amber-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="font-serif text-5xl uppercase tracking-wider text-center mb-12 text-gray-900">
          Shop All
        </h1>

        {/* Mobile Filter Toggle */}
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden mb-4 w-full bg-white py-3 border border-gray-300 text-sm uppercase tracking-wider"
        >
          {isFilterOpen ? 'Close Filters' : 'Open Filters'}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block bg-white p-6`}>
            <h2 className="font-serif text-2xl uppercase tracking-wider mb-6 text-gray-900">Filters</h2>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider text-gray-900 mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-amber-700 text-white'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider text-gray-900 mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      priceRange === range.value
                        ? 'bg-amber-700 text-white'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider text-gray-900 mb-4">Material</h3>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedMaterial === mat
                        ? 'bg-amber-700 text-white'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    {mat === 'all' ? 'All' : mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedCategory('all')
                setPriceRange('all')
                setSelectedMaterial('all')
              }}
              className="w-full py-2 border border-gray-300 text-sm uppercase tracking-wider hover:border-gray-900 transition-colors"
            >
              Clear All Filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            {/* Sort Dropdown */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">
                Showing {filteredProducts.length} products
              </p>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-900"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <Link to={`/product/${product.id}`}>
                    <div className="bg-white overflow-hidden mb-4 aspect-square">
                      <div className="w-full h-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                        <span className="text-amber-700 text-sm">{product.name}</span>
                      </div>
                    </div>
                  </Link>
                  <h3 className="font-serif text-lg uppercase tracking-wider text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-amber-700 text-white py-2 hover:bg-amber-800 transition-all duration-300 text-sm uppercase tracking-wider"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setPriceRange('all')
                    setSelectedMaterial('all')
                  }}
                  className="mt-4 text-amber-700 uppercase tracking-wider text-sm"
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
