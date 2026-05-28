import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserPlus, Eye, EyeOff, ChevronRight, ChevronLeft } from 'lucide-react'
import { Auth, DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { useToast } from '@/contexts/ToastContext'
import { Button } from '@/components/ui/Button'
import { Input, Select, Textarea } from '@/components/ui/FormFields'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const DEPARTMENTS = [
  '文学院', '理学院', '工程学院', '社会科学院', '商学院',
  '教育学院', '法律学院', '医学院', '神学院', '其他'
]

const DEGREES = [
  { value: 'bachelor', label: '学士' },
  { value: 'master', label: '硕士' },
  { value: 'phd', label: '博士' },
  { value: 'other', label: '其他' },
]

const MEMBERSHIP_FEES = {
  regular: { amount: 200, label: '普通会员 - HKD 200/年' },
  lifetime: { amount: 1000, label: '终身会员 - HKD 1,000（一次性）' },
}

export default function RegisterPage() {
  const { addToast } = useToast()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [showPwd, setShowPwd] = useState(false)
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    email: '', password: '', confirmPassword: '',
    name_zh: '', name_en: '', phone: '',
    graduation_year: '', department: '', degree: 'bachelor',
    current_city: '', current_company: '', current_position: '',
    bio: '', membership_type: 'regular',
    payment_method: 'fps', payment_reference: '',
  })

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const validateStep1 = () => {
    const e = {}
    if (!form.email) e.email = '请输入邮箱'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = '邮箱格式不正确'
    if (!form.password) e.password = '请输入密码'
    else if (form.password.length < 6) e.password = '密码至少6位'
    if (form.password !== form.confirmPassword) e.confirmPassword = '两次密码不一致'
    return e
  }

  const validateStep2 = () => {
    const e = {}
    if (!form.name_zh) e.name_zh = '请输入中文姓名'
    if (!form.graduation_year) e.graduation_year = '请输入毕业年份'
    else if (form.graduation_year < 1963 || form.graduation_year > 2030) e.graduation_year = '请输入有效年份'
    if (!form.department) e.department = '请选择院系'
    return e
  }

  const validateStep3 = () => {
    const e = {}
    if (!form.payment_reference) e.payment_reference = '请输入付款参考号'
    return e
  }

  const nextStep = () => {
    let errs = {}
    if (step === 1) errs = validateStep1()
    if (step === 2) errs = validateStep2()
    setErrors(errs)
    if (!Object.keys(errs).length) setStep(s => s + 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validateStep3()
    setErrors(errs)
    if (Object.keys(errs).length) return

    setLoading(true)
    try {
      const { user, error: signUpError } = await Auth.signUp({
        email: form.email,
        password: form.password,
        options: { data: { name: form.name_zh } }
      })
      if (signUpError) throw signUpError

      const userId = user?.id
      if (!userId) throw new Error('注册失败，请重试')

      const feeAmount = MEMBERSHIP_FEES[form.membership_type].amount

      const { data: profileResp, error: profileError } = await client
        .from('Member Profiles')
        .insert({
          data: {
            user_id: userId,
            name_zh: form.name_zh,
            name_en: form.name_en || '',
            email: form.email,
            phone: form.phone || '',
            graduation_year: parseInt(form.graduation_year),
            department: form.department,
            degree: form.degree,
            current_city: form.current_city || '',
            current_company: form.current_company || '',
            current_position: form.current_position || '',
            bio: form.bio || '',
            status: 'pending',
            membership_type: form.membership_type,
            fee_paid: false,
            fee_amount: feeAmount,
          }
        })
        .select()
        .single()

      if (profileError || profileResp?.success === false) {
        throw new Error(profileResp?.errors?.join(', ') || '档案创建失败')
      }

      await client.from('Fee Payments').insert({
        data: {
          user_id: userId,
          payment_type: 'membership',
          reference_id: String(profileResp?.data?.id || ''),
          amount: feeAmount,
          currency: 'HKD',
          payment_method: form.payment_method,
          payment_reference: form.payment_reference,
          status: 'pending',
        }
      })

      addToast('申请已提交！请等待管理员审核。', 'success')
      navigate('/register-success')
    } catch (err) {
      console.error('Register error:', err)
      addToast(err.message || '注册失败，请重试', 'error')
    } finally {
      setLoading(false)
    }
  }

  const feeInfo = MEMBERSHIP_FEES[form.membership_type]

  return (
    <div className="min-h-screen bg-[#F8F7FC] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#4B2D8F] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">中大</span>
          </div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">申请入会</h1>
          <p className="text-gray-500 text-sm mt-1">香港中文大学内地生校友会</p>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map(s => (
            <React.Fragment key={s}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                s === step ? 'bg-[#4B2D8F] text-white' :
                s < step ? 'bg-emerald-500 text-white' :
                'bg-gray-200 text-gray-500'
              }`}>
                {s < step ? '✓' : s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 ${s < step ? 'bg-emerald-500' : 'bg-gray-200'}`} />}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-center gap-16 mb-8 text-xs text-gray-500">
          <span className={step >= 1 ? 'text-[#4B2D8F] font-medium' : ''}>账号信息</span>
          <span className={step >= 2 ? 'text-[#4B2D8F] font-medium' : ''}>个人资料</span>
          <span className={step >= 3 ? 'text-[#4B2D8F] font-medium' : ''}>缴纳会费</span>
        </div>

        <Card>
          <CardBody>
            {/* Step 1: Account */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#1A1A2E] mb-4">创建账号</h2>
                <Input label="邮箱地址" type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} error={errors.email} required />
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#1A1A2E]">密码 <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input
                      type={showPwd ? 'text' : 'password'}
                      placeholder="至少6位"
                      value={form.password}
                      onChange={set('password')}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-[#1A1A2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#4B2D8F] focus:border-transparent text-sm"
                    />
                    <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
                </div>
                <Input label="确认密码" type="password" placeholder="再次输入密码" value={form.confirmPassword} onChange={set('confirmPassword')} error={errors.confirmPassword} required />
                <Button type="button" className="w-full" onClick={nextStep}>
                  下一步 <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <p className="text-center text-sm text-gray-500">
                  已有账号？<Link to="/login" className="text-[#4B2D8F] font-medium hover:underline">登录</Link>
                </p>
              </div>
            )}

            {/* Step 2: Profile */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#1A1A2E] mb-4">填写个人资料</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="中文姓名" placeholder="张三" value={form.name_zh} onChange={set('name_zh')} error={errors.name_zh} required />
                  <Input label="英文姓名" placeholder="Zhang San" value={form.name_en} onChange={set('name_en')} />
                </div>
                <Input label="联系电话" type="tel" placeholder="+86 138 0000 0000" value={form.phone} onChange={set('phone')} />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="毕业年份" type="number" placeholder="2020" min="1963" max="2030" value={form.graduation_year} onChange={set('graduation_year')} error={errors.graduation_year} required />
                  <Select label="学位类型" value={form.degree} onChange={set('degree')} required>
                    {DEGREES.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
                  </Select>
                </div>
                <Select label="所在院系" value={form.department} onChange={set('department')} error={errors.department} required>
                  <option value="">请选择院系</option>
                  {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                </Select>
                <Input label="现居城市" placeholder="北京" value={form.current_city} onChange={set('current_city')} />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="现任职单位" placeholder="公司名称" value={form.current_company} onChange={set('current_company')} />
                  <Input label="职位" placeholder="职位名称" value={form.current_position} onChange={set('current_position')} />
                </div>
                <Textarea label="个人简介" placeholder="简单介绍一下自己..." rows={3} value={form.bio} onChange={set('bio')} />
                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    <ChevronLeft className="w-4 h-4 mr-1" /> 上一步
                  </Button>
                  <Button type="button" className="flex-1" onClick={nextStep}>
                    下一步 <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg font-semibold text-[#1A1A2E] mb-4">缴纳会费</h2>

                <div className="space-y-3">
                  {Object.entries(MEMBERSHIP_FEES).map(([key, val]) => (
                    <label key={key} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                      form.membership_type === key ? 'border-[#4B2D8F] bg-purple-50' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input type="radio" name="membership_type" value={key} checked={form.membership_type === key} onChange={set('membership_type')} className="accent-[#4B2D8F]" />
                      <div>
                        <p className="font-medium text-[#1A1A2E] text-sm">{val.label}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm font-semibold text-amber-800 mb-2">付款方式</p>
                  <p className="text-sm text-amber-700">请通过以下方式缴纳会费 <strong>HKD {feeInfo.amount}</strong>：</p>
                  <ul className="text-sm text-amber-700 mt-2 space-y-1">
                    <li>• <strong>FPS（转数快）</strong>：+852 9000 0000</li>
                    <li>• <strong>银行转账</strong>：汇丰银行 123-456789-001</li>
                    <li>• 户名：CUHK Mainland Alumni Association</li>
                  </ul>
                  <p className="text-xs text-amber-600 mt-2">付款后请填写付款参考号，管理员确认后将审核您的申请。</p>
                </div>

                <Select label="付款方式" value={form.payment_method} onChange={set('payment_method')} required>
                  <option value="fps">FPS（转数快）</option>
                  <option value="bank_transfer">银行转账</option>
                  <option value="cash">现金</option>
                  <option value="other">其他</option>
                </Select>

                <Input
                  label="付款参考号 / 交易编号"
                  placeholder="请输入付款参考号或交易编号"
                  value={form.payment_reference}
                  onChange={set('payment_reference')}
                  error={errors.payment_reference}
                  required
                />

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(2)}>
                    <ChevronLeft className="w-4 h-4 mr-1" /> 上一步
                  </Button>
                  <Button type="submit" className="flex-1" disabled={loading}>
                    <UserPlus className="w-4 h-4 mr-2" />
                    {loading ? '提交中...' : '提交申请'}
                  </Button>
                </div>
              </form>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
