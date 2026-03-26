import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Search, Filter, User, Clock, Eye, Loader2, AlertCircle } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const BlogList = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredArticles, setFilteredArticles] = useState([])

  const categories = ['All', 'News', 'Review', 'Guide', 'Interview', 'Opinion']

  useEffect(() => {
    fetchArticles()
  }, [])

  useEffect(() => {
    filterArticles()
  }, [articles, searchTerm, selectedCategory])

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
      
      // Sort by published date (newest first)
      const sortedArticles = articlesList.sort((a, b) => 
        new Date(b.data?.published_date || 0) - new Date(a.data?.published_date || 0)
      )
      
      setArticles(sortedArticles)
    } catch (err) {
      console.error('Failed to fetch articles:', err)
      setError(err.message || 'Failed to load articles')
    } finally {
      setLoading(false)
    }
  }

  const filterArticles = () => {
    let filtered = articles

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.data?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.data?.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.data?.author?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(article => article.data?.category === selectedCategory)
    }

    setFilteredArticles(filtered)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
        <AlertCircle size={20} />
        <span>Error: {error}</span>
      </div>
    )
  }

  return (
    <div>
      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {articles.length === 0 
              ? 'No articles available at the moment.' 
              : 'No articles match your search criteria.'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Featured Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                {article.data?.featured_image ? (
                  <img 
                    src={article.data.featured_image} 
                    alt={article.data?.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">📰</div>
                    <div className="text-sm">No Image</div>
                  </div>
                )}
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    article.data?.category === 'News' ? 'bg-blue-100 text-blue-800' :
                    article.data?.category === 'Review' ? 'bg-green-100 text-green-800' :
                    article.data?.category === 'Guide' ? 'bg-purple-100 text-purple-800' :
                    article.data?.category === 'Interview' ? 'bg-orange-100 text-orange-800' :
                    article.data?.category === 'Opinion' ? 'bg-pink-100 text-pink-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {article.data?.category || 'Article'}
                  </span>
                  {article.data?.is_featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.data?.title || 'Untitled Article'}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.data?.excerpt || 'No excerpt available'}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.data?.author || 'Anonymous'}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>
                        {article.data?.reading_time ? `${article.data.reading_time} min read` : 'Quick read'}
                      </span>
                    </div>
                  </div>
                  {article.data?.view_count && (
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{article.data.view_count}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {article.data?.tags && article.data.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.data.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {article.data?.published_date 
                      ? formatDate(article.data.published_date)
                      : 'No date'
                    }
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogList