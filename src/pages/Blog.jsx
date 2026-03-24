import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import Layout from '@/components/layout/Layout'
import { Search, Clock, User, Calendar, Tag, AlertCircle, Loader2, Star } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      {article.data?.featured_image && (
        <div className="relative">
          <img
            src={article.data.featured_image}
            alt={article.data?.title}
            className="w-full h-48 object-cover"
          />
          {article.data?.is_featured && (
            <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
              <Star className="h-3 w-3 fill-current" />
              <span>Featured</span>
            </div>
          )}
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
            {article.data?.category}
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-3 line-clamp-2 hover:text-blue-600 cursor-pointer">
          {article.data?.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.data?.excerpt}
        </p>

        {article.data?.tags && article.data.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {article.data.tags.slice(0, 4).map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                #{tag}
              </span>
            ))}
            {article.data.tags.length > 4 && (
              <span className="text-xs text-gray-500">+{article.data.tags.length - 4} more</span>
            )}
          </div>
        )}

        {article.data?.related_games && article.data.related_games.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              <span className="text-xs text-gray-500 mr-2">Related Games:</span>
              {article.data.related_games.slice(0, 2).map((game, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {game}
                </span>
              ))}
              {article.data.related_games.length > 2 && (
                <span className="text-xs text-gray-500">+{article.data.related_games.length - 2} more</span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{article.data?.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(article.data?.published_date)}</span>
            </div>
            {article.data?.read_time && (
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{article.data.read_time} min read</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
            Read Article
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-200 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

const Blog = ({ onNavigate }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('published_date')

  const categories = ['all', 'Review', 'Guide', 'News', 'Opinion', 'Interview']

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Article')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const articlesList = dataPayload.list || []
      
      setArticles(articlesList)
    } catch (err) {
      console.error('Failed to fetch articles:', err)
      setError(err.message || 'Failed to load articles')
    } finally {
      setLoading(false)
    }
  }

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.data?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.data?.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.data?.author?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || article.data?.category === selectedCategory
    
    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    switch (sortBy) {
      case 'published_date':
        return new Date(b.data?.published_date || 0) - new Date(a.data?.published_date || 0)
      case 'title':
        return (a.data?.title || '').localeCompare(b.data?.title || '')
      case 'read_time':
        return (a.data?.read_time || 0) - (b.data?.read_time || 0)
      default:
        return 0
    }
  })

  // Separate featured articles
  const featuredArticles = filteredArticles.filter(article => article.data?.is_featured)
  const regularArticles = filteredArticles.filter(article => !article.data?.is_featured)

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading articles...</span>
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
              onClick={fetchArticles}
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
    <Layout onNavigate={onNavigate} currentPage="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Gaming Blog</h1>
          <p className="text-gray-600">
            Expert reviews, in-depth guides, and the latest insights from the gaming world.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

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
              <option value="title">Sort by Title</option>
              <option value="read_time">Sort by Read Time</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredArticles.length} of {articles.length} articles
          </p>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <span>Featured Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        {regularArticles.length === 0 && featuredArticles.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 mb-4">No articles found matching your criteria.</div>
            <button 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : regularArticles.length > 0 && (
          <div>
            {featuredArticles.length > 0 && (
              <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Blog