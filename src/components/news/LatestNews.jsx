import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Clock, User, ArrowRight, AlertCircle } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const LatestNews = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchLatestNews()
  }, [])

  const fetchLatestNews = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('News')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const newsList = dataPayload.list || []
      
      // Sort by published date and limit to 4
      const latestNews = newsList
        .sort((a, b) => new Date(b.data?.published_date) - new Date(a.data?.published_date))
        .slice(0, 4)
      
      setNews(latestNews)
    } catch (err) {
      console.error('Failed to fetch latest news:', err)
      setError(err.message || 'Failed to load latest news')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
            <div className="flex space-x-4">
              <div className="w-24 h-16 bg-gray-300 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <div className="text-red-500 mb-4">{error}</div>
        <button 
          onClick={fetchLatestNews}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (news.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No news available at the moment.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="p-4">
            <div className="flex items-start space-x-4">
              {item.data?.image_url && (
                <img
                  src={item.data.image_url}
                  alt={item.data?.headline}
                  className="w-24 h-16 object-cover rounded flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  {item.data?.is_breaking && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      BREAKING
                    </span>
                  )}
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    {item.data?.platform}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                    {item.data?.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {item.data?.headline}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.data?.summary}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{item.data?.source}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{formatDate(item.data?.published_date)}</span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                    <span>Read more</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="text-center pt-4">
        <a 
          href="/news" 
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span>View All News</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

export default LatestNews