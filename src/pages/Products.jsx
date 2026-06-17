import React, { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Filter, Loader2, ChevronLeft, ChevronRight } from 'lucide-react'
import { fetchProducts } from '../api/products'
import ProductCard from '../components/products/ProductCard'

const CATEGORIES = ['书写工具', '纸张文具', '办公设备', '收纳整理', '桌面用品', '打印耗材']
const PAGE_SIZE = 12

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '')

  const category = searchParams.get('category') || ''
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '0', 10)

  const loadProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { rows, total: t } = await fetchProducts({ category, search, page, limit: PAGE_SIZE })
      setProducts(rows)
      setTotal(t)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [category, search, page])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  useEffect(() => {
    setSearchInput(searchParams.get('search') || '')
  }, [searchParams])

  const setCategory = (cat) => {
    const params = new URLSearchParams()
    if (cat) params.set('category', cat)
    if (search) params.set('search', search)
    setSearchParams(params)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (category) params.set('category', category)
    if (searchInput.trim()) params.set('search', searchInput.trim())
    setSearchParams(params)
  }

  const setPage = (p) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', String(p))
    setSearchParams(params)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const totalPages = Math.ceil(total / PAGE_SIZE)

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">
          {category ? category : '全部商品'}
        </h1>
        <p className="text-slate-500 text-sm">
          {loading ? '加载中...' : `共 ${total} 件商品`}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="md:w-56 flex-shrink-0">
          {/* Search */}
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="搜索商品..."
                className="w-full pl-3 pr-9 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Category Filter */}
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="font-semibold text-slate-700 text-sm">商品分类</span>
            </div>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setCategory('')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !category ? 'bg-blue-600 text-white font-semibold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  全部分类
                </button>
              </li>
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => setCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      category === cat ? 'bg-blue-600 text-white font-semibold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {loading && (
            <div className="flex justify-center py-24">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
          )}

          {error && (
            <div className="text-center py-12 text-red-600 bg-red-50 rounded-xl">
              <p>加载失败：{error}</p>
              <button onClick={loadProducts} className="mt-3 text-sm text-blue-600 hover:underline">重试</button>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="text-center py-24 text-slate-500">
              <p className="text-lg mb-2">未找到相关商品</p>
              <p className="text-sm">请尝试其他关键词或分类</p>
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 0}
                    className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                        i === page ? 'bg-blue-600 text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage(page + 1)}
                    disabled={page >= totalPages - 1}
                    className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  )
}
