import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Clock, Search, Filter } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { fetchArticles } from '@/api/articles'
import { PlatformBadge, PLATFORMS } from '@/components/ui/PlatformBadge'
import { Input } from '@/components/ui/input'

const CATEGORIES = ['all', 'news', 'review', 'guide', 'deal', 'announcement']

export default function News() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const platform = searchParams.get('platform') || 'all'
  const category = searchParams.get('category') || 'all'

  useEffect(() => {
    setLoading(true)
    fetchArticles({
      platform: platform !== 'all' ? platform : undefined,
      category: category !== 'all' ? category : undefined,
      limit: 24,
    })
      .then(({ rows }) => setArticles(rows))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [platform, category])

  const filtered = search
    ? articles.filter(a => (a.data?.title || '').toLowerCase().includes(search.toLowerCase()))
    : articles

  const setFilter = (key, val) => {
    const params = new URLSearchParams(searchParams)
    if (val === 'all') params.delete(key)
    else params.set(key, val)
    setSearchParams(params)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">News & Articles</h1>
        <p className="text-gray-400">The latest from the gaming world</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {PLATFORMS.map(p => (
            <button
              key={p.id}
              onClick={() => setFilter('platform', p.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                platform === p.id ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setFilter('category', c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize ${
                category === c ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => <div key={i} className="bg-gray-800 rounded-xl h-72 animate-pulse" />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No articles found</p>
          <p className="text-sm mt-1">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(article => {
            const d = article.data || {}
            return (
              <Link key={article.id} to={`/news/${article.id}`} className="group">
                <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-900/20 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600'}
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {d.platform && <PlatformBadge platform={d.platform} />}
                      {d.category && (
                        <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full font-medium capitalize">{d.category}</span>
                      )}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white font-semibold leading-snug group-hover:text-indigo-300 transition-colors line-clamp-2 mb-2">
                      {d.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3 flex-1">{d.summary}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" />
                        {d.published_at ? formatDistanceToNow(new Date(d.published_at), { addSuffix: true }) : 'Recently'}
                      </div>
                      {d.author && <span className="text-gray-500 text-xs">by {d.author}</span>}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
