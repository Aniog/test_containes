import React, { useEffect, useState } from 'react'
import { supabase } from "@/api/postgrest-client.js"
import { Loader2, AlertCircle, Package, User, CreditCard, Truck } from 'lucide-react'

const OrderList = ({ onSelectOrder }) => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Order')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setOrders(dataPayload.list || [])

    } catch (err) {
      console.error('获取订单失败:', err)
      setError(err.message || '获取订单时发生错误')
    } finally {
      setLoading(false)
    }
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

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
        <span className="ml-2 text-gray-600">加载订单中...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
        <AlertCircle size={20} />
        <span>错误: {error}</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">订单列表</h2>
        <div className="text-sm text-gray-500">
          共 {orders.length} 个订单
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">暂无订单</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {orders.map(order => (
            <div 
              key={order.id} 
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onSelectOrder && onSelectOrder(order)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    订单号: {order.data?.order_number}
                  </h3>
                  <p className="text-sm text-gray-500">
                    下单时间: {order.data?.order_date ? new Date(order.data.order_date).toLocaleString('zh-CN') : '未知'}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.data?.order_status)}`}>
                  {getStatusText(order.data?.order_status)}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    {order.data?.user_info?.name || '未知用户'}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    {order.data?.product_list?.length || 0} 件商品
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 font-medium">
                    ¥{order.data?.total_amount?.toFixed(2) || '0.00'}
                  </span>
                </div>
              </div>

              {order.data?.logistics_info && order.data.logistics_info.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="w-4 h-4 text-gray-400" />
                    <span>
                      最新物流: {order.data.logistics_info[order.data.logistics_info.length - 1]?.status}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OrderList