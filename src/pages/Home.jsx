import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Star, Clock, TrendingUp, Zap, ArrowRight, Calendar, Tag as TagIcon } from 'lucide-react'

const HomePage = () => {
  const [featuredGames, setFeaturedGames] = useState([])
  const [latestNews, setLatestNews] = useState([])
  const [hotDeals, setHotDeals] = useState([])
  const [featuredArticles, setFeaturedArticles] = useState([])
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
        .from('GameItem')
        .select('*')
        .eq('is_featured', true)
        .limit(6)

      // Fetch latest news
      const { data: newsData, error: newsError } = await supabase
        .from('NewsItem')
        .select('*')
        .order('published_date', { ascending: false })
        .limit(4)

      // Fetch hot deals
      const { data: dealsData, error: dealsError } = await supabase
        .from('Deal')
        .select('*')
        .eq('is_active', true)
        .order('discount_percentage', { ascending: false })
        .limit(6)

      // Fetch featured articles
      const { data: articlesData, error: articlesError } = await supabase
        .from('Article')
        .select('*')
        .eq('is_featured', true)
        .eq('is_published', true)
        .limit(3)

      if (gamesError || newsError || dealsError || articlesError) {
        throw new Error('Failed to fetch homepage data')
      }

      setFeaturedGames(gamesData?.data?.list || [])
      setLatestNews(newsData?.data?.list || [])
      setHotDeals(dealsData?.data?.list || [])
      setFeaturedArticles(articlesData?.data?.list || [])

    } catch (err) {
      console.error('Homepage fetch failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
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
        <p>Error loading homepage: {error}</p>
        <button 
          onClick={fetchHomeData}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-8 py-16 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to GameHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your ultimate destination for gaming news, reviews, and the best deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.navigate && window.navigate('/store')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Store
            </button>
            <button 
              onClick={() => window.navigate && window.navigate('/deals')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Latest Deals
            </button>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <Star className="h-8 w-8 text-yellow-500 mr-3" />
            Featured Games
          </h2>
          <button 
            onClick={() => window.navigate && window.navigate('/store')}
            className="text-blue-600 hover:text-blue-700 flex items-center font-medium"
          >
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              No featured games available at the moment.
            </div>
          ) : (
            featuredGames.map((game) => (
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">{game.data?.platform}</span>
                      {game.data?.rating && (
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{game.data.rating}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      {game.data?.original_price && game.data.original_price !== game.data?.price && (
                        <span className="text-sm text-gray-500 line-through">${game.data.original_price}</span>
                      )}
                      <div className="text-lg font-bold text-blue-600">${game.data?.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Hot Deals */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <Zap className="h-8 w-8 text-orange-500 mr-3" />
            Hot Deals
          </h2>
          <button 
            onClick={() => window.navigate && window.navigate('/deals')}
            className="text-blue-600 hover:text-blue-700 flex items-center font-medium"
          >
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotDeals.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              No active deals at the moment.
            </div>
          ) : (
            hotDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border-2 border-orange-200">
                <div className="aspect-video bg-gray-200 relative">
                  {deal.data?.image_url ? (
                    <img 
                      src={deal.data.image_url} 
                      alt={deal.data?.game_title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{deal.data?.discount_percentage}%
                  </div>
                  <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {deal.data?.deal_type}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{deal.data?.game_title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{deal.data?.platform}</span>
                    {deal.data?.rating && (
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{deal.data.rating}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg text-gray-500 line-through">${deal.data?.original_price}</span>
                      <div className="text-xl font-bold text-orange-600">${deal.data?.sale_price}</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Ends: {deal.data?.end_date && new Date(deal.data.end_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Latest News */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
            Latest News
          </h2>
          <button 
            onClick={() => window.navigate && window.navigate('/news')}
            className="text-blue-600 hover:text-blue-700 flex items-center font-medium"
          >
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestNews.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              No news available at the moment.
            </div>
          ) : (
            latestNews.map((news) => (
              <article key={news.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  {news.data?.image_url ? (
                    <img 
                      src={news.data.image_url} 
                      alt={news.data?.headline}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                  {news.data?.is_breaking && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                      BREAKING
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{news.data?.platform}</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{news.data?.category}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{news.data?.headline}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{news.data?.summary}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>By {news.data?.author}</span>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {news.data?.published_date && new Date(news.data.published_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      {/* Featured Articles */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <Clock className="h-8 w-8 text-purple-500 mr-3" />
            Featured Articles
          </h2>
          <button 
            onClick={() => window.navigate && window.navigate('/articles')}
            className="text-blue-600 hover:text-blue-700 flex items-center font-medium"
          >
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredArticles.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              No featured articles available at the moment.
            </div>
          ) : (
            featuredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  {article.data?.featured_image ? (
                    <img 
                      src={article.data.featured_image} 
                      alt={article.data?.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">{article.data?.category}</span>
                    {article.data?.read_time && (
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.data.read_time} min read
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.data?.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.data?.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>By {article.data?.author}</span>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.data?.published_date && new Date(article.data.published_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  )
}

export default HomePage