import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { X, Save, User, Mail, Calendar, Shield } from 'lucide-react'

const UserForm = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    is_verified: false
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.data?.username || '',
        email: user.data?.email || '',
        age: user.data?.age?.toString() || '',
        is_verified: user.data?.is_verified || false
      })
    }
  }, [user])

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.username.trim()) {
      newErrors.username = '用户名不能为空'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '邮箱不能为空'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址'
    }
    
    if (!formData.age) {
      newErrors.age = '年龄不能为空'
    } else if (isNaN(formData.age) || parseInt(formData.age) < 1 || parseInt(formData.age) > 150) {
      newErrors.age = '请输入有效的年龄 (1-150)'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatPayload = (data) => {
    return {
      data: {
        username: data.username.trim(),
        email: data.email.trim(),
        age: parseInt(data.age),
        is_verified: Boolean(data.is_verified)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)
    
    try {
      const payload = formatPayload(formData)
      
      if (user) {
        // 更新用户
        const { data: responseData, error } = await supabase
          .from('User Profile')
          .update(payload)
          .eq('id', user.id)
          .select()

        if (error || !responseData?.success) {
          console.error("更新失败:", error)
          alert("更新用户失败")
          return
        }

        onSave(responseData.data, 'update')
      } else {
        // 创建新用户
        const { data: responseData, error } = await supabase
          .from('User Profile')
          .insert(payload)
          .select()

        if (error || !responseData?.success) {
          console.error("创建失败:", error)
          alert("创建用户失败")
          return
        }

        onSave(responseData.data, 'create')
      }
      
      onClose()
    } catch (err) {
      console.error('保存用户失败:', err)
      alert('保存用户失败')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // 清除对应字段的错误
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            {user ? '编辑用户' : '添加用户'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <User size={16} />
              用户名
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="请输入用户名"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Mail size={16} />
              邮箱
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="请输入邮箱地址"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Calendar size={16} />
              年龄
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="150"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.age ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="请输入年龄"
            />
            {errors.age && (
              <p className="text-red-500 text-xs mt-1">{errors.age}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Shield size={16} />
              <input
                type="checkbox"
                name="is_verified"
                checked={formData.is_verified}
                onChange={handleChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              已验证身份
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Save size={16} />
              {loading ? '保存中...' : '保存'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserForm