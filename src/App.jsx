import React, { useState, useEffect } from 'react'
import { Users, Calendar, CreditCard, Settings, Home, LogIn, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import HomePage from '@/pages/HomePage'
import MembersPage from '@/pages/MembersPage'
import ActivitiesPage from '@/pages/ActivitiesPage'
import PaymentsPage from '@/pages/PaymentsPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 检查本地存储中的用户信息
    const savedUser = localStorage.getItem('cuhk_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('cuhk_user', JSON.stringify(userData))
    setCurrentPage('home')
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('cuhk_user')
    setCurrentPage('home')
  }

  const navigation = [
    { id: 'home', name: '首页', icon: Home },
    { id: 'members', name: '会员管理', icon: Users, requireAuth: true },
    { id: 'activities', name: '活动管理', icon: Calendar, requireAuth: true },
    { id: 'payments', name: '缴费管理', icon: CreditCard, requireAuth: true },
  ]

  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg">加载中...</div>
        </div>
      )
    }

    switch (currentPage) {
      case 'home':
        return <HomePage user={user} onNavigate={setCurrentPage} />
      case 'members':
        return <MembersPage user={user} />
      case 'activities':
        return <ActivitiesPage user={user} />
      case 'payments':
        return <PaymentsPage user={user} />
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />
      case 'register':
        return <RegisterPage onNavigate={setCurrentPage} />
      default:
        return <HomePage user={user} onNavigate={setCurrentPage} />
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">加载中...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-blue-600">香港中文大学内地生校友会</h1>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {navigation.map((item) => {
                  const Icon = item.icon
                  const canAccess = !item.requireAuth || user
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => canAccess && setCurrentPage(item.id)}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        currentPage === item.id
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : canAccess
                          ? 'text-gray-500 hover:text-gray-700'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                      disabled={!canAccess}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </button>
                  )
                })}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">
                    欢迎，{user.full_name}
                  </span>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    退出登录
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage('login')}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    登录
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setCurrentPage('register')}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    注册
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
