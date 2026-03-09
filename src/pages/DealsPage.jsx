import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Search, ExternalLink, Clock, Tag, TrendingDown, Calendar } from 'lucide-react'

const DealsPage = () => {
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [selectedDealType, setSelectedDealType] = useState('All')
  const [minDiscount, setMinDiscount] = useState(0)
  const [sortBy, setSortBy] = useState('discount_percentage')

  const platforms = ['All', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox']
  const dealTypes = ['All', 'Daily', 'Weekly', 'Seasonal', 'Flash', 'Bundle']
  const sortOptions = [
    { value: 'discount_percentage', label: 'Highest Discount' },
    { value: 'sale_price', label: 'Lowest Price' },
    { value: 'end_date', label: 'Ending Soon' },
    { value: 'game_title', label: 'Game Title A-Z' }
  ]

  useEffect(() => {
    fetchDeals()
  }, [])

  const fetchDeals = async () => {
    try {
      setLoading(true)
      const { data: responseData, error } = await supabase
        .from('Deal')
        .select('*')
        .eq('is_active', true)

      if (error) throw error

      const dataPayload = responseData?.data || {}
      setDeals(dataPayload.list || [])
    } catch (error) {
      console.error('Error fetching deals:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredAndSortedDeals = deals
    .filter(deal => {
      const matchesSearch = deal.game_title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesPlatform = selectedPlatform === 'All' || deal.platform === selectedPlatform
      const matchesDealType = selectedDealType === 'All' || deal.deal_type === selectedDealType
      const matchesDiscount = deal.discount_percentage >= minDiscount
      return matchesSearch && matchesPlatform && matchesDealType && matchesDiscount
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'discount_percentage':
          return b.discount_percentage - a.discount_percentage
        case 'sale_price':
          return a.sale_price - b.sale_price
        case 'end_date':
          return new Date(a.end_date || '9999-12-31') - new Date(b.end_date || '9999-12-31')
        case 'game_title':
          return a.game_title.localeCompare(b.game_title)
        default:
          return b.discount_percentage - a.discount_percentage
      }
    })

  const getPlatformColor = (platform) => {
    const colors = {
      Steam: 'bg-blue-600',
      Epic: 'bg-gray-800',
      Nintendo: 'bg-red-600',
      PlayStation: 'bg-blue-800',
      Xbox: 'bg-green-600'
    }
    return colors[platform] || 'bg-gray-600'
  }

  const getDealTypeColor = (dealType) => {
    const colors = {
      Daily: 'bg-orange-600',
      Weekly: 'bg-purple-600',
      Seasonal: 'bg-green-600',
      Flash: 'bg-red-600',
      Bundle: 'bg-yellow-600'
    }
    return colors[dealType] || 'bg-gray-600'
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'No end date'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getTimeRemaining = (endDate) => {
    if (!endDate) return null
    
    const now = new Date()
    const end = new Date(endDate)
    const diffTime = end - now
    
    if (diffTime <= 0) return 'Expired'
    
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day left'
    if (diffDays < 7) return `${diffDays} days left`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks left`
    
    return `${Math.ceil(diffDays / 30)} months left`
  }

  const calculateSavings = (originalPrice, salePrice) => {
    return (originalPrice - salePrice).toFixed(2)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center">
            <TrendingDown className="mr-3 h-10 w-10 text-green-500" />
            Game Deals & Discounts
          </h1>
          <p className="text-gray-400">Find the best gaming deals across all platforms</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{deals.length}</div>
            <div className="text-gray-400 text-sm">Active Deals</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-400">
              {deals.length > 0 ? Math.max(...deals.map(d => d.discount_percentage)) : 0}%
            </div>
            <div className="text-gray-400 text-sm">Max Discount</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">
              ${deals.length > 0 ? Math.min(...deals.map(d => d.sale_price)).toFixed(2) : '0.00'}
            </div>
            <div className="text-gray-400 text-sm">Lowest Price</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {deals.filter(d => d.deal_type === 'Flash').length}
            </div>
            <div className="text-gray-400 text-sm">Flash Sales</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search game deals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Minimum Discount Slider */}
            <div>
              <label className="block text-white text-sm mb-2">
                Minimum Discount: {minDiscount}%
              </label>
              <input
                type="range"
                min="0"
                max="90"
                step="5"
                value={minDiscount}
                onChange={(e) => setMinDiscount(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-2">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            >
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>

            <select
              value={selectedDealType}
              onChange={(e) => setSelectedDealType(e.target.value)}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            >
              {dealTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredAndSortedDeals.length} deals
          </p>
        </div>

        {/* Deals Grid */}
        {filteredAndSortedDeals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedDeals.map((deal) => (
              <div key={deal.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={deal.image_url || '/api/placeholder/400/225'} 
                    alt={deal.game_title}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <span className={`px-2 py-1 rounded text-xs font-bold text-white ${getPlatformColor(deal.platform)}`}>
                      {deal.platform}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-bold text-white ${getDealTypeColor(deal.deal_type)}`}>
                      {deal.deal_type}
                    </span>
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-2 rounded-lg text-lg font-bold">
                    -{deal.discount_percentage}%
                  </div>

                  {/* Time Remaining */}
                  {deal.end_date && (
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {getTimeRemaining(deal.end_date)}
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">{deal.game_title}</h3>
                  
                  {/* Price Information */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 line-through text-lg">${deal.original_price}</span>
                      <span className="text-green-400 font-bold text-2xl">${deal.sale_price}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-blue-400 font-semibold">
                        Save ${calculateSavings(deal.original_price, deal.sale_price)}
                      </span>
                    </div>
                  </div>

                  {/* Deal Dates */}
                  <div className="text-sm text-gray-400 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Started: {formatDate(deal.start_date)}
                      </div>
                      {deal.end_date && (
                        <div>
                          Ends: {formatDate(deal.end_date)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                      View Deal
                    </button>
                    {deal.deal_url && (
                      <a
                        href={deal.deal_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <Tag className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl mb-4">No deals found</p>
            <p>Try adjusting your search or filters</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredAndSortedDeals.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Load More Deals
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DealsPage