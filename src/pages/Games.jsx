import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import Layout from '@/components/layout/Layout'
import { Search, Filter, Star, Calendar, Tag, AlertCircle, Loader2 } from 'lucide-react'
import { formatPrice, formatDate, getPlatformColor } from '@/lib/utils'

const GameCard = ({ game }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
        {game.data?.is_featured && (
          <div className="absolute bottom-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
            <Star className="h-3 w-3 fill-current" />
            <span>Featured</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{game.data?.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{game.data?.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              {game.data?.genre}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{game.data?.rating || 'N/A'}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(game.data?.release_date)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
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
        </div>

        {game.data?.tags && game.data.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {game.data.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {tag}
              </span>
            ))}
            {game.data.tags.length > 3 && (
              <span className="text-xs text-gray-500">+{game.data.tags.length - 3} more</span>
            )}
          </div>
        )}

        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
            View Details
          </button>
          <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-200 transition-colors">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

const Games = ({ onNavigate }) => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [sortBy, setSortBy] = useState('title')

  const platforms = ['all', 'Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox']
  const genres = ['all', 'RPG', 'Action-Adventure', 'FPS', 'Platformer', 'Battle Royale']

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Game')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const gamesList = dataPayload.list || []
      
      setGames(gamesList)
    } catch (err) {
      console.error('Failed to fetch games:', err)
      setError(err.message || 'Failed to load games')
    } finally {
      setLoading(false)
    }
  }

  const filteredGames = games.filter(game => {
    const matchesSearch = game.data?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.data?.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = selectedPlatform === 'all' || game.data?.platform === selectedPlatform
    const matchesGenre = selectedGenre === 'all' || game.data?.genre === selectedGenre
    
    return matchesSearch && matchesPlatform && matchesGenre
  }).sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return (a.data?.title || '').localeCompare(b.data?.title || '')
      case 'price':
        return (a.data?.price || 0) - (b.data?.price || 0)
      case 'rating':
        return (b.data?.rating || 0) - (a.data?.rating || 0)
      case 'release_date':
        return new Date(b.data?.release_date || 0) - new Date(a.data?.release_date || 0)
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
            <span className="ml-2 text-gray-600">Loading games...</span>
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
              onClick={fetchGames}
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
    <Layout onNavigate={onNavigate} currentPage="games">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Games</h1>
          <p className="text-gray-600">
            Discover amazing games across all platforms with the best deals and latest releases.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search games..."
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

            {/* Genre Filter */}
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="title">Sort by Title</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="release_date">Sort by Release Date</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredGames.length} of {games.length} games
          </p>
        </div>

        {/* Games Grid */}
        {filteredGames.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 mb-4">No games found matching your criteria.</div>
            <button 
              onClick={() => {
                setSearchTerm('')
                setSelectedPlatform('all')
                setSelectedGenre('all')
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Games