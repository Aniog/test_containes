import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Search, Filter, Star, ShoppingCart, Grid, List } from 'lucide-react'

const StorePage = () => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [sortBy, setSortBy] = useState('title')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)

  const platforms = ['All', 'Steam', 'Epic', 'PlayStation 5', 'PlayStation 4', 'Xbox Series', 'Xbox One', 'Nintendo Switch', 'Nintendo Wii U', 'Nintendo 3DS', 'PlayStation Vita', 'PSP', 'Game Boy Advance', 'Nintendo DS']
  const genres = ['All', 'Action', 'Adventure', 'RPG', 'Strategy', 'Sports', 'Racing', 'Simulation']
  const sortOptions = [
    { value: 'title', label: 'Name' },
    { value: 'price', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Rating' },
    { value: 'release_date', label: 'Release Date' }
  ]

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    try {
      setLoading(true)
      const { data: responseData, error } = await supabase
        .from('Game')
        .select('*')

      if (error) throw error

      const dataPayload = responseData?.data || {}
      setGames(dataPayload.list || [])
    } catch (error) {
      console.error('Error fetching games:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredAndSortedGames = games
    .filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesPlatform = selectedPlatform === 'All' || game.platform === selectedPlatform
      const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre
      return matchesSearch && matchesPlatform && matchesGenre
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'price_desc':
          return b.price - a.price
        case 'rating':
          return (b.rating || 0) - (a.rating || 0)
        case 'release_date':
          return new Date(b.release_date || 0) - new Date(a.release_date || 0)
        default:
          return a.title.localeCompare(b.title)
      }
    })

  const getPlatformColor = (platform) => {
    const colors = {
      'Steam': 'bg-blue-600',
      'Epic': 'bg-gray-800',
      'PlayStation 5': 'bg-blue-800',
      'PlayStation 4': 'bg-blue-700',
      'Xbox Series': 'bg-green-600',
      'Xbox One': 'bg-green-500',
      'Nintendo Switch': 'bg-red-600',
      'Nintendo Wii U': 'bg-red-500',
      'Nintendo 3DS': 'bg-red-400',
      'PlayStation Vita': 'bg-blue-400',
      'PSP': 'bg-blue-300',
      'Game Boy Advance': 'bg-purple-500',
      'Nintendo DS': 'bg-red-300'
    }
    return colors[platform] || 'bg-gray-600'
  }

  const addToCart = (game) => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', game.title)
    alert(`${game.title} added to cart!`)
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
          <h1 className="text-4xl font-bold text-white mb-4">Game Store</h1>
          <p className="text-gray-400">Discover and purchase the latest games across all platforms</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Quick Filters */}
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
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
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

            {/* View Toggle */}
            <div className="flex bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredAndSortedGames.length} games
          </p>
        </div>

        {/* Games Grid/List */}
        {filteredAndSortedGames.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }>
            {filteredAndSortedGames.map((game) => (
              <div key={game.id} className={viewMode === 'grid' 
                ? "bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                : "bg-gray-800 rounded-lg p-4 flex gap-4 hover:bg-gray-700 transition-colors"
              }>
                {viewMode === 'grid' ? (
                  <>
                    <div className="relative">
                      <img 
                        src={game.image_url || '/api/placeholder/300/400'} 
                        alt={game.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-bold text-white ${getPlatformColor(game.platform)}`}>
                        {game.platform}
                      </div>
                      {game.is_on_sale && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                          -{game.discount_percentage}%
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{game.title}</h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{game.description}</p>
                      <div className="flex items-center mb-3">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white text-sm">{game.rating || 'N/A'}</span>
                        <span className="text-gray-400 text-sm ml-2">({game.genre})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          {game.is_on_sale ? (
                            <div>
                              <span className="text-gray-400 line-through text-sm">${game.original_price}</span>
                              <span className="text-green-400 font-bold ml-2">${game.price}</span>
                            </div>
                          ) : (
                            <span className="text-white font-bold">${game.price}</span>
                          )}
                        </div>
                        <button
                          onClick={() => addToCart(game)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-semibold transition-colors flex items-center"
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img 
                      src={game.image_url || '/api/placeholder/120/160'} 
                      alt={game.title}
                      className="w-24 h-32 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{game.title}</h3>
                        <div className={`px-2 py-1 rounded text-xs font-bold text-white ${getPlatformColor(game.platform)}`}>
                          {game.platform}
                        </div>
                      </div>
                      <p className="text-gray-400 mb-3">{game.description}</p>
                      <div className="flex items-center mb-3">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white text-sm mr-4">{game.rating || 'N/A'}</span>
                        <span className="text-gray-400 text-sm">Genre: {game.genre}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          {game.is_on_sale ? (
                            <div className="flex items-center">
                              <span className="text-gray-400 line-through mr-2">${game.original_price}</span>
                              <span className="text-green-400 font-bold text-lg">${game.price}</span>
                              <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold ml-2">
                                -{game.discount_percentage}%
                              </span>
                            </div>
                          ) : (
                            <span className="text-white font-bold text-lg">${game.price}</span>
                          )}
                        </div>
                        <button
                          onClick={() => addToCart(game)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition-colors flex items-center"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl mb-4">No games found matching your criteria</p>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default StorePage