import React, { useState } from 'react'
import { LogIn, ArrowLeft, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/api/postgrest-client.js'

const LoginPage = ({ onLogin, onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // 模拟登录验证
      if (formData.email && formData.password) {
        // 在实际应用中，这里应该调用API验证用户凭据
        const mockUser = {
          id: 1,
          email: formData.email,
          full_name: '张三',
          status: 'approved',
          role: 'member',
          membership_fee_paid: true
        }
        
        onLogin(mockUser)
      } else {
        setError('请填写所有必填字段')
      }
    } catch (err) {
      console.error('Login failed:', err)
      setError('登录失败，请检查您的邮箱和密码')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Button>
          <h2 className="text-3xl font-bold text-gray-900">会员登录</h2>
          <p className="mt-2 text-sm text-gray-600">
            登录您的校友会账户
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <LogIn className="w-5 h-5 mr-2" />
              登录
            </CardTitle>
            <CardDescription>
              请输入您的邮箱和密码
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  邮箱地址 *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="请输入您的邮箱地址"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  密码 *
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="请输入您的密码"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? '登录中...' : '登录'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                还没有账户？{' '}
                <button
                  onClick={() => onNavigate('register')}
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  立即注册
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-gray-500">
          <p>登录即表示您同意我们的服务条款和隐私政策</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage