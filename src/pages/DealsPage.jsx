import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Tag, Calendar, Filter, Search, TrendingUp, Clock, Gamepad2, Loader2, AlertCircle } from 'lucide-react'
import { formatPrice, formatDate, getPlatformColor } from '@/lib/utils'

const DealsPage = () => {
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [sortBy, setSortBy] = useState('discount_percentage')
  const [searchTerm, setSearchTerm] = useState('')

  const platforms = ['All', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox']
  const genres = ['All', 'Action', 'RPG', 'Strategy', 'Adventure', 'Simulation', 'Sports', 'Racing']
  const sortOptions = [
    { value: 'discount_percentage', label: 'Highest Discount' },
    { value: 'sale_price', label: 'Lowest Price' },
    { value: 'deal_end_date', label: 'Ending Soon' },
    { value: 'created_at', label: 'Newest Deals' }
  ]

  useEffect(() => {
    fetchDeals()
  }, [selectedPlatform, selectedGenre, sortBy, searchTerm])

  const fetchDeals = async () => {
    try {
      setLoading(true)
      setError(null)

      let query = supabase
        .from('GameDeal')
        .select('*')
        .eq('is_active', true)

      if (selectedPlatform !== 'All') {
        query = query.eq('platform', selectedPlatform)
      }

      if (selectedGenre !== 'All') {
        query = query.eq('genre', selectedGenre)
      }

      if (searchTerm) {
        query = query.ilike('game_title', `%${searchTerm}%`)
      }

      // Apply sorting
      const ascending = sortBy === 'sale_price'
      query = query.order(sortBy, { ascending })

      const { data: responseData, error: apiError } = await query

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setDeals(dataPayload.list || [])

    } catch (err) {
      console.error('Fetch failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchDeals()
  }

  const getDaysRemaining = (endDate) => {
    if (!endDate) return null
    const now = new Date()
    const end = new Date(endDate)
    const diffTime = end - now
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
          <TrendingUp className="h-10 w-10 text-red-500" />
          <span>Game Deals & Discounts</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover the best gaming deals from Steam, Epic Games, Nintendo, PlayStation, and Xbox. Save big on your favorite games!
        </p>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </form>

          {/* Platform Filter */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Platform</label>
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-3 focus:border-blue-500 focus:outline-none"
            >
              {platforms.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>

          {/* Genre Filter */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Genre</label>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-3 focus:border-blue-500 focus:outline-none"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5 text-gray-400" />
          <span className="text-gray-400 text-sm">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100 mb-8">
          <AlertCircle size={20} />
          <span>Error: {error}</span>
        </div>
      )}

      {/* Deals Grid */}
      {!loading && !error && (
        <>
          {deals.length === 0 ? (
            <div className="text-gray-400 text-center py-12">
              <Tag className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>No deals found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {deals.map((deal) => {
                const daysRemaining = getDaysRemaining(deal.deal_end_date)
                const isEndingSoon = daysRemaining !== null && daysRemaining <= 3

                return (
                  <div 
                    key={deal.id} 
                    className={`bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
                      deal.is_hot_deal ? 'border-2 border-red-500' : 'border border-gray-700'
                    }`}
                  >
                    {/* Game Image */}
                    <div className="aspect-video bg-gray-700 relative">
                      {deal.game_image ? (
                        <img 
                          src={deal.game_image} 
                          alt={deal.game_title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Gamepad2 className="h-12 w-12 text-gray-500" />
                        </div>
                      )}
                      
                      {/* Discount Badge */}
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded font-bold text-sm">
                        -{deal.discount_percentage}%
                      </div>

                      {/* Platform Badge */}
                      <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium text-white ${getPlatformColor(deal.platform)}`}>
                        {deal.platform}
                      </div>

                      {/* Hot Deal Badge */}
                      {deal.is_hot_deal && (
                        <div className="absolute bottom-2 left-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                          🔥 HOT DEAL
                        </div>
                      )}

                      {/* Ending Soon Badge */}
                      {isEndingSoon && (
                        <div className="absolute bottom-2 right-2 bg-yellow-600 text-white px-2 py-1 rounded text-xs font-bold">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {daysRemaining}d left
                        </div>
                      )}
                    </div>

                    {/* Deal Content */}
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                        {deal.game_title}
                      </h3>

                      {/* Genre */}
                      {deal.genre && (
                        <div className="mb-3">
                          <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                            {deal.genre}
                          </span>
                        </div>
                      )}

                      {/* Pricing */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400 line-through text-sm">
                            {formatPrice(deal.original_price)}
                          </span>
                          <span className="text-green-400 font-bold text-lg">
                            {formatPrice(deal.sale_price)}
                          </span>
                        </div>
                        <div className="text-green-400 font-semibold text-sm">
                          Save {formatPrice(deal.original_price - deal.sale_price)}
                        </div>
                      </div>

                      {/* Deal Duration */}
                      {deal.deal_end_date && (
                        <div className="flex items-center space-x-1 text-gray-400 text-xs mb-4">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {daysRemaining > 0 
                              ? `Ends in ${daysRemaining} day${daysRemaining !== 1 ? 's' : ''}`
                              : 'Deal expired'
                            }
                          </span>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                          View Deal
                        </button>
                        {deal.deal_url && (
                          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                            Go to {deal.platform} Store
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Load More Button */}
          {deals.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-gray-700">
                Load More Deals
              </button>
            </div>
          )}
        </>
      )}

      {/* Platform Stats */}
      {deals.length > 0 && (
        <div className="mt-16 bg-gray-800 rounded-lg p-6">
          <h3 className="text-white font-semibold text-lg mb-4">Deals by Platform</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {platforms.slice(1).map((platform) => {
              const platformDeals = deals.filter(deal => deal.platform === platform)
              const avgDiscount = platformDeals.length > 0 
                ? Math.round(platformDeals.reduce((sum, deal) => sum + deal.discount_percentage, 0) / platformDeals.length)
                : 0

              return (
                <div key={platform} className="text-center">
                  <div className={`w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center ${getPlatformColor(platform)}`}>
                    <span className="text-white font-bold text-sm">{platform.charAt(0)}</span>
                  </div>
                  <div className="text-white font-medium text-sm">{platform}</div>
                  <div className="text-gray-400 text-xs">{platformDeals.length} deals</div>
                  {avgDiscount > 0 && (
                    <div className="text-green-400 text-xs">Avg {avgDiscount}% off</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default DealsPage