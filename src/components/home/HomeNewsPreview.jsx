import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { fetchArticles } from '@/api/articles'
import { PlatformBadge } from '@/components/ui/PlatformBadge'

export default function HomeNewsPreview() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles({ limit: 4 })
      .then(({ rows }) => setArticles(rows))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Latest News & Articles</h2>
          <p className="text-gray-400 mt-1">Stay up to date with the gaming world</p>
        </div>
        <Link to="/news" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl h-64 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map(article => {
            const d = article.data || {}
            return (
              <Link key={article.id} to={`/news/${article.id}`} className="group">
                <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-900/20 h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400'}
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      {d.platform && <PlatformBadge platform={d.platform} />}
                    </div>
                    {d.category && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full font-medium capitalize">{d.category}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-indigo-300 transition-colors line-clamp-2 mb-2">
                      {d.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2 flex-1">{d.summary}</p>
                    <div className="flex items-center gap-1 mt-3 text-gray-500 text-xs">
                      <Clock className="w-3 h-3" />
                      {d.published_at ? formatDistanceToNow(new Date(d.published_at), { addSuffix: true }) : 'Recently'}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </section>
  )
}
