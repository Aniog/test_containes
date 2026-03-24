import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import Layout from '@/components/layout/Layout'
import FavoriteGameForm from '@/components/forms/FavoriteGameForm'
import { Heart, Star, Clock, Calendar, User, Gamepad2, Plus, Filter, Search, AlertCircle, Loader2, Trophy, ThumbsUp } from 'lucide-react'
import { formatDate, getPlatformColor } from '@/lib/utils'

const FavoriteGameCard = ({ favoriteGame }) => {
  const data = favoriteGame.data || {}
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{data.game_name}</h3>
          <div className="flex items-center space-x-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getPlatformColor(data.platform)}`}>
              {data.platform}
            </span>
            {data.genre && (
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {data.genre}
              </span>
            )}
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              data.completion_status === 'Completed' || data.completion_status === '100% Completed' 
                ? 'bg-green-100 text-green-800'
                : data.completion_status === 'In Progress'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {data.completion_status}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(10)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < (data.rating || 0) ? 'text-yellow-500 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-600">
              {data.rating}/10
            </span>
          </div>
          {data.would_recommend && (
            <div className="flex items-center space-x-1 text-green-600 text-sm">
              <ThumbsUp className="h-4 w-4" />
              <span>Recommended</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{data.play_time_hours} hours played</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>Last played: {formatDate(data.last_play_date)}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Why they love it:</h4>
        <p className="text-gray-700 text-sm leading-relaxed">{data.reason}</p>
      </div>

      {data.favorite_moment && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Favorite moment:</h4>
          <p className="text-gray-700 text-sm leading-relaxed italic">"{data.favorite_moment}"</p>
        </div>
      )}

      {data.visitor_name && (
        <div className="flex items-center space-x-2 text-sm text-gray-500 pt-4 border-t border-gray-100">
          <User className="h-4 w-4" />
          <span>Shared by {data.visitor_name}</span>
          <span className="text-gray-300">•</span>
          <span>{formatDate(favoriteGame.created_at)}</span>
        </div>
      )}
    </div>
  )
}

const FavoriteGames = ({ onNavigate }) => {
  const [favoriteGames, setFavoriteGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedRating, setSelectedRating] = useState('all')
  const [sortBy, setSortBy] = useState('created_at')

  const platforms = ['all', 'Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'PC', 'Mobile', 'Other']
  const ratings = ['all', '9-10', '7-8', '5-6', '1-4']

  useEffect(() => {
    fetchFavoriteGames()
  }, [])

  const fetchFavoriteGames = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('FavoriteGame')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const gamesList = dataPayload.list || []
      
      setFavoriteGames(gamesList)
    } catch (err) {
      console.error('Failed to fetch favorite games:', err)
      setError(err.message || 'Failed to load favorite games')
    } finally {
      setLoading(false)
    }
  }

  const handleFormSuccess = (newGame) => {
    // Add the new game to the list
    setFavoriteGames(prev => [newGame, ...prev])
    setShowForm(false)
  }

  const filteredGames = favoriteGames.filter(game => {
    const data = game.data || {}
    const matchesSearch = data.game_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         data.reason?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         data.visitor_name?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = selectedPlatform === 'all' || data.platform === selectedPlatform
    
    let matchesRating = true
    if (selectedRating !== 'all') {
      const rating = data.rating || 0
      switch (selectedRating) {
        case '9-10':
          matchesRating = rating >= 9
          break
        case '7-8':
          matchesRating = rating >= 7 && rating < 9
          break
        case '5-6':
          matchesRating = rating >= 5 && rating < 7
          break
        case '1-4':
          matchesRating = rating >= 1 && rating < 5
          break
      }
    }
    
    return matchesSearch && matchesPlatform && matchesRating
  }).sort((a, b) => {
    const dataA = a.data || {}
    const dataB = b.data || {}
    
    switch (sortBy) {
      case 'created_at':
        return new Date(b.created_at || 0) - new Date(a.created_at || 0)
      case 'game_name':
        return (dataA.game_name || '').localeCompare(dataB.game_name || '')
      case 'rating':
        return (dataB.rating || 0) - (dataA.rating || 0)
      case 'play_time':
        return (dataB.play_time_hours || 0) - (dataA.play_time_hours || 0)
      default:
        return 0
    }
  })

  // Calculate statistics
  const stats = {
    totalGames: favoriteGames.length,
    averageRating: favoriteGames.length > 0 
      ? (favoriteGames.reduce((sum, game) => sum + (game.data?.rating || 0), 0) / favoriteGames.length).toFixed(1)
      : 0,
    totalHours: favoriteGames.reduce((sum, game) => sum + (game.data?.play_time_hours || 0), 0),
    topPlatform: favoriteGames.length > 0 
      ? favoriteGames.reduce((acc, game) => {
          const platform = game.data?.platform || 'Unknown'
          acc[platform] = (acc[platform] || 0) + 1
          return acc
        }, {})
      : {}
  }

  const mostPopularPlatform = Object.keys(stats.topPlatform).length > 0 
    ? Object.entries(stats.topPlatform).sort(([,a], [,b]) => b - a)[0][0]
    : 'N/A'

  if (showForm) {
    return (
      <Layout onNavigate={onNavigate} currentPage="favorite-games">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button
              onClick={() => setShowForm(false)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              ← Back to Favorite Games
            </button>
          </div>
          <FavoriteGameForm 
            onSuccess={handleFormSuccess}
            onCancel={() => setShowForm(false)}
          />
        </div>
      </Layout>
    )
  }

  if (loading) {
    return (
      <Layout onNavigate={onNavigate} currentPage="favorite-games">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading favorite games...</span>
          </div>
        </div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout onNavigate={onNavigate} currentPage="favorite-games">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <div className="text-red-500 mb-4">{error}</div>
            <button 
              onClick={fetchFavoriteGames}
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
    <Layout onNavigate={onNavigate} currentPage="favorite-games">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Heart className="h-8 w-8 text-red-500" />
                <span>Community Favorite Games</span>
              </h1>
              <p className="text-gray-600">
                Discover what games our community loves most and share your own favorites!
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Share Your Favorite</span>
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{stats.totalGames}</div>
              <div className="text-purple-100">Games Shared</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.averageRating}</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalHours.toLocaleString()}</div>
              <div className="text-purple-100">Total Hours Played</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{mostPopularPlatform}</div>
              <div className="text-purple-100">Most Popular Platform</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search games or players..."
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

            {/* Rating Filter */}
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {ratings.map(rating => (
                <option key={rating} value={rating}>
                  {rating === 'all' ? 'All Ratings' : `${rating} Stars`}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="created_at">Sort by Newest</option>
              <option value="game_name">Sort by Game Name</option>
              <option value="rating">Sort by Rating</option>
              <option value="play_time">Sort by Play Time</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredGames.length} of {favoriteGames.length} favorite games
          </p>
        </div>

        {/* Games Grid */}
        {filteredGames.length === 0 ? (
          <div className="text-center py-20">
            {favoriteGames.length === 0 ? (
              <div>
                <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <div className="text-gray-500 mb-4">No favorite games shared yet.</div>
                <p className="text-gray-400 mb-6">Be the first to share your favorite game with our community!</p>
                <button 
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
                >
                  <Plus className="h-5 w-5" />
                  <span>Share Your Favorite Game</span>
                </button>
              </div>
            ) : (
              <div>
                <div className="text-gray-500 mb-4">No games found matching your criteria.</div>
                <button 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedPlatform('all')
                    setSelectedRating('all')
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredGames.map((game) => (
              <FavoriteGameCard key={game.id} favoriteGame={game} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default FavoriteGames