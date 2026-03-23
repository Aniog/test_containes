import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { BookOpen, Clock, Calendar, User, Filter, Eye, Tag } from 'lucide-react'

const ArticlesPage = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    category: '',
    sortBy: 'published_date'
  })

  const categories = ['Review', 'News', 'Guide', 'Opinion', 'Interview']
  const sortOptions = [
    { value: 'published_date', label: 'Latest First' },
    { value: 'view_count', label: 'Most Popular' },
    { value: 'title', label: 'Alphabetical' },
    { value: 'read_time', label: 'Reading Time' }
  ]

  useEffect(() => {
    fetchArticles()
  }, [filters])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      setError(null)

      let query = supabase
        .from('Article')
        .select('*')
        .eq('is_published', true)

      // Apply filters
      if (filters.category) {
        query = query.eq('category', filters.category)
      }

      // Apply sorting
      switch (filters.sortBy) {
        case 'view_count':
          query = query.order('view_count', { ascending: false })
          break
        case 'title':
          query = query.order('title', { ascending: true })
          break
        case 'read_time':
          query = query.order('read_time', { ascending: true })
          break
        default:
          query = query.order('published_date', { ascending: false })
      }

      const { data: responseData, error: apiError } = await query

      if (apiError) throw apiError

      setArticles(responseData?.data?.list || [])

    } catch (err) {
      console.error('Articles fetch failed:', err)
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
      category: '',
      sortBy: 'published_date'
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Review': 'bg-blue-100 text-blue-800',
      'News': 'bg-green-100 text-green-800',
      'Guide': 'bg-purple-100 text-purple-800',
      'Opinion': 'bg-orange-100 text-orange-800',
      'Interview': 'bg-pink-100 text-pink-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-8 bg-red-50 rounded-lg border border-red-200">
        <p>Error loading articles: {error}</p>
        <button 
          onClick={fetchArticles}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  // Separate featured and regular articles
  const featuredArticles = articles.filter(article => article.data?.is_featured)
  const regularArticles = articles.filter(article => !article.data?.is_featured)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <BookOpen className="h-10 w-10 text-purple-500" />
          Gaming Articles & Reviews
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          In-depth reviews, guides, and insights from gaming experts
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter Articles
          </h3>
          <button
            onClick={clearFilters}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Clear All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Tag className="h-6 w-6 text-yellow-500" />
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.slice(0, 2).map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-200">
                <div className="aspect-video bg-gray-200 relative">
                  {article.data?.featured_image ? (
                    <img 
                      src={article.data.featured_image} 
                      alt={article.data?.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <BookOpen className="h-12 w-12" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.data?.category)}`}>
                      {article.data?.category}
                    </span>
                    {article.data?.read_time && (
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.data.read_time} min read
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">{article.data?.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.data?.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.data?.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.data?.published_date)}
                      </div>
                      {article.data?.view_count && (
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {article.data.view_count.toLocaleString()} views
                        </div>
                      )}
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
        
        {regularArticles.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No articles found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200">
                <div className="aspect-video bg-gray-200 relative">
                  {article.data?.featured_image ? (
                    <img 
                      src={article.data.featured_image} 
                      alt={article.data?.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <BookOpen className="h-8 w-8" />
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.data?.category)}`}>
                      {article.data?.category}
                    </span>
                    {article.data?.read_time && (
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.data.read_time}m
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.data?.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.data?.excerpt}</p>
                  
                  <div className="space-y-3">
                    {/* Tags */}
                    {article.data?.tags && article.data.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {article.data.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                        {article.data.tags.length > 3 && (
                          <span className="text-xs text-gray-500">+{article.data.tags.length - 3} more</span>
                        )}
                      </div>
                    )}
                    
                    {/* Author and Date */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {article.data?.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(article.data?.published_date)}
                      </div>
                    </div>
                    
                    {/* Views and Read More */}
                    <div className="flex items-center justify-between">
                      {article.data?.view_count && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="h-3 w-3 mr-1" />
                          {article.data.view_count.toLocaleString()} views
                        </div>
                      )}
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Love Gaming Content?</h3>
        <p className="mb-4 opacity-90">
          Subscribe to get our latest reviews and articles delivered to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticlesPage