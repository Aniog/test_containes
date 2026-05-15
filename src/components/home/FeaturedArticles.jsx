import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Eye } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { articles } from '../../data/articles'
import PlatformBadge from '../ui/PlatformBadge'
import CategoryBadge from '../ui/CategoryBadge'

export default function FeaturedArticles() {
  const featured = articles.filter(a => a.is_featured).slice(0, 3)
  const recent = articles.filter(a => !a.is_featured).slice(0, 4)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Stories</h2>
          <p className="text-slate-500 mt-1">Top picks from our editors</p>
        </div>
        <Link
          to="/news"
          className="hidden sm:flex items-center gap-1.5 text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
        >
          All Articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Featured grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Main featured */}
        {featured[0] && (
          <Link
            to={`/news/${featured[0].id}`}
            className="lg:col-span-2 group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-100 transition-all"
          >
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={featured[0].cover_image_url}
                alt={featured[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <CategoryBadge category={featured[0].category} />
                <PlatformBadge platform={featured[0].platform} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-slate-900 font-bold text-xl leading-snug mb-2 group-hover:text-green-600 transition-colors">
                {featured[0].title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{featured[0].summary}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="font-medium text-slate-600">{featured[0].author}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {formatDistanceToNow(new Date(featured[0].published_at), { addSuffix: true })}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  {featured[0].view_count.toLocaleString()}
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Side featured */}
        <div className="flex flex-col gap-4">
          {featured.slice(1, 3).map(article => (
            <Link
              key={article.id}
              to={`/news/${article.id}`}
              className="group flex gap-4 bg-white border border-slate-200 hover:border-green-400 hover:shadow-md hover:shadow-green-100 rounded-xl p-4 transition-all"
            >
              <div className="w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={article.cover_image_url}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex gap-1.5 mb-1.5">
                  <CategoryBadge category={article.category} />
                  <PlatformBadge platform={article.platform} />
                </div>
                <h3 className="text-slate-900 text-sm font-semibold leading-snug line-clamp-2 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                  <Clock className="w-3 h-3" />
                  {formatDistanceToNow(new Date(article.published_at), { addSuffix: true })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent articles row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recent.map(article => (
          <Link
            key={article.id}
            to={`/news/${article.id}`}
            className="group bg-white border border-slate-200 hover:border-green-400 hover:shadow-md hover:shadow-green-100 rounded-xl overflow-hidden transition-all"
          >
            <div className="h-36 overflow-hidden">
              <img
                src={article.cover_image_url}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex gap-1.5 mb-2">
                <CategoryBadge category={article.category} />
                <PlatformBadge platform={article.platform} />
              </div>
              <h3 className="text-slate-900 text-sm font-semibold leading-snug line-clamp-2 group-hover:text-green-600 transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                <span>{article.author}</span>
                <span>·</span>
                <Clock className="w-3 h-3" />
                {formatDistanceToNow(new Date(article.published_at), { addSuffix: true })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
