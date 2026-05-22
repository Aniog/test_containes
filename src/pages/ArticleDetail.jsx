import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Eye, Calendar, User } from 'lucide-react'
import { client, getEntity, getSchemaData } from '../api/client.js'
import { PlatformBadge, CategoryBadge, LoadingSpinner } from '../components/ui/GameUI.jsx'
import { format } from 'date-fns'

export default function ArticleDetail() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const { data } = await client.from('Articles').select('*').eq('id', id).single()
      setArticle(getEntity(data))
      setLoading(false)
    }
    load()
  }, [id])

  if (loading) return <div className="min-h-screen bg-[#0d0f14]"><LoadingSpinner /></div>
  if (!article) return (
    <div className="min-h-screen bg-[#0d0f14] flex items-center justify-center">
      <div className="text-center">
        <p className="text-slate-400 text-xl mb-4">Article not found</p>
        <Link to="/news" className="text-[#4f8ef7] hover:underline">← Back to News</Link>
      </div>
    </div>
  )

  const d = getSchemaData(article)

  return (
    <div className="min-h-screen bg-[#0d0f14]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <Link to="/news" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <CategoryBadge category={d.category} />
          {d.platform && d.platform !== 'general' && <PlatformBadge platform={d.platform} />}
          {d.tags?.map(tag => (
            <span key={tag} className="text-xs text-slate-500 bg-[#1a1d27] border border-[#2a2d3e] px-2 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">{d.title}</h1>

        <div className="flex items-center gap-6 text-sm text-slate-400 mb-8 pb-8 border-b border-[#2a2d3e]">
          <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {d.author}</span>
          {d.published_at && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {format(new Date(d.published_at), 'MMMM d, yyyy')}
            </span>
          )}
          {d.views && (
            <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" /> {d.views?.toLocaleString()} views</span>
          )}
        </div>

        {d.summary && (
          <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium border-l-4 border-[#4f8ef7] pl-4">
            {d.summary}
          </p>
        )}

        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 leading-relaxed text-base whitespace-pre-line">{d.content}</p>
        </div>
      </div>
    </div>
  )
}
