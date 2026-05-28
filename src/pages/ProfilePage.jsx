import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, CreditCard, CheckCircle, Clock, XCircle, AlertCircle, Calendar } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/Button'
import { Input, Select } from '@/components/ui/Input'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { toast } from '@/components/ui/Toast'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const PAYMENT_METHODS = [
  { value: 'wechat_pay', label: '微信支付' },
  { value: 'alipay', label: '支付宝' },
  { value: 'bank_transfer', label: '银行转账' },
  { value: 'fps', label: 'FPS（转数快）' },
  { value: 'payme', label: 'PayMe' },
  { value: 'other', label: '其他' },
]

const MEMBERSHIP_FEES = {
  annual: { label: '年费会员', amount: 200, desc: '有效期1年' },
  lifetime: { label: '终身会员', amount: 1000, desc: '永久有效' },
}

export default function ProfilePage() {
  const { user, memberProfile, refreshProfile, isApprovedMember } = useAuth()
  const navigate = useNavigate()
  const [paymentModal, setPaymentModal] = useState(false)
  const [paymentHistory, setPaymentHistory] = useState([])
  const [myEvents, setMyEvents] = useState([])
  const [myRegistrations, setMyRegistrations] = useState([])
  const [payForm, setPayForm] = useState({ payment_type: 'annual', payment_method: 'wechat_pay', transaction_ref: '' })
  const [paying, setPaying] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

  const profileData = memberProfile?.data

  useEffect(() => {
    if (!user) { navigate('/login'); return }
    fetchPaymentHistory()
    fetchMyEvents()
    fetchMyRegistrations()
  }, [user])

  const fetchPaymentHistory = async () => {
    if (!user?.id) return
    const { data: res } = await client.from('MembershipPayment').select('*').eq('user_id', user.id).order('created_at', { ascending: false })
    setPaymentHistory(res?.data?.list ?? [])
  }

  const fetchMyEvents = async () => {
    if (!user?.id) return
    const { data: res } = await client.from('Event').select('*').eq('organizer_user_id', user.id).order('created_at', { ascending: false })
    setMyEvents(res?.data?.list ?? [])
  }

  const fetchMyRegistrations = async () => {
    if (!user?.id) return
    const { data: res } = await client.from('EventRegistration').select('*').eq('user_id', user.id).order('created_at', { ascending: false })
    setMyRegistrations(res?.data?.list ?? [])
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    if (!payForm.transaction_ref.trim()) {
      toast.error('请填写转账参考号或说明')
      return
    }
    setPaying(true)
    try {
      const fee = MEMBERSHIP_FEES[payForm.payment_type]
      const { data: res } = await client.from('MembershipPayment').insert({
        data: {
          user_id: user.id,
          user_name: profileData?.real_name || user.email,
          user_email: user.email,
          amount: fee.amount,
          payment_type: payForm.payment_type,
          payment_method: payForm.payment_method,
          transaction_ref: payForm.transaction_ref,
          status: 'pending',
        }
      }).select().single()
      console.log('Payment submitted:', res)
      toast.success('缴费申请已提交，请等待管理员确认！')
      setPaymentModal(false)
      setPayForm({ payment_type: 'annual', payment_method: 'wechat_pay', transaction_ref: '' })
      await fetchPaymentHistory()
    } catch (err) {
      console.error('Payment error:', err)
      toast.error('提交失败，请重试')
    } finally {
      setPaying(false)
    }
  }

  const statusIcon = {
    pending: <Clock size={20} className="text-amber-500" />,
    approved: <CheckCircle size={20} className="text-green-500" />,
    rejected: <XCircle size={20} className="text-red-500" />,
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-6 mb-6 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
              <User size={28} className="text-blue-900" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{profileData?.real_name || '未设置姓名'}</h1>
              <p className="text-blue-200 text-sm">{user.email}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData?.status && <Badge status={profileData.status} />}
                {profileData?.membership_paid && <Badge status="paid" label="已缴费" />}
                {isApprovedMember && <Badge status="approved" label="正式会员" />}
              </div>
            </div>
            {profileData?.status === 'approved' && !profileData?.membership_paid && (
              <Button variant="gold" onClick={() => setPaymentModal(true)}>
                <CreditCard size={16} className="mr-2" />
                缴纳会费
              </Button>
            )}
          </div>
        </div>

        {/* Status Banner */}
        {profileData?.status === 'pending' && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-amber-800">您的会员申请正在审核中</p>
              <p className="text-sm text-amber-700 mt-1">管理员将尽快审核您的申请，审核通过后您需要缴纳会费才能成为正式会员。</p>
            </div>
          </div>
        )}
        {profileData?.status === 'approved' && !profileData?.membership_paid && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <CreditCard size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-medium text-blue-800">审核已通过！请缴纳会费成为正式会员</p>
              <p className="text-sm text-blue-700 mt-1">缴费后即可发布和参加活动。年费 HK$200 / 终身会员 HK$1000</p>
            </div>
            <Button variant="primary" size="sm" onClick={() => setPaymentModal(true)}>立即缴费</Button>
          </div>
        )}
        {profileData?.status === 'rejected' && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <XCircle size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-red-800">您的会员申请未通过审核</p>
              {profileData?.admin_note && <p className="text-sm text-red-700 mt-1">原因：{profileData.admin_note}</p>}
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1 border border-slate-200 mb-6">
          {[
            { key: 'profile', label: '个人资料' },
            { key: 'payment', label: '缴费记录' },
            { key: 'events', label: '我发布的活动' },
            { key: 'registrations', label: '我报名的活动' },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.key ? 'bg-blue-800 text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && !profileData && (
          <Card>
            <CardBody>
              <div className="text-center py-8 text-slate-500">
                <User size={40} className="mx-auto mb-3 text-slate-300" />
                <p className="font-medium">资料加载中...</p>
                <p className="text-sm mt-1">如长时间未显示，请刷新页面</p>
              </div>
            </CardBody>
          </Card>
        )}
        {activeTab === 'profile' && profileData && (
          <Card>
            <CardHeader>
              <h2 className="font-semibold text-slate-900">校友资料</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: '真实姓名', value: profileData.real_name },
                  { label: '学号', value: profileData.student_id || '未填写' },
                  { label: '毕业年份', value: profileData.graduation_year },
                  { label: '学位', value: profileData.degree },
                  { label: '院系', value: profileData.department },
                  { label: '联系电话', value: profileData.phone || '未填写' },
                  { label: '微信号', value: profileData.wechat || '未填写' },
                  { label: '现居城市', value: profileData.current_city || '未填写' },
                  { label: '现任职单位', value: profileData.current_company || '未填写' },
                ].map(item => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-xs text-slate-500">{item.label}</span>
                    <span className="text-sm font-medium text-slate-900">{item.value}</span>
                  </div>
                ))}
                {profileData.bio && (
                  <div className="sm:col-span-2 flex flex-col gap-1">
                    <span className="text-xs text-slate-500">个人简介</span>
                    <span className="text-sm text-slate-900">{profileData.bio}</span>
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        )}

        {/* Payment History Tab */}
        {activeTab === 'payment' && (
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">缴费记录</h2>
              {profileData?.status === 'approved' && !profileData?.membership_paid && (
                <Button size="sm" onClick={() => setPaymentModal(true)}>缴纳会费</Button>
              )}
            </CardHeader>
            <CardBody>
              {paymentHistory.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <CreditCard size={40} className="mx-auto mb-3 text-slate-300" />
                  <p>暂无缴费记录</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {paymentHistory.map(p => {
                    const d = p.data
                    return (
                      <div key={p.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          {statusIcon[d.status] || <Clock size={20} className="text-slate-400" />}
                          <div>
                            <p className="font-medium text-slate-900">
                              {d.payment_type === 'annual' ? '年费会员' : '终身会员'} — HK${d.amount}
                            </p>
                            <p className="text-xs text-slate-500">{PAYMENT_METHODS.find(m => m.value === d.payment_method)?.label} · 参考号：{d.transaction_ref}</p>
                          </div>
                        </div>
                        <Badge status={d.status} />
                      </div>
                    )
                  })}
                </div>
              )}
            </CardBody>
          </Card>
        )}

        {/* My Events Tab */}
        {activeTab === 'events' && (
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">我发布的活动</h2>
              {isApprovedMember && (
                <Button size="sm" onClick={() => navigate('/events/create')}>发布新活动</Button>
              )}
            </CardHeader>
            <CardBody>
              {myEvents.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <Calendar size={40} className="mx-auto mb-3 text-slate-300" />
                  <p>您还没有发布过活动</p>
                  {isApprovedMember && <Button size="sm" className="mt-3" onClick={() => navigate('/events/create')}>发布第一个活动</Button>}
                </div>
              ) : (
                <div className="space-y-3">
                  {myEvents.map(ev => {
                    const d = ev.data
                    return (
                      <div key={ev.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100"
                        onClick={() => navigate(`/events/${ev.id}`)}>
                        <div>
                          <p className="font-medium text-slate-900">{d.title}</p>
                          <p className="text-xs text-slate-500">{d.event_date?.slice(0, 10)} · {d.location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {d.is_paid && <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">HK${d.fee}</span>}
                          <Badge status={d.status} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardBody>
          </Card>
        )}

        {/* My Registrations Tab */}
        {activeTab === 'registrations' && (
          <Card>
            <CardHeader>
              <h2 className="font-semibold text-slate-900">我报名的活动</h2>
            </CardHeader>
            <CardBody>
              {myRegistrations.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <Calendar size={40} className="mx-auto mb-3 text-slate-300" />
                  <p>您还没有报名过活动</p>
                  <Button size="sm" className="mt-3" onClick={() => navigate('/events')}>浏览活动</Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {myRegistrations.map(reg => {
                    const d = reg.data
                    return (
                      <div key={reg.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                        <div>
                          <p className="font-medium text-slate-900">活动报名</p>
                          <p className="text-xs text-slate-500">
                            {d.payment_status !== 'free' ? `已付 HK$${d.payment_amount}` : '免费活动'}
                            {d.payment_note && ` · ${d.payment_note}`}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge status={d.payment_status} />
                          <Badge status={d.status} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardBody>
          </Card>
        )}
      </div>

      {/* Payment Modal */}
      <Modal open={paymentModal} onClose={() => setPaymentModal(false)} title="缴纳会费">
        <form onSubmit={handlePayment} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(MEMBERSHIP_FEES).map(([key, fee]) => (
              <button key={key} type="button"
                onClick={() => setPayForm(f => ({ ...f, payment_type: key }))}
                className={`p-4 rounded-xl border-2 text-left transition-colors ${
                  payForm.payment_type === key ? 'border-blue-700 bg-blue-50' : 'border-slate-200 hover:border-slate-300'
                }`}>
                <p className="font-semibold text-slate-900">{fee.label}</p>
                <p className="text-2xl font-bold text-blue-800 mt-1">HK${fee.amount}</p>
                <p className="text-xs text-slate-500 mt-1">{fee.desc}</p>
              </button>
            ))}
          </div>

          <Select label="支付方式" value={payForm.payment_method}
            onChange={e => setPayForm(f => ({ ...f, payment_method: e.target.value }))}>
            {PAYMENT_METHODS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
          </Select>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
            <p className="font-medium mb-2">收款信息</p>
            <p>微信/支付宝：<strong>cuhk_alumni_hk</strong></p>
            <p>FPS/PayMe：<strong>+852 9XXX XXXX</strong></p>
            <p>银行转账：<strong>汇丰银行 123-456789-001</strong></p>
            <p className="mt-2 text-xs text-blue-600">转账时请备注您的姓名和学号</p>
          </div>

          <Input label="转账参考号 / 备注说明 *" type="text"
            placeholder="请填写转账流水号或截图说明"
            value={payForm.transaction_ref}
            onChange={e => setPayForm(f => ({ ...f, transaction_ref: e.target.value }))}
            required />

          <div className="flex gap-3">
            <Button type="button" variant="secondary" className="flex-1" onClick={() => setPaymentModal(false)}>取消</Button>
            <Button type="submit" className="flex-1" disabled={paying}>
              {paying ? '提交中...' : '提交缴费申请'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
