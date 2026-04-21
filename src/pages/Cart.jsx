import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Trash2, BookOpen, ArrowLeft, CreditCard, Check } from 'lucide-react'
import { useCart } from '../api/CartContext.jsx'

export default function Cart() {
  const { items, removeFromCart, clearCart, total } = useCart()
  const [ordered, setOrdered] = useState(false)

  const handleCheckout = () => {
    setOrdered(true)
    clearCart()
  }

  if (ordered) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-10 shadow-lg text-center max-w-md w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">订单已提交！</h2>
          <p className="text-gray-500 mb-6">感谢您的购买，您的电子书将在几分钟内发送到您的邮箱。</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
          >
            继续购物
          </Link>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-12 h-12 text-gray-300" />
          </div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">购物车是空的</h2>
          <p className="text-gray-400 mb-6">快去挑选你喜欢的书籍吧！</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            浏览书库
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/shop" className="text-gray-400 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">购物车</h1>
          <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-2.5 py-0.5 rounded-full">{items.length}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items list */}
          <div className="lg:col-span-2 space-y-3">
            {items.map(item => {
              const d = item.data ?? {}
              return (
                <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
                  <Link to={`/book/${item.id}`} className="w-16 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                    {d.cover_url ? (
                      <img src={d.cover_url} alt={d.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-indigo-50">
                        <BookOpen className="w-6 h-6 text-indigo-300" />
                      </div>
                    )}
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link to={`/book/${item.id}`}>
                      <h3 className="font-semibold text-gray-900 truncate hover:text-indigo-600 transition-colors">{d.title}</h3>
                    </Link>
                    <p className="text-sm text-gray-500">{d.author}</p>
                    <div className="flex items-center gap-2 mt-1">
                      {d.category && (
                        <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">{d.category}</span>
                      )}
                      {d.file_format && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{d.file_format}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-lg font-bold text-gray-900">¥{d.price?.toFixed(2)}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">订单摘要</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>书籍数量</span>
                  <span>{items.length} 本</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>小计</span>
                  <span>¥{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>配送费</span>
                  <span className="text-green-600 font-medium">免费</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-base">
                  <span>合计</span>
                  <span className="text-indigo-600 text-xl">¥{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-5 flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                <CreditCard className="w-5 h-5" />
                立即结算
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">支持微信支付、支付宝、银行卡</p>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-gray-400 hover:text-red-500 transition-colors py-2"
                >
                  清空购物车
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
