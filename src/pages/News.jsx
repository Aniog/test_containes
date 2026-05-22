import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, Eye, ArrowRight } from 'lucide-react'
import { client, getRows, getSchemaData } from '../api/client.js'
import { PlatformBadge, CategoryBadge, LoadingSpinner } from '../components/ui/GameUI.jsx'
import { formatDistanceToNow, format } from 'date-fns'

const CATEGORIES = ['all', 'news', 'blog', 'review', 'guide']
const PLATFORMS = ['all', 'steam', 'epic', 'nintendo', 'playstation', 'xbox', 'general']

function ArticleCard({ article, featured = false }) {
  const d = getSchemaData(article)
  if (featured) {
    return (
      <Link to={`/news/${article.id}`} className="group col-span-full md:col-span-2 bg-[#1a1d27] border border-[#2a2d3e] rounded-2xl overflow-hidden hover:border-[#4f8ef7]/50 hover:shadow-xl hover:shadow-[#4f8ef7]/10 transition-all duration-200">
        <div className="md:flex">
          <div className="md:w-2/5 aspect-video md:aspect-auto bg-gradient-to-br from-[#1f2235] to-[#13161e] relative flex items-center justify-center min-h-[200px]">
            <div className="text-center px-6">
              <CategoryBadge category={d.category} />
              {d.platform && d.platform !== 'general' && (
                <div className="mt-2"><PlatformBadge platform={d.platform} /></div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1d27] hidden md:block" />
          </div>
          <div className="p-6 md:w-3/5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <CategoryBadge category={d.category} />
              {d.platform && d.platform !== 'general' && <PlatformBadge platform={d.platform} size="xs" />}
              <span className="bg-[#4f8ef7] text-white text-xs font-bold px-2 py-0.5 rounded">FEATURED</span>
            </div>
            <h2 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 group-hover:text-[#4f8ef7] transition-colors">
              {d.title}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{d.summary}</p>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>By {d.author}</span>
              <div className="flex items-center gap-3">
                {d.views && (
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {d.views?.toLocaleString()}
                  </span>
                )}
                <span>{d.published_at ? formatDistanceToNow(new Date(d.published_at), { addSuffix: true }) : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/news/${article.id}`} className="group bg-[#1a1d27] border border-[#2a2d3e] rounded-xl overflow-hidden hover:border-[#4f8ef7]/50 hover:shadow-lg hover:shadow-[#4f8ef7]/10 transition-all duration-200">
      <div className="aspect-video bg-gradient-to-br from-[#1f2235] to-[#13161e] relative flex items-center justify-center">
        <div className="text-center px-4">
          <CategoryBadge category={d.category} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d27] via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <CategoryBadge category={d.category} />
          {d.platform && d.platform !== 'general' && <PlatformBadge platform={d.platform} size="xs" />}
        </div>
        <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-[#4f8ef7] transition-colors line-clamp-2">
          {d.title}
        </h3>
        <p className="text-slate-400 text-xs line-clamp-2 mb-3">{d.summary}</p>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{d.author}</span>
          <div className="flex items-center gap-2">
            {d.views && (
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" /> {d.views?.toLocaleString()}
              </span>
            )}
            <span>{d.published_at ? formatDistanceToNow(new Date(d.published_at), { addSuffix: true }) : ''}</span>
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
    async function load() {
      setLoading(true)
      let query = client.from('Articles').select('*').order('published_at', { ascending: false }).limit(30)
      if (category !== 'all') query = query.eq('category', category)
      if (platform !== 'all') query = query.eq('platform', platform)
      const { data } = await query
      setArticles(getRows(data))
      setLoading(false)
    }
    load()
  }, [category, platform])

  const filtered = search
    ? articles.filter(a => {
        const d = getSchemaData(a)
        return d.title?.toLowerCase().includes(search.toLowerCase()) ||
          d.summary?.toLowerCase().includes(search.toLowerCase())
      })
    : articles

  const featured = filtered.find(a => getSchemaData(a).is_featured)
  const rest = filtered.filter(a => a !== featured)

  function setFilter(key, val) {
    const p = new URLSearchParams(searchParams)
    if (val === 'all') p.delete(key)
    else p.set(key, val)
    setSearchParams(p)
  }

  return (
    <div className="min-h-screen bg-[#0d0f14]">
      {/* Header */}
      <div className="bg-[#13161e] border-b border-[#2a2d3e]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">News, Blog & Reviews</h1>
          <p className="text-slate-400">The latest from the gaming world across all platforms</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#1a1d27] border border-[#2a2d3e] text-white placeholder-slate-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#4f8ef7] transition-colors"
            />
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setFilter('category', c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  category === c
                    ? 'bg-[#4f8ef7] text-white'
                    : 'bg-[#1a1d27] text-slate-400 border border-[#2a2d3e] hover:text-white hover:border-[#4f8ef7]/50'
                }`}
              >
                {c === 'all' ? 'All' : c}
              </button>
            ))}
          </div>

          {/* Platform filter */}
          <div className="flex gap-2 flex-wrap">
            {PLATFORMS.map(p => (
              <button
                key={p}
                onClick={() => setFilter('platform', p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  platform === p
                    ? 'bg-[#4f8ef7] text-white'
                    : 'bg-[#1a1d27] text-slate-400 border border-[#2a2d3e] hover:text-white hover:border-[#4f8ef7]/50'
                }`}
              >
                {p === 'all' ? 'All Platforms' : p === 'playstation' ? 'PS' : p === 'nintendo' ? 'NS' : p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-slate-500 text-sm mb-6">{filtered.length} article{filtered.length !== 1 ? 's' : ''} found</p>

        {loading ? <LoadingSpinner /> : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No articles found</p>
            <p className="text-slate-600 text-sm mt-2">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured && <ArticleCard article={featured} featured />}
            {rest.map(a => <ArticleCard key={a.id} article={a} />)}
          </div>
        )}
      </div>
    </div>
  )
}
