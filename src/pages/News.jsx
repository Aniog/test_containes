import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search, Clock, User, Eye, Filter } from 'lucide-react'
import { fetchArticles } from '@/api/gamesite'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatDistanceToNow } from 'date-fns'

const CATEGORIES = ['all', 'news', 'blog', 'review', 'guide']
const PLATFORMS = ['all', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox', 'General']

const CATEGORY_COLORS = { news: 'default', review: 'warning', guide: 'success', blog: 'secondary' }
const PLATFORM_BADGE = { Steam: 'steam', Epic: 'epic', Nintendo: 'nintendo', PlayStation: 'playstation', Xbox: 'xbox', General: 'secondary' }

function ArticleCard({ article }) {
  const d = article.data
  const timeAgo = d.published_at ? formatDistanceToNow(new Date(d.published_at), { addSuffix: true }) : ''

  return (
    <Link to={`/news/${article.id}`}>
      <Card className="flex flex-col md:flex-row hover:border-indigo-500/50 transition-colors group">
        <div className="md:w-56 flex-shrink-0 overflow-hidden">
          <img
            src={d.cover_image_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80'}
            alt={d.title}
            className="w-full h-40 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant={CATEGORY_COLORS[d.category] || 'secondary'}>{d.category}</Badge>
            {d.platform && <Badge variant={PLATFORM_BADGE[d.platform] || 'secondary'}>{d.platform}</Badge>}
          </div>
          <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-indigo-300 transition-colors line-clamp-2">
            {d.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">{d.summary}</p>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-500">
            {d.author && <span className="flex items-center gap-1"><User className="w-3 h-3" /> {d.author}</span>}
            {timeAgo && <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {timeAgo}</span>}
            {d.views > 0 && <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {d.views.toLocaleString()} views</span>}
          </div>
        </div>
      </Card>
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
    async function load() {
      setLoading(true)
      try {
        const res = await fetchArticles({
          category: category !== 'all' ? category : undefined,
          platform: platform !== 'all' ? platform : undefined,
          limit: 30,
        })
        setArticles(res.list)
      } catch (err) {
        console.error('Failed to load articles:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [category, platform])

  const filtered = search
    ? articles.filter(a => a.data?.title?.toLowerCase().includes(search.toLowerCase()))
    : articles

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') params.delete(key)
    else params.set(key, value)
    setSearchParams(params)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">News, Blog & Articles</h1>
        <p className="text-gray-400">The latest from the gaming world — reviews, guides, and breaking news.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">Category:</span>
          </div>
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setFilter('category', c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                category === c ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Platform filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-gray-400 text-sm self-center">Platform:</span>
        {PLATFORMS.map(p => (
          <button
            key={p}
            onClick={() => setFilter('platform', p)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              platform === p ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Articles */}
      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl h-36 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">No articles found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(article => <ArticleCard key={article.id} article={article} />)}
        </div>
      )}
    </div>
  )
}
