import React, { useState } from 'react'
import { supabase } from "@/api/postgrest-client.js"
import { Plus, Minus, X, Save } from 'lucide-react'

const CreateOrderForm = ({ onOrderCreated, onCancel }) => {
  const [formData, setFormData] = useState({
    order_number: `ORD-${Date.now()}`,
    order_status: 'pending',
    user_info: {
      name: '',
      phone: '',
      email: '',
      address: ''
    },
    product_list: [{
      sku: '',
      product_name: '',
      price: 0,
      quantity: 1,
      discount_info: {
        discount_type: 'none',
        discount_value: 0,
        discount_description: ''
      }
    }],
    logistics_info: [],
    payment_info: [],
    total_amount: 0,
    order_date: new Date().toISOString()
  })

  const [loading, setLoading] = useState(false)

  const handleUserInfoChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      user_info: {
        ...prev.user_info,
        [field]: value
      }
    }))
  }

  const handleProductChange = (index, field, value) => {
    const newProducts = [...formData.product_list]
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      newProducts[index][parent] = {
        ...newProducts[index][parent],
        [child]: value
      }
    } else {
      newProducts[index][field] = field === 'price' || field === 'quantity' ? Number(value) : value
    }
    
    setFormData(prev => ({
      ...prev,
      product_list: newProducts
    }))
    
    // 重新计算总金额
    calculateTotal(newProducts)
  }

  const addProduct = () => {
    setFormData(prev => ({
      ...prev,
      product_list: [...prev.product_list, {
        sku: '',
        product_name: '',
        price: 0,
        quantity: 1,
        discount_info: {
          discount_type: 'none',
          discount_value: 0,
          discount_description: ''
        }
      }]
    }))
  }

  const removeProduct = (index) => {
    const newProducts = formData.product_list.filter((_, i) => i !== index)
    setFormData(prev => ({
      ...prev,
      product_list: newProducts
    }))
    calculateTotal(newProducts)
  }

  const calculateTotal = (products) => {
    const total = products.reduce((sum, product) => {
      let productTotal = product.price * product.quantity
      
      if (product.discount_info.discount_type === 'percentage') {
        productTotal = productTotal * (1 - product.discount_info.discount_value / 100)
      } else if (product.discount_info.discount_type === 'fixed_amount') {
        productTotal = Math.max(0, productTotal - product.discount_info.discount_value)
      }
      
      return sum + productTotal
    }, 0)
    
    setFormData(prev => ({
      ...prev,
      total_amount: total
    }))
  }

  const formatPayload = (data) => {
    return {
      data: {
        ...data,
        total_amount: Number(data.total_amount),
        product_list: data.product_list.map(product => ({
          ...product,
          price: Number(product.price),
          quantity: Number(product.quantity),
          discount_info: {
            ...product.discount_info,
            discount_value: Number(product.discount_info.discount_value)
          }
        }))
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formattedPayload = formatPayload(formData)
      
      const { data: responseData, error } = await supabase
        .from('Order')
        .insert(formattedPayload)
        .select()

      if (error || !responseData?.success) {
        console.error("创建订单失败:", error)
        alert("创建订单失败")
        return
      }

      const createdOrder = responseData.data
      onOrderCreated && onOrderCreated(createdOrder)
      
      // 重置表单
      setFormData({
        order_number: `ORD-${Date.now()}`,
        order_status: 'pending',
        user_info: {
          name: '',
          phone: '',
          email: '',
          address: ''
        },
        product_list: [{
          sku: '',
          product_name: '',
          price: 0,
          quantity: 1,
          discount_info: {
            discount_type: 'none',
            discount_value: 0,
            discount_description: ''
          }
        }],
        logistics_info: [],
        payment_info: [],
        total_amount: 0,
        order_date: new Date().toISOString()
      })

    } catch (err) {
      console.error('创建订单时发生错误:', err)
      alert('创建订单时发生错误')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">创建新订单</h2>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 订单基本信息 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">订单信息</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                订单号
              </label>
              <input
                type="text"
                value={formData.order_number}
                onChange={(e) => setFormData(prev => ({ ...prev, order_number: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                订单状态
              </label>
              <select
                value={formData.order_status}
                onChange={(e) => setFormData(prev => ({ ...prev, order_status: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="pending">待处理</option>
                <option value="confirmed">已确认</option>
                <option value="shipped">已发货</option>
                <option value="delivered">已送达</option>
                <option value="cancelled">已取消</option>
              </select>
            </div>
          </div>
        </div>

        {/* 用户信息 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">用户信息</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                姓名 *
              </label>
              <input
                type="text"
                value={formData.user_info.name}
                onChange={(e) => handleUserInfoChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                电话 *
              </label>
              <input
                type="tel"
                value={formData.user_info.phone}
                onChange={(e) => handleUserInfoChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                邮箱
              </label>
              <input
                type="email"
                value={formData.user_info.email}
                onChange={(e) => handleUserInfoChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                收货地址 *
              </label>
              <input
                type="text"
                value={formData.user_info.address}
                onChange={(e) => handleUserInfoChange('address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        {/* 商品列表 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">商品列表</h3>
            <button
              type="button"
              onClick={addProduct}
              className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              <Plus className="w-4 h-4" />
              添加商品
            </button>
          </div>
          
          {formData.product_list.map((product, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">商品 {index + 1}</h4>
                {formData.product_list.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeProduct(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SKU *
                  </label>
                  <input
                    type="text"
                    value={product.sku}
                    onChange={(e) => handleProductChange(index, 'sku', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    商品名称 *
                  </label>
                  <input
                    type="text"
                    value={product.product_name}
                    onChange={(e) => handleProductChange(index, 'product_name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    单价 *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={product.price}
                    onChange={(e) => handleProductChange(index, 'price', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    数量 *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              {/* 优惠信息 */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <h5 className="text-sm font-medium text-gray-700 mb-2">优惠信息</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      优惠类型
                    </label>
                    <select
                      value={product.discount_info.discount_type}
                      onChange={(e) => handleProductChange(index, 'discount_info.discount_type', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="none">无优惠</option>
                      <option value="percentage">百分比折扣</option>
                      <option value="fixed_amount">固定金额减免</option>
                    </select>
                  </div>
                  {product.discount_info.discount_type !== 'none' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          优惠值
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={product.discount_info.discount_value}
                          onChange={(e) => handleProductChange(index, 'discount_info.discount_value', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          优惠描述
                        </label>
                        <input
                          type="text"
                          value={product.discount_info.discount_description}
                          onChange={(e) => handleProductChange(index, 'discount_info.discount_description', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 订单总额 */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">订单总额:</span>
            <span className="text-xl font-bold text-green-600">
              ¥{formData.total_amount.toFixed(2)}
            </span>
          </div>
        </div>

        {/* 提交按钮 */}
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            {loading ? '创建中...' : '创建订单'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
          >
            取消
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateOrderForm