import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Plus, Edit2, Trash2, Book, User, Calendar, AlertCircle, Loader2 } from 'lucide-react'
import BorrowItemManager from './BorrowItemManager'

const BorrowRecordManager = () => {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingRecord, setEditingRecord] = useState(null)
  const [formData, setFormData] = useState({
    user_name: '',
    user_id: '',
    contact_info: '',
    borrow_items: [],
    total_books: 0,
    status: 'active'
  })

  useEffect(() => {
    fetchRecords()
  }, [])

  const fetchRecords = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Borrow Record')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setRecords(dataPayload.list || [])
    } catch (err) {
      console.error('获取借阅记录失败:', err)
      setError(err.message || '获取数据时发生错误')
    } finally {
      setLoading(false)
    }
  }

  const formatPayload = (data) => {
    return {
      data: {
        user_name: data.user_name,
        user_id: data.user_id,
        contact_info: data.contact_info,
        borrow_items: data.borrow_items || [],
        total_books: Number(data.total_books) || 0,
        status: data.status || 'active'
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const payload = formatPayload(formData)

      if (editingRecord) {
        // 更新记录
        const { data: responseData, error } = await supabase
          .from('Borrow Record')
          .update(payload)
          .eq('id', editingRecord.id)
          .select()

        if (error || !responseData?.success) {
          throw new Error('更新记录失败')
        }

        const updatedRecord = responseData.data
        setRecords(prev => prev.map(record => 
          record.id === editingRecord.id ? updatedRecord : record
        ))
      } else {
        // 创建新记录
        const { data: responseData, error } = await supabase
          .from('Borrow Record')
          .insert(payload)
          .select()

        if (error || !responseData?.success) {
          throw new Error('创建记录失败')
        }

        const newRecord = responseData.data
        setRecords(prev => [newRecord, ...prev])
      }

      // 重置表单
      setFormData({
        user_name: '',
        user_id: '',
        contact_info: '',
        borrow_items: [],
        total_books: 0,
        status: 'active'
      })
      setShowForm(false)
      setEditingRecord(null)
    } catch (err) {
      console.error('提交失败:', err)
      alert(err.message || '操作失败')
    }
  }

  const handleEdit = (record) => {
    setEditingRecord(record)
    setFormData({
      user_name: record.data?.user_name || '',
      user_id: record.data?.user_id || '',
      contact_info: record.data?.contact_info || '',
      borrow_items: record.data?.borrow_items || [],
      total_books: record.data?.total_books || 0,
      status: record.data?.status || 'active'
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('确定要删除这条借阅记录吗？')) return

    try {
      const { data: responseData, error } = await supabase
        .from('Borrow Record')
        .delete()
        .eq('id', id)

      if (error || !responseData?.success) {
        throw new Error('删除记录失败')
      }

      const deletedId = responseData.data.id
      setRecords(prev => prev.filter(record => record.id !== deletedId))
    } catch (err) {
      console.error('删除失败:', err)
      alert(err.message || '删除失败')
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'overdue': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return '借阅中'
      case 'completed': return '已完成'
      case 'overdue': return '逾期'
      default: return '未知'
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
        <span className="ml-2 text-gray-600">加载中...</span>
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
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Book className="w-8 h-8 text-blue-600" />
          图书馆借阅记录管理
        </h1>
        <button
          onClick={() => {
            setShowForm(true)
            setEditingRecord(null)
            setFormData({
              user_name: '',
              user_id: '',
              contact_info: '',
              borrow_items: [],
              total_books: 0,
              status: 'active'
            })
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          新增借阅记录
        </button>
      </div>

      {/* 借阅记录表单 */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md border mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingRecord ? '编辑借阅记录' : '新增借阅记录'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  用户姓名 *
                </label>
                <input
                  type="text"
                  value={formData.user_name}
                  onChange={(e) => setFormData({...formData, user_name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  用户ID/学号 *
                </label>
                <input
                  type="text"
                  value={formData.user_id}
                  onChange={(e) => setFormData({...formData, user_id: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  联系方式
                </label>
                <input
                  type="text"
                  value={formData.contact_info}
                  onChange={(e) => setFormData({...formData, contact_info: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="电话或邮箱"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  总借阅数量 *
                </label>
                <input
                  type="number"
                  value={formData.total_books}
                  onChange={(e) => setFormData({...formData, total_books: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  状态
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="active">借阅中</option>
                  <option value="completed">已完成</option>
                  <option value="overdue">逾期</option>
                </select>
              </div>
            </div>

            {/* 借阅条目管理 */}
            <div className="border-t pt-4">
              <BorrowItemManager 
                items={formData.borrow_items}
                onItemsChange={(items) => {
                  setFormData({
                    ...formData, 
                    borrow_items: items,
                    total_books: items.length
                  })
                }}
              />
            </div>

            <div className="flex gap-2 pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                {editingRecord ? '更新' : '创建'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditingRecord(null)
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                取消
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 借阅记录列表 */}
      <div className="space-y-4">
        {records.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">暂无借阅记录</p>
            <p className="text-gray-400 text-sm">点击上方按钮创建第一条记录</p>
          </div>
        ) : (
          records.map(record => (
            <div key={record.id} className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {record.data?.user_name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      ID: {record.data?.user_id}
                    </p>
                    {record.data?.contact_info && (
                      <p className="text-sm text-gray-600">
                        联系方式: {record.data?.contact_info}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(record.data?.status)}`}>
                    {getStatusText(record.data?.status)}
                  </span>
                  <button
                    onClick={() => handleEdit(record)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(record.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Book className="w-4 h-4 text-gray-500" />
                  <span>总借阅数量: {record.data?.total_books || 0} 本</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>创建时间: {new Date(record.created_at).toLocaleDateString()}</span>
                </div>
              </div>

              {record.data?.borrow_items && record.data.borrow_items.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">借阅条目:</h4>
                  <div className="space-y-2">
                    {record.data.borrow_items.map((item, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-md text-sm">
                        <div className="font-medium">{item.book_title}</div>
                        <div className="text-gray-600">作者: {item.book_author}</div>
                        <div className="text-gray-600">
                          借出: {item.borrow_date} | 应还: {item.due_date}
                          {item.return_date && ` | 已还: ${item.return_date}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default BorrowRecordManager