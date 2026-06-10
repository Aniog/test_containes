import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X, Loader2 } from 'lucide-react'
import ProductCard from '../components/products/ProductCard'
import { fetchProducts } from '../api/shop'

const CATEGORIES = [
  { label: '全部', value: 'all' },
  { label: '电子产品', value: 'electronics' },
  { label: '时尚服饰', value: 'fashion' },
  { label: '食品', value: 'food' },
  { label: '美妆护肤', value: 'beauty' },
  { label: '家居用品', value: 'home' },
  { label: '运动户外', value: 'sports' },
  { label: '图书', value: 'books' },
  { label: '玩具', value: 'toys' },
]

const SORT_OPTIONS = [
  { label: '综合排序', value: 'default' },
  { label: '价格从低到高', value: 'price_asc' },
  { label: '价格从高到低', value: 'price_desc' },
  { label: '好评优先', value: 'rating' },
]

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [localSearch, setLocalSearch] = useState(searchParams.get('search') || '')

  const category = searchParams.get('category') || 'all'
  const search = searchParams.get('search') || ''
  const sort = searchParams.get('sort') || 'default'

  const loadProducts = useCallback(async () => {
    setLoading(true)
    try {
      const { list, total: t } = await fetchProducts({ category, search })
      let sorted = [...list]
      if (sort === 'price_asc') sorted.sort((a, b) => (a.data?.price ?? a.price) - (b.data?.price ?? b.price))
      if (sort === 'price_desc') sorted.sort((a, b) => (b.data?.price ?? b.price) - (a.data?.price ?? a.price))
      if (sort === 'rating') sorted.sort((a, b) => (b.data?.rating ?? b.rating ?? 0) - (a.data?.rating ?? a.rating ?? 0))
      setProducts(sorted)
      setTotal(t)
    } catch (err) {
      console.error('Failed to load products:', err)
    } finally {
      setLoading(false)
    }
  }, [category, search, sort])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value && value !== 'all' && value !== 'default') {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    setSearchParams(next)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setParam('search', localSearch)
  }

  const clearSearch = () => {
    setLocalSearch('')
    setParam('search', '')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {category !== 'all'
            ? CATEGORIES.find((c) => c.value === category)?.label || '商品列表'
            : search
            ? `"${search}" 的搜索结果`
            : '全部商品'}
        </h1>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="relative max-w-lg mb-4">
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="搜索商品..."
            className="w-full pl-4 pr-20 py-2.5 border-2 border-gray-200 rounded-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
          />
          {localSearch && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setParam('category', cat.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                category === cat.value
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sort + count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            共 <span className="font-semibold text-gray-900">{products.length}</span> 件商品
          </p>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            <select
              value={sort}
              onChange={(e) => setParam('sort', e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:border-red-500"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products grid */}
      {loading ? (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-10 h-10 text-red-600 animate-spin" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-24">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-500 text-lg font-medium">没有找到相关商品</p>
          <p className="text-gray-400 text-sm mt-1">请尝试其他关键词或分类</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
