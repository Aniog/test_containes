import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Users, CreditCard, CheckCircle, XCircle, Clock, Search, ChevronDown, ChevronUp } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { toast } from '@/components/ui/Toast'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function AdminPage() {
  const { user, isAdmin } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('members')
  const [members, setMembers] = useState([])
  const [payments, setPayments] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedMember, setSelectedMember] = useState(null)
  const [reviewModal, setReviewModal] = useState(false)
  const [reviewNote, setReviewNote] = useState('')
  const [reviewAction, setReviewAction] = useState('')
  const [processing, setProcessing] = useState(false)
  const [expandedMember, setExpandedMember] = useState(null)

  useEffect(() => {
    if (!user) { navigate('/login'); return }
    if (!isAdmin) { navigate('/'); return }
    fetchAll()
  }, [user, isAdmin])

  const fetchAll = useCallback(async () => {
    setLoading(true)
    await Promise.all([fetchMembers(), fetchPayments(), fetchEvents()])
    setLoading(false)
  }, [])

  const fetchMembers = async () => {
    const { data: res } = await client.from('MemberProfile').select('*').order('created_at', { ascending: false })
    setMembers(res?.data?.list ?? [])
  }

  const fetchPayments = async () => {
    const { data: res } = await client.from('MembershipPayment').select('*').order('created_at', { ascending: false })
    setPayments(res?.data?.list ?? [])
  }

  const fetchEvents = async () => {
    const { data: res } = await client.from('Event').select('*').order('created_at', { ascending: false })
    setEvents(res?.data?.list ?? [])
  }

  const openReview = (member, action) => {
    setSelectedMember(member)
    setReviewAction(action)
    setReviewNote('')
    setReviewModal(true)
  }

  const handleReview = async () => {
    if (!selectedMember) return
    setProcessing(true)
    try {
      const { data: res, error } = await client.from('MemberProfile')
        .update({ data: { ...selectedMember.data, status: reviewAction, admin_note: reviewNote } })
        .eq('id', selectedMember.id)
        .select().single()
      if (error) throw error
      toast.success(reviewAction === 'approved' ? '已通过审核' : '已拒绝申请')
      setReviewModal(false)
      await fetchMembers()
    } catch (err) {
      console.error('Review error:', err)
      toast.error('操作失败，请重试')
    } finally {
      setProcessing(false)
    }
  }

  const handleConfirmPayment = async (payment, action) => {
    setProcessing(true)
    try {
      const { data: res, error } = await client.from('MembershipPayment')
        .update({ data: { ...payment.data, status: action } })
        .eq('id', payment.id)
        .select().single()
      if (error) throw error

      if (action === 'confirmed') {
        const member = members.find(m => m.data?.user_id === payment.data?.user_id)
        if (member) {
          const today = new Date()
          const expiresAt = payment.data?.payment_type === 'lifetime'
            ? '2099-12-31'
            : new Date(today.setFullYear(today.getFullYear() + 1)).toISOString().slice(0, 10)
          await client.from('MemberProfile')
            .update({ data: { ...member.data, membership_paid: true, membership_paid_at: new Date().toISOString(), membership_expires_at: expiresAt } })
            .eq('id', member.id)
            .select().single()
        }
        toast.success('已确认缴费，会员资格已激活')
      } else {
        toast.success('已拒绝该缴费申请')
      }
      await fetchAll()
    } catch (err) {
      console.error('Confirm payment error:', err)
      toast.error('操作失败，请重试')
    } finally {
      setProcessing(false)
    }
  }

  const filteredMembers = members.filter(m => {
    const d = m.data
    const q = search.toLowerCase()
    return !q || d?.real_name?.toLowerCase().includes(q) || d?.department?.toLowerCase().includes(q) || d?.current_city?.toLowerCase().includes(q)
  })

  const stats = {
    total: members.length,
    pending: members.filter(m => m.data?.status === 'pending').length,
    approved: members.filter(m => m.data?.status === 'approved').length,
    paid: members.filter(m => m.data?.membership_paid).length,
    pendingPayments: payments.filter(p => p.data?.status === 'pending').length,
  }

  if (!isAdmin) return null

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center">
            <Shield size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">管理后台</h1>
            <p className="text-sm text-slate-500">香港中文大学内地生校友会</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
          {[
            { label: '总会员数', value: stats.total, color: 'text-blue-800', bg: 'bg-blue-50' },
            { label: '待审核', value: stats.pending, color: 'text-amber-700', bg: 'bg-amber-50' },
            { label: '已通过', value: stats.approved, color: 'text-green-700', bg: 'bg-green-50' },
            { label: '正式会员', value: stats.paid, color: 'text-blue-700', bg: 'bg-blue-50' },
            { label: '待确认缴费', value: stats.pendingPayments, color: 'text-orange-700', bg: 'bg-orange-50' },
          ].map(s => (
            <div key={s.label} className={`${s.bg} rounded-xl p-4 text-center`}>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-slate-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1 border border-slate-200 mb-6">
          {[
            { key: 'members', label: `会员管理 (${stats.pending}待审)`, icon: <Users size={15} /> },
            { key: 'payments', label: `缴费管理 (${stats.pendingPayments}待确认)`, icon: <CreditCard size={15} /> },
            { key: 'events', label: `活动管理 (${events.length})`, icon: <Shield size={15} /> },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.key ? 'bg-blue-800 text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Members Tab */}
        {activeTab === 'members' && (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-xs">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="搜索姓名、院系、城市..." value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700" />
                </div>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              {loading ? (
                <div className="text-center py-12 text-slate-500">加载中...</div>
              ) : filteredMembers.length === 0 ? (
                <div className="text-center py-12 text-slate-500">暂无会员数据</div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {filteredMembers.map(member => {
                    const d = member.data
                    const isExpanded = expandedMember === member.id
                    return (
                      <div key={member.id} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-800 font-semibold text-sm">{d?.real_name?.[0] || '?'}</span>
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-medium text-slate-900">{d?.real_name}</span>
                                <Badge status={d?.status} />
                                {d?.membership_paid && <Badge status="paid" label="已缴费" />}
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5">{d?.department} · {d?.degree} · {d?.graduation_year}届</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                            {d?.status === 'pending' && (
                              <>
                                <Button size="sm" variant="success" onClick={() => openReview(member, 'approved')}>
                                  <CheckCircle size={14} className="mr-1" /> 通过
                                </Button>
                                <Button size="sm" variant="danger" onClick={() => openReview(member, 'rejected')}>
                                  <XCircle size={14} className="mr-1" /> 拒绝
                                </Button>
                              </>
                            )}
                            <button onClick={() => setExpandedMember(isExpanded ? null : member.id)}
                              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500">
                              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                          </div>
                        </div>
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                            {[
                              { label: '学号', value: d?.student_id || '未填写' },
                              { label: '联系电话', value: d?.phone || '未填写' },
                              { label: '微信号', value: d?.wechat || '未填写' },
                              { label: '现居城市', value: d?.current_city || '未填写' },
                              { label: '现任职单位', value: d?.current_company || '未填写' },
                              { label: '会费状态', value: d?.membership_paid ? `已缴费（至${d?.membership_expires_at || '永久'}）` : '未缴费' },
                            ].map(item => (
                              <div key={item.label}>
                                <span className="text-xs text-slate-500">{item.label}</span>
                                <p className="text-slate-900 font-medium">{item.value}</p>
                              </div>
                            ))}
                            {d?.bio && (
                              <div className="col-span-2 sm:col-span-3">
                                <span className="text-xs text-slate-500">个人简介</span>
                                <p className="text-slate-900">{d.bio}</p>
                              </div>
                            )}
                            {d?.admin_note && (
                              <div className="col-span-2 sm:col-span-3">
                                <span className="text-xs text-slate-500">管理员备注</span>
                                <p className="text-slate-700">{d.admin_note}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </CardBody>
          </Card>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <Card>
            <CardHeader>
              <h2 className="font-semibold text-slate-900">缴费申请管理</h2>
            </CardHeader>
            <CardBody className="p-0">
              {payments.length === 0 ? (
                <div className="text-center py-12 text-slate-500">暂无缴费记录</div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {payments.map(p => {
                    const d = p.data
                    return (
                      <div key={p.id} className="p-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            d?.status === 'confirmed' ? 'bg-green-100' : d?.status === 'rejected' ? 'bg-red-100' : 'bg-amber-100'
                          }`}>
                            {d?.status === 'confirmed' ? <CheckCircle size={18} className="text-green-600" /> :
                             d?.status === 'rejected' ? <XCircle size={18} className="text-red-600" /> :
                             <Clock size={18} className="text-amber-600" />}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-slate-900">{d?.user_name} — {d?.payment_type === 'annual' ? '年费' : '终身会员'} HK${d?.amount}</p>
                            <p className="text-xs text-slate-500">{d?.user_email} · {d?.payment_method} · 参考号：{d?.transaction_ref}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Badge status={d?.status} />
                          {d?.status === 'pending' && (
                            <>
                              <Button size="sm" variant="success" disabled={processing} onClick={() => handleConfirmPayment(p, 'confirmed')}>确认</Button>
                              <Button size="sm" variant="danger" disabled={processing} onClick={() => handleConfirmPayment(p, 'rejected')}>拒绝</Button>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardBody>
          </Card>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <Card>
            <CardHeader>
              <h2 className="font-semibold text-slate-900">活动管理</h2>
            </CardHeader>
            <CardBody className="p-0">
              {events.length === 0 ? (
                <div className="text-center py-12 text-slate-500">暂无活动</div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {events.map(ev => {
                    const d = ev.data
                    return (
                      <div key={ev.id} className="p-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50"
                        onClick={() => navigate(`/events/${ev.id}`)}>
                        <div>
                          <p className="font-medium text-slate-900">{d?.title}</p>
                          <p className="text-xs text-slate-500">{d?.event_date?.slice(0, 10)} · {d?.location} · {d?.category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {d?.is_paid && <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">HK${d?.fee}</span>}
                          <Badge status={d?.status} />
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

      {/* Review Modal */}
      <Modal open={reviewModal} onClose={() => setReviewModal(false)}
        title={reviewAction === 'approved' ? '通过会员申请' : '拒绝会员申请'}>
        <div className="space-y-4">
          {selectedMember && (
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="font-medium text-slate-900">{selectedMember.data?.real_name}</p>
              <p className="text-sm text-slate-600">{selectedMember.data?.department} · {selectedMember.data?.degree} · {selectedMember.data?.graduation_year}届</p>
            </div>
          )}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">
              {reviewAction === 'approved' ? '备注（选填）' : '拒绝原因（建议填写）'}
            </label>
            <textarea rows={3} value={reviewNote} onChange={e => setReviewNote(e.target.value)}
              placeholder={reviewAction === 'approved' ? '可填写欢迎语或备注...' : '请说明拒绝原因...'}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none" />
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1" onClick={() => setReviewModal(false)}>取消</Button>
            <Button variant={reviewAction === 'approved' ? 'success' : 'danger'} className="flex-1"
              disabled={processing} onClick={handleReview}>
              {processing ? '处理中...' : reviewAction === 'approved' ? '确认通过' : '确认拒绝'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
