import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '@/api/postgrest-client.js'
import { ExternalLink, Clock, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { formatPrice, getPlatformColor } from '@/lib/utils'

const TopDeals = () => {
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTopDeals()
  }, [])

  const fetchTopDeals = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Deal')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const dealsList = dataPayload.list || []
      
      // Filter active deals, sort by discount percentage, and limit to 6
      const topDeals = dealsList
        .filter(deal => deal.data?.is_active)
        .sort((a, b) => (b.data?.discount_percentage || 0) - (a.data?.discount_percentage || 0))
        .slice(0, 6)
      
      setDeals(topDeals)
    } catch (err) {
      console.error('Failed to fetch top deals:', err)
      setError(err.message || 'Failed to load top deals')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
            <AlertCircle size={20} />
            <span>Error: {error}</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🔥 Hot Deals</h2>
            <p className="text-gray-600">Don't miss these amazing discounts from top gaming platforms</p>
          </div>
          <Link
            to="/deals"
            className="hidden sm:flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
          >
            <span>View All Deals</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {deals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No active deals available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-red-100">
                {/* Deal Badge */}
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
                  
                  {deal.data?.discount_percentage && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-lg">
                      -{deal.data.discount_percentage}%
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
                      <span className="text-xs text-red-600 font-medium">
                        {deal.data.deal_type}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {deal.data?.game_title || 'Untitled Game'}
                  </h3>

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
                    {deal.data?.rating && (
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm font-medium">{deal.data.rating}</span>
                      </div>
                    )}
                  </div>

                  {deal.data?.deal_end_date && (
                    <div className="flex items-center space-x-1 text-xs text-gray-500 mb-3">
                      <Clock className="h-3 w-3" />
                      <span>
                        Ends: {new Date(deal.data.deal_end_date).toLocaleDateString()}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Save {formatPrice((deal.data?.original_price || 0) - (deal.data?.sale_price || 0))}
                    </span>
                    {deal.data?.external_url && (
                      <a
                        href={deal.data.external_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        <span>View Deal</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8 sm:hidden">
          <Link
            to="/deals"
            className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
          >
            <span>View All Deals</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TopDeals