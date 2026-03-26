import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '@/api/postgrest-client.js'
import { Clock, User, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const LatestNews = () => {
  const [articles, setArticles] = useState([])
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
        .from('Article')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const articlesList = dataPayload.list || []
      
      // Sort by published date and limit to 4
      const latestArticles = articlesList
        .sort((a, b) => new Date(b.data?.published_date || 0) - new Date(a.data?.published_date || 0))
        .slice(0, 4)
      
      setArticles(latestArticles)
    } catch (err) {
      console.error('Failed to fetch latest news:', err)
      setError(err.message || 'Failed to load latest news')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
            <AlertCircle size={20} />
            <span>Error: {error}</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Gaming News</h2>
            <p className="text-gray-600">Stay updated with the latest happenings in the gaming world</p>
          </div>
          <Link
            to="/blog"
            className="hidden sm:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>View All</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No articles available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
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
                      <div className="text-3xl mb-2">📰</div>
                      <div className="text-xs">No Image</div>
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      article.data?.category === 'News' ? 'bg-blue-100 text-blue-800' :
                      article.data?.category === 'Review' ? 'bg-green-100 text-green-800' :
                      article.data?.category === 'Guide' ? 'bg-purple-100 text-purple-800' :
                      article.data?.category === 'Interview' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {article.data?.category || 'Article'}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {article.data?.title || 'Untitled Article'}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.data?.excerpt || 'No excerpt available'}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.data?.author || 'Anonymous'}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>
                        {article.data?.published_date 
                          ? formatDate(article.data.published_date)
                          : 'No date'
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center mt-8 sm:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestNews