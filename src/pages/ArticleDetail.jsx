import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { ArrowLeft, Clock, User, Tag } from 'lucide-react'
import { fetchArticleById } from '../api/gameApi.js'
import { PLATFORM_CONFIG, CATEGORY_CONFIG } from '../lib/utils.js'

export default function ArticleDetail() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchArticleById(id)
      .then(setArticle)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f13] pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-[#0f0f13] pt-24 flex flex-col items-center justify-center gap-4">
        <div className="text-5xl">😕</div>
        <p className="text-slate-400 text-lg">Article not found</p>
        <Link to="/news" className="text-violet-400 hover:text-violet-300 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
      </div>
    )
  }

  const fields = article.data
  const platform = PLATFORM_CONFIG[fields.platform] || PLATFORM_CONFIG.all
  const category = CATEGORY_CONFIG[fields.category] || CATEGORY_CONFIG.news
  const publishedDate = fields.published_at
    ? format(new Date(fields.published_at), 'MMMM d, yyyy')
    : 'Unknown date'

  return (
    <div className="min-h-screen bg-[#0f0f13] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>

        {/* Hero image */}
        <div className="relative h-64 sm:h-80 bg-gradient-to-br from-[#22222f] to-[#1a1a24] rounded-2xl overflow-hidden mb-8">
          <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10">🎮</div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] to-transparent" />
          <div className="absolute bottom-5 left-5 flex gap-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${category.color}`}>
              {category.label}
            </span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${platform.badge}`}>
              {platform.label}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 leading-tight mb-4">
          {fields.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6 pb-6 border-b border-[#2d2d3d]">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>{fields.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{publishedDate}</span>
          </div>
          {fields.read_time_minutes && (
            <div className="flex items-center gap-1.5">
              <span>{fields.read_time_minutes} min read</span>
            </div>
          )}
        </div>

        {/* Summary */}
        {fields.summary && (
          <p className="text-lg text-slate-400 leading-relaxed mb-8 font-medium border-l-4 border-violet-500 pl-4">
            {fields.summary}
          </p>
        )}

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {fields.content ? (
            <div className="text-slate-300 leading-relaxed whitespace-pre-wrap text-base">
              {fields.content}
            </div>
          ) : (
            <p className="text-slate-500 italic">Full article content coming soon.</p>
          )}
        </div>

        {/* Tags */}
        {fields.tags && fields.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-[#2d2d3d]">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-slate-500" />
              {fields.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#22222f] text-slate-400 text-xs px-3 py-1 rounded-full border border-[#2d2d3d]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
