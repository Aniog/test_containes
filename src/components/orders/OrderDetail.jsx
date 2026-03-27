import React from 'react'
import { ArrowLeft, User, Phone, Mail, MapPin, Package, Truck, CreditCard, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const OrderDetail = ({ order, onBack }) => {
  if (!order) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">请选择一个订单查看详情</p>
      </div>
    )
  }

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getStatusText = (status) => {
    const texts = {
      pending: '待处理',
      confirmed: '已确认',
      shipped: '已发货',
      delivered: '已送达',
      cancelled: '已取消'
    }
    return texts[status] || status
  }

  const getPaymentStatusIcon = (result) => {
    switch (result) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-500" />
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-gray-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />
    }
  }

  const getPaymentMethodText = (method) => {
    const methods = {
      credit_card: '信用卡',
      debit_card: '借记卡',
      alipay: '支付宝',
      wechat_pay: '微信支付',
      bank_transfer: '银行转账'
    }
    return methods[method] || method
  }

  const getPaymentResultText = (result) => {
    const results = {
      success: '成功',
      failed: '失败',
      pending: '处理中',
      cancelled: '已取消'
    }
    return results[result] || result
  }

  const orderData = order.data || {}

  return (
    <div className="space-y-6">
      {/* 头部 */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回订单列表
        </button>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(orderData.order_status)}`}>
          {getStatusText(orderData.order_status)}
        </span>
      </div>

      {/* 订单基本信息 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">订单信息</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">订单号</p>
            <p className="font-medium">{orderData.order_number}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">下单时间</p>
            <p className="font-medium">
              {orderData.order_date ? new Date(orderData.order_date).toLocaleString('zh-CN') : '未知'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">订单总额</p>
            <p className="font-medium text-lg text-green-600">
              ¥{orderData.total_amount?.toFixed(2) || '0.00'}
            </p>
          </div>
        </div>
      </div>

      {/* 用户信息 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <User className="w-5 h-5" />
          用户信息
        </h3>
        {orderData.user_info ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-400" />
              <span>{orderData.user_info.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <span>{orderData.user_info.phone}</span>
            </div>
            {orderData.user_info.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{orderData.user_info.email}</span>
              </div>
            )}
            <div className="flex items-start gap-2 md:col-span-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-1" />
              <span>{orderData.user_info.address}</span>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">无用户信息</p>
        )}
      </div>

      {/* 商品列表 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Package className="w-5 h-5" />
          商品列表
        </h3>
        {orderData.product_list && orderData.product_list.length > 0 ? (
          <div className="space-y-4">
            {orderData.product_list.map((product, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{product.product_name}</h4>
                    <p className="text-sm text-gray-500">SKU: {product.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">¥{product.price?.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">数量: {product.quantity}</p>
                  </div>
                </div>
                {product.discount_info && product.discount_info.discount_type !== 'none' && (
                  <div className="mt-2 p-2 bg-green-50 rounded text-sm">
                    <p className="text-green-700">
                      优惠: {product.discount_info.discount_description || '优惠信息'}
                      {product.discount_info.discount_type === 'percentage' && 
                        ` (${product.discount_info.discount_value}%)`}
                      {product.discount_info.discount_type === 'fixed_amount' && 
                        ` (¥${product.discount_info.discount_value})`}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">无商品信息</p>
        )}
      </div>

      {/* 物流信息 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Truck className="w-5 h-5" />
          物流信息
        </h3>
        {orderData.logistics_info && orderData.logistics_info.length > 0 ? (
          <div className="space-y-4">
            {orderData.logistics_info.map((logistics, index) => (
              <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium">{logistics.status}</p>
                    <p className="text-sm text-gray-500">
                      {logistics.timestamp ? new Date(logistics.timestamp).toLocaleString('zh-CN') : ''}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{logistics.location}</p>
                  {logistics.description && (
                    <p className="text-sm text-gray-500">{logistics.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">暂无物流信息</p>
        )}
      </div>

      {/* 支付信息 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          支付信息
        </h3>
        {orderData.payment_info && orderData.payment_info.length > 0 ? (
          <div className="space-y-4">
            {orderData.payment_info.map((payment, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {getPaymentStatusIcon(payment.result)}
                    <span className="font-medium">
                      {getPaymentMethodText(payment.payment_method)}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">¥{payment.amount?.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">
                      {getPaymentResultText(payment.result)}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {payment.timestamp ? new Date(payment.timestamp).toLocaleString('zh-CN') : ''}
                  </span>
                  {payment.transaction_id && (
                    <span>交易ID: {payment.transaction_id}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">暂无支付信息</p>
        )}
      </div>
    </div>
  )
}

export default OrderDetail