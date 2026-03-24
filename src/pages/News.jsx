import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import Layout from '@/components/layout/Layout'
import { Search, Filter, Clock, User, ExternalLink, AlertCircle, Loader2 } from 'lucide-react'
import { formatDate, getPlatformColor } from '@/lib/utils'

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          {news.data?.image_url && (
            <img
              src={news.data.image_url}
              alt={news.data?.headline}
              className="w-32 h-20 object-cover rounded flex-shrink-0"
            />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-3">
              {news.data?.is_breaking && (
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
                  BREAKING
                </span>
              )}
              <span className={`px-2 py-1 rounded text-white text-xs font-medium ${getPlatformColor(news.data?.platform)}`}>
                {news.data?.platform}
              </span>
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                {news.data?.category}
              </span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                news.data?.priority === 'high' ? 'bg-red-100 text-red-800' :
                news.data?.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {news.data?.priority?.toUpperCase()}
              </span>
            </div>
            
            <h3 className="font-semibold text-xl mb-3 line-clamp-2 hover:text-blue-600 cursor-pointer">
              {news.data?.headline}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {news.data?.summary}
            </p>

            {news.data?.related_games && news.data.related_games.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs text-gray-500 mr-2">Related:</span>
                  {news.data.related_games.slice(0, 3).map((game, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {game}
                    </span>
                  ))}
                  {news.data.related_games.length > 3 && (
                    <span className="text-xs text-gray-500">+{news.data.related_games.length - 3} more</span>
                  )}
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="h-3 w-3" />
                  <span>{news.data?.source}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{formatDate(news.data?.published_date)}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-700 transition-colors">
                  Read More
                </button>
                {news.data?.external_url && (
                  <a 
                    href={news.data.external_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const News = ({ onNavigate }) => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('published_date')

  const platforms = ['all', 'Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'General']
  const categories = ['all', 'Breaking', 'Updates', 'Releases', 'Events', 'Industry']

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('News')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const newsList = dataPayload.list || []
      
      setNews(newsList)
    } catch (err) {
      console.error('Failed to fetch news:', err)
      setError(err.message || 'Failed to load news')
    } finally {
      setLoading(false)
    }
  }

  const filteredNews = news.filter(item => {
    const matchesSearch = item.data?.headline?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.data?.summary?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = selectedPlatform === 'all' || item.data?.platform === selectedPlatform
    const matchesCategory = selectedCategory === 'all' || item.data?.category === selectedCategory
    
    return matchesSearch && matchesPlatform && matchesCategory
  }).sort((a, b) => {
    switch (sortBy) {
      case 'published_date':
        return new Date(b.data?.published_date || 0) - new Date(a.data?.published_date || 0)
      case 'headline':
        return (a.data?.headline || '').localeCompare(b.data?.headline || '')
      case 'priority':
        const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 }
        return (priorityOrder[b.data?.priority] || 0) - (priorityOrder[a.data?.priority] || 0)
      default:
        return 0
    }
  })

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading news...</span>
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
              onClick={fetchNews}
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
    <Layout onNavigate={onNavigate} currentPage="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Gaming News</h1>
          <p className="text-gray-600">
            Stay updated with the latest gaming news, updates, and industry developments.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search news..."
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

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="published_date">Sort by Date</option>
              <option value="headline">Sort by Title</option>
              <option value="priority">Sort by Priority</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredNews.length} of {news.length} news articles
          </p>
        </div>

        {/* News List */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 mb-4">No news found matching your criteria.</div>
            <button 
              onClick={() => {
                setSearchTerm('')
                setSelectedPlatform('all')
                setSelectedCategory('all')
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default News