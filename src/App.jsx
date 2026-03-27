import React, { useState } from 'react'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import { Plus, Users } from 'lucide-react'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [users, setUsers] = useState([])

  const handleAddUser = () => {
    setEditingUser(null)
    setShowForm(true)
  }

  const handleEditUser = (user) => {
    setEditingUser(user)
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingUser(null)
  }

  const handleSaveUser = (userData, action) => {
    if (action === 'create') {
      setUsers(prev => [userData, ...prev])
    } else if (action === 'update') {
      setUsers(prev => prev.map(user => user.id === userData.id ? userData : user))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* 头部 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">用户资料系统</h1>
                <p className="text-gray-600">管理用户信息和验证状态</p>
              </div>
            </div>
            <button
              onClick={handleAddUser}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={20} />
              添加用户
            </button>
          </div>
        </div>

        {/* 用户列表 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <UserList 
            onEdit={handleEditUser}
            onDelete={() => {}} // 删除功能已在UserList组件内部处理
          />
        </div>

        {/* 用户表单弹窗 */}
        {showForm && (
          <UserForm
            user={editingUser}
            onClose={handleCloseForm}
            onSave={handleSaveUser}
          />
        )}
      </div>

      {/* 页脚 */}
      <footer className="mt-12 py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} 用户资料系统. 简洁高效的用户管理解决方案.</p>
      </footer>
    </div>
  )
}

export default App
