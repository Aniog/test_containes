import React, { useState } from 'react'
import { UserPlus, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/api/postgrest-client.js'
import { formatPayload } from '@/lib/utils'

const RegisterPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    full_name: '',
    student_id: '',
    graduation_year: '',
    major: '',
    college: '',
    phone: '',
    current_city: '',
    current_company: '',
    current_position: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const colleges = [
    '文学院',
    '商学院',
    '教育学院',
    '工程学院',
    '法律学院',
    '医学院',
    '理学院',
    '社会科学院',
    '其他'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // 验证密码
      if (formData.password !== formData.confirmPassword) {
        setError('两次输入的密码不一致')
        return
      }

      if (formData.password.length < 6) {
        setError('密码长度至少为6位')
        return
      }

      // 准备提交的数据
      const submitData = {
        ...formData,
        status: 'pending',
        membership_fee_paid: false,
        role: 'member'
      }
      delete submitData.confirmPassword

      // 格式化数据
      const formattedPayload = formatPayload(submitData, 'Member')

      // 提交注册数据
      const { data: responseData, error: apiError } = await supabase
        .from('Member')
        .insert(formattedPayload)
        .select()

      if (apiError) {
        console.error('Registration failed:', apiError)
        setError('注册失败，请稍后重试')
        return
      }

      setSuccess(true)
    } catch (err) {
      console.error('Registration error:', err)
      setError('注册失败，请稍后重试')
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

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-green-600">注册成功！</CardTitle>
              <CardDescription>
                您的注册申请已提交，请等待管理员审核
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-gray-600">
                我们会在1-3个工作日内完成审核，审核结果将通过邮件通知您。
              </p>
              <Button onClick={() => onNavigate('home')} className="w-full">
                返回首页
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Button>
          <h2 className="text-3xl font-bold text-gray-900">会员注册</h2>
          <p className="mt-2 text-sm text-gray-600">
            加入香港中文大学内地生校友会
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserPlus className="w-5 h-5 mr-2" />
              注册信息
            </CardTitle>
            <CardDescription>
              请填写以下信息完成注册，标有 * 的为必填项
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              {/* 账户信息 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">账户信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      placeholder="请输入邮箱地址"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      联系电话 *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="请输入联系电话"
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
                      placeholder="至少6位密码"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      确认密码 *
                    </label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="请再次输入密码"
                    />
                  </div>
                </div>
              </div>

              {/* 个人信息 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">个人信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                      真实姓名 *
                    </label>
                    <Input
                      id="full_name"
                      name="full_name"
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="请输入真实姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="student_id" className="block text-sm font-medium text-gray-700 mb-1">
                      学号 *
                    </label>
                    <Input
                      id="student_id"
                      name="student_id"
                      type="text"
                      required
                      value={formData.student_id}
                      onChange={handleChange}
                      placeholder="请输入学号"
                    />
                  </div>
                  <div>
                    <label htmlFor="graduation_year" className="block text-sm font-medium text-gray-700 mb-1">
                      毕业年份 *
                    </label>
                    <Input
                      id="graduation_year"
                      name="graduation_year"
                      type="number"
                      required
                      min="1990"
                      max="2030"
                      value={formData.graduation_year}
                      onChange={handleChange}
                      placeholder="如：2020"
                    />
                  </div>
                  <div>
                    <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">
                      学院 *
                    </label>
                    <select
                      id="college"
                      name="college"
                      required
                      value={formData.college}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      <option value="">请选择学院</option>
                      {colleges.map((college) => (
                        <option key={college} value={college}>
                          {college}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
                      专业 *
                    </label>
                    <Input
                      id="major"
                      name="major"
                      type="text"
                      required
                      value={formData.major}
                      onChange={handleChange}
                      placeholder="请输入专业名称"
                    />
                  </div>
                </div>
              </div>

              {/* 现状信息 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">现状信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="current_city" className="block text-sm font-medium text-gray-700 mb-1">
                      现居城市
                    </label>
                    <Input
                      id="current_city"
                      name="current_city"
                      type="text"
                      value={formData.current_city}
                      onChange={handleChange}
                      placeholder="如：北京"
                    />
                  </div>
                  <div>
                    <label htmlFor="current_company" className="block text-sm font-medium text-gray-700 mb-1">
                      现任职公司
                    </label>
                    <Input
                      id="current_company"
                      name="current_company"
                      type="text"
                      value={formData.current_company}
                      onChange={handleChange}
                      placeholder="请输入公司名称"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="current_position" className="block text-sm font-medium text-gray-700 mb-1">
                      现任职位
                    </label>
                    <Input
                      id="current_position"
                      name="current_position"
                      type="text"
                      value={formData.current_position}
                      onChange={handleChange}
                      placeholder="请输入职位名称"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? '注册中...' : '提交注册申请'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                已有账户？{' '}
                <button
                  onClick={() => onNavigate('login')}
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  立即登录
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default RegisterPage