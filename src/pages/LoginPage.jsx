import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardBody } from '@/components/ui/Card'
import { toast } from '@/components/ui/Toast'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(form.email, form.password)
      toast.success('登录成功，欢迎回来！')
      navigate('/profile')
    } catch (err) {
      console.error('Login error:', err)
      setError('邮箱或密码错误，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center font-bold text-blue-900 text-xl mx-auto mb-4">
            中大
          </div>
          <h1 className="text-2xl font-bold text-white">香港中文大学内地生校友会</h1>
          <p className="text-blue-200 mt-1">会员登录</p>
        </div>

        <Card>
          <CardBody className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="邮箱地址"
                type="email"
                placeholder="请输入注册邮箱"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                required
              />
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">密码</label>
                <div className="relative">
                  <input
                    type={showPwd ? 'text' : 'password'}
                    placeholder="请输入密码"
                    value={form.password}
                    onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                    required
                    className="w-full px-3 py-2 pr-10 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  />
                  <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                <LogIn size={18} className="mr-2" />
                {loading ? '登录中...' : '登录'}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-600">
              还没有账号？{' '}
              <Link to="/register" className="text-blue-700 font-medium hover:underline">
                立即注册
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
