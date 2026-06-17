import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react'
import { useCart } from '../lib/CartContext'
import { createOrder } from '../api/products'

function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
      <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <ShoppingBag className="w-6 h-6 text-slate-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-800 text-sm line-clamp-2">{item.name}</p>
        {item.brand && <p className="text-xs text-slate-500 mt-0.5">{item.brand}</p>}
        <p className="text-red-600 font-bold mt-1">¥{item.price?.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600"
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="w-8 text-center text-sm font-semibold text-slate-800">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="font-bold text-slate-800 text-sm">¥{(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-400 hover:text-red-600 mt-1 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

const INITIAL_FORM = { name: '', email: '', phone: '', address: '', notes: '' }

export default function Cart() {
  const { items, totalPrice, totalItems, clearCart } = useCart()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(null)
  const [submitError, setSubmitError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = '请输入姓名'
    if (!form.email.trim()) errs.email = '请输入邮箱'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = '邮箱格式不正确'
    if (!form.address.trim()) errs.address = '请输入收货地址'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setSubmitting(true)
    setSubmitError(null)

    try {
      const orderNumber = `ORD-${Date.now()}`
      const orderItems = items.map(item => ({
        product_id: String(item.id),
        product_name: item.name,
        quantity: item.quantity,
        unit_price: item.price,
        subtotal: item.price * item.quantity,
      }))

      const order = await createOrder({
        order_number: orderNumber,
        customer_name: form.name,
        customer_email: form.email,
        customer_phone: form.phone,
        shipping_address: form.address,
        items: orderItems,
        total_amount: totalPrice,
        notes: form.notes,
        status: 'pending',
      })

      setOrderSuccess({ orderNumber, total: totalPrice })
      clearCart()
      setForm(INITIAL_FORM)
    } catch (err) {
      setSubmitError(err.message || '提交订单失败，请重试')
    } finally {
      setSubmitting(false)
    }
  }

  if (orderSuccess) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">订单提交成功！</h2>
          <p className="text-slate-600 mb-1">订单编号：<span className="font-semibold text-blue-600">{orderSuccess.orderNumber}</span></p>
          <p className="text-slate-600 mb-6">订单金额：<span className="font-bold text-red-600">¥{orderSuccess.total.toFixed(2)}</span></p>
          <p className="text-slate-500 text-sm mb-8">我们将尽快处理您的订单，感谢您的购买！</p>
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
          >
            继续购物
          </Link>
        </div>
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12">
          <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-700 mb-2">购物车是空的</h2>
          <p className="text-slate-500 mb-6">快去挑选您喜欢的办公用品吧！</p>
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> 去购物
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/products" className="text-slate-500 hover:text-blue-600 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-slate-800">购物车</h1>
        <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-2.5 py-0.5 rounded-full">{totalItems} 件</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <h2 className="font-semibold text-slate-700 mb-4 text-sm">商品清单</h2>
            {items.map(item => <CartItem key={item.id} item={item} />)}
          </div>
        </div>

        {/* Order Form + Summary */}
        <div className="lg:w-96 flex-shrink-0 space-y-4">
          {/* Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <h2 className="font-semibold text-slate-700 mb-4 text-sm">订单摘要</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>商品小计</span>
                <span>¥{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>运费</span>
                <span className="text-green-600">{totalPrice >= 99 ? '免费' : '¥10.00'}</span>
              </div>
              {totalPrice < 99 && (
                <p className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                  再购 ¥{(99 - totalPrice).toFixed(2)} 可享免运费
                </p>
              )}
              <div className="border-t border-slate-100 pt-2 flex justify-between font-bold text-slate-800">
                <span>合计</span>
                <span className="text-red-600 text-lg">¥{(totalPrice + (totalPrice >= 99 ? 0 : 10)).toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <h2 className="font-semibold text-slate-700 mb-4 text-sm">收货信息</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">姓名 *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="请输入收货人姓名"
                  className={`w-full px-3 py-2 border rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">邮箱 *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="请输入邮箱地址"
                  className={`w-full px-3 py-2 border rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">手机号</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="请输入手机号"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">收货地址 *</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  rows={2}
                  placeholder="请输入详细收货地址"
                  className={`w-full px-3 py-2 border rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${errors.address ? 'border-red-400' : 'border-slate-200'}`}
                />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">备注</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={onChange}
                  rows={2}
                  placeholder="特殊要求或备注（选填）"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {submitError && (
                <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> 提交中...</>
                ) : (
                  '提交订单'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
