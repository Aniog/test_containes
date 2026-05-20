import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { Clock, User, Search, Filter } from 'lucide-react'
import { fetchArticles } from '../api/gameApi.js'
import { PLATFORM_CONFIG, CATEGORY_CONFIG } from '../lib/utils.js'

const CATEGORIES = ['all', 'news', 'blog', 'review', 'guide']
const PLATFORMS = ['all', 'steam', 'epic', 'nintendo', 'playstation', 'xbox', 'multi']

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
      className="group flex flex-col bg-[#1a1a24] border border-[#2d2d3d] rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/10"
    >
      <div className="relative h-48 bg-gradient-to-br from-[#22222f] to-[#1a1a24]">
        <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-10">🎮</div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${category.color}`}>
            {category.label}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${platform.badge}`}>
            {platform.label}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-slate-100 font-bold text-base leading-snug mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
          {fields.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
          {fields.summary}
        </p>
        <div className="flex items-center justify-between text-xs text-slate-600 pt-3 border-t border-[#2d2d3d]">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            <span>{fields.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function News() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const category = searchParams.get('category') || 'all'
  const platform = searchParams.get('platform') || 'all'

  useEffect(() => {
    setLoading(true)
    fetchArticles({ category, platform, limit: 20 })
      .then(setArticles)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [category, platform])

  const filtered = search
    ? articles.filter((a) =>
        a.data.title?.toLowerCase().includes(search.toLowerCase()) ||
        a.data.summary?.toLowerCase().includes(search.toLowerCase())
      )
    : articles

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') params.delete(key)
    else params.set(key, value)
    setSearchParams(params)
  }

  return (
    <div className="min-h-screen bg-[#0f0f13] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-100 tracking-tight mb-2">
            News & Articles
          </h1>
          <p className="text-slate-500">The latest from the gaming world</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1a1a24] border border-[#2d2d3d] text-slate-100 placeholder-slate-600 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-violet-500/60 transition-colors"
            />
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-slate-500 shrink-0" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter('category', cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all capitalize ${
                  category === cat
                    ? 'bg-violet-600 text-white'
                    : 'bg-[#1a1a24] text-slate-400 border border-[#2d2d3d] hover:border-violet-500/40 hover:text-slate-100'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Platform filter */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {PLATFORMS.map((p) => {
            const cfg = PLATFORM_CONFIG[p] || PLATFORM_CONFIG.all
            return (
              <button
                key={p}
                onClick={() => setFilter('platform', p)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  platform === p
                    ? 'bg-violet-600 text-white border-transparent'
                    : `bg-[#1a1a24] border border-[#2d2d3d] ${cfg.color} hover:border-violet-500/40`
                }`}
              >
                {p === 'all' ? 'All Platforms' : cfg.label}
              </button>
            )
          })}
        </div>

        {/* Articles grid */}
        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-600">
            <div className="text-5xl mb-4">📰</div>
            <p className="text-lg font-semibold text-slate-500">No articles found</p>
            <p className="text-sm mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
