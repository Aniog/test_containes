import { Link } from 'react-router-dom'
import { ArrowRight, Clock, User } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatDistanceToNow } from 'date-fns'

const CATEGORY_COLORS = {
  news: 'default',
  review: 'warning',
  guide: 'success',
  blog: 'secondary',
}

const PLATFORM_BADGE = {
  Steam: 'steam',
  Epic: 'epic',
  Nintendo: 'nintendo',
  PlayStation: 'playstation',
  Xbox: 'xbox',
  General: 'secondary',
}

function ArticleCard({ article }) {
  const d = article.data
  const timeAgo = d.published_at
    ? formatDistanceToNow(new Date(d.published_at), { addSuffix: true })
    : ''

  return (
    <Link to={`/news/${article.id}`}>
      <Card className="flex flex-col hover:border-indigo-500/50 transition-colors group h-full">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={d.cover_image_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80'}
            alt={d.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={CATEGORY_COLORS[d.category] || 'secondary'}>{d.category}</Badge>
            {d.platform && <Badge variant={PLATFORM_BADGE[d.platform] || 'secondary'}>{d.platform}</Badge>}
          </div>
          <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-indigo-300 transition-colors">
            {d.title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 flex-1">{d.summary}</p>
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
            {d.author && (
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" /> {d.author}
              </span>
            )}
            {timeAgo && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {timeAgo}
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default function LatestNews({ articles, loading }) {
  return (
    <section className="py-12 border-t border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Latest News & Articles</h2>
          <p className="text-gray-400 text-sm mt-1">Stay up to date with the gaming world</p>
        </div>
        <Link to="/news" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
          All Articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl h-64 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map(article => <ArticleCard key={article.id} article={article} />)}
        </div>
      )}
    </section>
  )
}
