import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Search, Star, ShoppingCart, Calendar, ExternalLink, TrendingUp, Newspaper } from 'lucide-react'

const PlatformPage = ({ platformId }) => {
  const [games, setGames] = useState([])
  const [news, setNews] = useState([])
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('games')

  // Platform mapping
  const platformMap = {
    'ps5': 'PlayStation 5',
    'ps4': 'PlayStation 4',
    'xbox-series': 'Xbox Series',
    'xbox-one': 'Xbox One',
    'switch': 'Nintendo Switch',
    'wii-u': 'Nintendo Wii U',
    '3ds': 'Nintendo 3DS',
    'vita': 'PlayStation Vita',
    'psp': 'PSP',
    'gba': 'Game Boy Advance',
    'ds': 'Nintendo DS',
    'steam': 'Steam',
    'epic': 'Epic'
  }

  const platformName = platformMap[platformId] || platformId
  
  const platformInfo = {
    'PlayStation 5': {
      color: 'from-blue-600 to-blue-800',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-600',
      description: 'Experience next-gen gaming with the PlayStation 5',
      generation: 'Current Gen'
    },
    'PlayStation 4': {
      color: 'from-blue-500 to-blue-700',
      textColor: 'text-blue-300',
      bgColor: 'bg-blue-500',
      description: 'The most popular gaming console of the previous generation',
      generation: 'Previous Gen'
    },
    'Xbox Series': {
      color: 'from-green-600 to-green-800',
      textColor: 'text-green-400',
      bgColor: 'bg-green-600',
      description: 'Power your dreams with Xbox Series X|S',
      generation: 'Current Gen'
    },
    'Xbox One': {
      color: 'from-green-500 to-green-700',
      textColor: 'text-green-300',
      bgColor: 'bg-green-500',
      description: 'All-in-one entertainment system',
      generation: 'Previous Gen'
    },
    'Nintendo Switch': {
      color: 'from-red-600 to-red-800',
      textColor: 'text-red-400',
      bgColor: 'bg-red-600',
      description: 'Play anywhere, anytime with Nintendo Switch',
      generation: 'Current Gen'
    },
    'Nintendo 3DS': {
      color: 'from-red-400 to-red-600',
      textColor: 'text-red-300',
      bgColor: 'bg-red-400',
      description: 'Portable 3D gaming without glasses',
      generation: 'Handheld'
    },
    'PlayStation Vita': {
      color: 'from-blue-400 to-blue-600',
      textColor: 'text-blue-200',
      bgColor: 'bg-blue-400',
      description: 'Console-quality gaming on the go',
      generation: 'Handheld'
    },
    'PSP': {
      color: 'from-blue-300 to-blue-500',
      textColor: 'text-blue-200',
      bgColor: 'bg-blue-300',
      description: 'PlayStation Portable - Gaming without boundaries',
      generation: 'Retro Handheld'
    },
    'Game Boy Advance': {
      color: 'from-purple-500 to-purple-700',
      textColor: 'text-purple-300',
      bgColor: 'bg-purple-500',
      description: 'The ultimate portable gaming experience',
      generation: 'Retro Handheld'
    },
    'Steam': {
      color: 'from-blue-500 to-blue-700',
      textColor: 'text-blue-300',
      bgColor: 'bg-blue-500',
      description: 'The ultimate destination for playing, discussing, and creating games',
      generation: 'PC Platform'
    },
    'Epic': {
      color: 'from-gray-600 to-gray-800',
      textColor: 'text-gray-300',
      bgColor: 'bg-gray-600',
      description: 'Epic Games Store - Free games every week',
      generation: 'PC Platform'
    }
  }

  const currentPlatform = platformInfo[platformName] || {
    color: 'from-gray-600 to-gray-800',
    textColor: 'text-gray-300',
    bgColor: 'bg-gray-600',
    description: 'Gaming platform',
    generation: 'Platform'
  }

  useEffect(() => {
    fetchPlatformData()
  }, [platformName])

  const fetchPlatformData = async () => {
    try {
      setLoading(true)
      
      // Fetch games for this platform
      const { data: gamesData } = await supabase
        .from('Game')
        .select('*')
        .eq('platform', platformName)

      // Fetch news for this platform
      const { data: newsData } = await supabase
        .from('News')
        .select('*')
        .eq('platform', platformName)

      // Fetch deals for this platform
      const { data: dealsData } = await supabase
        .from('Deal')
        .select('*')
        .eq('platform', platformName)
        .eq('is_active', true)

      setGames(gamesData?.data?.list || [])
      setNews(newsData?.data?.list || [])
      setDeals(dealsData?.data?.list || [])
    } catch (error) {
      console.error('Error fetching platform data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Platform Hero Section */}
      <section className={`relative bg-gradient-to-r ${currentPlatform.color} py-20`}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-black bg-opacity-50 text-white text-sm rounded-full">
                {currentPlatform.generation}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {platformName}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {currentPlatform.description}
            </p>
            
            {/* Platform Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">{games.length}</div>
                <div className="text-gray-200 text-sm">Games Available</div>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">{deals.length}</div>
                <div className="text-gray-200 text-sm">Active Deals</div>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">{news.length}</div>
                <div className="text-gray-200 text-sm">Latest News</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-800 rounded-lg p-1 mb-8">
          <button
            onClick={() => setActiveTab('games')}
            className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'games'
                ? `${currentPlatform.bgColor} text-white`
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Games ({games.length})
          </button>
          <button
            onClick={() => setActiveTab('deals')}
            className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'deals'
                ? `${currentPlatform.bgColor} text-white`
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Deals ({deals.length})
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'news'
                ? `${currentPlatform.bgColor} text-white`
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Newspaper className="h-4 w-4 mr-2" />
            News ({news.length})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'games' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Games for {platformName}</h2>
            {games.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game) => (
                  <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                    <img 
                      src={game.image_url || '/api/placeholder/400/225'} 
                      alt={game.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{game.title}</h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{game.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-white text-sm">{game.rating || 'N/A'}</span>
                        </div>
                        <div className="text-right">
                          {game.is_on_sale ? (
                            <div>
                              <span className="text-gray-400 line-through text-sm">${game.original_price}</span>
                              <span className="text-green-400 font-bold ml-2">${game.price}</span>
                            </div>
                          ) : (
                            <span className="text-white font-bold">${game.price}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                <ShoppingCart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl mb-4">No games available for {platformName}</p>
                <p>Check back later for new releases!</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'deals' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Deals for {platformName}</h2>
            {deals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deals.map((deal) => (
                  <div key={deal.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={deal.image_url || '/api/placeholder/400/225'} 
                        alt={deal.game_title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-2 rounded-lg text-lg font-bold">
                        -{deal.discount_percentage}%
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-3">{deal.game_title}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-gray-400 line-through text-lg">${deal.original_price}</span>
                          <span className="text-green-400 font-bold text-2xl ml-2">${deal.sale_price}</span>
                        </div>
                      </div>
                      {deal.end_date && (
                        <div className="text-sm text-gray-400 mb-3">
                          Ends: {formatDate(deal.end_date)}
                        </div>
                      )}
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                        View Deal
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl mb-4">No active deals for {platformName}</p>
                <p>Check back later for new discounts!</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'news' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">News for {platformName}</h2>
            {news.length > 0 ? (
              <div className="space-y-6">
                {news.map((newsItem) => (
                  <article key={newsItem.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={newsItem.image_url || '/api/placeholder/400/250'} 
                          alt={newsItem.headline}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-center mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-bold text-white ${currentPlatform.bgColor}`}>
                            {newsItem.category}
                          </span>
                          <span className="text-gray-400 text-sm ml-4">{formatDate(newsItem.created_at)}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{newsItem.headline}</h3>
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {newsItem.summary || newsItem.content?.substring(0, 200) + '...'}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Source: {newsItem.source}</span>
                          <button className={`${currentPlatform.textColor} hover:text-white text-sm font-semibold`}>
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                <Newspaper className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl mb-4">No news available for {platformName}</p>
                <p>Check back later for updates!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PlatformPage