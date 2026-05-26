import React from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ChevronLeft, Trophy } from 'lucide-react'
import { useCart } from '../lib/CartContext'

export default function Cart() {
  const { items, removeItem, updateQty, totalCount, totalPrice, clearCart } = useCart()

  const totalRMB = (totalPrice * 7.2).toFixed(2)
  const shippingRMB = totalPrice > 50 ? 0 : 29.9
  const finalRMB = (parseFloat(totalRMB) + shippingRMB).toFixed(2)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0A0E1A] pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-600" />
          </div>
          <h2 className="text-white text-2xl font-bold mb-3">购物车是空的</h2>
          <p className="text-gray-400 mb-8">快去挑选您喜欢的世界杯周边吧！</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            去购物
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0E1A] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">
            购物车 <span className="text-gray-400 text-xl font-normal">({totalCount} 件)</span>
          </h1>
          <button
            onClick={clearCart}
            className="text-gray-400 hover:text-red-400 text-sm transition-colors flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" /> 清空购物车
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => {
              const { data } = item
              const priceRMB = (data.price * 7.2).toFixed(2)
              const subtotalRMB = (data.price * item.qty * 7.2).toFixed(2)

              return (
                <div key={item.id} className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Trophy className="w-8 h-8 text-gray-600" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm leading-tight mb-1 line-clamp-2">
                      {data.name}
                    </h3>
                    {data.team && (
                      <p className="text-gray-400 text-xs mb-2">{data.team}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-8 h-8 text-white hover:bg-gray-700 transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-white text-sm font-semibold">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-8 h-8 text-white hover:bg-gray-700 transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-bold">¥{subtotalRMB}</div>
                        {item.qty > 1 && (
                          <div className="text-gray-500 text-xs">¥{priceRMB} × {item.qty}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors self-start"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sticky top-24">
              <h2 className="text-white font-bold text-lg mb-6">订单摘要</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">商品小计</span>
                  <span className="text-white">¥{totalRMB}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">运费</span>
                  <span className={shippingRMB === 0 ? 'text-green-400' : 'text-white'}>
                    {shippingRMB === 0 ? '免运费' : `¥${shippingRMB}`}
                  </span>
                </div>
                {shippingRMB > 0 && (
                  <p className="text-gray-500 text-xs">订单满 ¥360 免运费</p>
                )}
                <div className="border-t border-gray-800 pt-3 flex justify-between">
                  <span className="text-white font-semibold">合计</span>
                  <span className="text-yellow-400 font-black text-xl">¥{finalRMB}</span>
                </div>
              </div>

              <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 rounded-lg transition-colors text-base mb-3">
                立即结算
              </button>

              <Link
                to="/shop"
                className="flex items-center justify-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                继续购物
              </Link>

              {/* Trust */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-gray-500 text-xs text-center">🔒 安全支付 · 官方授权 · 正品保障</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
