import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Tag, Clock, ArrowRight, AlertCircle } from 'lucide-react'
import { formatPrice, calculateDiscount, getPlatformColor } from '@/lib/utils'

const HotDeals = () => {
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchHotDeals()
  }, [])

  const fetchHotDeals = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Game')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const gamesList = dataPayload.list || []
      
      // Filter games on sale and sort by discount percentage
      const hotDeals = gamesList
        .filter(game => game.data?.is_on_sale && game.data?.discount_percentage > 0)
        .sort((a, b) => (b.data?.discount_percentage || 0) - (a.data?.discount_percentage || 0))
        .slice(0, 6)
      
      setDeals(hotDeals)
    } catch (err) {
      console.error('Failed to fetch hot deals:', err)
      setError(err.message || 'Failed to load hot deals')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
            <div className="flex space-x-3">
              <div className="w-16 h-16 bg-gray-300 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <div className="text-red-500 mb-4">{error}</div>
        <button 
          onClick={fetchHotDeals}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (deals.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hot deals available at the moment.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <img
                  src={deal.data?.image_url || '/api/placeholder/64/64'}
                  alt={deal.data?.title}
                  className="w-16 h-16 object-cover rounded flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`px-2 py-1 rounded text-white text-xs font-medium ${getPlatformColor(deal.data?.platform)}`}>
                      {deal.data?.platform}
                    </span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      -{deal.data?.discount_percentage}%
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                    {deal.data?.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-green-600">
                      {formatPrice(deal.data?.price)}
                    </span>
                    {deal.data?.original_price && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(deal.data.original_price)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>Limited time</span>
                    </div>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                      Get Deal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center pt-4">
        <a 
          href="/deals" 
          className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          <Tag className="h-4 w-4" />
          <span>View All Deals</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

export default HotDeals