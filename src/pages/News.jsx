import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { Clock, Search, Newspaper } from 'lucide-react'
import { fetchArticles } from '../api/gameApi'
import { PlatformBadge, CategoryBadge, LoadingGrid, EmptyState } from '../components/ui/GameUI'

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'news', label: 'News' },
  { id: 'article', label: 'Articles' },
  { id: 'review', label: 'Reviews' },
  { id: 'guide', label: 'Guides' },
]

const PLATFORMS = [
  { id: 'all', label: 'All Platforms' },
  { id: 'steam', label: 'Steam' },
  { id: 'epic', label: 'Epic' },
  { id: 'nintendo', label: 'Nintendo' },
  { id: 'playstation', label: 'PlayStation' },
  { id: 'xbox', label: 'Xbox' },
]

function ArticleCard({ article }) {
  const d = article.data
  const timeAgo = d.published_at
    ? formatDistanceToNow(parseISO(d.published_at), { addSuffix: true })
    : 'Recently'

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 flex flex-col">
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80'}
          alt={d.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <CategoryBadge category={d.category} />
          {d.platform && d.platform !== 'all' && <PlatformBadge platform={d.platform} />}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
          {d.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">{d.summary}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
          <span className="font-medium text-gray-400">{d.author}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{timeAgo}</span>
        </div>
      </div>
    </div>
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
    fetchArticles({
      category: category !== 'all' ? category : undefined,
      platform: platform !== 'all' ? platform : undefined,
      limit: 30,
    })
      .then(setArticles)
      .finally(() => setLoading(false))
  }, [category, platform])

  const filtered = articles.filter((a) =>
    !search || a.data.title?.toLowerCase().includes(search.toLowerCase()) ||
    a.data.summary?.toLowerCase().includes(search.toLowerCase())
  )

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') params.delete(key)
    else params.set(key, value)
    setSearchParams(params)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-2">News & Articles</h1>
        <p className="text-gray-400">The latest gaming news, reviews, and guides</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
          />
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter('category', id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                category === id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Platform filter */}
      <div className="flex gap-2 flex-wrap mb-8">
        {PLATFORMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setFilter('platform', id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              platform === id
                ? 'bg-cyan-600 text-white border-cyan-500'
                : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Results count */}
      {!loading && (
        <p className="text-gray-500 text-sm mb-6">{filtered.length} article{filtered.length !== 1 ? 's' : ''} found</p>
      )}

      {/* Grid */}
      {loading ? (
        <LoadingGrid count={6} />
      ) : filtered.length === 0 ? (
        <EmptyState icon={Newspaper} title="No articles found" description="Try adjusting your filters or search query." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}
