import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Star, ExternalLink, Loader2, AlertCircle } from 'lucide-react'
import { formatPrice, getPlatformColor } from '@/lib/utils'

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
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-white">
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Games</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most popular and highly-rated games across all platforms
          </p>
        </div>

        {games.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No featured games available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Game Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  {game.data?.image_url ? (
                    <img 
                      src={game.data.image_url} 
                      alt={game.data?.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 text-center">
                      <div className="text-4xl mb-2">🎮</div>
                      <div className="text-sm">No Image</div>
                    </div>
                  )}
                </div>

                {/* Game Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {game.data?.title || 'Untitled Game'}
                    </h3>
                    {game.data?.rating && (
                      <div className="flex items-center space-x-1 ml-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{game.data.rating}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {game.data?.description || 'No description available'}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getPlatformColor(game.data?.platform)}`}>
                      {game.data?.platform || 'Unknown'}
                    </span>
                    <span className="text-sm text-gray-500">{game.data?.genre}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-green-600">
                        {formatPrice(game.data?.price || 0)}
                      </span>
                      {game.data?.original_price && game.data.original_price > game.data.price && (
                        <>
                          <span className="text-sm text-gray-400 line-through">
                            {formatPrice(game.data.original_price)}
                          </span>
                          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                            -{game.data.discount_percentage}%
                          </span>
                        </>
                      )}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 p-1">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedGames