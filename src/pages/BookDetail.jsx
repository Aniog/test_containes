import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingCart, Star, BookOpen, FileText, Globe, Calendar, Hash, ArrowLeft, Check, Loader2 } from 'lucide-react'
import { fetchEbookById } from '../api/ebooks.js'
import { useCart } from '../api/CartContext.jsx'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className={`w-5 h-5 ${i <= Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`} />
      ))}
      <span className="ml-2 text-gray-600 font-medium">{rating?.toFixed(1)}</span>
    </div>
  )
}

export default function BookDetail() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart, isInCart } = useCart()

  useEffect(() => {
    fetchEbookById(id)
      .then(setBook)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
      </div>
    )
  }

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <BookOpen className="w-16 h-16 text-gray-200" />
        <p className="text-gray-500">书籍不存在</p>
        <Link to="/shop" className="text-indigo-600 font-semibold hover:underline">返回书库</Link>
      </div>
    )
  }

  const d = book.data ?? {}
  const inCart = isInCart(book.id)
  const discount = d.original_price && d.original_price > d.price
    ? Math.round((1 - d.price / d.original_price) * 100)
    : null

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-indigo-600 transition-colors">首页</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-indigo-600 transition-colors">书库</Link>
          {d.category && (
            <>
              <span>/</span>
              <Link to={`/shop?category=${d.category}`} className="hover:text-indigo-600 transition-colors">{d.category}</Link>
            </>
          )}
          <span>/</span>
          <span className="text-gray-800 truncate max-w-xs">{d.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cover */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gray-100 mb-4">
                {d.cover_url ? (
                  <img src={d.cover_url} alt={d.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
                    <BookOpen className="w-24 h-24 text-indigo-300" />
                  </div>
                )}
              </div>

              {/* Purchase card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-3xl font-bold text-gray-900">¥{d.price?.toFixed(2)}</span>
                  {d.original_price && d.original_price > d.price && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">¥{d.original_price?.toFixed(2)}</span>
                      <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">省{discount}%</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => addToCart(book)}
                  disabled={inCart}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-base transition-all ${
                    inCart
                      ? 'bg-green-100 text-green-700 cursor-default'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-98 shadow-md hover:shadow-lg'
                  }`}
                >
                  {inCart ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                  {inCart ? '已加入购物车' : '加入购物车'}
                </button>

                {inCart && (
                  <Link to="/cart" className="block text-center mt-3 text-indigo-600 font-semibold text-sm hover:underline">
                    前往购物车结算 →
                  </Link>
                )}

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-600">
                  {d.file_format && (
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span>格式：{d.file_format}</span>
                    </div>
                  )}
                  {d.file_size_mb && (
                    <div className="flex items-center gap-2">
                      <Hash className="w-4 h-4 text-gray-400" />
                      <span>大小：{d.file_size_mb} MB</span>
                    </div>
                  )}
                  {d.language && (
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span>语言：{d.language}</span>
                    </div>
                  )}
                  {d.published_at && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>出版：{d.published_at}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & meta */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-wrap gap-2 mb-3">
                {d.category && (
                  <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">{d.category}</span>
                )}
                {d.is_bestseller && (
                  <span className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">畅销书</span>
                )}
                {d.is_featured && (
                  <span className="bg-purple-50 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">精选推荐</span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{d.title}</h1>
              <p className="text-gray-500 mb-4">作者：<span className="text-gray-800 font-medium">{d.author}</span></p>

              {d.rating && <StarRating rating={d.rating} />}

              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                {d.pages && <span>{d.pages} 页</span>}
                {d.sales_count && <span>{d.sales_count?.toLocaleString()} 人购买</span>}
                {d.isbn && <span>ISBN: {d.isbn}</span>}
              </div>
            </div>

            {/* Description */}
            {d.description && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-3">内容简介</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{d.description}</p>
              </div>
            )}

            {/* Tags */}
            {d.tags && d.tags.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-3">标签</h2>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/shop?search=${encodeURIComponent(tag)}`}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link to="/shop" className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              返回书库
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
