import { useLocation, Link } from 'react-router-dom'
import { CheckCircle, Package, MapPin, CreditCard, ArrowRight } from 'lucide-react'

const PAYMENT_LABELS = {
  alipay: '支付宝',
  wechat_pay: '微信支付',
  unionpay: '银联支付',
  cod: '货到付款',
}

export default function OrderSuccess() {
  const { state } = useLocation()
  const order = state?.order
  const fields = order?.data ?? order ?? {}

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      {/* Success icon */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-14 h-14 text-green-500" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">订单提交成功！</h1>
      <p className="text-gray-500 mb-8">感谢您的购买，我们将尽快为您发货</p>

      {order && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-left mb-8 space-y-4">
          {/* Order number */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-red-600" />
              <span className="font-bold text-gray-900">订单编号</span>
            </div>
            <span className="text-gray-600 font-mono text-sm">{fields.order_number || `#${order.id}`}</span>
          </div>

          {/* Shipping */}
          {fields.customer_name && (
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">{fields.customer_name}</p>
                <p className="text-gray-500 text-sm">{fields.phone}</p>
                <p className="text-gray-500 text-sm">
                  {fields.province} {fields.city} {fields.address}
                </p>
              </div>
            </div>
          )}

          {/* Payment */}
          {fields.payment_method && (
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-red-600" />
              <span className="text-gray-700">
                支付方式：<span className="font-semibold">{PAYMENT_LABELS[fields.payment_method] || fields.payment_method}</span>
              </span>
            </div>
          )}

          {/* Items */}
          {fields.items && fields.items.length > 0 && (
            <div className="border-t border-gray-100 pt-4">
              <p className="text-sm font-semibold text-gray-700 mb-3">购买商品</p>
              <div className="space-y-2">
                {fields.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-gray-600 line-clamp-1 flex-1 mr-4">{item.name} ×{item.quantity}</span>
                    <span className="text-gray-900 font-medium flex-shrink-0">¥{item.subtotal?.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Total */}
          {fields.total_amount && (
            <div className="border-t border-gray-100 pt-4 flex justify-between">
              <span className="font-bold text-gray-900">订单总额</span>
              <span className="text-xl font-bold text-red-600">¥{fields.total_amount?.toFixed(2)}</span>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/products"
          className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
        >
          继续购物
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-xl transition-colors"
        >
          返回首页
        </Link>
      </div>

      <p className="text-xs text-gray-400 mt-8">
        如有疑问请拨打客服热线：400-888-8888（7×24小时）
      </p>
    </div>
  )
}
