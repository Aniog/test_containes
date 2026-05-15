import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Eye, Tag, Share2 } from 'lucide-react'
import { format } from 'date-fns'
import { articles } from '../data/articles'
import PlatformBadge from '../components/ui/PlatformBadge'
import CategoryBadge from '../components/ui/CategoryBadge'

export default function ArticlePage() {
  const { id } = useParams()
  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">📰</div>
        <h2 className="text-white text-2xl font-bold mb-2">Article Not Found</h2>
        <p className="text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
        <Link to="/news" className="text-green-400 hover:text-green-300 font-medium">
          ← Back to News
        </Link>
      </div>
    )
  }

  const related = articles
    .filter(a => a.id !== article.id && (a.platform === article.platform || a.category === article.category))
    .slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back */}
      <Link
        to="/news"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to News
      </Link>

      {/* Article header */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <CategoryBadge category={article.category} />
          <PlatformBadge platform={article.platform} size="lg" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">{article.summary}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-white/10">
          <span className="text-gray-300 font-medium">By {article.author}</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {format(new Date(article.published_at), 'MMMM d, yyyy')}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            {article.view_count.toLocaleString()} views
          </span>
          <button className="ml-auto flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>

      {/* Cover image */}
      <div className="rounded-2xl overflow-hidden mb-8 h-64 sm:h-96">
        <img
          src={article.cover_image_url}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article content */}
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-gray-300 text-base leading-relaxed mb-4">{article.content}</p>
        <p className="text-gray-300 text-base leading-relaxed mb-4">
          Gaming continues to evolve at a rapid pace, with new titles, updates, and platform features launching regularly. Whether you're a casual player or a hardcore enthusiast, staying informed about the latest developments helps you make the most of your gaming experience.
        </p>
        <p className="text-gray-300 text-base leading-relaxed mb-4">
          The gaming industry has seen tremendous growth in recent years, with more players than ever before across all platforms. From mobile gaming to high-end PC setups, the diversity of gaming experiences available today is unprecedented.
        </p>
        <p className="text-gray-300 text-base leading-relaxed">
          As we look ahead, the future of gaming looks bright with innovations in cloud gaming, VR/AR experiences, and AI-driven game design promising to transform how we play and interact with games.
        </p>
      </div>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-white/10">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="flex items-center gap-1 bg-gray-800 border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Related articles */}
      {related.length > 0 && (
        <div>
          <h2 className="text-white font-bold text-xl mb-5">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map(rel => (
              <Link
                key={rel.id}
                to={`/news/${rel.id}`}
                className="group bg-gray-900 border border-white/10 hover:border-green-500/50 rounded-xl overflow-hidden transition-all"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={rel.cover_image_url}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex gap-1.5 mb-2">
                    <CategoryBadge category={rel.category} />
                  </div>
                  <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-green-300 transition-colors">
                    {rel.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
