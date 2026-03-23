import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Filter, Grid, List, Star, ShoppingCart, Search, SlidersHorizontal } from 'lucide-react'

const StorePage = () => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [filters, setFilters] = useState({
    platform: '',
    genre: '',
    priceRange: '',
    sortBy: 'title'
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const platforms = ['Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox']
  const genres = ['Action', 'RPG', 'Strategy', 'Adventure', 'Simulation', 'Sports', 'Racing', 'Puzzle']
  const priceRanges = [
    { label: 'Free', value: 'free' },
    { label: 'Under $10', value: '0-10' },
    { label: '$10 - $30', value: '10-30' },
    { label: '$30 - $60', value: '30-60' },
    { label: 'Over $60', value: '60+' }
  ]

  useEffect(() => {
    fetchGames()
  }, [filters, searchTerm])

  const fetchGames = async () => {
    try {
      setLoading(true)
      setError(null)

      let query = supabase.from('GameItem').select('*')

      // Apply filters
      if (filters.platform) {
        query = query.eq('platform', filters.platform)
      }
      if (filters.genre) {
        query = query.eq('genre', filters.genre)
      }
      if (searchTerm) {
        query = query.ilike('title', `%${searchTerm}%`)
      }

      // Apply sorting
      switch (filters.sortBy) {
        case 'price_low':
          query = query.order('price', { ascending: true })
          break
        case 'price_high':
          query = query.order('price', { ascending: false })
          break
        case 'rating':
          query = query.order('rating', { ascending: false })
          break
        case 'release_date':
          query = query.order('release_date', { ascending: false })
          break
        default:
          query = query.order('title', { ascending: true })
      }

      const { data: responseData, error: apiError } = await query

      if (apiError) throw apiError

      const gamesList = responseData?.data?.list || []
      
      // Apply price range filter (client-side for now)
      let filteredGames = gamesList
      if (filters.priceRange) {
        filteredGames = gamesList.filter(game => {
          const price = game.data?.price || 0
          switch (filters.priceRange) {
            case 'free':
              return price === 0
            case '0-10':
              return price > 0 && price <= 10
            case '10-30':
              return price > 10 && price <= 30
            case '30-60':
              return price > 30 && price <= 60
            case '60+':
              return price > 60
            default:
              return true
          }
        })
      }

      setGames(filteredGames)

    } catch (err) {
      console.error('Store fetch failed:', err)
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
      genre: '',
      priceRange: '',
      sortBy: 'title'
    })
    setSearchTerm('')
  }

  const addToCart = (game) => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', game.data?.title)
    alert(`${game.data?.title} added to cart!`)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-8 bg-red-50 rounded-lg border border-red-200">
        <p>Error loading store: {error}</p>
        <button 
          onClick={fetchGames}
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
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Game Store</h1>
          <p className="text-gray-600 mt-1">Discover and purchase the latest games across all platforms</p>
        </div>
        
        {/* Search and View Controls */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Filters</h3>
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Clear All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Platform Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
              <select
                value={filters.platform}
                onChange={(e) => handleFilterChange('platform', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Platforms</option>
                {platforms.map(platform => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>
            </div>

            {/* Genre Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Genre</label>
              <select
                value={filters.genre}
                onChange={(e) => handleFilterChange('genre', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Genres</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Prices</option>
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="title">Name (A-Z)</option>
                <option value="price_low">Price (Low to High)</option>
                <option value="price_high">Price (High to Low)</option>
                <option value="rating">Rating</option>
                <option value="release_date">Release Date</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {games.length} game{games.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Games Grid/List */}
      {games.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p>No games found matching your criteria.</p>
          <button
            onClick={clearFilters}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          : 'space-y-4'
        }>
          {games.map((game) => (
            viewMode === 'grid' ? (
              // Grid View
              <div key={game.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  {game.data?.image_url ? (
                    <img 
                      src={game.data.image_url} 
                      alt={game.data?.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                  {game.data?.is_on_sale && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      -{game.data.discount_percentage}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{game.data?.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{game.data?.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{game.data?.platform}</span>
                    {game.data?.rating && (
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{game.data.rating}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      {game.data?.original_price && game.data.original_price !== game.data?.price && (
                        <span className="text-sm text-gray-500 line-through">${game.data.original_price}</span>
                      )}
                      <div className="text-lg font-bold text-blue-600">${game.data?.price}</div>
                    </div>
                    <button
                      onClick={() => addToCart(game)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // List View
              <div key={game.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex">
                  <div className="w-48 h-32 bg-gray-200 flex-shrink-0">
                    {game.data?.image_url ? (
                      <img 
                        src={game.data.image_url} 
                        alt={game.data?.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-xl">{game.data?.title}</h3>
                        {game.data?.is_on_sale && (
                          <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                            -{game.data.discount_percentage}%
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3 line-clamp-2">{game.data?.description}</p>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{game.data?.platform}</span>
                        <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">{game.data?.genre}</span>
                        {game.data?.rating && (
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 ml-1">{game.data.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        {game.data?.original_price && game.data.original_price !== game.data?.price && (
                          <span className="text-lg text-gray-500 line-through">${game.data.original_price}</span>
                        )}
                        <div className="text-2xl font-bold text-blue-600">${game.data?.price}</div>
                      </div>
                      <button
                        onClick={() => addToCart(game)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  )
}

export default StorePage