import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Tag } from 'lucide-react'
import { fetchArticleById } from '../api/gameApi'
import { Badge } from '../components/ui/Badge'
import { LoadingScreen } from '../components/ui/Spinner'
import { format } from 'date-fns'

const categoryColors = {
  News: 'default',
  Review: 'warning',
  Guide: 'success',
  Feature: 'secondary',
  Opinion: 'outline',
}

export default function ArticleDetailPage() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
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

  if (loading) return <div className="pt-20"><LoadingScreen /></div>
  if (!article) return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">📰</div>
        <p className="text-slate-500 text-lg">Article not found</p>
        <Link to="/articles" className="mt-4 inline-block text-violet-600 hover:text-violet-500">Back to Articles</Link>
      </div>
    </div>
  )

  const d = article.data
  const publishedDate = d.published_at ? format(new Date(d.published_at), 'MMMM d, yyyy') : ''

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors py-6 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        {/* Cover Image */}
        {d.cover_image && (
          <div className="rounded-2xl overflow-hidden mb-8">
            <img src={d.cover_image} alt={d.title} className="w-full h-72 md:h-96 object-cover" />
          </div>
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {d.category && <Badge variant={categoryColors[d.category] || 'default'}>{d.category}</Badge>}
          {d.platform_tags?.map(p => <Badge key={p} variant="secondary">{p}</Badge>)}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">{d.title}</h1>

        {/* Author + Meta */}
        <div className="flex flex-wrap items-center gap-5 text-slate-500 text-sm mb-8 pb-8 border-b border-slate-200">
          {d.author && (
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 bg-violet-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {d.author[0]}
              </div>
              <span className="text-slate-700">{d.author}</span>
            </span>
          )}
          {publishedDate && <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" />{publishedDate}</span>}
          {d.read_time && <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{d.read_time} min read</span>}
        </div>

        {/* Excerpt */}
        {d.excerpt && (
          <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium border-l-4 border-violet-500 pl-5">
            {d.excerpt}
          </p>
        )}

        {/* Content */}
        {d.content && (
          <div
            className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed space-y-4 [&_p]:text-slate-700 [&_h2]:text-slate-900 [&_h3]:text-slate-900 [&_strong]:text-slate-900 [&_a]:text-violet-600"
            dangerouslySetInnerHTML={{ __html: d.content }}
          />
        )}

        {/* Tags */}
        {d.tags?.length > 0 && (
          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {d.tags.map(tag => (
                <span key={tag} className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full hover:text-slate-900 transition-colors">
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
