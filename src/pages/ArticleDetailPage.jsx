import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Eye, Tag, Share2 } from 'lucide-react'
import { format } from 'date-fns'
import { articles } from '../data/articles'
import PlatformBadge from '../components/ui/PlatformBadge'
import CategoryBadge from '../components/ui/CategoryBadge'

export default function ArticleDetailPage() {
  const { id } = useParams()
  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">📄</div>
        <h2 className="text-slate-900 text-2xl font-bold mb-2">Article Not Found</h2>
        <p className="text-slate-500 mb-6">The article you're looking for doesn't exist.</p>
        <Link to="/news" className="text-blue-600 hover:text-blue-700 font-medium">
          ← Back to News
        </Link>
      </div>
    )
  }

  const related = articles
    .filter(a => a.id !== article.id && (a.platform === article.platform || a.category === article.category))
    .slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Back link */}
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          {/* Cover image */}
          <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80">
            <img
              src={article.cover_image_url}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <CategoryBadge category={article.category} />
            <PlatformBadge platform={article.platform} size="lg" />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6 pb-6 border-b border-slate-200">
            <span className="font-semibold text-slate-700">{article.author}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {format(new Date(article.published_at), 'MMMM d, yyyy')}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              {article.view_count.toLocaleString()} views
            </span>
          </div>

          {/* Summary */}
          <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
            {article.summary}
          </p>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-600 leading-relaxed text-base">
              {article.content}
            </p>
            <p className="text-slate-600 leading-relaxed text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-slate-600 leading-relaxed text-base mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200">
              <Tag className="w-4 h-4 text-slate-400 mt-0.5" />
              {article.tags.map(tag => (
                <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Related articles */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-slate-900 font-bold text-base mb-4">Related Articles</h3>
            <div className="space-y-4">
              {related.map(rel => (
                <Link
                  key={rel.id}
                  to={`/news/${rel.id}`}
                  className="group flex gap-3 hover:bg-white/5 rounded-xl p-2 -mx-2 transition-colors"
                >
                  <div className="w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={rel.cover_image_url}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex gap-1 mb-1">
                      <CategoryBadge category={rel.category} />
                    </div>
                    <p className="text-slate-900 text-xs font-semibold leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {rel.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Platform info */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-slate-900 font-bold text-base mb-3">Browse Platform</h3>
            <Link
              to={`/deals?platform=${article.platform}`}
              className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 hover:bg-blue-100 transition-colors"
            >
              <div>
                <PlatformBadge platform={article.platform} size="lg" />
                <p className="text-slate-500 text-xs mt-1">View all deals</p>
              </div>
              <ArrowLeft className="w-4 h-4 text-indigo-400 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
