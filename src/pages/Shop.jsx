import React, { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { fetchProducts } from '../api/products'
import ProductCard from '../components/shop/ProductCard'
import ShopFilters from '../components/shop/ShopFilters'

const LIMIT = 12

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '')

  const category = searchParams.get('category') || 'all'
  const search = searchParams.get('search') || ''
  const team = searchParams.get('team') || ''
  const page = parseInt(searchParams.get('page') || '0', 10)

  const loadProducts = useCallback(async () => {
    setLoading(true)
    try {
      const { rows, total: t } = await fetchProducts({
        category: category === 'all' ? null : category,
        search: search || team,
        page,
        limit: LIMIT,
      })
      setProducts(rows)
      setTotal(t)
      console.log('Loaded products:', rows.length, 'total:', t)
    } catch (err) {
      console.error('Failed to load products:', err)
    } finally {
      setLoading(false)
    }
  }, [category, search, team, page])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (searchInput.trim()) {
      params.set('search', searchInput.trim())
    } else {
      params.delete('search')
    }
    params.delete('page')
    setSearchParams(params)
  }

  const clearSearch = () => {
    setSearchInput('')
    const params = new URLSearchParams(searchParams)
    params.delete('search')
    params.delete('team')
    setSearchParams(params)
  }

  const totalPages = Math.ceil(total / LIMIT)

  const goToPage = (p) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', p)
    setSearchParams(params)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeFilter = search || team || (category !== 'all' ? category : null)

  return (
    <div className="min-h-screen bg-[#0A0E1A] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {team ? `${team} 专区` : '全部商品'}
          </h1>
          <p className="text-gray-400">
            {loading ? '加载中...' : `共 ${total} 件商品`}
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <form onSubmit={handleSearch} className="flex gap-2 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="搜索商品名称..."
                className="w-full bg-gray-800 border border-gray-700 text-white text-sm pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:border-red-600 placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              搜索
            </button>
            {activeFilter && (
              <button
                type="button"
                onClick={clearSearch}
                className="flex items-center gap-1 border border-gray-700 hover:border-gray-500 text-gray-300 px-3 py-2.5 rounded-lg text-sm transition-colors"
              >
                <X className="w-4 h-4" /> 清除
              </button>
            )}
          </form>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <ShopFilters />
        </div>

        {/* Active filters display */}
        {(search || team) && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-gray-400 text-sm">筛选：</span>
            {search && (
              <span className="bg-red-900/30 border border-red-800/50 text-red-300 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                搜索: {search}
              </span>
            )}
            {team && (
              <span className="bg-blue-900/30 border border-blue-800/50 text-blue-300 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                球队: {team}
              </span>
            )}
          </div>
        )}

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(LIMIT)].map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-xl overflow-hidden animate-pulse">
                <div className="aspect-square bg-gray-800" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-800 rounded w-3/4" />
                  <div className="h-4 bg-gray-800 rounded w-1/2" />
                  <div className="h-6 bg-gray-800 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">⚽</div>
            <h3 className="text-white text-xl font-semibold mb-2">暂无商品</h3>
            <p className="text-gray-400">尝试调整筛选条件或搜索关键词</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 0}
              className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-700 transition-colors"
            >
              上一页
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                  i === page
                    ? 'bg-red-700 text-white'
                    : 'bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(page + 1)}
              disabled={page >= totalPages - 1}
              className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-700 transition-colors"
            >
              下一页
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
