import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Tag, Clock, Star, ExternalLink, Filter, Calendar, Zap } from 'lucide-react'

const DealsPage = () => {
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    platform: '',
    dealType: '',
    minDiscount: ''
  })

  const platforms = ['Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox']
  const dealTypes = ['Daily Deal', 'Weekly Sale', 'Seasonal Sale', 'Flash Sale', 'Bundle']
  const discountRanges = [
    { label: '10% or more', value: '10' },
    { label: '25% or more', value: '25' },
    { label: '50% or more', value: '50' },
    { label: '75% or more', value: '75' }
  ]

  useEffect(() => {
    fetchDeals()
  }, [filters])

  const fetchDeals = async () => {
    try {
      setLoading(true)
      setError(null)

      let query = supabase
        .from('Deal')
        .select('*')
        .eq('is_active', true)
        .order('discount_percentage', { ascending: false })

      // Apply filters
      if (filters.platform) {
        query = query.eq('platform', filters.platform)
      }
      if (filters.dealType) {
        query = query.eq('deal_type', filters.dealType)
      }

      const { data: responseData, error: apiError } = await query

      if (apiError) throw apiError

      let dealsList = responseData?.data?.list || []
      
      // Apply minimum discount filter (client-side)
      if (filters.minDiscount) {
        const minDiscount = parseInt(filters.minDiscount)
        dealsList = dealsList.filter(deal => 
          (deal.data?.discount_percentage || 0) >= minDiscount
        )
      }

      setDeals(dealsList)

    } catch (err) {
      console.error('Deals fetch failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const clearFilters = () => {
    setFilters({
      platform: '',
      dealType: '',
      minDiscount: ''
    })
  }

  const getTimeRemaining = (endDate) => {
    const now = new Date()
    const end = new Date(endDate)
    const diff = end - now

    if (diff <= 0) return 'Expired'

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (days > 0) return `${days}d ${hours}h`
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes}m`
  }

  const getPlatformColor = (platform) => {
    const colors = {
      'Steam': 'bg-blue-600',
      'Epic': 'bg-gray-800',
      'Nintendo Switch': 'bg-red-500',
      'PlayStation': 'bg-blue-700',
      'Xbox': 'bg-green-600'
    }
    return colors[platform] || 'bg-gray-600'
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-8 bg-red-50 rounded-lg border border-red-200">
        <p>Error loading deals: {error}</p>
        <button 
          onClick={fetchDeals}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <Zap className="h-10 w-10 text-orange-500" />
          Hot Deals & Discounts
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Don't miss out on these amazing gaming deals from all platforms!
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter Deals
          </h3>
          <button
            onClick={clearFilters}
            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            Clear All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Platform Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
            <select
              value={filters.platform}
              onChange={(e) => handleFilterChange('platform', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">All Platforms</option>
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>

          {/* Deal Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deal Type</label>
            <select
              value={filters.dealType}
              onChange={(e) => handleFilterChange('dealType', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">All Deal Types</option>
              {dealTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Minimum Discount Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Discount</label>
            <select
              value={filters.minDiscount}
              onChange={(e) => handleFilterChange('minDiscount', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Any Discount</option>
              {discountRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Found {deals.length} active deal{deals.length !== 1 ? 's' : ''}
        </p>
        <div className="text-sm text-gray-500">
          Updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Deals Grid */}
      {deals.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <Tag className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p>No active deals found matching your criteria.</p>
          <button
            onClick={clearFilters}
            className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => {
            const timeRemaining = getTimeRemaining(deal.data?.end_date)
            const isExpiringSoon = timeRemaining.includes('h') || timeRemaining.includes('m')
            
            return (
              <div key={deal.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-orange-200 hover:border-orange-300">
                <div className="aspect-video bg-gray-200 relative">
                  {deal.data?.image_url ? (
                    <img 
                      src={deal.data.image_url} 
                      alt={deal.data?.game_title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                  
                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-2 rounded-full text-lg font-bold shadow-lg">
                    -{deal.data?.discount_percentage}%
                  </div>
                  
                  {/* Deal Type Badge */}
                  <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {deal.data?.deal_type}
                  </div>
                  
                  {/* Time Remaining Badge */}
                  {timeRemaining !== 'Expired' && (
                    <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-sm font-medium ${
                      isExpiringSoon 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : 'bg-green-500 text-white'
                    }`}>
                      <Clock className="h-3 w-3 inline mr-1" />
                      {timeRemaining}
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-white px-3 py-1 rounded-full text-sm font-medium ${getPlatformColor(deal.data?.platform)}`}>
                      {deal.data?.platform}
                    </span>
                    {deal.data?.rating && (
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{deal.data.rating}</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 line-clamp-2">{deal.data?.game_title}</h3>
                  
                  {deal.data?.genre && (
                    <p className="text-gray-600 text-sm mb-3">{deal.data.genre}</p>
                  )}
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl text-gray-500 line-through">${deal.data?.original_price}</span>
                      <div className="text-3xl font-bold text-orange-600">${deal.data?.sale_price}</div>
                      <div className="text-sm text-green-600 font-medium">
                        Save ${(deal.data?.original_price - deal.data?.sale_price).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Deal Dates */}
                  <div className="text-xs text-gray-500 mb-4 space-y-1">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Started: {deal.data?.start_date && new Date(deal.data.start_date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Ends: {deal.data?.end_date && new Date(deal.data.end_date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  {deal.data?.store_url ? (
                    <a
                      href={deal.data.store_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Get This Deal
                    </a>
                  ) : (
                    <button className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg cursor-not-allowed">
                      Link Not Available
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Deal Alert Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Never Miss a Deal!</h3>
        <p className="mb-4 opacity-90">
          Get notified when your favorite games go on sale
        </p>
        <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Set Up Deal Alerts
        </button>
      </div>
    </div>
  )
}

export default DealsPage