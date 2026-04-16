import React, { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { fetchBooks } from '../api/books'
import BookCard from '../components/books/BookCard'

const CATEGORIES = ['全部', '文学', '历史', '科学', '哲学', '艺术', '社科', '经济', '心理', '传记', '其他']

export default function Books() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [books, setBooks] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  const category = searchParams.get('category') || '全部'
  const search = searchParams.get('search') || ''

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const result = await fetchBooks({ category, search })
      console.log('[Books] loaded:', result.books.length, 'total:', result.total)
      setBooks(result.books)
      setTotal(result.total)
    } catch (err) {
      console.error('[Books] load error:', err)
    } finally {
      setLoading(false)
    }
  }, [category, search])

  useEffect(() => {
    load()
  }, [load])

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === '全部') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    params.delete('search')
    setSearchParams(params)
  }

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('search')
    setSearchParams(params)
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl font-light text-foreground mb-2">
            {search ? `"${search}" 的搜索结果` : category === '全部' ? '全部书目' : category}
          </h1>
          <p className="font-sans text-sm text-muted-foreground">
            {loading ? '加载中...' : `共 ${books.length} 本`}
          </p>
        </div>

        {/* Search active indicator */}
        {search && (
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full font-sans text-sm text-foreground">
              搜索：{search}
              <button onClick={clearSearch} className="text-muted-foreground hover:text-foreground bg-transparent border-0 p-0 ml-1">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-48 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                <span className="font-sans text-xs text-muted-foreground tracking-widest uppercase">分类</span>
              </div>
              <ul className="space-y-1">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-sans text-sm transition-colors border-0 ${
                        category === cat
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary bg-transparent'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Book Grid */}
          <main className="flex-1">
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-muted rounded-lg mb-3" />
                    <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : books.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-xl text-muted-foreground mb-2">暂无相关书目</p>
                <p className="font-sans text-sm text-muted-foreground/70">换个关键词试试？</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {books.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
