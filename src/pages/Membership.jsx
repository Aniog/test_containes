import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CheckCircle, Star, Shield, Users, Calendar, BookOpen, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { client, getRows, getSchemaData, getEntity, getErrorMessage } from '../api/client.js'
import { format, addYears } from 'date-fns'

const BENEFITS = [
  { icon: Calendar, text: '活动优惠价格' },
  { icon: BookOpen, text: '查阅完整校友录' },
  { icon: Users, text: '专属会员交流群' },
  { icon: Shield, text: '优先活动报名权' },
  { icon: Star, text: '会员专属活动' },
  { icon: CheckCircle, text: '校友会通讯订阅' },
]

const PLANS = [
  {
    id: 'annual',
    name: '年度会员',
    price: 200,
    period: '/ 年',
    desc: '享受一年完整会员权益',
    popular: true,
  },
  {
    id: 'lifetime',
    name: '终身会员',
    price: 800,
    period: '/ 终身',
    desc: '一次缴费，永久享受所有权益',
    popular: false,
  },
]

export default function Membership() {
  const { user, memberProfile, isMember, refreshProfile } = useAuth()
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState('annual')
  const [paymentMethod, setPaymentMethod] = useState('fps')
  const [paymentRef, setPaymentRef] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [pendingPayment, setPendingPayment] = useState(null)
  const [profileForm, setProfileForm] = useState({
    real_name: '', graduation_year: '', major: '', college: '', degree: 'bachelor',
    company: '', position: '', city: '', phone: '', wechat: '', bio: ''
  })
  const [profileStep, setProfileStep] = useState(false)

  const mp = memberProfile ? getSchemaData(memberProfile) : null

  useEffect(() => {
    if (!user) return
    const fetchPending = async () => {
      try {
        const { data: response } = await client
          .from('Membership Payments')
          .select('*')
          .eq('user_id', user.id)
          .eq('payment_status', 'pending')
        const rows = getRows(response)
        setPendingPayment(rows[0] || null)
      } catch (err) {
        console.error(err)
      }
    }
    fetchPending()
  }, [user])

  useEffect(() => {
    if (mp) {
      setProfileForm(f => ({
        ...f,
        real_name: mp.real_name || '',
        graduation_year: mp.graduation_year || '',
        major: mp.major || '',
        college: mp.college || '',
        degree: mp.degree || 'bachelor',
        company: mp.company || '',
        position: mp.position || '',
        city: mp.city || '',
        phone: mp.phone || '',
        wechat: mp.wechat || '',
        bio: mp.bio || '',
      }))
    }
  }, [memberProfile])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) { navigate('/login', { state: { from: '/membership' } }); return }
    setError('')
    setSubmitting(true)
    const plan = PLANS.find(p => p.id === selectedPlan)
    const today = new Date()
    const validUntil = selectedPlan === 'annual' ? format(addYears(today, 1), 'yyyy-MM-dd') : '2099-12-31'
    try {
      // Save/update member profile first
      if (!memberProfile) {
        const { data: profileResp, error: profileErr } = await client
          .from('Member Profiles')
          .insert({
            data: {
              user_id: user.id,
              real_name: profileForm.real_name || user.name || user.email,
              graduation_year: profileForm.graduation_year ? parseInt(profileForm.graduation_year) : undefined,
              major: profileForm.major,
              college: profileForm.college,
              degree: profileForm.degree,
              company: profileForm.company,
              position: profileForm.position,
              city: profileForm.city,
              phone: profileForm.phone,
              wechat: profileForm.wechat,
              bio: profileForm.bio,
              membership_status: 'pending',
            }
          })
          .select()
          .single()
        if (profileErr || profileResp?.success === false) {
          setError(getErrorMessage(profileResp, profileErr))
          return
        }
      }

      // Submit payment
      const { data: payResp, error: payErr } = await client
        .from('Membership Payments')
        .insert({
          data: {
            user_id: user.id,
            amount: plan.price,
            membership_type: selectedPlan,
            payment_status: 'pending',
            payment_method: paymentMethod,
            payment_reference: paymentRef,
            valid_from: format(today, 'yyyy-MM-dd'),
            valid_until: validUntil,
          }
        })
        .select()
        .single()
      if (payErr || payResp?.success === false) {
        setError(getErrorMessage(payResp, payErr))
        return
      }
      setPendingPayment(getEntity(payResp))
      setSuccess(true)
      await refreshProfile()
    } catch (err) {
      setError(err.message || '提交失败，请重试')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-cuhk-purple py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">加入会员</h1>
          <p className="text-white/70">成为正式会员，享受专属权益</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        {/* Already a member */}
        {isMember && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-800 text-lg">您已是正式会员</h3>
              <p className="text-green-600 text-sm mt-1">
                会员有效期至：{mp?.membership_expiry || '终身'}
              </p>
              <Link to="/dashboard" className="text-green-700 font-medium text-sm hover:underline mt-2 inline-block">
                前往会员中心 →
              </Link>
            </div>
          </div>
        )}

        {/* Pending payment */}
        {!isMember && pendingPayment && !success && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800">您有待审核的缴费申请</h3>
              <p className="text-yellow-600 text-sm mt-1">
                金额：HK${getSchemaData(pendingPayment).amount} | 方式：{getSchemaData(pendingPayment).payment_method}
              </p>
              <p className="text-yellow-600 text-sm">管理员审核后将激活您的会员资格，请耐心等待。</p>
            </div>
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-800 text-lg">申请已提交！</h3>
              <p className="text-green-600 text-sm mt-1">
                我们已收到您的会员申请和缴费信息，管理员将在1-3个工作日内审核并激活您的会员资格。
              </p>
            </div>
          </div>
        )}

        {/* Benefits */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">会员权益</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {BENEFITS.map(b => (
              <div key={b.text} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cuhk-purple-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-4 h-4 text-cuhk-purple" />
                </div>
                <span className="text-gray-700 text-sm">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plans & Payment Form */}
        {!isMember && !pendingPayment && !success && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Plan Selection */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">选择会员方案</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PLANS.map(plan => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative p-6 rounded-xl border-2 text-left transition-all ${
                      selectedPlan === plan.id
                        ? 'border-cuhk-purple bg-cuhk-purple-light'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute top-3 right-3 bg-cuhk-gold text-white text-xs px-2 py-0.5 rounded-full">
                        推荐
                      </span>
                    )}
                    <div className="text-2xl font-bold text-cuhk-purple mb-1">
                      HK${plan.price}
                      <span className="text-sm font-normal text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    <div className="font-semibold text-gray-900">{plan.name}</div>
                    <div className="text-gray-500 text-sm mt-1">{plan.desc}</div>
                    {selectedPlan === plan.id && (
                      <CheckCircle className="absolute bottom-3 right-3 w-5 h-5 text-cuhk-purple" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Info */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">完善个人资料</h2>
              <p className="text-gray-500 text-sm mb-6">请填写您的基本信息，以便我们审核您的会员申请</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">真实姓名 *</label>
                  <input
                    value={profileForm.real_name}
                    onChange={e => setProfileForm(f => ({ ...f, real_name: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">毕业年份</label>
                  <input
                    type="number"
                    value={profileForm.graduation_year}
                    onChange={e => setProfileForm(f => ({ ...f, graduation_year: e.target.value }))}
                    placeholder="如：2020"
                    min="1960" max="2030"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">专业</label>
                  <input
                    value={profileForm.major}
                    onChange={e => setProfileForm(f => ({ ...f, major: e.target.value }))}
                    placeholder="如：计算机科学"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">书院</label>
                  <input
                    value={profileForm.college}
                    onChange={e => setProfileForm(f => ({ ...f, college: e.target.value }))}
                    placeholder="如：新亚书院"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">学位</label>
                  <select
                    value={profileForm.degree}
                    onChange={e => setProfileForm(f => ({ ...f, degree: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                  >
                    <option value="bachelor">学士</option>
                    <option value="master">硕士</option>
                    <option value="phd">博士</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">所在城市</label>
                  <input
                    value={profileForm.city}
                    onChange={e => setProfileForm(f => ({ ...f, city: e.target.value }))}
                    placeholder="如：香港、北京、上海"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">公司/机构</label>
                  <input
                    value={profileForm.company}
                    onChange={e => setProfileForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">职位</label>
                  <input
                    value={profileForm.position}
                    onChange={e => setProfileForm(f => ({ ...f, position: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">联系电话</label>
                  <input
                    value={profileForm.phone}
                    onChange={e => setProfileForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">微信号</label>
                  <input
                    value={profileForm.wechat}
                    onChange={e => setProfileForm(f => ({ ...f, wechat: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                  />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">缴费信息</h2>
              <div className="bg-cuhk-gold-light border border-cuhk-gold/30 rounded-xl p-4 mb-6">
                <p className="text-gray-700 font-medium">
                  应缴金额：<span className="text-cuhk-gold font-bold text-xl">
                    HK${PLANS.find(p => p.id === selectedPlan)?.price}
                  </span>
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">支付方式</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { value: 'fps', label: 'FPS 转数快', desc: 'FPS号：12345678' },
                      { value: 'bank_transfer', label: '银行转账', desc: '中银香港 012-345-678901' },
                      { value: 'cash', label: '现金缴交', desc: '联系管理员安排' },
                    ].map(m => (
                      <button
                        key={m.value}
                        type="button"
                        onClick={() => setPaymentMethod(m.value)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          paymentMethod === m.value
                            ? 'border-cuhk-purple bg-cuhk-purple-light'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium text-gray-900 text-sm">{m.label}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{m.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">支付参考号/备注</label>
                  <input
                    value={paymentRef}
                    onChange={e => setPaymentRef(e.target.value)}
                    placeholder="请填写转账参考号或备注，方便核对"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" /> {error}
              </div>
            )}

            {!user ? (
              <Link
                to="/login"
                state={{ from: '/membership' }}
                className="block w-full bg-cuhk-purple hover:bg-cuhk-purple-dark text-white py-4 rounded-xl font-semibold transition-colors text-center text-lg"
              >
                登录后申请会员
              </Link>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-cuhk-purple hover:bg-cuhk-purple-dark disabled:opacity-60 text-white py-4 rounded-xl font-semibold transition-colors text-lg"
              >
                {submitting ? '提交中...' : '提交会员申请'}
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
