import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Search, Filter, ShoppingCart, Download, Package, Loader2, AlertCircle } from 'lucide-react'
import { formatPrice, getPlatformColor } from '@/lib/utils'

const StoreGrid = () => {
  const [storeItems, setStoreItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [selectedProductType, setSelectedProductType] = useState('All')
  const [filteredItems, setFilteredItems] = useState([])

  const platforms = ['All', 'Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'PC Download', 'Physical']
  const productTypes = ['All', 'Digital Key', 'Physical Copy', 'Gift Card', 'DLC', 'Season Pass']

  useEffect(() => {
    fetchStoreItems()
  }, [])

  useEffect(() => {
    filterItems()
  }, [storeItems, searchTerm, selectedPlatform, selectedProductType])

  const fetchStoreItems = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Store Item')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const itemsList = dataPayload.list || []
      
      // Filter available items and sort by price
      const availableItems = itemsList
        .filter(item => item.data?.is_available)
        .sort((a, b) => (a.data?.price || 0) - (b.data?.price || 0))
      
      setStoreItems(availableItems)
    } catch (err) {
      console.error('Failed to fetch store items:', err)
      setError(err.message || 'Failed to load store items')
    } finally {
      setLoading(false)
    }
  }

  const filterItems = () => {
    let filtered = storeItems

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.data?.game_title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.data?.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by platform
    if (selectedPlatform !== 'All') {
      filtered = filtered.filter(item => item.data?.platform === selectedPlatform)
    }

    // Filter by product type
    if (selectedProductType !== 'All') {
      filtered = filtered.filter(item => item.data?.product_type === selectedProductType)
    }

    setFilteredItems(filtered)
  }

  const getDeliveryIcon = (deliveryMethod) => {
    switch (deliveryMethod) {
      case 'Instant':
        return <Download className="h-4 w-4" />
      case 'Email':
        return <Download className="h-4 w-4" />
      case 'Physical Shipping':
        return <Package className="h-4 w-4" />
      default:
        return <Download className="h-4 w-4" />
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
        <AlertCircle size={20} />
        <span>Error: {error}</span>
      </div>
    )
  }

  return (
    <div>
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Platform Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>

          {/* Product Type Filter */}
          <div>
            <select
              value={selectedProductType}
              onChange={(e) => setSelectedProductType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {productTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Store Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {storeItems.length === 0 
              ? 'No items available in the store at the moment.' 
              : 'No items match your search criteria.'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                {item.data?.image_url ? (
                  <img 
                    src={item.data.image_url} 
                    alt={item.data?.game_title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">🎮</div>
                    <div className="text-sm">No Image</div>
                  </div>
                )}

                {/* Digital/Physical Badge */}
                <div className="absolute top-2 left-2">
                  {item.data?.is_digital ? (
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Digital
                    </span>
                  ) : (
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Physical
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                {item.data?.stock_quantity !== undefined && item.data.stock_quantity < 10 && (
                  <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {item.data.stock_quantity} left
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getPlatformColor(item.data?.platform)}`}>
                    {item.data?.platform || 'Unknown'}
                  </span>
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {item.data?.product_type || 'Unknown'}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.data?.game_title || 'Untitled Game'}
                </h3>

                {item.data?.description && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.data.description}
                  </p>
                )}

                {/* Delivery Method */}
                <div className="flex items-center space-x-1 text-xs text-gray-500 mb-3">
                  {getDeliveryIcon(item.data?.delivery_method)}
                  <span>{item.data?.delivery_method || 'Instant'} Delivery</span>
                </div>

                {/* Region Lock Warning */}
                {item.data?.region_lock && (
                  <div className="bg-yellow-50 text-yellow-800 text-xs p-2 rounded mb-3">
                    ⚠️ Region: {item.data.region_lock}
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {formatPrice(item.data?.price || 0)}
                  </span>
                  <span className="text-xs text-gray-500">
                    SKU: {item.data?.sku || 'N/A'}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button 
                  className={`w-full flex items-center justify-center space-x-2 font-medium py-2 px-4 rounded-lg transition-colors ${
                    item.data?.stock_quantity === 0 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                  disabled={item.data?.stock_quantity === 0}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>
                    {item.data?.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
                  </span>
                </button>

                {/* System Requirements */}
                {item.data?.system_requirements && (
                  <details className="mt-3">
                    <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-700">
                      System Requirements
                    </summary>
                    <p className="text-xs text-gray-600 mt-1 p-2 bg-gray-50 rounded">
                      {item.data.system_requirements}
                    </p>
                  </details>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default StoreGrid