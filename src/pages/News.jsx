import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Newspaper, Calendar, ExternalLink, Filter, TrendingUp, AlertCircle } from 'lucide-react'

const NewsPage = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    platform: '',
    category: ''
  })

  const platforms = ['Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'General']
  const categories = ['Release', 'Update', 'Sale', 'Event', 'Industry', 'Hardware']

  useEffect(() => {
    fetchNews()
  }, [filters])

  const fetchNews = async () => {
    try {
      setLoading(true)
      setError(null)

      let query = supabase
        .from('NewsItem')
        .select('*')
        .order('published_date', { ascending: false })

      // Apply filters
      if (filters.platform) {
        query = query.eq('platform', filters.platform)
      }
      if (filters.category) {
        query = query.eq('category', filters.category)
      }

      const { data: responseData, error: apiError } = await query

      if (apiError) throw apiError

      setNews(responseData?.data?.list || [])

    } catch (err) {
      console.error('News fetch failed:', err)
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
      category: ''
    })
  }

  const getPlatformColor = (platform) => {
    const colors = {
      'Steam': 'bg-blue-600',
      'Epic': 'bg-gray-800',
      'Nintendo Switch': 'bg-red-500',
      'PlayStation': 'bg-blue-700',
      'Xbox': 'bg-green-600',
      'General': 'bg-purple-600'
    }
    return colors[platform] || 'bg-gray-600'
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Release': 'bg-green-100 text-green-800',
      'Update': 'bg-blue-100 text-blue-800',
      'Sale': 'bg-orange-100 text-orange-800',
      'Event': 'bg-purple-100 text-purple-800',
      'Industry': 'bg-gray-100 text-gray-800',
      'Hardware': 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return 'Today'
    if (diffDays === 2) return 'Yesterday'
    if (diffDays <= 7) return `${diffDays - 1} days ago`
    return date.toLocaleDateString()
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-8 bg-red-50 rounded-lg border border-red-200">
        <p>Error loading news: {error}</p>
        <button 
          onClick={fetchNews}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  // Separate breaking news and regular news
  const breakingNews = news.filter(item => item.data?.is_breaking)
  const regularNews = news.filter(item => !item.data?.is_breaking)
  const featuredNews = regularNews.filter(item => item.data?.is_featured)
  const otherNews = regularNews.filter(item => !item.data?.is_featured)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <TrendingUp className="h-10 w-10 text-green-500" />
          Gaming News
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Stay updated with the latest gaming news from all platforms
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter News
          </h3>
          <button
            onClick={clearFilters}
            className="text-green-600 hover:text-green-700 text-sm font-medium"
          >
            Clear All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Platform Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
            <select
              value={filters.platform}
              onChange={(e) => handleFilterChange('platform', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Platforms</option>
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Breaking News */}
      {breakingNews.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-red-500" />
            Breaking News
          </h2>
          <div className="space-y-4">
            {breakingNews.map((item) => (
              <article key={item.id} className="bg-red-50 border-l-4 border-red-500 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        BREAKING
                      </span>
                      <span className={`text-white px-3 py-1 rounded-full text-sm font-medium ${getPlatformColor(item.data?.platform)}`}>
                        {item.data?.platform}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.data?.category)}`}>
                        {item.data?.category}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(item.data?.published_date)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.data?.headline}</h3>
                  <p className="text-gray-700 mb-3">{item.data?.summary}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">By {item.data?.author} • {item.data?.source}</span>
                    {item.data?.external_url && (
                      <a
                        href={item.data.external_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 flex items-center gap-1 text-sm font-medium"
                      >
                        Read More <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredNews.map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200">
                <div className="aspect-video bg-gray-200 relative">
                  {item.data?.image_url ? (
                    <img 
                      src={item.data.image_url} 
                      alt={item.data?.headline}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Newspaper className="h-12 w-12" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`text-white px-3 py-1 rounded-full text-sm font-medium ${getPlatformColor(item.data?.platform)}`}>
                      {item.data?.platform}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.data?.category)}`}>
                      {item.data?.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{item.data?.headline}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.data?.summary}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span>By {item.data?.author}</span>
                      <span className="mx-2">•</span>
                      <span>{item.data?.source}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(item.data?.published_date)}</span>
                    </div>
                    {item.data?.external_url && (
                      <a
                        href={item.data.external_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 flex items-center gap-1 text-sm font-medium"
                      >
                        Read More <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Regular News */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h2>
        
        {otherNews.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Newspaper className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No news articles found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {otherNews.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200">
                <div className="flex">
                  <div className="w-48 h-32 bg-gray-200 flex-shrink-0">
                    {item.data?.image_url ? (
                      <img 
                        src={item.data.image_url} 
                        alt={item.data?.headline}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Newspaper className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-white px-2 py-1 rounded text-xs font-medium ${getPlatformColor(item.data?.platform)}`}>
                          {item.data?.platform}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(item.data?.category)}`}>
                          {item.data?.category}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.data?.headline}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.data?.summary}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <span>By {item.data?.author}</span>
                        <span className="mx-2">•</span>
                        <span>{item.data?.source}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(item.data?.published_date)}</span>
                      </div>
                      {item.data?.external_url && (
                        <a
                          href={item.data.external_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 flex items-center gap-1 text-sm font-medium"
                        >
                          Read More <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Stay in the Loop!</h3>
        <p className="mb-4 opacity-90">
          Get the latest gaming news delivered straight to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsPage