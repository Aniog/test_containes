import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ArrowRight, Clock, User } from 'lucide-react'
import { PLATFORM_CONFIG, CATEGORY_CONFIG } from '../../lib/utils.js'

function ArticleCard({ article }) {
  const fields = article.data
  const platform = PLATFORM_CONFIG[fields.platform] || PLATFORM_CONFIG.all
  const category = CATEGORY_CONFIG[fields.category] || CATEGORY_CONFIG.news
  const timeAgo = fields.published_at
    ? formatDistanceToNow(new Date(fields.published_at), { addSuffix: true })
    : 'Recently'

  return (
    <Link
      to={`/news/${article.id}`}
      className="group block bg-[#1a1a24] border border-[#2d2d3d] rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/10"
    >
      {/* Image placeholder */}
      <div className="relative h-44 bg-gradient-to-br from-[#22222f] to-[#1a1a24] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-10">🎮</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${category.color}`}>
            {category.label}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${platform.badge}`}>
            {platform.label}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-slate-100 font-bold text-base leading-snug mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
          {fields.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-3">
          {fields.summary}
        </p>
        <div className="flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{fields.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function HomeFeaturedArticles({ articles = [] }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            Latest News & Articles
          </h2>
          <p className="text-slate-500 mt-1 text-sm">Stay up to date with the gaming world</p>
        </div>
        <Link
          to="/news"
          className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-semibold transition-colors"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-12 text-slate-600">No articles yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  )
}
