import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import Layout from '@/components/layout/Layout'
import { Search, ShoppingCart, Star, Package, AlertCircle, Loader2, Filter } from 'lucide-react'
import { formatPrice, getPlatformColor } from '@/lib/utils'

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative">
        <img
          src={product.data?.image_url || '/api/placeholder/400/240'}
          alt={product.data?.name}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-2 left-2 px-2 py-1 rounded text-white text-xs font-medium ${getPlatformColor(product.data?.platform)}`}>
          {product.data?.platform}
        </div>
        {product.data?.is_on_sale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            -{product.data?.discount_percentage}%
          </div>
        )}
        {product.data?.is_featured && (
          <div className="absolute bottom-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
            <Star className="h-3 w-3 fill-current" />
            <span>Featured</span>
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
          {product.data?.product_type}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.data?.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.data?.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {product.data?.genre && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                {product.data.genre}
              </span>
            )}
            {product.data?.rating && (
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                {product.data.rating}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Package className="h-3 w-3" />
            <span>{product.data?.is_digital ? 'Digital' : 'Physical'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {product.data?.is_on_sale && product.data?.sale_price !== product.data?.price ? (
              <>
                <span className="text-lg font-bold text-green-600">
                  {formatPrice(product.data.sale_price || product.data.price)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.data.price)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.data?.price)}
              </span>
            )}
          </div>
          <div className="text-xs text-gray-500">
            Stock: {product.data?.stock_quantity || 0}
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <label className="text-sm text-gray-600">Qty:</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[...Array(Math.min(10, product.data?.stock_quantity || 1))].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>

        <div className="flex space-x-2">
          <button 
            className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
            disabled={!product.data?.stock_quantity || product.data.stock_quantity === 0}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{product.data?.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
          </button>
          <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-200 transition-colors">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

const Store = ({ onNavigate }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  const platforms = ['all', 'Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'PC', 'Multi-platform']
  const productTypes = ['all', 'Game', 'DLC', 'Season Pass', 'In-game Currency', 'Merchandise']
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-10', label: 'Under $10' },
    { value: '10-30', label: '$10 - $30' },
    { value: '30-60', label: '$30 - $60' },
    { value: '60+', label: '$60+' }
  ]

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('StoreProduct')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const productsList = dataPayload.list || []
      
      setProducts(productsList)
    } catch (err) {
      console.error('Failed to fetch products:', err)
      setError(err.message || 'Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.data?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.data?.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = selectedPlatform === 'all' || product.data?.platform === selectedPlatform
    const matchesType = selectedType === 'all' || product.data?.product_type === selectedType
    
    let matchesPrice = true
    if (priceRange !== 'all') {
      const price = product.data?.sale_price || product.data?.price || 0
      switch (priceRange) {
        case '0-10':
          matchesPrice = price < 10
          break
        case '10-30':
          matchesPrice = price >= 10 && price < 30
          break
        case '30-60':
          matchesPrice = price >= 30 && price < 60
          break
        case '60+':
          matchesPrice = price >= 60
          break
      }
    }
    
    return matchesSearch && matchesPlatform && matchesType && matchesPrice
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return (a.data?.name || '').localeCompare(b.data?.name || '')
      case 'price':
        const priceA = a.data?.sale_price || a.data?.price || 0
        const priceB = b.data?.sale_price || b.data?.price || 0
        return priceA - priceB
      case 'price_desc':
        const priceDescA = a.data?.sale_price || a.data?.price || 0
        const priceDescB = b.data?.sale_price || b.data?.price || 0
        return priceDescB - priceDescA
      case 'featured':
        return (b.data?.is_featured ? 1 : 0) - (a.data?.is_featured ? 1 : 0)
      default:
        return 0
    }
  })

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading store...</span>
          </div>
        </div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <div className="text-red-500 mb-4">{error}</div>
            <button 
              onClick={fetchProducts}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout onNavigate={onNavigate} currentPage="store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-blue-600" />
            <span>GameHub Store</span>
          </h1>
          <p className="text-gray-600">
            Your one-stop shop for games, DLC, merchandise, and more across all platforms.
          </p>
        </div>

        {/* Store Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{products.length}</div>
              <div className="text-blue-100">Products Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {products.filter(p => p.data?.is_on_sale).length}
              </div>
              <div className="text-blue-100">Items on Sale</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {products.filter(p => p.data?.is_digital).length}
              </div>
              <div className="text-blue-100">Digital Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-blue-100">Instant Delivery</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Platform Filter */}
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {platforms.map(platform => (
                <option key={platform} value={platform}>
                  {platform === 'all' ? 'All Platforms' : platform}
                </option>
              ))}
            </select>

            {/* Product Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {productTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="featured">Featured First</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 mb-4">No products found matching your criteria.</div>
            <button 
              onClick={() => {
                setSearchTerm('')
                setSelectedPlatform('all')
                setSelectedType('all')
                setPriceRange('all')
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Store