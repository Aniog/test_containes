import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Star, Calendar, Tag, TrendingUp, Loader2, AlertCircle, Gamepad2, BookOpen } from 'lucide-react'
import { formatPrice, formatDate, getPlatformColor } from '@/lib/utils'

const HomePage = () => {
  const [featuredGames, setFeaturedGames] = useState([])
  const [hotDeals, setHotDeals] = useState([])
  const [latestArticles, setLatestArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchHomeData()
  }, [])

  const fetchHomeData = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch featured games
      const { data: gamesData, error: gamesError } = await supabase
        .from('GameProduct')
        .select('*')
        .eq('is_featured', true)
        .limit(6)

      // Fetch hot deals
      const { data: dealsData, error: dealsError } = await supabase
        .from('GameDeal')
        .select('*')
        .eq('is_hot_deal', true)
        .eq('is_active', true)
        .limit(4)

      // Fetch latest articles
      const { data: articlesData, error: articlesError } = await supabase
        .from('GameArticle')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false })
        .limit(3)

      if (gamesError || dealsError || articlesError) {
        throw new Error('Failed to fetch data')
      }

      // Parse API responses according to the integration guidelines
      setFeaturedGames(gamesData?.data?.list || [])
      setHotDeals(dealsData?.data?.list || [])
      setLatestArticles(articlesData?.data?.list || [])

    } catch (err) {
      console.error('Fetch failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100 m-4">
        <AlertCircle size={20} />
        <span>Error: {error}</span>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-blue-400">GameHub</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest games, read expert reviews, find amazing deals, and stay updated with gaming news from all your favorite platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Store
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Deals
            </button>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Games</h2>
          <button className="text-blue-400 hover:text-blue-300 font-medium">View All →</button>
        </div>
        
        {featuredGames.length === 0 ? (
          <div className="text-gray-400 text-center py-12">
            <Gamepad2 className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p>No featured games available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
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
                  <h3 className="text-white font-semibold text-lg mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{game.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{game.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{game.genre}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {game.is_on_sale && game.original_price ? (
                        <>
                          <span className="text-gray-400 line-through text-sm">{formatPrice(game.original_price)}</span>
                          <span className="text-green-400 font-semibold">{formatPrice(game.price)}</span>
                        </>
                      ) : (
                        <span className="text-white font-semibold">{formatPrice(game.price)}</span>
                      )}
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Hot Deals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-red-500" />
            <span>Hot Deals</span>
          </h2>
          <button className="text-blue-400 hover:text-blue-300 font-medium">View All Deals →</button>
        </div>
        
        {hotDeals.length === 0 ? (
          <div className="text-gray-400 text-center py-12">
            <Tag className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p>No hot deals available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotDeals.map((deal) => (
              <div key={deal.id} className="bg-gray-800 rounded-lg overflow-hidden border-2 border-red-500 hover:border-red-400 transition-colors">
                <div className="aspect-video bg-gray-700 relative">
                  {deal.game_image ? (
                    <img src={deal.game_image} alt={deal.game_title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Gamepad2 className="h-12 w-12 text-gray-500" />
                    </div>
                  )}
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    -{deal.discount_percentage}% OFF
                  </div>
                  <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium text-white ${getPlatformColor(deal.platform)}`}>
                    {deal.platform}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">{deal.game_title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 line-through text-sm">{formatPrice(deal.original_price)}</span>
                      <span className="text-green-400 font-bold">{formatPrice(deal.sale_price)}</span>
                    </div>
                  </div>
                  {deal.deal_end_date && (
                    <div className="flex items-center space-x-1 text-gray-400 text-xs mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>Ends {formatDate(deal.deal_end_date)}</span>
                    </div>
                  )}
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-medium transition-colors">
                    Get Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Latest News & Articles</h2>
          <button className="text-blue-400 hover:text-blue-300 font-medium">View All Articles →</button>
        </div>
        
        {latestArticles.length === 0 ? (
          <div className="text-gray-400 text-center py-12">
            <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p>No articles available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <article key={article.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gray-700 relative">
                  {article.featured_image ? (
                    <img src={article.featured_image} alt={article.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-gray-500" />
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>By {article.author}</span>
                    {article.reading_time && <span>{article.reading_time} min read</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default HomePage