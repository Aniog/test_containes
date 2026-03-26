import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Search, Filter, ExternalLink, Clock, Star, Loader2, AlertCircle } from 'lucide-react'
import { formatPrice, getPlatformColor } from '@/lib/utils'

const DealsList = () => {
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [selectedDealType, setSelectedDealType] = useState('All')
  const [filteredDeals, setFilteredDeals] = useState([])

  const platforms = ['All', 'Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox']
  const dealTypes = ['All', 'Daily Deal', 'Weekly Sale', 'Seasonal Sale', 'Flash Sale', 'Bundle']

  useEffect(() => {
    fetchDeals()
  }, [])

  useEffect(() => {
    filterDeals()
  }, [deals, searchTerm, selectedPlatform, selectedDealType])

  const fetchDeals = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Deal')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const dealsList = dataPayload.list || []
      
      // Filter active deals and sort by discount percentage
      const activeDeals = dealsList
        .filter(deal => deal.data?.is_active)
        .sort((a, b) => (b.data?.discount_percentage || 0) - (a.data?.discount_percentage || 0))
      
      setDeals(activeDeals)
    } catch (err) {
      console.error('Failed to fetch deals:', err)
      setError(err.message || 'Failed to load deals')
    } finally {
      setLoading(false)
    }
  }

  const filterDeals = () => {
    let filtered = deals

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(deal =>
        deal.data?.game_title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by platform
    if (selectedPlatform !== 'All') {
      filtered = filtered.filter(deal => deal.data?.platform === selectedPlatform)
    }

    // Filter by deal type
    if (selectedDealType !== 'All') {
      filtered = filtered.filter(deal => deal.data?.deal_type === selectedDealType)
    }

    setFilteredDeals(filtered)
  }

  const isExpiringSoon = (endDate) => {
    if (!endDate) return false
    const now = new Date()
    const end = new Date(endDate)
    const hoursLeft = (end - now) / (1000 * 60 * 60)
    return hoursLeft <= 24 && hoursLeft > 0
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

          {/* Deal Type Filter */}
          <div>
            <select
              value={selectedDealType}
              onChange={(e) => setSelectedDealType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {dealTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Deals Grid */}
      {filteredDeals.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {deals.length === 0 
              ? 'No active deals available at the moment.' 
              : 'No deals match your search criteria.'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Deal Image and Badge */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  {deal.data?.game_image ? (
                    <img 
                      src={deal.data.game_image} 
                      alt={deal.data?.game_title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 text-center">
                      <div className="text-4xl mb-2">🎮</div>
                      <div className="text-sm">No Image</div>
                    </div>
                  )}
                </div>
                
                {/* Discount Badge */}
                {deal.data?.discount_percentage && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-lg shadow-lg">
                    -{deal.data.discount_percentage}%
                  </div>
                )}

                {/* Expiring Soon Badge */}
                {isExpiringSoon(deal.data?.deal_end_date) && (
                  <div className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
                    Ending Soon!
                  </div>
                )}
              </div>

              {/* Deal Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getPlatformColor(deal.data?.platform)}`}>
                    {deal.data?.platform || 'Unknown'}
                  </span>
                  {deal.data?.deal_type && (
                    <span className="text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded">
                      {deal.data.deal_type}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {deal.data?.game_title || 'Untitled Game'}
                </h3>

                {/* Rating */}
                {deal.data?.rating && (
                  <div className="flex items-center space-x-1 mb-3">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{deal.data.rating}</span>
                    <span className="text-xs text-gray-500">rating</span>
                  </div>
                )}

                {/* Pricing */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">
                      {formatPrice(deal.data?.sale_price || 0)}
                    </span>
                    {deal.data?.original_price && (
                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(deal.data.original_price)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Savings */}
                <div className="text-center bg-green-50 text-green-800 py-2 px-3 rounded-lg mb-3">
                  <span className="font-semibold">
                    Save {formatPrice((deal.data?.original_price || 0) - (deal.data?.sale_price || 0))}
                  </span>
                </div>

                {/* Deal Duration */}
                {deal.data?.deal_end_date && (
                  <div className="flex items-center space-x-1 text-xs text-gray-500 mb-3">
                    <Clock className="h-3 w-3" />
                    <span>
                      Ends: {new Date(deal.data.deal_end_date).toLocaleDateString()}
                    </span>
                  </div>
                )}

                {/* Action Button */}
                {deal.data?.external_url ? (
                  <a
                    href={deal.data.external_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    <span>View Deal</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <button className="w-full bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed">
                    No Link Available
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DealsList