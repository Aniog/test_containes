import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { createOrder } from '../api/shop'
import { ChevronRight, MapPin, CreditCard, Package, Loader2 } from 'lucide-react'

const PROVINCES = [
  '北京市', '上海市', '天津市', '重庆市', '广东省', '江苏省', '浙江省', '山东省',
  '河南省', '四川省', '湖北省', '湖南省', '河北省', '福建省', '安徽省', '辽宁省',
  '陕西省', '江西省', '广西壮族自治区', '云南省', '黑龙江省', '吉林省', '山西省',
  '贵州省', '内蒙古自治区', '新疆维吾尔自治区', '西藏自治区', '海南省', '甘肃省',
  '宁夏回族自治区', '青海省',
]

const PAYMENT_METHODS = [
  { value: 'alipay', label: '支付宝', icon: '💙' },
  { value: 'wechat_pay', label: '微信支付', icon: '💚' },
  { value: 'unionpay', label: '银联支付', icon: '🔴' },
  { value: 'cod', label: '货到付款', icon: '💵' },
]

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()

  const shippingFee = subtotal >= 99 ? 0 : 10
  const total = subtotal + shippingFee

  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    email: '',
    province: '',
    city: '',
    address: '',
    postal_code: '',
    payment_method: 'alipay',
    notes: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const set = (key, value) => {
    setForm(f => ({ ...f, [key]: value }))
    setErrors(e => ({ ...e, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.customer_name.trim()) e.customer_name = '请输入收货人姓名'
    if (!form.phone.trim()) e.phone = '请输入手机号'
    else if (!/^1[3-9]\d{9}$/.test(form.phone)) e.phone = '请输入有效的手机号'
    if (!form.province) e.province = '请选择省份'
    if (!form.city.trim()) e.city = '请输入城市'
    if (!form.address.trim()) e.address = '请输入详细地址'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (items.length === 0) return

    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setSubmitting(true)
    try {
      const orderItems = items.map(item => ({
        product_id: item.id,
        product_name: item.name,
        price: item.price,
        quantity: item.quantity,
        image_url: item.image_url || '',
      }))

      const orderData = {
        customer_name: form.customer_name,
        phone: form.phone,
        province: form.province,
        city: form.city,
        address: form.address,
        postal_code: form.postal_code || undefined,
        payment_method: form.payment_method,
        notes: form.notes || undefined,
        items: orderItems,
        subtotal,
        shipping_fee: shippingFee,
        total_amount: total,
      }
      if (form.email.trim()) orderData.email = form.email.trim()

      const order = await createOrder(orderData)

      clearCart()
      navigate('/order-success', { state: { order } })
    } catch (err) {
      console.error('Order failed:', err)
      setErrors({ submit: err.message || '下单失败，请重试' })
    } finally {
      setSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg font-medium">购物车是空的</p>
        <button
          onClick={() => navigate('/products')}
          className="mt-4 bg-red-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-red-700 transition-colors"
        >
          去购物
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">确认订单</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping address */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-5 h-5 text-red-600" />
                <h2 className="text-lg font-bold text-gray-900">收货地址</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="收货人姓名" required error={errors.customer_name}>
                  <input
                    type="text"
                    value={form.customer_name}
                    onChange={e => set('customer_name', e.target.value)}
                    placeholder="请输入姓名"
                    className={inputCls(errors.customer_name)}
                  />
                </Field>
                <Field label="手机号" required error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => set('phone', e.target.value)}
                    placeholder="请输入手机号"
                    className={inputCls(errors.phone)}
                  />
                </Field>
                <Field label="电子邮箱" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    placeholder="选填"
                    className={inputCls(errors.email)}
                  />
                </Field>
                <Field label="省份" required error={errors.province}>
                  <select
                    value={form.province}
                    onChange={e => set('province', e.target.value)}
                    className={inputCls(errors.province)}
                  >
                    <option value="">请选择省份</option>
                    {PROVINCES.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field label="城市" required error={errors.city}>
                  <input
                    type="text"
                    value={form.city}
                    onChange={e => set('city', e.target.value)}
                    placeholder="请输入城市"
                    className={inputCls(errors.city)}
                  />
                </Field>
                <Field label="邮政编码" error={errors.postal_code}>
                  <input
                    type="text"
                    value={form.postal_code}
                    onChange={e => set('postal_code', e.target.value)}
                    placeholder="选填"
                    className={inputCls(errors.postal_code)}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="详细地址" required error={errors.address}>
                    <input
                      type="text"
                      value={form.address}
                      onChange={e => set('address', e.target.value)}
                      placeholder="街道、门牌号等"
                      className={inputCls(errors.address)}
                    />
                  </Field>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <CreditCard className="w-5 h-5 text-red-600" />
                <h2 className="text-lg font-bold text-gray-900">支付方式</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PAYMENT_METHODS.map(({ value, label, icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => set('payment_method', value)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      form.payment_method === value
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-2xl">{icon}</span>
                    <span className={`text-sm font-medium ${form.payment_method === value ? 'text-red-600' : 'text-gray-700'}`}>
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">订单备注</h2>
              <textarea
                value={form.notes}
                onChange={e => set('notes', e.target.value)}
                placeholder="选填，如有特殊要求请在此说明"
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Right: order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">订单摘要</h2>

              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center text-xs text-gray-400 overflow-hidden">
                      {item.image_url
                        ? <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                        : item.name?.slice(0, 3)
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">{item.name}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-400">×{item.quantity}</span>
                        <span className="text-sm font-semibold text-red-600">¥{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>商品小计</span>
                  <span>¥{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>运费</span>
                  <span className={shippingFee === 0 ? 'text-green-600 font-medium' : ''}>
                    {shippingFee === 0 ? '免运费' : `¥${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                {shippingFee > 0 && (
                  <p className="text-xs text-gray-400">满¥99免运费，还差¥{(99 - subtotal).toFixed(2)}</p>
                )}
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-100">
                  <span>合计</span>
                  <span className="text-red-600">¥{total.toFixed(2)}</span>
                </div>
              </div>

              {errors.submit && (
                <p className="mt-3 text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{errors.submit}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-5 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    提交中...
                  </>
                ) : (
                  <>
                    提交订单
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">
                提交订单即表示同意《用户协议》和《隐私政策》
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

function inputCls(error) {
  return `w-full border rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
    error ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-red-500'
  }`
}
