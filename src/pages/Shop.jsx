import { useState, useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Filter, X, SlidersHorizontal } from 'lucide-react'
import { CartContext } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'
import products from '@/data/products'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToCart } = useContext(CartContext)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets']
  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $80', value: '50-80' },
    { label: 'Over $80', value: '80+' },
  ]

  // Filter and sort products
  const filteredProducts = products
    .filter((p) => selectedCategory === 'all' || p.category.toLowerCase() === selectedCategory)
    .filter((p) => {
      if (priceRange === 'all') return true
      if (priceRange === '0-50') return p.price < 50
      if (priceRange === '50-80') return p.price >= 50 && p.price <= 80
      if (priceRange === '80+') return p.price > 80
      return true
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0 // featured - default order
    })

  const clearFilters = () => {
    setSelectedCategory('all')
    setPriceRange('all')
    setSortBy('featured')
    setSearchParams({})
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide font-serif text-gray-900 mb-2">
            Collection
          </h1>
          <div className="w-16 h-px bg-amber-700 mx-auto" />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm font-light text-gray-700 border border-gray-300 px-4 py-2 hover:border-gray-900 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm font-light border border-gray-300 px-4 py-2 focus:outline-none focus:border-gray-900"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-64 flex-none bg-white lg:bg-transparent fixed lg:static inset-0 z-40 p-6 lg:p-0 overflow-y-auto`}
          >
            <div className="lg:hidden flex items-center justify-between mb-6">
              <h3 className="text-lg font-light tracking-wide uppercase">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="text-sm font-light tracking-wide uppercase text-gray-900 mb-4">
                Category
              </h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat)
                      if (cat === 'all') {
                        searchParams.delete('category')
                        setSearchParams(searchParams)
                      } else {
                        setSearchParams({ category: cat })
                      }
                    }}
                    className={`block text-sm font-light capitalize ${
                      selectedCategory === cat
                        ? 'text-amber-700'
                        : 'text-gray-600 hover:text-gray-900'
                    } transition-colors`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h4 className="text-sm font-light tracking-wide uppercase text-gray-900 mb-4">
                Price
              </h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`block text-sm font-light ${
                      priceRange === range.value
                        ? 'text-amber-700'
                        : 'text-gray-600 hover:text-gray-900'
                    } transition-colors`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedCategory !== 'all' || priceRange !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm font-light text-gray-600">
                {filteredProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-light border border-gray-300 px-4 py-2 focus:outline-none focus:border-gray-900"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 font-light">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-amber-700 hover:underline font-light"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
