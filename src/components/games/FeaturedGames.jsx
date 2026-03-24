import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Star, Calendar, TrendingUp, Zap, ArrowRight } from 'lucide-react'
import { formatPrice, formatDate, getPlatformColor } from '@/lib/utils'

const FeaturedGames = () => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchFeaturedGames()
  }, [])

  const fetchFeaturedGames = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Game')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const gamesList = dataPayload.list || []
      
      // Filter featured games and limit to 6
      const featuredGames = gamesList
        .filter(game => game.data?.is_featured)
        .slice(0, 6)
      
      setGames(featuredGames)
    } catch (err) {
      console.error('Failed to fetch featured games:', err)
      setError(err.message || 'Failed to load featured games')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 bg-gray-300 rounded mb-4"></div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-16"></div>
                <div className="h-4 bg-gray-300 rounded w-12"></div>
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
        <div className="text-red-500 mb-4">⚠️ {error}</div>
        <button 
          onClick={fetchFeaturedGames}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (games.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No featured games available at the moment.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <img
              src={game.data?.image_url || '/api/placeholder/400/240'}
              alt={game.data?.title}
              className="w-full h-48 object-cover"
            />
            <div className={`absolute top-2 left-2 px-2 py-1 rounded text-white text-xs font-medium ${getPlatformColor(game.data?.platform)}`}>
              {game.data?.platform}
            </div>
            {game.data?.is_on_sale && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                -{game.data?.discount_percentage}%
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 line-clamp-1">{game.data?.title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{game.data?.description}</p>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{game.data?.rating || 'N/A'}</span>
              </div>
              <span className="text-xs text-gray-500">{game.data?.genre}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {game.data?.is_on_sale && game.data?.original_price ? (
                  <>
                    <span className="text-lg font-bold text-green-600">
                      {formatPrice(game.data.price)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(game.data.original_price)}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(game.data?.price)}
                  </span>
                )}
              </div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedGames