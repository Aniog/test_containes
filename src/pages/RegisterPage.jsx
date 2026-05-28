import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, UserPlus } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Button } from '@/components/ui/Button'
import { Input, Select } from '@/components/ui/Input'
import { Card, CardBody } from '@/components/ui/Card'
import { toast } from '@/components/ui/Toast'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const DEPARTMENTS = ['工商管理学院', '文学院', '理学院', '工程学院', '社会科学学院', '法律学院', '医学院', '教育学院', '神学院', '其他']
const DEGREES = ['本科', '硕士', '博士', '其他']
const CURRENT_YEAR = new Date().getFullYear()

export default function RegisterPage() {
  const { register, refreshProfile } = useAuth()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [account, setAccount] = useState({ email: '', password: '', confirmPassword: '', name: '' })
  const [profile, setProfile] = useState({
    real_name: '', student_id: '', graduation_year: '', department: '', degree: '',
    phone: '', wechat: '', current_city: '', current_company: '', bio: ''
  })

  const handleAccountNext = (e) => {
    e.preventDefault()
    setError('')
    if (account.password !== account.confirmPassword) {
      setError('两次输入的密码不一致')
      return
    }
    if (account.password.length < 6) {
      setError('密码至少需要6位')
      return
    }
    setStep(2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const user = await register(account.email, account.password, profile.real_name)
      if (user?.id) {
        // Hash password for storage (same function as in AuthContext)
        const encoder = new TextEncoder()
        const data = encoder.encode(account.password + 'cuhk_alumni_salt_2024')
        const hashBuffer = await crypto.subtle.digest('SHA-256', data)
        const passwordHash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')

        const { data: res } = await client.from('MemberProfile').insert({
          data: {
            user_id: user.id,
            email: account.email.toLowerCase().trim(),
            password_hash: passwordHash,
            role: 'user',
            real_name: profile.real_name,
            student_id: profile.student_id,
            graduation_year: parseInt(profile.graduation_year),
            department: profile.department,
            degree: profile.degree,
            phone: profile.phone,
            wechat: profile.wechat,
            current_city: profile.current_city,
            current_company: profile.current_company,
            bio: profile.bio,
            status: 'pending',
            membership_paid: false,
          }
        }).select().single()
        console.log('Profile created:', res)
        await refreshProfile()
      }
      toast.success('注册成功！请等待管理员审核您的会员资格。')
      navigate('/profile')
    } catch (err) {
      console.error('Register error:', err)
      setError(err.message || '注册失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-lg">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center font-bold text-blue-900 text-lg mx-auto mb-3">
            中大
          </div>
          <h1 className="text-2xl font-bold text-white">注册校友会会员</h1>
          <p className="text-blue-200 mt-1 text-sm">香港中文大学内地生校友会</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {[1, 2].map(s => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step >= s ? 'bg-amber-400 text-blue-900' : 'bg-blue-700 text-blue-300'
              }`}>{s}</div>
              <span className={`text-sm ${step >= s ? 'text-white' : 'text-blue-400'}`}>
                {s === 1 ? '账号信息' : '校友资料'}
              </span>
              {s < 2 && <div className={`w-12 h-0.5 ${step > s ? 'bg-amber-400' : 'bg-blue-700'}`} />}
            </div>
          ))}
        </div>

        <Card>
          <CardBody className="p-6">
            {step === 1 && (
              <form onSubmit={handleAccountNext} className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">创建账号</h2>
                <Input label="真实姓名" type="text" placeholder="请输入真实姓名" value={account.name}
                  onChange={e => setAccount(a => ({ ...a, name: e.target.value }))} required />
                <Input label="邮箱地址" type="email" placeholder="请输入常用邮箱" value={account.email}
                  onChange={e => setAccount(a => ({ ...a, email: e.target.value }))} required />
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-slate-700">密码</label>
                  <div className="relative">
                    <input type={showPwd ? 'text' : 'password'} placeholder="至少6位密码" value={account.password}
                      onChange={e => setAccount(a => ({ ...a, password: e.target.value }))} required
                      className="w-full px-3 py-2 pr-10 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent" />
                    <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                      {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <Input label="确认密码" type="password" placeholder="再次输入密码" value={account.confirmPassword}
                  onChange={e => setAccount(a => ({ ...a, confirmPassword: e.target.value }))} required />
                {error && <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">{error}</div>}
                <Button type="submit" className="w-full" size="lg">下一步：填写校友资料</Button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <button type="button" onClick={() => setStep(1)} className="text-blue-700 hover:underline text-sm">← 返回</button>
                  <h2 className="text-lg font-semibold text-slate-900">填写校友资料</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="真实姓名 *" type="text" placeholder="姓名" value={profile.real_name}
                    onChange={e => setProfile(p => ({ ...p, real_name: e.target.value }))} required />
                  <Input label="学号" type="text" placeholder="学号（选填）" value={profile.student_id}
                    onChange={e => setProfile(p => ({ ...p, student_id: e.target.value }))} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Select label="毕业年份 *" value={profile.graduation_year}
                    onChange={e => setProfile(p => ({ ...p, graduation_year: e.target.value }))} required>
                    <option value="">请选择</option>
                    {Array.from({ length: CURRENT_YEAR - 1959 }, (_, i) => CURRENT_YEAR - i).map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </Select>
                  <Select label="学位类型 *" value={profile.degree}
                    onChange={e => setProfile(p => ({ ...p, degree: e.target.value }))} required>
                    <option value="">请选择</option>
                    {DEGREES.map(d => <option key={d} value={d}>{d}</option>)}
                  </Select>
                </div>
                <Select label="所在院系 *" value={profile.department}
                  onChange={e => setProfile(p => ({ ...p, department: e.target.value }))} required>
                  <option value="">请选择院系</option>
                  {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                </Select>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="联系电话" type="tel" placeholder="手机号码" value={profile.phone}
                    onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))} />
                  <Input label="微信号" type="text" placeholder="微信号（选填）" value={profile.wechat}
                    onChange={e => setProfile(p => ({ ...p, wechat: e.target.value }))} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="现居城市" type="text" placeholder="如：北京、上海" value={profile.current_city}
                    onChange={e => setProfile(p => ({ ...p, current_city: e.target.value }))} />
                  <Input label="现任职单位" type="text" placeholder="公司/机构名称" value={profile.current_company}
                    onChange={e => setProfile(p => ({ ...p, current_company: e.target.value }))} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-slate-700">个人简介</label>
                  <textarea rows={3} placeholder="简单介绍一下自己（选填）" value={profile.bio}
                    onChange={e => setProfile(p => ({ ...p, bio: e.target.value }))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none" />
                </div>
                {error && <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">{error}</div>}
                <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
                  提交后，您的申请将由管理员审核。审核通过后需缴纳会费方可成为正式会员。
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  <UserPlus size={18} className="mr-2" />
                  {loading ? '提交中...' : '提交注册申请'}
                </Button>
              </form>
            )}

            <div className="mt-4 text-center text-sm text-slate-600">
              已有账号？{' '}
              <Link to="/login" className="text-blue-700 font-medium hover:underline">立即登录</Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
