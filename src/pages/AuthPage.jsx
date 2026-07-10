import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, User, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { toast } from '../components/ui/Toast.jsx'

function InputField({ label, type = 'text', value, onChange, placeholder, icon: Icon, required }) {
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <div className="relative">
        {Icon && <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />}
        <input
          type={isPassword && show ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full border border-gray-200 rounded-lg py-2.5 pr-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition ${Icon ? 'pl-9' : 'pl-3'}`}
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            {show ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
    </div>
  )
}

function LoginForm({ onSwitch }) {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await signIn({ email: form.email, password: form.password })
      toast('登录成功，欢迎回来！', 'success')
      navigate('/profile')
    } catch (err) {
      setError(err.message || '邮箱或密码错误，请重试')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <InputField label="邮箱" type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" icon={Mail} required />
      <InputField label="密码" type="password" value={form.password} onChange={set('password')} placeholder="请输入密码" icon={Lock} required />
      {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="mt-1 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 rounded-lg transition text-sm"
      >
        <LogIn size={16} />
        {submitting ? '登录中…' : '登录'}
      </button>
      <p className="text-center text-sm text-gray-500">
        还没有账号？{' '}
        <button type="button" onClick={onSwitch} className="text-indigo-600 hover:underline font-medium">立即注册</button>
      </p>
    </form>
  )
}

function RegisterForm({ onSwitch }) {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (form.password.length < 6) { setError('密码至少需要 6 位字符'); return }
    if (form.password !== form.confirm) { setError('两次输入的密码不一致'); return }
    setSubmitting(true)
    try {
      await signUp({ email: form.email, password: form.password, name: form.name })
      toast('注册成功！请前往个人中心完善信息', 'success')
      navigate('/profile')
    } catch (err) {
      setError(err.message || '注册失败，请检查信息后重试')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <InputField label="姓名" value={form.name} onChange={set('name')} placeholder="请输入您的姓名" icon={User} required />
      <InputField label="邮箱" type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" icon={Mail} required />
      <InputField label="密码" type="password" value={form.password} onChange={set('password')} placeholder="至少 6 位字符" icon={Lock} required />
      <InputField label="确认密码" type="password" value={form.confirm} onChange={set('confirm')} placeholder="再次输入密码" icon={Lock} required />
      {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="mt-1 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 rounded-lg transition text-sm"
      >
        <UserPlus size={16} />
        {submitting ? '注册中…' : '创建账号'}
      </button>
      <p className="text-center text-sm text-gray-500">
        已有账号？{' '}
        <button type="button" onClick={onSwitch} className="text-indigo-600 hover:underline font-medium">立即登录</button>
      </p>
    </form>
  )
}

export default function AuthPage() {
  const [tab, setTab] = useState('login')

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-2xl shadow-lg mb-4">
            <User size={28} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">用户信息系统</h1>
          <p className="text-gray-500 text-sm mt-1">User & Company CRM</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setTab('login')}
              className={`flex-1 py-4 text-sm font-semibold transition ${tab === 'login' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-gray-500 hover:text-gray-700'}`}
            >
              登录
            </button>
            <button
              onClick={() => setTab('register')}
              className={`flex-1 py-4 text-sm font-semibold transition ${tab === 'register' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-gray-500 hover:text-gray-700'}`}
            >
              注册
            </button>
          </div>

          {/* Form */}
          <div className="p-8">
            {tab === 'login'
              ? <LoginForm onSwitch={() => setTab('register')} />
              : <RegisterForm onSwitch={() => setTab('login')} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
