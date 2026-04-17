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
        <p className="text-gray-400 text-lg">Article not found</p>
        <Link to="/articles" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300">Back to Articles</Link>
      </div>
    </div>
  )

  const d = article.data
  const publishedDate = d.published_at ? format(new Date(d.published_at), 'MMMM d, yyyy') : ''

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/articles" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-6 text-sm">
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
        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">{d.title}</h1>

        {/* Author + Meta */}
        <div className="flex flex-wrap items-center gap-5 text-gray-500 text-sm mb-8 pb-8 border-b border-gray-800">
          {d.author && (
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {d.author[0]}
              </div>
              <span className="text-gray-300">{d.author}</span>
            </span>
          )}
          {publishedDate && <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" />{publishedDate}</span>}
          {d.read_time && <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{d.read_time} min read</span>}
        </div>

        {/* Excerpt */}
        {d.excerpt && (
          <p className="text-gray-300 text-lg leading-relaxed mb-8 font-medium border-l-4 border-indigo-500 pl-5">
            {d.excerpt}
          </p>
        )}

        {/* Content */}
        {d.content && (
          <div
            className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-4 [&_p]:text-gray-300 [&_h2]:text-white [&_h3]:text-white [&_strong]:text-white [&_a]:text-indigo-400"
            dangerouslySetInnerHTML={{ __html: d.content }}
          />
        )}

        {/* Tags */}
        {d.tags?.length > 0 && (
          <div className="mt-10 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {d.tags.map(tag => (
                <span key={tag} className="bg-gray-800 text-gray-400 text-sm px-3 py-1 rounded-full hover:text-white transition-colors">
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
