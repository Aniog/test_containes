import React, { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X, Loader2, BookOpen } from 'lucide-react'
import BookCard from '../components/shop/BookCard.jsx'
import { fetchEbooks } from '../api/ebooks.js'

const CATEGORIES = ['全部', '技术', '商业', '文学', '历史', '科学', '艺术', '教育', '其他']
const SORT_OPTIONS = [
  { value: 'created_at', label: '最新上架' },
  { value: 'sales', label: '销量最高' },
  { value: 'rating', label: '评分最高' },
  { value: 'price_asc', label: '价格从低到高' },
  { value: 'price_desc', label: '价格从高到低' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [books, setBooks] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)

  const category = searchParams.get('category') || '全部'
  const search = searchParams.get('search') || ''
  const sort = searchParams.get('sort') || 'created_at'
  const [localSearch, setLocalSearch] = useState(search)

  const loadBooks = useCallback(async (pg = 0) => {
    setLoading(true)
    try {
      const result = await fetchEbooks({ category, search, sort, page: pg })
      if (pg === 0) {
        setBooks(result.books)
      } else {
        setBooks(prev => [...prev, ...result.books])
      }
      setTotal(result.total)
      setPage(pg)
    } catch (err) {
      console.error('Failed to load books:', err)
    } finally {
      setLoading(false)
    }
  }, [category, search, sort])

  useEffect(() => {
    setLocalSearch(search)
    loadBooks(0)
  }, [category, search, sort])

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value && value !== '全部') {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    params.delete('page')
    setSearchParams(params)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    updateParam('search', localSearch)
  }

  const clearSearch = () => {
    setLocalSearch('')
    updateParam('search', '')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">书库</h1>

          {/* Search */}
          <form onSubmit={handleSearch} className="relative max-w-lg mb-4">
            <input
              type="text"
              value={localSearch}
              onChange={e => setLocalSearch(e.target.value)}
              placeholder="搜索书名、作者..."
              className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            {localSearch && (
              <button type="button" onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </form>

          {/* Filters row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => updateParam('category', cat)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    category === cat
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="ml-auto flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-gray-400" />
              <select
                value={sort}
                onChange={e => updateParam('sort', e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-700"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {search && (
          <p className="text-sm text-gray-500 mb-4">
            搜索 "<span className="font-semibold text-gray-800">{search}</span>" 的结果：共 {total} 本
          </p>
        )}

        {loading && page === 0 ? (
          <div className="flex justify-center py-24">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
          </div>
        ) : books.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <BookOpen className="w-16 h-16 text-gray-200 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">暂无相关书籍</h3>
            <p className="text-gray-400 text-sm">试试其他关键词或分类</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {books.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>

            {books.length < total && (
              <div className="text-center mt-10">
                <button
                  onClick={() => loadBooks(page + 1)}
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-60"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  加载更多
                </button>
                <p className="text-sm text-gray-400 mt-2">已显示 {books.length} / {total} 本</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
