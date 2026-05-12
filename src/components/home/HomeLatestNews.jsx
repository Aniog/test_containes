import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { ArrowRight, Clock, User } from 'lucide-react'

const CATEGORY_COLORS = {
  news: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  blog: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  review: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  guide: 'bg-green-500/20 text-green-300 border-green-500/30',
}

const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80',
  'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80',
]

function ArticleCard({ article, index }) {
  const fields = article.data || article
  const imgSrc = fields.cover_image_url || PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length]
  const catColor = CATEGORY_COLORS[fields.category] || CATEGORY_COLORS.news

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all group">
      <div className="relative overflow-hidden h-48">
        <img src={imgSrc} alt={fields.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold border ${catColor}`}>
          {fields.category?.toUpperCase()}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-base leading-snug mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
          {fields.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{fields.summary}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{fields.author}</span>
          {fields.published_at && (
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {format(parseISO(fields.published_at), 'MMM d, yyyy')}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HomeLatestNews({ articles = [] }) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Latest News & Articles</h2>
            <p className="text-gray-400 mt-1">Stay up to date with the gaming world</p>
          </div>
          <Link to="/news" className="hidden sm:flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLACEHOLDER_IMAGES.slice(0, 3).map((img, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-800" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-800 rounded w-3/4" />
                  <div className="h-3 bg-gray-800 rounded w-full" />
                  <div className="h-3 bg-gray-800 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 6).map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>
        )}

        <div className="mt-6 sm:hidden text-center">
          <Link to="/news" className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium">
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
