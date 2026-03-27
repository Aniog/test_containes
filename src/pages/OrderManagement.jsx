import React, { useState } from 'react'
import OrderList from '@/components/orders/OrderList'
import OrderDetail from '@/components/orders/OrderDetail'
import CreateOrderForm from '@/components/orders/CreateOrderForm'
import { Plus, ShoppingCart } from 'lucide-react'

const OrderManagement = () => {
  const [currentView, setCurrentView] = useState('list') // 'list', 'detail', 'create'
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleSelectOrder = (order) => {
    setSelectedOrder(order)
    setCurrentView('detail')
  }

  const handleBackToList = () => {
    setCurrentView('list')
    setSelectedOrder(null)
  }

  const handleCreateOrder = () => {
    setCurrentView('create')
  }

  const handleOrderCreated = (newOrder) => {
    setCurrentView('list')
    setRefreshTrigger(prev => prev + 1) // 触发列表刷新
  }

  const handleCancelCreate = () => {
    setCurrentView('list')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">电商订单管理系统</h1>
            </div>
            
            {currentView === 'list' && (
              <button
                onClick={handleCreateOrder}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                创建订单
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 主内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'list' && (
          <OrderList 
            onSelectOrder={handleSelectOrder}
            key={refreshTrigger} // 用于触发重新渲染
          />
        )}
        
        {currentView === 'detail' && (
          <OrderDetail 
            order={selectedOrder}
            onBack={handleBackToList}
          />
        )}
        
        {currentView === 'create' && (
          <CreateOrderForm 
            onOrderCreated={handleOrderCreated}
            onCancel={handleCancelCreate}
          />
        )}
      </div>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} 电商订单管理系统. 所有权利保留.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default OrderManagement