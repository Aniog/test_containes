import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { BookOpen, Calendar, User, Eye, Clock, Filter, Search, Loader2, AlertCircle } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const BlogPage = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'News', 'Review', 'Guide', 'Interview', 'Opinion']

  useEffect(() => {
    fetchArticles()
  }, [selectedCategory, searchTerm])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      setError(null)

      let query = supabase
        .from('GameArticle')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false })

      if (selectedCategory !== 'All') {
        query = query.eq('category', selectedCategory)
      }

      if (searchTerm) {
        query = query.ilike('title', `%${searchTerm}%`)
      }

      const { data: responseData, error: apiError } = await query

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setArticles(dataPayload.list || [])

    } catch (err) {
      console.error('Fetch failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const getCategoryColor = (category) => {
    const colors = {
      News: 'bg-blue-600',
      Review: 'bg-green-600',
      Guide: 'bg-purple-600',
      Interview: 'bg-orange-600',
      Opinion: 'bg-red-600'
    }
    return colors[category] || 'bg-gray-600'
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchArticles()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Gaming Blog & News</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Stay updated with the latest gaming news, in-depth reviews, helpful guides, and expert opinions from the gaming world.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </form>

        {/* Category Filter */}
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
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

      {/* Articles Grid */}
      {!loading && !error && (
        <>
          {articles.length === 0 ? (
            <div className="text-gray-400 text-center py-12">
              <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  {/* Featured Image */}
                  <div className="aspect-video bg-gray-700 relative">
                    {article.featured_image ? (
                      <img 
                        src={article.featured_image} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="h-16 w-16 text-gray-500" />
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </div>

                    {/* Featured Badge */}
                    {article.is_featured && (
                      <div className="absolute top-3 right-3 bg-yellow-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-white font-bold text-xl mb-3 line-clamp-2 hover:text-blue-400 transition-colors cursor-pointer">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="text-gray-500 text-xs">+{article.tags.length - 3} more</span>
                        )}
                      </div>
                    )}

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(article.created_at)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {article.reading_time && (
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{article.reading_time}m</span>
                          </div>
                        )}
                        {article.view_count && (
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{article.view_count}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Related Games */}
                    {article.related_games && article.related_games.length > 0 && (
                      <div className="mb-4">
                        <p className="text-gray-400 text-xs mb-2">Related Games:</p>
                        <div className="flex flex-wrap gap-1">
                          {article.related_games.slice(0, 2).map((game, index) => (
                            <span key={index} className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs">
                              {game}
                            </span>
                          ))}
                          {article.related_games.length > 2 && (
                            <span className="text-gray-500 text-xs">+{article.related_games.length - 2}</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Read More Button */}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Read Full Article
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {articles.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-gray-700">
                Load More Articles
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default BlogPage