import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Search, Clock, User, Eye, Tag, Calendar } from 'lucide-react'

const ArticlesPage = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('created_at')

  const categories = ['All', 'Review', 'Guide', 'News', 'Opinion', 'Interview']
  const sortOptions = [
    { value: 'created_at', label: 'Latest' },
    { value: 'views', label: 'Most Popular' },
    { value: 'title', label: 'Title A-Z' }
  ]

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      const { data: responseData, error } = await supabase
        .from('Article')
        .select('*')
        .eq('is_published', true)

      if (error) throw error

      const dataPayload = responseData?.data || {}
      setArticles(dataPayload.list || [])
    } catch (error) {
      console.error('Error fetching articles:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredAndSortedArticles = articles
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return (b.views || 0) - (a.views || 0)
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return new Date(b.created_at || 0) - new Date(a.created_at || 0)
      }
    })

  const getCategoryColor = (category) => {
    const colors = {
      Review: 'bg-blue-600',
      Guide: 'bg-green-600',
      News: 'bg-red-600',
      Opinion: 'bg-purple-600',
      Interview: 'bg-yellow-600'
    }
    return colors[category] || 'bg-gray-600'
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
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
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Articles & Reviews</h1>
          <p className="text-gray-400">In-depth game reviews, guides, and gaming insights</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredAndSortedArticles.length} articles
          </p>
        </div>

        {/* Articles Grid */}
        {filteredAndSortedArticles.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredAndSortedArticles.map((article) => (
              <article key={article.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={article.featured_image || '/api/placeholder/600/300'} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold text-white ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </div>
                  {article.is_featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt || 'No excerpt available...'}
                  </p>

                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs flex items-center">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="text-gray-400 text-xs">+{article.tags.length - 3} more</span>
                      )}
                    </div>
                  )}

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.created_at)}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.read_time || 5} min
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {article.views || 0}
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    Read Full Article
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl mb-4">No articles found</p>
            <p>Try adjusting your search or filters</p>
          </div>
        )}

        {/* Load More Button (for pagination) */}
        {filteredAndSortedArticles.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticlesPage