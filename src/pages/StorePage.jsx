import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { ShoppingCart, Star, Filter, Search, Grid, List, Gamepad2, Plus, Minus, Loader2, AlertCircle } from 'lucide-react'
import { formatPrice, formatDate, getPlatformColor } from '@/lib/utils'

const StorePage = () => {
  const [games, setGames] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [priceRange, setPriceRange] = useState('All')
  const [sortBy, setSortBy] = useState('title')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid')

  const platforms = ['All', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox']
  const genres = ['All', 'Action', 'RPG', 'Strategy', 'Adventure', 'Simulation', 'Sports', 'Racing', 'Puzzle', 'Indie']
  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-10', label: 'Under $10' },
    { value: '10-30', label: '$10 - $30' },
    { value: '30-60', label: '$30 - $60' },
    { value: '60+', label: '$60+' }
  ]
  const sortOptions = [
    { value: 'title', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low to High' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'release_date', label: 'Newest First' }
  ]

  useEffect(() => {
    fetchGames()
  }, [selectedPlatform, selectedGenre, priceRange, sortBy, searchTerm])

  const fetchGames = async () => {
    try {
      setLoading(true)
      setError(null)

      let query = supabase
        .from('GameProduct')
        .select('*')
        .gt('stock_quantity', 0) // Only show games in stock

      if (selectedPlatform !== 'All') {
        query = query.eq('platform', selectedPlatform)
      }

      if (selectedGenre !== 'All') {
        query = query.eq('genre', selectedGenre)
      }

      if (priceRange !== 'All') {
        const [min, max] = priceRange.split('-')
        if (max === '+') {
          query = query.gte('price', parseInt(min))
        } else {
          query = query.gte('price', parseInt(min)).lte('price', parseInt(max))
        }
      }

      if (searchTerm) {
        query = query.ilike('title', `%${searchTerm}%`)
      }

      // Apply sorting
      const ascending = sortBy === 'title' || sortBy === 'price'
      query = query.order(sortBy, { ascending })

      const { data: responseData, error: apiError } = await query

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setGames(dataPayload.list || [])

    } catch (err) {
      console.error('Fetch failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const addToCart = (game) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === game.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === game.id
            ? { ...item, quantity: Math.min(item.quantity + 1, game.stock_quantity) }
            : item
        )
      } else {
        return [...prevCart, { ...game, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (gameId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== gameId))
  }

  const updateCartQuantity = (gameId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(gameId)
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === gameId
            ? { ...item, quantity: Math.min(newQuantity, item.stock_quantity) }
            : item
        )
      )
    }
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchGames()
  }

  const GameCard = ({ game, isListView = false }) => {
    const cartItem = cart.find(item => item.id === game.id)
    const inCart = !!cartItem

    if (isListView) {
      return (
        <div className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-750 transition-colors">
          <div className="w-20 h-20 bg-gray-700 rounded flex-shrink-0">
            {game.image_url ? (
              <img src={game.image_url} alt={game.title} className="w-full h-full object-cover rounded" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Gamepad2 className="h-8 w-8 text-gray-500" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold truncate">{game.title}</h3>
            <p className="text-gray-400 text-sm truncate">{game.description}</p>
            <div className="flex items-center space-x-4 mt-2">
              <div className={`px-2 py-1 rounded text-xs font-medium text-white ${getPlatformColor(game.platform)}`}>
                {game.platform}
              </div>
              <span className="text-gray-400 text-sm">{game.genre}</span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm">{game.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              {game.is_on_sale && game.original_price ? (
                <>
                  <div className="text-gray-400 line-through text-sm">{formatPrice(game.original_price)}</div>
                  <div className="text-green-400 font-semibold">{formatPrice(game.price)}</div>
                </>
              ) : (
                <div className="text-white font-semibold">{formatPrice(game.price)}</div>
              )}
              <div className="text-gray-400 text-xs">{game.stock_quantity} in stock</div>
            </div>
            
            {inCart ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateCartQuantity(game.id, cartItem.quantity - 1)}
                  className="bg-gray-700 hover:bg-gray-600 text-white p-1 rounded"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-white font-medium w-8 text-center">{cartItem.quantity}</span>
                <button
                  onClick={() => updateCartQuantity(game.id, cartItem.quantity + 1)}
                  className="bg-gray-700 hover:bg-gray-600 text-white p-1 rounded"
                  disabled={cartItem.quantity >= game.stock_quantity}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(game)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      )
    }

    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
        <div className="aspect-video bg-gray-700 relative">
          {game.image_url ? (
            <img src={game.image_url} alt={game.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Gamepad2 className="h-16 w-16 text-gray-500" />
            </div>
          )}
          <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium text-white ${getPlatformColor(game.platform)}`}>
            {game.platform}
          </div>
          {game.is_on_sale && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
              -{game.discount_percentage}%
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{game.title}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{game.description}</p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-white text-sm">{game.rating}</span>
            </div>
            <span className="text-gray-400 text-sm">{game.genre}</span>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              {game.is_on_sale && game.original_price ? (
                <>
                  <div className="text-gray-400 line-through text-sm">{formatPrice(game.original_price)}</div>
                  <div className="text-green-400 font-semibold">{formatPrice(game.price)}</div>
                </>
              ) : (
                <div className="text-white font-semibold">{formatPrice(game.price)}</div>
              )}
            </div>
            <div className="text-gray-400 text-xs">{game.stock_quantity} in stock</div>
          </div>
          
          {inCart ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateCartQuantity(game.id, cartItem.quantity - 1)}
                  className="bg-gray-700 hover:bg-gray-600 text-white p-1 rounded"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-white font-medium w-8 text-center">{cartItem.quantity}</span>
                <button
                  onClick={() => updateCartQuantity(game.id, cartItem.quantity + 1)}
                  className="bg-gray-700 hover:bg-gray-600 text-white p-1 rounded"
                  disabled={cartItem.quantity >= game.stock_quantity}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(game.id)}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(game)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition-colors"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Game Store</h1>
          <p className="text-gray-400">Browse and purchase games from all major platforms</p>
        </div>
        
        {/* Cart Summary */}
        <div className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
          <ShoppingCart className="h-6 w-6 text-blue-500" />
          <div>
            <div className="text-white font-semibold">{getCartItemCount()} items</div>
            <div className="text-gray-400 text-sm">{formatPrice(getCartTotal())}</div>
          </div>
          {cart.length > 0 && (
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors">
              Checkout
            </button>
          )}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
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
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-3 focus:border-blue-500 focus:outline-none"
          >
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>

          {/* Genre Filter */}
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-3 focus:border-blue-500 focus:outline-none"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          {/* Price Range Filter */}
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-3 focus:border-blue-500 focus:outline-none"
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort and View Options */}
        <div className="flex items-center justify-between">
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

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
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

      {/* Games Display */}
      {!loading && !error && (
        <>
          {games.length === 0 ? (
            <div className="text-gray-400 text-center py-12">
              <Gamepad2 className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>No games found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="mb-4 text-gray-400">
                Showing {games.length} game{games.length !== 1 ? 's' : ''}
              </div>
              
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {games.map((game) => (
                    <GameCard key={game.id} game={game} isListView={true} />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Load More Button */}
          {games.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-gray-700">
                Load More Games
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default StorePage