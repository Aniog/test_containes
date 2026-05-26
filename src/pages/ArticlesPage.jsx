import React, { useEffect, useState, useCallback } from 'react'
import { Search, BookOpen, X } from 'lucide-react'
import { fetchArticles } from '../api/gameApi'
import ArticleCard from '../components/articles/ArticleCard'
import { LoadingScreen } from '../components/ui/Spinner'
import { Button } from '../components/ui/Button'

const CATEGORIES = ['All', 'News', 'Review', 'Guide', 'Feature', 'Opinion']

export default function ArticlesPage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const loadArticles = useCallback(async () => {
    setLoading(true)
    try {
      const params = {}
      if (category !== 'All') params.category = category
      if (search) params.search = search
      const data = await fetchArticles({ ...params, limit: 50 })
      setArticles(data)
    } catch (err) {
      console.error('Failed to load articles:', err)
    } finally {
      setLoading(false)
    }
  }, [category, search])

  useEffect(() => { loadArticles() }, [loadArticles])

  const featuredArticle = articles.find(a => a.data.featured)
  const regularArticles = articles.filter(a => !a.data.featured || a.id !== featuredArticle?.id)

  const clearFilters = () => {
    setCategory('All')
    setSearch('')
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-10">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-7 h-7 text-violet-600" />
            <h1 className="text-4xl font-black text-slate-900">News & Articles</h1>
          </div>
          <p className="text-slate-500">Latest gaming news, reviews, guides, and more</p>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-violet-500 text-sm shadow-sm"
            />
          </div>
          {(search || category !== 'All') && (
            <Button variant="ghost" onClick={clearFilters}>
              <X className="w-4 h-4" /> Clear
            </Button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                category === c ? 'bg-violet-600 text-white' : 'bg-white text-slate-600 border border-slate-300 hover:text-slate-900 hover:border-slate-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {loading ? (
          <LoadingScreen />
        ) : articles.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📰</div>
            <p className="text-slate-600 text-lg font-medium">No articles found</p>
            <Button className="mt-4" onClick={clearFilters}>Clear Filters</Button>
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featuredArticle && category === 'All' && !search && (
              <div className="mb-8">
                <ArticleCard article={featuredArticle} featured />
              </div>
            )}

            {/* Article Grid */}
            <p className="text-slate-500 text-sm mb-5">{regularArticles.length} article{regularArticles.length !== 1 ? 's' : ''}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {regularArticles.map(article => <ArticleCard key={article.id} article={article} />)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
