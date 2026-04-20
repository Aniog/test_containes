import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Eye, Calendar } from 'lucide-react'
import { fetchArticleById } from '@/api/gamesite'
import { Badge } from '@/components/ui/Badge'
import { format } from 'date-fns'

const CATEGORY_COLORS = { news: 'default', review: 'warning', guide: 'success', blog: 'secondary' }
const PLATFORM_BADGE = { Steam: 'steam', Epic: 'epic', Nintendo: 'nintendo', PlayStation: 'playstation', Xbox: 'xbox', General: 'secondary' }

export default function ArticleDetail() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const data = await fetchArticleById(id)
        setArticle(data)
      } catch (err) {
        console.error('Failed to load article:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-gray-800 rounded-xl h-96 animate-pulse mb-6" />
        <div className="space-y-3">
          <div className="bg-gray-800 rounded h-8 w-3/4 animate-pulse" />
          <div className="bg-gray-800 rounded h-4 w-full animate-pulse" />
          <div className="bg-gray-800 rounded h-4 w-5/6 animate-pulse" />
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-400 text-lg">Article not found.</p>
        <Link to="/news" className="text-indigo-400 hover:text-indigo-300 mt-4 inline-block">← Back to News</Link>
      </div>
    )
  }

  const d = article.data

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/news" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to News
      </Link>

      {d.cover_image_url && (
        <div className="rounded-xl overflow-hidden mb-8 aspect-video">
          <img src={d.cover_image_url} alt={d.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant={CATEGORY_COLORS[d.category] || 'secondary'}>{d.category}</Badge>
        {d.platform && <Badge variant={PLATFORM_BADGE[d.platform] || 'secondary'}>{d.platform}</Badge>}
        {d.tags?.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">{d.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800">
        {d.author && <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {d.author}</span>}
        {d.published_at && (
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {format(new Date(d.published_at), 'MMMM d, yyyy')}
          </span>
        )}
        {d.read_time_minutes && (
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {d.read_time_minutes} min read</span>
        )}
        {d.views > 0 && (
          <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" /> {d.views.toLocaleString()} views</span>
        )}
      </div>

      {d.summary && (
        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">{d.summary}</p>
      )}

      {d.content && (
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
          {d.content}
        </div>
      )}
    </div>
  )
}
