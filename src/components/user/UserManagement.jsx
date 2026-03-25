import React, { useState, useEffect } from 'react'
import { Users, Plus, X, ArrowLeft } from 'lucide-react'
import UserRegistrationForm from './UserRegistrationForm'
import UserList from './UserList'

const UserManagement = ({ onBack }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')

  // Simulate API calls with localStorage for demo purposes
  const loadUsers = () => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API delay
      setTimeout(() => {
        const savedUsers = localStorage.getItem('registeredUsers')
        const parsedUsers = savedUsers ? JSON.parse(savedUsers) : []
        
        // Format users to match expected API response structure
        const formattedUsers = parsedUsers.map(user => ({
          id: user.id,
          created_at: user.created_at,
          data: user.data
        }))
        
        setUsers(formattedUsers)
        setLoading(false)
      }, 500)
    } catch (err) {
      setError('Failed to load users')
      setLoading(false)
    }
  }

  const saveUser = async (userData) => {
    try {
      const savedUsers = localStorage.getItem('registeredUsers')
      const existingUsers = savedUsers ? JSON.parse(savedUsers) : []
      
      if (editingUser) {
        // Update existing user
        const updatedUsers = existingUsers.map(user => 
          user.id === editingUser.id 
            ? { ...user, data: userData, updated_at: new Date().toISOString() }
            : user
        )
        localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers))
        
        // Update local state
        setUsers(prev => prev.map(user => 
          user.id === editingUser.id 
            ? { ...user, data: userData, updated_at: new Date().toISOString() }
            : user
        ))
        
        setSuccessMessage('User updated successfully!')
        setEditingUser(null)
      } else {
        // Create new user
        const newUser = {
          id: Date.now(), // Simple ID generation for demo
          created_at: new Date().toISOString(),
          data: userData
        }
        
        const updatedUsers = [...existingUsers, newUser]
        localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers))
        
        // Update local state
        setUsers(prev => [newUser, ...prev])
        setSuccessMessage('User registered successfully!')
      }
      
      setShowForm(false)
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000)
      
    } catch (err) {
      console.error('Error saving user:', err)
      throw new Error('Failed to save user data')
    }
  }

  const deleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const savedUsers = localStorage.getItem('registeredUsers')
        const existingUsers = savedUsers ? JSON.parse(savedUsers) : []
        
        const updatedUsers = existingUsers.filter(user => user.id !== userId)
        localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers))
        
        // Update local state
        setUsers(prev => prev.filter(user => user.id !== userId))
        setSuccessMessage('User deleted successfully!')
        
        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000)
        
      } catch (err) {
        console.error('Error deleting user:', err)
        setError('Failed to delete user')
      }
    }
  }

  const handleEdit = (user) => {
    setEditingUser(user)
    setShowForm(true)
  }

  const handleCancelForm = () => {
    setShowForm(false)
    setEditingUser(null)
  }

  // Load users on component mount
  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            {onBack && (
              <button
                onClick={onBack}
                className="absolute left-4 top-8 bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center text-gray-600 hover:text-blue-600"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to AI Site
              </button>
            )}
            <div className="bg-blue-100 p-4 rounded-full">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">User Management</h1>
          <p className="text-xl text-gray-600">Collect and manage user information</p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-green-800 font-medium">{successMessage}</span>
            </div>
            <button
              onClick={() => setSuccessMessage('')}
              className="text-green-600 hover:text-green-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            {showForm ? (
              <>
                <X className="h-5 w-5 mr-2" />
                Cancel
              </>
            ) : (
              <>
                <Plus className="h-5 w-5 mr-2" />
                Add New User
              </>
            )}
          </button>
        </div>

        {/* Registration Form */}
        {showForm && (
          <div className="mb-8">
            <UserRegistrationForm
              onSubmit={saveUser}
              onCancel={handleCancelForm}
              initialData={editingUser?.data}
              isEditing={!!editingUser}
            />
          </div>
        )}

        {/* User List */}
        {!showForm && (
          <UserList
            users={users}
            loading={loading}
            error={error}
            onEdit={handleEdit}
            onDelete={deleteUser}
            onRefresh={loadUsers}
          />
        )}
      </div>
    </div>
  )
}

export default UserManagement