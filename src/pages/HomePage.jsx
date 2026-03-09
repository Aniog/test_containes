import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Play, Star, TrendingUp, Clock, ExternalLink } from 'lucide-react'

const HomePage = () => {
  const [featuredGames, setFeaturedGames] = useState([])
  const [latestDeals, setLatestDeals] = useState([])
  const [featuredArticles, setFeaturedArticles] = useState([])
  const [breakingNews, setBreakingNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchHomeData()
  }, [])

  const fetchHomeData = async () => {
    try {
      setLoading(true)
      
      // Fetch featured games
      const { data: gamesData } = await supabase
        .from('Game')
        .select('*')
        .eq('is_featured', true)
        .limit(6)

      // Fetch latest deals
      const { data: dealsData } = await supabase
        .from('Deal')
        .select('*')
        .eq('is_active', true)
        .order('discount_percentage', { ascending: false })
        .limit(8)

      // Fetch featured articles
      const { data: articlesData } = await supabase
        .from('Article')
        .select('*')
        .eq('is_featured', true)
        .eq('is_published', true)
        .limit(4)

      // Fetch breaking news
      const { data: newsData } = await supabase
        .from('News')
        .select('*')
        .eq('is_breaking', true)
        .order('priority', { ascending: false })
        .limit(3)

      setFeaturedGames(gamesData?.data?.list || [])
      setLatestDeals(dealsData?.data?.list || [])
      setFeaturedArticles(articlesData?.data?.list || [])
      setBreakingNews(newsData?.data?.list || [])
    } catch (error) {
      console.error('Error fetching home data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getPlatformColor = (platform) => {
    const colors = {
      Steam: 'bg-blue-600',
      Epic: 'bg-gray-800',
      Nintendo: 'bg-red-600',
      PlayStation: 'bg-blue-800',
      Xbox: 'bg-green-600'
    }
    return colors[platform] || 'bg-gray-600'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-blue-400">GameHub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest games, read expert reviews, find the best deals, and stay updated with gaming news across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Store
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Latest Deals
            </button>
          </div>
        </div>
      </section>

      {/* Breaking News Banner */}
      {breakingNews.length > 0 && (
        <section className="bg-red-600 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <span className="bg-white text-red-600 px-2 py-1 rounded text-sm font-bold mr-4">
                BREAKING
              </span>
              <div className="flex-1 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  {breakingNews.map((news, index) => (
                    <span key={news.id} className="text-white">
                      {news.headline}
                      {index < breakingNews.length - 1 && ' • '}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Games */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Games</h2>
            <a href="#store" className="text-blue-400 hover:text-blue-300 flex items-center">
              View All <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.length > 0 ? (
              featuredGames.map((game) => (
                <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={game.image_url || '/api/placeholder/400/225'} 
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
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 py-8">
                No featured games available at the moment.
              </div>
            )}
          </div>
        </section>

        {/* Hot Deals */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <TrendingUp className="mr-3 h-8 w-8 text-red-500" />
              Hot Deals
            </h2>
            <a href="#deals" className="text-blue-400 hover:text-blue-300 flex items-center">
              View All Deals <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {latestDeals.length > 0 ? (
              latestDeals.map((deal) => (
                <div key={deal.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold text-white ${getPlatformColor(deal.platform)}`}>
                      {deal.platform}
                    </span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                      -{deal.discount_percentage}%
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 line-clamp-2">{deal.game_title}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 line-through text-sm">${deal.original_price}</span>
                      <span className="text-green-400 font-bold ml-2">${deal.sale_price}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 py-8">
                No deals available at the moment.
              </div>
            )}
          </div>
        </section>

        {/* Featured Articles */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
            <a href="#articles" className="text-blue-400 hover:text-blue-300 flex items-center">
              View All Articles <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.length > 0 ? (
              featuredArticles.map((article) => (
                <div key={article.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <img 
                    src={article.featured_image || '/api/placeholder/600/300'} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                        {article.category}
                      </span>
                      <div className="flex items-center ml-4 text-gray-400 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.read_time || 5} min read
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">By {article.author}</span>
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 py-8">
                No featured articles available at the moment.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage