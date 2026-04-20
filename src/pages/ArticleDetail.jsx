import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, ExternalLink } from 'lucide-react'
import { format } from 'date-fns'
import { fetchArticleById } from '@/api/articles'
import { PlatformBadge } from '@/components/ui/PlatformBadge'

export default function ArticleDetail() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchArticleById(id)
      .then(setArticle)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-gray-800 rounded-xl h-96 animate-pulse mb-6" />
        <div className="space-y-3">
          <div className="bg-gray-800 rounded h-8 w-3/4 animate-pulse" />
          <div className="bg-gray-800 rounded h-4 w-full animate-pulse" />
          <div className="bg-gray-800 rounded h-4 w-5/6 animate-pulse" />
        </div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-red-400 text-lg mb-4">{error || 'Article not found'}</p>
        <Link to="/news" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 justify-center">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
      </div>
    )
  }

  const d = article.data || article

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Link to="/news" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to News
      </Link>

      {/* Cover Image */}
      {d.cover_image_url && (
        <div className="rounded-xl overflow-hidden mb-6 h-64 md:h-80">
          <img src={d.cover_image_url} alt={d.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Meta */}
      <div className="flex flex-wrap gap-2 mb-4">
        {d.platform && <PlatformBadge platform={d.platform} />}
        {d.category && (
          <span className="bg-indigo-600 text-white text-xs px-2.5 py-0.5 rounded-full font-medium capitalize">{d.category}</span>
        )}
      </div>

      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">{d.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6 pb-6 border-b border-gray-700">
        {d.author && (
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" /> {d.author}
          </span>
        )}
        {d.published_at && (
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {format(new Date(d.published_at), 'MMMM d, yyyy')}
          </span>
        )}
        {d.source_url && (
          <a href={d.source_url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors">
            <ExternalLink className="w-4 h-4" /> Source
          </a>
        )}
      </div>

      {/* Summary */}
      {d.summary && (
        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium border-l-4 border-indigo-500 pl-4 italic">
          {d.summary}
        </p>
      )}

      {/* Content */}
      {d.content && (
        <div className="prose prose-invert prose-gray max-w-none text-gray-300 leading-relaxed space-y-4">
          {d.content.split('\n').filter(Boolean).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}
    </div>
  )
}
