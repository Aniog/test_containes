import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { ArrowLeft, Clock, User, Tag } from 'lucide-react'
import { Badge, Skeleton } from '@/components/ui/index'
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/lib/constants'
import { fetchArticleById } from '@/api/gameApi'

export default function ArticleDetail() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      console.log('[ArticleDetail] Loading article:', id)
      try {
        const data = await fetchArticleById(id)
        setArticle(data)
        console.log('[ArticleDetail] Article loaded:', data?.data?.title)
      } catch (err) {
        console.error('[ArticleDetail] Error:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-64 w-full rounded-xl mb-8" />
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-xl mb-4">Article not found</p>
          <Link to="/news" className="text-indigo-400 hover:text-indigo-300">Back to News</Link>
        </div>
      </div>
    )
  }

  const d = article.data
  const timeAgo = d.published_at
    ? formatDistanceToNow(parseISO(d.published_at), { addSuffix: true })
    : 'Recently'

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/news" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>

        {d.cover_image_url && (
          <img
            src={d.cover_image_url}
            alt={d.title}
            className="w-full h-72 object-cover rounded-xl mb-8"
          />
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-2.5 py-1 rounded text-xs font-semibold ${CATEGORY_COLORS[d.category] || 'bg-gray-700 text-white'}`}>
            {CATEGORY_LABELS[d.category] || d.category}
          </span>
          {d.platform && d.platform !== 'General' && (
            <span className="px-2.5 py-1 rounded text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700">
              {d.platform}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">{d.title}</h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span className="text-gray-400">{d.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{timeAgo}</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          {d.content?.split('\n').map((para, i) => (
            para.trim() ? (
              <p key={i} className="text-gray-300 leading-relaxed mb-4">{para}</p>
            ) : <br key={i} />
          ))}
        </div>

        {d.tags && d.tags.length > 0 && (
          <div className="mt-10 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-gray-500" />
              {d.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
