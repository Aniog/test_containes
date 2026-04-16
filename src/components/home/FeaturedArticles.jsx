import { Link } from 'react-router-dom'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { ArrowRight, Clock } from 'lucide-react'
import { PlatformBadge, CategoryBadge, LoadingGrid } from '../ui/GameUI'

function ArticleCard({ article }) {
  const d = article.data
  const timeAgo = d.published_at
    ? formatDistanceToNow(parseISO(d.published_at), { addSuffix: true })
    : 'Recently'

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
      <div className="relative h-48 overflow-hidden">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80'}
          alt={d.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <CategoryBadge category={d.category} />
          {d.platform && d.platform !== 'all' && <PlatformBadge platform={d.platform} />}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
          {d.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">{d.summary}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="font-medium text-gray-400">{d.author}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{timeAgo}</span>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedArticles({ articles, loading }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-white">Latest News & Articles</h2>
          <p className="text-gray-400 mt-1">Stay up to date with the gaming world</p>
        </div>
        <Link
          to="/news"
          className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {loading ? (
        <LoadingGrid count={3} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  )
}
