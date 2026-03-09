import React, { useState, useEffect } from 'react'
import { CreditCard, Plus, Search, DollarSign, Calendar, User, Loader2, AlertCircle, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/api/postgrest-client.js'
import { formatDate, formatPayload, getCurrentYear } from '@/lib/utils'

const PaymentsPage = ({ user }) => {
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [paymentTypeFilter, setPaymentTypeFilter] = useState('all')
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [stats, setStats] = useState({
    totalAmount: 0,
    membershipFees: 0,
    activityFees: 0,
    pendingPayments: 0
  })

  useEffect(() => {
    fetchPayments()
  }, [])

  const fetchPayments = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('MembershipPayment')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const paymentList = dataPayload.list || []
      setPayments(paymentList)

      // 计算统计数据
      const totalAmount = paymentList
        .filter(p => p.payment_status === 'completed')
        .reduce((sum, p) => sum + (p.amount || 0), 0)
      
      const membershipFees = paymentList
        .filter(p => p.payment_type === 'membership_fee' && p.payment_status === 'completed')
        .reduce((sum, p) => sum + (p.amount || 0), 0)
      
      const activityFees = paymentList
        .filter(p => p.payment_type === 'activity_fee' && p.payment_status === 'completed')
        .reduce((sum, p) => sum + (p.amount || 0), 0)
      
      const pendingPayments = paymentList
        .filter(p => p.payment_status === 'pending').length

      setStats({
        totalAmount,
        membershipFees,
        activityFees,
        pendingPayments
      })
    } catch (err) {
      console.error('Fetch payments failed:', err)
      setError(err.message || '获取缴费记录失败')
    } finally {
      setLoading(false)
    }
  }

  const handleCreatePayment = async (paymentData) => {
    try {
      const submitData = {
        ...paymentData,
        member_id: user.id,
        member_name: user.full_name,
        member_email: user.email,
        payment_status: 'pending',
        year: getCurrentYear()
      }

      const formattedPayload = formatPayload(submitData, 'MembershipPayment')

      const { data: responseData, error } = await supabase
        .from('MembershipPayment')
        .insert(formattedPayload)
        .select()

      if (error || !responseData?.success) {
        console.error('Create payment failed:', error)
        alert('创建缴费记录失败')
        return
      }

      const createdPayment = responseData.data
      setPayments(prev => [createdPayment, ...prev])
      setShowPaymentForm(false)
      alert('缴费记录创建成功，请等待确认')
    } catch (err) {
      console.error('Create payment error:', err)
      alert('创建缴费记录失败')
    }
  }

  const handleConfirmPayment = async (paymentId) => {
    try {
      const updates = { payment_status: 'completed' }
      const formattedPayload = formatPayload(updates, 'MembershipPayment')

      const { data: responseData, error } = await supabase
        .from('MembershipPayment')
        .update(formattedPayload)
        .eq('id', paymentId)
        .select()

      if (error || !responseData?.success) {
        console.error('Confirm payment failed:', error)
        alert('确认缴费失败')
        return
      }

      const updatedPayment = responseData.data
      setPayments(prev => prev.map(payment => 
        payment.id === paymentId ? updatedPayment : payment
      ))
      
      // 重新计算统计数据
      fetchPayments()
      alert('缴费确认成功')
    } catch (err) {
      console.error('Confirm payment error:', err)
      alert('确认缴费失败')
    }
  }

  const handleRejectPayment = async (paymentId) => {
    try {
      const updates = { payment_status: 'failed' }
      const formattedPayload = formatPayload(updates, 'MembershipPayment')

      const { data: responseData, error } = await supabase
        .from('MembershipPayment')
        .update(formattedPayload)
        .eq('id', paymentId)
        .select()

      if (error || !responseData?.success) {
        console.error('Reject payment failed:', error)
        alert('拒绝缴费失败')
        return
      }

      const updatedPayment = responseData.data
      setPayments(prev => prev.map(payment => 
        payment.id === paymentId ? updatedPayment : payment
      ))
      
      alert('缴费已拒绝')
    } catch (err) {
      console.error('Reject payment error:', err)
      alert('拒绝缴费失败')
    }
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { variant: 'warning', text: '待确认' },
      completed: { variant: 'success', text: '已完成' },
      failed: { variant: 'destructive', text: '失败' },
      refunded: { variant: 'secondary', text: '已退款' }
    }
    
    const config = statusConfig[status] || statusConfig.pending
    return (
      <Badge variant={config.variant}>
        {config.text}
      </Badge>
    )
  }

  const getPaymentTypeBadge = (type) => {
    const typeConfig = {
      membership_fee: { variant: 'default', text: '会费' },
      activity_fee: { variant: 'secondary', text: '活动费' }
    }
    
    const config = typeConfig[type] || typeConfig.membership_fee
    return (
      <Badge variant={config.variant}>
        {config.text}
      </Badge>
    )
  }

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.member_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.member_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.transaction_id?.includes(searchTerm)
    
    const matchesType = paymentTypeFilter === 'all' || payment.payment_type === paymentTypeFilter
    
    return matchesSearch && matchesType
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <Loader2 className="animate-spin w-8 h-8" />
        <span className="ml-2">加载中...</span>
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
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <CreditCard className="w-6 h-6 mr-2" />
            缴费管理
          </h1>
          <p className="text-gray-600 mt-1">管理会费和活动费用</p>
        </div>
        {user?.status === 'approved' && (
          <Button onClick={() => setShowPaymentForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            新增缴费
          </Button>
        )}
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">总收入</p>
                <p className="text-2xl font-bold text-green-600">¥{stats.totalAmount.toFixed(2)}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">会费收入</p>
                <p className="text-2xl font-bold text-blue-600">¥{stats.membershipFees.toFixed(2)}</p>
              </div>
              <User className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">活动费收入</p>
                <p className="text-2xl font-bold text-purple-600">¥{stats.activityFees.toFixed(2)}</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">待确认</p>
                <p className="text-2xl font-bold text-orange-600">{stats.pendingPayments}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 搜索和筛选 */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="搜索会员姓名、邮箱或交易ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={paymentTypeFilter}
                onChange={(e) => setPaymentTypeFilter(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="all">全部类型</option>
                <option value="membership_fee">会费</option>
                <option value="activity_fee">活动费</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 缴费记录列表 */}
      <div className="grid gap-4">
        {filteredPayments.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">没有找到缴费记录</p>
            </CardContent>
          </Card>
        ) : (
          filteredPayments.map((payment) => (
            <Card key={payment.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {payment.member_name}
                      </h3>
                      {getPaymentTypeBadge(payment.payment_type)}
                      {getStatusBadge(payment.payment_status)}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">金额：</span>
                        <span className="text-green-600 font-semibold">¥{payment.amount}</span>
                      </div>
                      <div>
                        <span className="font-medium">支付方式：</span>
                        {payment.payment_method}
                      </div>
                      <div>
                        <span className="font-medium">缴费年份：</span>
                        {payment.year}
                      </div>
                      <div>
                        <span className="font-medium">缴费日期：</span>
                        {formatDate(payment.payment_date)}
                      </div>
                    </div>

                    {payment.transaction_id && (
                      <div className="mt-2 text-sm text-gray-600">
                        <span className="font-medium">交易ID：</span>
                        {payment.transaction_id}
                      </div>
                    )}

                    {payment.notes && (
                      <div className="mt-2 text-sm text-gray-600">
                        <span className="font-medium">备注：</span>
                        {payment.notes}
                      </div>
                    )}
                  </div>

                  {user?.role === 'admin' && payment.payment_status === 'pending' && (
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleConfirmPayment(payment.id)}
                      >
                        <Check className="w-4 h-4 mr-1" />
                        确认
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRejectPayment(payment.id)}
                      >
                        <X className="w-4 h-4 mr-1" />
                        拒绝
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* 缴费表单 */}
      {showPaymentForm && (
        <PaymentForm
          user={user}
          onSubmit={handleCreatePayment}
          onCancel={() => setShowPaymentForm(false)}
        />
      )}
    </div>
  )
}

// 缴费表单组件
const PaymentForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    payment_type: 'membership_fee',
    amount: '',
    payment_method: 'wechat',
    payment_date: new Date().toISOString().split('T')[0],
    transaction_id: '',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>新增缴费记录</CardTitle>
          <CardDescription>
            请填写缴费信息
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                缴费类型 *
              </label>
              <select
                name="payment_type"
                required
                value={formData.payment_type}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="membership_fee">会费</option>
                <option value="activity_fee">活动费</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                金额 (元) *
              </label>
              <Input
                name="amount"
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.amount}
                onChange={handleChange}
                placeholder="请输入金额"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                支付方式 *
              </label>
              <select
                name="payment_method"
                required
                value={formData.payment_method}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="wechat">微信支付</option>
                <option value="alipay">支付宝</option>
                <option value="bank_transfer">银行转账</option>
                <option value="cash">现金</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                缴费日期 *
              </label>
              <Input
                name="payment_date"
                type="date"
                required
                value={formData.payment_date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                交易ID
              </label>
              <Input
                name="transaction_id"
                value={formData.transaction_id}
                onChange={handleChange}
                placeholder="支付平台交易号（可选）"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                备注
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="其他说明（可选）"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm min-h-[80px]"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                提交缴费
              </Button>
              <Button type="button" variant="outline" onClick={onCancel}>
                取消
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default PaymentsPage