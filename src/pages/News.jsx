import { useState, useEffect, useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { Search, Clock, User, Filter } from 'lucide-react'
import { Card, Badge, Input, Select, Skeleton } from '@/components/ui/index'
import { CATEGORY_COLORS, CATEGORY_LABELS, PLATFORMS } from '@/lib/constants'
import { fetchArticles } from '@/api/gameApi'

const CATEGORIES = ['all', 'news', 'blog', 'review', 'guide']

function ArticleCard({ article }) {
  const d = article.data
  const timeAgo = d.published_at
    ? formatDistanceToNow(parseISO(d.published_at), { addSuffix: true })
    : 'Recently'

  return (
    <Link to={`/news/${article.id}`}>
      <Card className="group hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col h-full">
        <div className="relative overflow-hidden">
          <img
            src={d.cover_image_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800'}
            alt={d.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${CATEGORY_COLORS[d.category] || 'bg-gray-700 text-white'}`}>
              {CATEGORY_LABELS[d.category] || d.category}
            </span>
            {d.platform && d.platform !== 'General' && (
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-gray-900/80 text-gray-300 border border-gray-700">
                {d.platform}
              </span>
            )}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-white font-semibold leading-snug mb-2 line-clamp-2 group-hover:text-indigo-300 transition-colors">
            {d.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">{d.summary}</p>
          <div className="mt-auto flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span className="text-gray-400">{d.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{timeAgo}</span>
            </div>
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

  const loadArticles = useCallback(async () => {
    setLoading(true)
    console.log('[News] Loading articles...', { category, platform })
    try {
      const { list } = await fetchArticles({
        category: category !== 'all' ? category : undefined,
        platform: platform !== 'all' ? platform : undefined,
        limit: 30,
      })
      setArticles(list)
      console.log('[News] Articles loaded:', list.length)
    } catch (err) {
      console.error('[News] Error loading articles:', err)
    } finally {
      setLoading(false)
    }
  }, [category, platform])

  useEffect(() => {
    loadArticles()
  }, [loadArticles])

  const filtered = articles.filter((a) =>
    search ? a.data.title?.toLowerCase().includes(search.toLowerCase()) : true
  )

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') params.delete(key)
    else params.set(key, value)
    setSearchParams(params)
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">News & Articles</h1>
          <p className="text-gray-400">The latest gaming news, reviews, and guides from across all platforms</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={category} onChange={(e) => updateFilter('category', e.target.value)} className="sm:w-44">
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c === 'all' ? 'All Categories' : CATEGORY_LABELS[c] || c}</option>
            ))}
          </Select>
          <Select value={platform} onChange={(e) => updateFilter('platform', e.target.value)} className="sm:w-44">
            <option value="all">All Platforms</option>
            {PLATFORMS.map((p) => <option key={p} value={p}>{p}</option>)}
            <option value="General">General</option>
          </Select>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => updateFilter('category', c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                category === c
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {c === 'all' ? 'All' : CATEGORY_LABELS[c] || c}
            </button>
          ))}
        </div>

        {/* Results count */}
        {!loading && (
          <p className="text-gray-500 text-sm mb-6">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''} found
          </p>
        )}

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <Skeleton className="h-48 w-full rounded-none" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2 mt-4" />
                </div>
              </Card>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No articles found.</p>
            <p className="text-gray-600 text-sm mt-2">Try adjusting your filters.</p>
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
