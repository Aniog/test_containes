import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Search, ExternalLink, Calendar, AlertCircle, TrendingUp } from 'lucide-react'

const NewsPage = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('created_at')

  const platforms = ['All', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox', 'General']
  const categories = ['All', 'Breaking', 'Update', 'Release', 'Event', 'Industry']
  const sortOptions = [
    { value: 'created_at', label: 'Latest' },
    { value: 'priority', label: 'Priority' },
    { value: 'headline', label: 'Headline A-Z' }
  ]

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      setLoading(true)
      const { data: responseData, error } = await supabase
        .from('News')
        .select('*')

      if (error) throw error

      const dataPayload = responseData?.data || {}
      setNews(dataPayload.list || [])
    } catch (error) {
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredAndSortedNews = news
    .filter(newsItem => {
      const matchesSearch = newsItem.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           newsItem.summary?.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesPlatform = selectedPlatform === 'All' || newsItem.platform === selectedPlatform
      const matchesCategory = selectedCategory === 'All' || newsItem.category === selectedCategory
      return matchesSearch && matchesPlatform && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          return (b.priority || 0) - (a.priority || 0)
        case 'headline':
          return a.headline.localeCompare(b.headline)
        default:
          return new Date(b.created_at || 0) - new Date(a.created_at || 0)
      }
    })

  const getPlatformColor = (platform) => {
    const colors = {
      Steam: 'bg-blue-600',
      Epic: 'bg-gray-800',
      Nintendo: 'bg-red-600',
      PlayStation: 'bg-blue-800',
      Xbox: 'bg-green-600',
      General: 'bg-purple-600'
    }
    return colors[platform] || 'bg-gray-600'
  }

  const getCategoryColor = (category) => {
    const colors = {
      Breaking: 'bg-red-600',
      Update: 'bg-blue-600',
      Release: 'bg-green-600',
      Event: 'bg-yellow-600',
      Industry: 'bg-purple-600'
    }
    return colors[category] || 'bg-gray-600'
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date'
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getPriorityIcon = (priority) => {
    if (priority >= 4) return <AlertCircle className="h-4 w-4 text-red-500" />
    if (priority >= 3) return <TrendingUp className="h-4 w-4 text-yellow-500" />
    return null
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
          <h1 className="text-4xl font-bold text-white mb-4">Gaming News</h1>
          <p className="text-gray-400">Stay updated with the latest gaming news and industry updates</p>
        </div>

        {/* Breaking News Banner */}
        {news.some(item => item.is_breaking) && (
          <div className="bg-red-600 rounded-lg p-4 mb-8">
            <div className="flex items-center mb-2">
              <AlertCircle className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-bold">BREAKING NEWS</span>
            </div>
            <div className="space-y-2">
              {news.filter(item => item.is_breaking).slice(0, 2).map(item => (
                <p key={item.id} className="text-white">
                  {item.headline}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              >
                {platforms.map(platform => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>

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
            Showing {filteredAndSortedNews.length} news articles
          </p>
        </div>

        {/* News List */}
        {filteredAndSortedNews.length > 0 ? (
          <div className="space-y-6">
            {filteredAndSortedNews.map((newsItem) => (
              <article key={newsItem.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <img 
                      src={newsItem.image_url || '/api/placeholder/400/250'} 
                      alt={newsItem.headline}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {newsItem.is_breaking && (
                          <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                            BREAKING
                          </span>
                        )}
                        <span className={`px-2 py-1 rounded text-xs font-bold text-white ${getCategoryColor(newsItem.category)}`}>
                          {newsItem.category}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-bold text-white ${getPlatformColor(newsItem.platform)}`}>
                          {newsItem.platform}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getPriorityIcon(newsItem.priority)}
                        <span className="text-gray-400 text-sm">{formatDate(newsItem.created_at)}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {newsItem.headline}
                    </h2>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {newsItem.summary || newsItem.content?.substring(0, 200) + '...'}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Source: {newsItem.source}
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                          Read More
                        </button>
                        {newsItem.external_url && (
                          <a 
                            href={newsItem.external_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white flex items-center text-sm"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Source
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl mb-4">No news found</p>
            <p>Try adjusting your search or filters</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredAndSortedNews.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Load More News
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsPage