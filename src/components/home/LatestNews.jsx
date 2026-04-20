import { Link } from 'react-router-dom'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { ArrowRight, Clock, User } from 'lucide-react'
import { Card, Badge, Skeleton } from '@/components/ui/index'
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/lib/constants'

function ArticleCard({ article }) {
  const d = article.data
  const timeAgo = d.published_at
    ? formatDistanceToNow(parseISO(d.published_at), { addSuffix: true })
    : 'Recently'

  return (
    <Link to={`/news/${article.id}`}>
      <Card className="group hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={d.cover_image_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800'}
            alt={d.title}
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${CATEGORY_COLORS[d.category] || 'bg-gray-700 text-white'}`}>
              {CATEGORY_LABELS[d.category] || d.category}
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-indigo-300 transition-colors">
            {d.title}
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">{d.summary}</p>
          <div className="mt-auto flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{d.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default function LatestNews({ articles, loading }) {
  return (
    <section className="py-16 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Latest News & Articles</h2>
            <p className="text-gray-500 mt-1">Stay up to date with the gaming world</p>
          </div>
          <Link to="/news" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1 transition-colors">
            All articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <Skeleton className="h-44 w-full rounded-none" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-3/4" />
                  <Skeleton className="h-3 w-1/2 mt-4" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
