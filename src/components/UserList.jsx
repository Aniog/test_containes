import React, { useEffect, useState } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Loader2, AlertCircle, User, Mail, Calendar, CheckCircle, XCircle, Edit2, Trash2 } from 'lucide-react'

const UserList = ({ onEdit, onDelete }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('User Profile')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setUsers(dataPayload.list || [])

    } catch (err) {
      console.error('获取用户列表失败:', err)
      setError(err.message || '获取用户列表时发生错误')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('确定要删除这个用户吗？')) return

    try {
      const { data: responseData, error } = await supabase
        .from('User Profile')
        .delete()
        .eq('id', id)

      if (error || !responseData?.success) {
        console.error("删除失败:", error)
        alert("删除用户失败")
        return
      }

      const deletedId = responseData.data.id
      setUsers(prev => prev.filter(user => user.id !== deletedId))
    } catch (err) {
      console.error('删除用户失败:', err)
      alert('删除用户失败')
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="animate-spin w-6 h-6 text-blue-500" />
        <span className="ml-2 text-gray-600">加载中...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-lg border border-red-200">
        <AlertCircle size={20} />
        <span>错误: {error}</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">用户列表</h2>
      
      {users.length === 0 ? (
        <div className="text-gray-500 text-center p-8 bg-gray-50 rounded-lg">
          <User className="w-12 h-12 mx-auto mb-2 text-gray-400" />
          <p>暂无用户数据</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {users.map(user => (
            <div key={user.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <h3 className="font-medium text-gray-900">{user.data?.username}</h3>
                    {user.data?.is_verified ? (
                      <CheckCircle className="w-4 h-4 text-green-500" title="已验证" />
                    ) : (
                      <XCircle className="w-4 h-4 text-gray-400" title="未验证" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Mail className="w-4 h-4" />
                    <span>{user.data?.email}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{user.data?.age} 岁</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(user)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    title="编辑"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    title="删除"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserList