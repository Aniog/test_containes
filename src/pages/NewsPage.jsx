import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Clock, Eye, Filter } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { articles } from '../data/articles'
import { PLATFORMS, CATEGORIES } from '../data/platforms'
import PlatformBadge from '../components/ui/PlatformBadge'
import CategoryBadge from '../components/ui/CategoryBadge'

function ArticleCard({ article, featured = false }) {
  return (
    <Link
      to={`/news/${article.id}`}
      className={`group bg-white border border-slate-200 hover:border-green-400 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-green-100 flex ${featured ? 'flex-col' : 'flex-col sm:flex-row'}`}
    >
      <div className={`overflow-hidden flex-shrink-0 ${featured ? 'h-52' : 'h-44 sm:w-48 sm:h-auto'}`}>
        <img
          src={article.cover_image_url}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            <CategoryBadge category={article.category} />
            <PlatformBadge platform={article.platform} />
          </div>
          <h3 className={`text-slate-900 font-bold leading-snug mb-2 group-hover:text-green-600 transition-colors ${featured ? 'text-lg' : 'text-base'}`}>
            {article.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{article.summary}</p>
        </div>
        <div className="flex items-center gap-4 mt-4 text-xs text-slate-400">
          <span className="font-medium text-slate-600">{article.author}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {formatDistanceToNow(new Date(article.published_at), { addSuffix: true })}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            {article.view_count.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function NewsPage() {
  const [search, setSearch] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filtered = useMemo(() => {
    return articles.filter(a => {
      const matchesPlatform = selectedPlatform === 'all' || a.platform === selectedPlatform
      const matchesCategory = selectedCategory === 'all' || a.category === selectedCategory
      const matchesSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.summary.toLowerCase().includes(search.toLowerCase()) ||
        a.author.toLowerCase().includes(search.toLowerCase())
      return matchesPlatform && matchesCategory && matchesSearch
    })
  }, [search, selectedPlatform, selectedCategory])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">News & Articles</h1>
        <p className="text-slate-500">The latest gaming news, reviews, and in-depth articles</p>
      </div>

      {/* Filters */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 space-y-4 shadow-sm">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles, news, reviews..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-green-500 transition-colors"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Platform filter */}
          <div className="flex-1">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Platform</p>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlatform(p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedPlatform === p.id
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category filter */}
          <div className="flex-1">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Category</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedCategory === c.id
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-slate-500 text-sm mb-6">
        Showing <span className="text-slate-900 font-medium">{filtered.length}</span> articles
      </p>

      {/* Articles grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-slate-900 font-semibold text-lg mb-2">No articles found</h3>
          <p className="text-slate-500 text-sm">Try adjusting your filters or search query</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((article, i) => (
            <ArticleCard key={article.id} article={article} featured={i === 0 && filtered.length > 1} />
          ))}
        </div>
      )}
    </div>
  )
}
