import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { Search, Clock, User, Filter } from 'lucide-react'
import { fetchArticles } from '../api/articles.js'

const CATEGORIES = ['all', 'news', 'blog', 'review', 'guide']

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
  'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80',
  'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=600&q=80',
]

function ArticleCard({ article, index }) {
  const fields = article.data || article
  const imgSrc = fields.cover_image_url || PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length]
  const catColor = CATEGORY_COLORS[fields.category] || CATEGORY_COLORS.news

  return (
    <article className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all group flex flex-col">
      <div className="relative overflow-hidden h-52">
        <img src={imgSrc} alt={fields.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold border ${catColor}`}>
          {fields.category?.toUpperCase()}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
          {fields.title}
        </h2>
        <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">{fields.summary}</p>
        {fields.tags && fields.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {fields.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-800 pt-3">
          <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{fields.author}</span>
          {fields.published_at && (
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {format(parseISO(fields.published_at), 'MMM d, yyyy')}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function News() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const activeCategory = searchParams.get('category') || 'all'

  useEffect(() => {
    setLoading(true)
    const cat = activeCategory === 'all' ? undefined : activeCategory
    fetchArticles({ category: cat })
      .then(setArticles)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [activeCategory])

  const filtered = search
    ? articles.filter((a) => {
        const f = a.data || a
        return f.title?.toLowerCase().includes(search.toLowerCase()) ||
          f.summary?.toLowerCase().includes(search.toLowerCase())
      })
    : articles

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">News & Articles</h1>
          <p className="text-gray-400">The latest gaming news, reviews, guides and more</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-gray-500" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchParams(cat === 'all' ? {} : { category: cat })}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden animate-pulse">
                <div className="h-52 bg-gray-800" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-800 rounded w-3/4" />
                  <div className="h-3 bg-gray-800 rounded w-full" />
                  <div className="h-3 bg-gray-800 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No articles found.</p>
            <p className="text-gray-600 text-sm mt-2">Try a different category or search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
