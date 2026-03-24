import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import Layout from '@/components/layout/Layout'
import { Search, Filter, Tag, Clock, Star, AlertCircle, Loader2, Zap } from 'lucide-react'
import { formatPrice, formatDate, getPlatformColor } from '@/lib/utils'

const DealCard = ({ game }) => {
  const savings = game.data?.original_price && game.data?.price 
    ? game.data.original_price - game.data.price 
    : 0

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-red-500">
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <img
            src={game.data?.image_url || '/api/placeholder/120/80'}
            alt={game.data?.title}
            className="w-20 h-20 object-cover rounded flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 rounded text-white text-xs font-medium ${getPlatformColor(game.data?.platform)}`}>
                {game.data?.platform}
              </span>
              <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                <Tag className="h-3 w-3" />
                <span>-{game.data?.discount_percentage}%</span>
              </span>
              {game.data?.is_featured && (
                <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-current" />
                  <span>Featured</span>
                </span>
              )}
            </div>
            
            <h3 className="font-semibold text-lg mb-2 line-clamp-1">
              {game.data?.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {game.data?.description}
            </p>

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
                <Clock className="h-3 w-3" />
                <span>Limited time</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {formatPrice(game.data?.price)}
                  </div>
                  <div className="text-xs text-gray-500">Current Price</div>
                </div>
                {game.data?.original_price && (
                  <>
                    <div className="text-center">
                      <div className="text-lg text-gray-500 line-through">
                        {formatPrice(game.data.original_price)}
                      </div>
                      <div className="text-xs text-gray-500">Original Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">
                        {formatPrice(savings)}
                      </div>
                      <div className="text-xs text-gray-500">You Save</div>
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors flex items-center space-x-1">
                  <Zap className="h-4 w-4" />
                  <span>Get Deal</span>
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded text-xs hover:bg-gray-200 transition-colors">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Deals = ({ onNavigate }) => {
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [minDiscount, setMinDiscount] = useState(0)
  const [sortBy, setSortBy] = useState('discount_percentage')

  const platforms = ['all', 'Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox']
  const genres = ['all', 'RPG', 'Action-Adventure', 'FPS', 'Platformer', 'Battle Royale']

  useEffect(() => {
    fetchDeals()
  }, [])

  const fetchDeals = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Game')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const gamesList = dataPayload.list || []
      
      // Filter only games on sale
      const dealsOnly = gamesList.filter(game => 
        game.data?.is_on_sale && 
        game.data?.discount_percentage > 0
      )
      
      setDeals(dealsOnly)
    } catch (err) {
      console.error('Failed to fetch deals:', err)
      setError(err.message || 'Failed to load deals')
    } finally {
      setLoading(false)
    }
  }

  const filteredDeals = deals.filter(game => {
    const matchesSearch = game.data?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.data?.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = selectedPlatform === 'all' || game.data?.platform === selectedPlatform
    const matchesGenre = selectedGenre === 'all' || game.data?.genre === selectedGenre
    const matchesDiscount = (game.data?.discount_percentage || 0) >= minDiscount
    
    return matchesSearch && matchesPlatform && matchesGenre && matchesDiscount
  }).sort((a, b) => {
    switch (sortBy) {
      case 'discount_percentage':
        return (b.data?.discount_percentage || 0) - (a.data?.discount_percentage || 0)
      case 'price':
        return (a.data?.price || 0) - (b.data?.price || 0)
      case 'savings':
        const savingsA = (a.data?.original_price || 0) - (a.data?.price || 0)
        const savingsB = (b.data?.original_price || 0) - (b.data?.price || 0)
        return savingsB - savingsA
      case 'title':
        return (a.data?.title || '').localeCompare(b.data?.title || '')
      case 'rating':
        return (b.data?.rating || 0) - (a.data?.rating || 0)
      default:
        return 0
    }
  })

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-red-600" />
            <span className="ml-2 text-gray-600">Loading deals...</span>
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
              onClick={fetchDeals}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout onNavigate={onNavigate} currentPage="deals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Zap className="h-8 w-8 text-red-500" />
            <span>Hot Deals</span>
          </h1>
          <p className="text-gray-600">
            Don't miss out on these amazing discounts and limited-time offers from all platforms.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{deals.length}</div>
              <div className="text-red-100">Active Deals</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {deals.length > 0 ? Math.max(...deals.map(d => d.data?.discount_percentage || 0)) : 0}%
              </div>
              <div className="text-red-100">Max Discount</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {deals.reduce((total, deal) => {
                  const savings = (deal.data?.original_price || 0) - (deal.data?.price || 0)
                  return total + savings
                }, 0).toFixed(0)}
              </div>
              <div className="text-red-100">Total Savings Available</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search deals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Platform Filter */}
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>

            {/* Minimum Discount */}
            <select
              value={minDiscount}
              onChange={(e) => setMinDiscount(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value={0}>Any Discount</option>
              <option value={10}>10%+ Off</option>
              <option value={25}>25%+ Off</option>
              <option value={50}>50%+ Off</option>
              <option value={75}>75%+ Off</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="discount_percentage">Highest Discount</option>
              <option value="savings">Biggest Savings</option>
              <option value="price">Lowest Price</option>
              <option value="rating">Highest Rated</option>
              <option value="title">Title A-Z</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDeals.length} of {deals.length} deals
          </p>
        </div>

        {/* Deals List */}
        {filteredDeals.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 mb-4">No deals found matching your criteria.</div>
            <button 
              onClick={() => {
                setSearchTerm('')
                setSelectedPlatform('all')
                setSelectedGenre('all')
                setMinDiscount(0)
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredDeals.map((deal) => (
              <DealCard key={deal.id} game={deal} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Deals