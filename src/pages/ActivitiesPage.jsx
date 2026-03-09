import React, { useState, useEffect } from 'react'
import { Calendar, Plus, Search, MapPin, Users, DollarSign, Clock, Loader2, AlertCircle, Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/api/postgrest-client.js'
import { formatDate, formatPayload } from '@/lib/utils'

const ActivitiesPage = ({ user }) => {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingActivity, setEditingActivity] = useState(null)

  useEffect(() => {
    fetchActivities()
  }, [])

  const fetchActivities = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Activity')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setActivities(dataPayload.list || [])
    } catch (err) {
      console.error('Fetch activities failed:', err)
      setError(err.message || '获取活动列表失败')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateActivity = async (activityData) => {
    try {
      const submitData = {
        ...activityData,
        organizer_id: user.id,
        organizer_name: user.full_name,
        current_participants: 0,
        status: 'published'
      }

      const formattedPayload = formatPayload(submitData, 'Activity')

      const { data: responseData, error } = await supabase
        .from('Activity')
        .insert(formattedPayload)
        .select()

      if (error || !responseData?.success) {
        console.error('Create failed:', error)
        alert('创建活动失败')
        return
      }

      const createdActivity = responseData.data
      setActivities(prev => [createdActivity, ...prev])
      setShowCreateForm(false)
      alert('活动创建成功')
    } catch (err) {
      console.error('Create error:', err)
      alert('创建活动失败')
    }
  }

  const handleUpdateActivity = async (id, updates) => {
    try {
      const formattedPayload = formatPayload(updates, 'Activity')

      const { data: responseData, error } = await supabase
        .from('Activity')
        .update(formattedPayload)
        .eq('id', id)
        .select()

      if (error || !responseData?.success) {
        console.error('Update failed:', error)
        alert('更新活动失败')
        return
      }

      const updatedActivity = responseData.data
      setActivities(prev => prev.map(activity => 
        activity.id === id ? updatedActivity : activity
      ))
      setEditingActivity(null)
      alert('活动更新成功')
    } catch (err) {
      console.error('Update error:', err)
      alert('更新活动失败')
    }
  }

  const handleDeleteActivity = async (id) => {
    if (!confirm('确定要删除这个活动吗？')) return

    try {
      const { data: responseData, error } = await supabase
        .from('Activity')
        .delete()
        .eq('id', id)

      if (error || !responseData?.success) {
        console.error('Delete failed:', error)
        alert('删除活动失败')
        return
      }

      const deletedId = responseData.data.id
      setActivities(prev => prev.filter(activity => activity.id !== deletedId))
      alert('活动删除成功')
    } catch (err) {
      console.error('Delete error:', err)
      alert('删除活动失败')
    }
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      draft: { variant: 'secondary', text: '草稿' },
      published: { variant: 'success', text: '已发布' },
      cancelled: { variant: 'destructive', text: '已取消' },
      completed: { variant: 'default', text: '已完成' }
    }
    
    const config = statusConfig[status] || statusConfig.draft
    return (
      <Badge variant={config.variant}>
        {config.text}
      </Badge>
    )
  }

  const filteredActivities = activities.filter(activity =>
    activity.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.organizer_name?.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
            <Calendar className="w-6 h-6 mr-2" />
            活动管理
          </h1>
          <p className="text-gray-600 mt-1">发布和管理校友会活动</p>
        </div>
        {user?.status === 'approved' && (
          <Button onClick={() => setShowCreateForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            创建活动
          </Button>
        )}
      </div>

      {/* 搜索 */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="搜索活动标题、地点或组织者..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* 活动列表 */}
      <div className="grid gap-6">
        {filteredActivities.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">没有找到活动</p>
            </CardContent>
          </Card>
        ) : (
          filteredActivities.map((activity) => (
            <Card key={activity.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {activity.title}
                      </h3>
                      {getStatusBadge(activity.status)}
                      {activity.is_paid && (
                        <Badge variant="warning">收费活动</Badge>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                  </div>
                  
                  {(user?.id === activity.organizer_id || user?.role === 'admin') && (
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingActivity(activity)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteActivity(activity.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(activity.event_date)}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {activity.event_time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {activity.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {activity.current_participants || 0}/{activity.max_participants}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>组织者：{activity.organizer_name}</span>
                    {activity.is_paid && (
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        ¥{activity.fee_amount}
                      </div>
                    )}
                  </div>
                  
                  {user?.status === 'approved' && activity.status === 'published' && (
                    <Button size="sm">
                      报名参加
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* 创建活动表单 */}
      {showCreateForm && (
        <ActivityForm
          onSubmit={handleCreateActivity}
          onCancel={() => setShowCreateForm(false)}
        />
      )}

      {/* 编辑活动表单 */}
      {editingActivity && (
        <ActivityForm
          activity={editingActivity}
          onSubmit={(data) => handleUpdateActivity(editingActivity.id, data)}
          onCancel={() => setEditingActivity(null)}
        />
      )}
    </div>
  )
}

// 活动表单组件
const ActivityForm = ({ activity, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: activity?.title || '',
    description: activity?.description || '',
    event_date: activity?.event_date || '',
    event_time: activity?.event_time || '',
    location: activity?.location || '',
    max_participants: activity?.max_participants || '',
    registration_deadline: activity?.registration_deadline || '',
    is_paid: activity?.is_paid || false,
    fee_amount: activity?.fee_amount || '',
    category: activity?.category || ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>
            {activity ? '编辑活动' : '创建活动'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                活动标题 *
              </label>
              <Input
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="请输入活动标题"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                活动描述 *
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                placeholder="请输入活动描述"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  活动日期 *
                </label>
                <Input
                  name="event_date"
                  type="date"
                  required
                  value={formData.event_date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  活动时间 *
                </label>
                <Input
                  name="event_time"
                  type="time"
                  required
                  value={formData.event_time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                活动地点 *
              </label>
              <Input
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="请输入活动地点"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  最大参与人数 *
                </label>
                <Input
                  name="max_participants"
                  type="number"
                  required
                  min="1"
                  value={formData.max_participants}
                  onChange={handleChange}
                  placeholder="如：50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  报名截止日期
                </label>
                <Input
                  name="registration_deadline"
                  type="date"
                  value={formData.registration_deadline}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                活动类别
              </label>
              <Input
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="如：聚餐、讲座、户外活动"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_paid"
                name="is_paid"
                checked={formData.is_paid}
                onChange={handleChange}
                className="rounded border-gray-300"
              />
              <label htmlFor="is_paid" className="text-sm font-medium text-gray-700">
                收费活动
              </label>
            </div>

            {formData.is_paid && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  活动费用 (元)
                </label>
                <Input
                  name="fee_amount"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.fee_amount}
                  onChange={handleChange}
                  placeholder="如：100.00"
                />
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                {activity ? '更新活动' : '创建活动'}
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

export default ActivitiesPage