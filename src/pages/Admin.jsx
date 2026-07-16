import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Users, Calendar, BookOpen, CreditCard, CheckCircle, XCircle,
  Clock, Shield, Plus, ChevronRight, AlertCircle
} from 'lucide-react'
import { client, getRows, getSchemaData, getEntity, getErrorMessage } from '../api/client.js'
import { useAuth } from '../context/AuthContext.jsx'
import { format, parseISO, addYears } from 'date-fns'

const TABS = ['概览', '会员审核', '校友录审核', '活动管理', '发布活动']

export default function Admin() {
  const { user, isAdmin, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState(0)
  const [stats, setStats] = useState({ members: 0, pendingMembers: 0, pendingAlumni: 0, events: 0 })
  const [pendingPayments, setPendingPayments] = useState([])
  const [pendingAlumni, setPendingAlumni] = useState([])
  const [events, setEvents] = useState([])
  const [processing, setProcessing] = useState({})
  const [eventForm, setEventForm] = useState({
    title: '', description: '', event_date: '', registration_deadline: '',
    location: '', capacity: 0, fee: 0, member_fee: 0, category: 'networking', status: 'published'
  })
  const [eventSubmitting, setEventSubmitting] = useState(false)
  const [eventSuccess, setEventSuccess] = useState(false)
  const [eventError, setEventError] = useState('')

  useEffect(() => {
    if (!authLoading && !isAdmin) navigate('/')
  }, [authLoading, isAdmin, navigate])

  const fetchData = async () => {
    try {
      const [paymentsResp, alumniResp, eventsResp] = await Promise.all([
        client.from('Membership Payments').select('*').eq('payment_status', 'pending'),
        client.from('Alumni Directory').select('*').eq('approval_status', 'pending'),
        client.from('Events').select('*').order('event_date', { ascending: false }),
      ])
      const payments = getRows(paymentsResp.data)
      const alumni = getRows(alumniResp.data)
      const evts = getRows(eventsResp.data)
      setPendingPayments(payments)
      setPendingAlumni(alumni)
      setEvents(evts)
      setStats({
        pendingMembers: payments.length,
        pendingAlumni: alumni.length,
        events: evts.length,
      })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (isAdmin) fetchData()
  }, [isAdmin])

  const handlePaymentAction = async (payment, action) => {
    const pid = payment.id
    setProcessing(p => ({ ...p, [pid]: true }))
    const d = getSchemaData(payment)
    try {
      const today = new Date()
      const validUntil = d.membership_type === 'annual'
        ? format(addYears(today, 1), 'yyyy-MM-dd')
        : '2099-12-31'

      const { data: resp, error } = await client
        .from('Membership Payments')
        .update({
          data: {
            ...d,
            payment_status: action === 'confirm' ? 'confirmed' : 'rejected',
            confirmed_at: new Date().toISOString(),
            confirmed_by: user.id,
            valid_until: action === 'confirm' ? validUntil : d.valid_until,
          }
        })
        .eq('id', pid)
        .select()
        .single()

      if (error || resp?.success === false) {
        console.error(getErrorMessage(resp, error))
        return
      }

      // If confirmed, update member profile status
      if (action === 'confirm') {
        const { data: profileResp } = await client
          .from('Member Profiles')
          .select('*')
          .eq('user_id', d.user_id)
        const profiles = getRows(profileResp)
        if (profiles.length > 0) {
          const profile = profiles[0]
          const pd = getSchemaData(profile)
          await client
            .from('Member Profiles')
            .update({
              data: {
                ...pd,
                membership_status: 'active',
                membership_expiry: validUntil,
                approved_at: new Date().toISOString(),
                approved_by: user.id,
              }
            })
            .eq('id', profile.id)
            .select()
            .single()
        }
      }

      setPendingPayments(prev => prev.filter(p => p.id !== pid))
      setStats(s => ({ ...s, pendingMembers: s.pendingMembers - 1 }))
    } catch (err) {
      console.error(err)
    } finally {
      setProcessing(p => ({ ...p, [pid]: false }))
    }
  }

  const handleAlumniAction = async (alumnus, action, reason = '') => {
    const aid = alumnus.id
    setProcessing(p => ({ ...p, [aid]: true }))
    const d = getSchemaData(alumnus)
    try {
      const { data: resp, error } = await client
        .from('Alumni Directory')
        .update({
          data: {
            ...d,
            approval_status: action === 'approve' ? 'approved' : 'rejected',
            approved_at: new Date().toISOString(),
            approved_by: user.id,
            rejection_reason: action === 'reject' ? reason : '',
          }
        })
        .eq('id', aid)
        .select()
        .single()

      if (error || resp?.success === false) {
        console.error(getErrorMessage(resp, error))
        return
      }
      setPendingAlumni(prev => prev.filter(a => a.id !== aid))
      setStats(s => ({ ...s, pendingAlumni: s.pendingAlumni - 1 }))
    } catch (err) {
      console.error(err)
    } finally {
      setProcessing(p => ({ ...p, [aid]: false }))
    }
  }

  const handleEventStatusChange = async (event, newStatus) => {
    const eid = event.id
    setProcessing(p => ({ ...p, [eid]: true }))
    const d = getSchemaData(event)
    try {
      const { data: resp, error } = await client
        .from('Events')
        .update({ data: { ...d, status: newStatus } })
        .eq('id', eid)
        .select()
        .single()
      if (error || resp?.success === false) return
      setEvents(prev => prev.map(e => e.id === eid ? getEntity(resp) : e))
    } catch (err) {
      console.error(err)
    } finally {
      setProcessing(p => ({ ...p, [eid]: false }))
    }
  }

  const handleCreateEvent = async (e) => {
    e.preventDefault()
    setEventError('')
    setEventSubmitting(true)
    try {
      const { data: resp, error } = await client
        .from('Events')
        .insert({
          data: {
            ...eventForm,
            capacity: parseInt(eventForm.capacity) || 0,
            fee: parseFloat(eventForm.fee) || 0,
            member_fee: parseFloat(eventForm.member_fee) || 0,
            organizer_id: user.id,
          }
        })
        .select()
        .single()
      if (error || resp?.success === false) {
        setEventError(getErrorMessage(resp, error))
        return
      }
      setEvents(prev => [getEntity(resp), ...prev])
      setEventSuccess(true)
      setEventForm({
        title: '', description: '', event_date: '', registration_deadline: '',
        location: '', capacity: 0, fee: 0, member_fee: 0, category: 'networking', status: 'published'
      })
      setTimeout(() => setEventSuccess(false), 3000)
    } catch (err) {
      setEventError(err.message || '创建失败')
    } finally {
      setEventSubmitting(false)
    }
  }

  if (authLoading) return <div className="min-h-screen flex items-center justify-center text-gray-400">加载中...</div>
  if (!isAdmin) return null

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-cuhk-purple py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-cuhk-gold" />
            <h1 className="text-2xl font-bold text-white">管理后台</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: '待审会员缴费', value: stats.pendingMembers, color: 'text-yellow-600', bg: 'bg-yellow-50', icon: CreditCard },
            { label: '待审校友录', value: stats.pendingAlumni, color: 'text-blue-600', bg: 'bg-blue-50', icon: BookOpen },
            { label: '活动总数', value: stats.events, color: 'text-green-600', bg: 'bg-green-50', icon: Calendar },
            { label: '管理员', value: '1', color: 'text-purple-600', bg: 'bg-purple-50', icon: Shield },
          ].map(s => (
            <div key={s.label} className={`${s.bg} rounded-2xl p-5 border border-gray-100`}>
              <div className="flex items-center justify-between mb-2">
                <s.icon className={`w-5 h-5 ${s.color}`} />
                {s.value > 0 && s.label.includes('待审') && (
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                )}
              </div>
              <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-gray-600 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl border border-gray-100 p-1 mb-6 overflow-x-auto">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                tab === i ? 'bg-cuhk-purple text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {t}
              {i === 1 && stats.pendingMembers > 0 && (
                <span className="ml-1.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 inline-flex items-center justify-center">
                  {stats.pendingMembers}
                </span>
              )}
              {i === 2 && stats.pendingAlumni > 0 && (
                <span className="ml-1.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 inline-flex items-center justify-center">
                  {stats.pendingAlumni}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tab === 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">快速操作</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button onClick={() => setTab(1)} className="bg-white rounded-2xl border border-gray-100 p-5 text-left hover:shadow-md transition-shadow flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">审核会员缴费</div>
                  <div className="text-yellow-600 text-sm mt-1">{stats.pendingMembers} 条待审</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button onClick={() => setTab(2)} className="bg-white rounded-2xl border border-gray-100 p-5 text-left hover:shadow-md transition-shadow flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">审核校友录</div>
                  <div className="text-blue-600 text-sm mt-1">{stats.pendingAlumni} 条待审</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button onClick={() => setTab(4)} className="bg-white rounded-2xl border border-gray-100 p-5 text-left hover:shadow-md transition-shadow flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">发布新活动</div>
                  <div className="text-green-600 text-sm mt-1">创建活动</div>
                </div>
                <Plus className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">待审核会员缴费</h2>
            {pendingPayments.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center text-gray-400">
                <CheckCircle className="w-10 h-10 mx-auto mb-2 opacity-40" />
                <p>暂无待审核的缴费申请</p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendingPayments.map(payment => {
                  const d = getSchemaData(payment)
                  return (
                    <div key={payment.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full font-medium">待审核</span>
                            <span className="text-gray-500 text-xs">{payment.id}</span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                            <div>
                              <span className="text-gray-400">金额</span>
                              <p className="font-semibold text-cuhk-gold">HK${d.amount}</p>
                            </div>
                            <div>
                              <span className="text-gray-400">类型</span>
                              <p className="font-medium text-gray-800">{{ annual: '年度', lifetime: '终身' }[d.membership_type]}</p>
                            </div>
                            <div>
                              <span className="text-gray-400">支付方式</span>
                              <p className="font-medium text-gray-800">{{ fps: 'FPS', bank_transfer: '银行转账', cash: '现金' }[d.payment_method] || d.payment_method}</p>
                            </div>
                            <div>
                              <span className="text-gray-400">参考号</span>
                              <p className="font-medium text-gray-800 truncate">{d.payment_reference || '-'}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => handlePaymentAction(payment, 'confirm')}
                            disabled={processing[payment.id]}
                            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            <CheckCircle className="w-4 h-4" /> 确认
                          </button>
                          <button
                            onClick={() => handlePaymentAction(payment, 'reject')}
                            disabled={processing[payment.id]}
                            className="flex items-center gap-1.5 bg-red-100 hover:bg-red-200 disabled:opacity-60 text-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            <XCircle className="w-4 h-4" /> 拒绝
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {tab === 2 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">待审核校友录</h2>
            {pendingAlumni.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center text-gray-400">
                <CheckCircle className="w-10 h-10 mx-auto mb-2 opacity-40" />
                <p>暂无待审核的校友录申请</p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendingAlumni.map(alumnus => {
                  const d = getSchemaData(alumnus)
                  return (
                    <div key={alumnus.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-cuhk-purple rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">{(d.real_name || '?').slice(-2)}</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{d.real_name}</h3>
                              <p className="text-gray-500 text-sm">{d.graduation_year}届 · {d.major} · {d.college}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                            {d.company && <div><span className="text-gray-400">公司：</span><span className="text-gray-700">{d.company}</span></div>}
                            {d.position && <div><span className="text-gray-400">职位：</span><span className="text-gray-700">{d.position}</span></div>}
                            {d.city && <div><span className="text-gray-400">城市：</span><span className="text-gray-700">{d.city}</span></div>}
                          </div>
                          {d.bio && <p className="text-gray-500 text-sm mt-2 line-clamp-2">{d.bio}</p>}
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleAlumniAction(alumnus, 'approve')}
                            disabled={processing[alumnus.id]}
                            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            <CheckCircle className="w-4 h-4" /> 通过
                          </button>
                          <button
                            onClick={() => handleAlumniAction(alumnus, 'reject', '信息不完整或不符合要求')}
                            disabled={processing[alumnus.id]}
                            className="flex items-center gap-1.5 bg-red-100 hover:bg-red-200 disabled:opacity-60 text-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            <XCircle className="w-4 h-4" /> 拒绝
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {tab === 3 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">活动管理</h2>
            {events.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center text-gray-400">
                <Calendar className="w-10 h-10 mx-auto mb-2 opacity-40" />
                <p>暂无活动</p>
              </div>
            ) : (
              <div className="space-y-3">
                {events.map(event => {
                  const d = getSchemaData(event)
                  return (
                    <div key={event.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            d.status === 'published' ? 'bg-green-100 text-green-700' :
                            d.status === 'draft' ? 'bg-gray-100 text-gray-600' :
                            d.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {{ published: '已发布', draft: '草稿', cancelled: '已取消', completed: '已完成' }[d.status]}
                          </span>
                        </div>
                        <h3 className="font-medium text-gray-900 truncate">{d.title}</h3>
                        <p className="text-gray-500 text-xs mt-0.5">
                          {d.event_date ? format(parseISO(d.event_date), 'yyyy-MM-dd HH:mm') : '待定'} · {d.location}
                        </p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        {d.status === 'draft' && (
                          <button
                            onClick={() => handleEventStatusChange(event, 'published')}
                            disabled={processing[event.id]}
                            className="text-xs bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1.5 rounded-lg font-medium transition-colors"
                          >
                            发布
                          </button>
                        )}
                        {d.status === 'published' && (
                          <button
                            onClick={() => handleEventStatusChange(event, 'cancelled')}
                            disabled={processing[event.id]}
                            className="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1.5 rounded-lg font-medium transition-colors"
                          >
                            取消
                          </button>
                        )}
                        <Link
                          to={`/events/${event.id}`}
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg font-medium transition-colors"
                        >
                          查看
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {tab === 4 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">发布新活动</h2>
            {eventSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-700 font-medium">活动创建成功！</span>
              </div>
            )}
            <form onSubmit={handleCreateEvent} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">活动标题 *</label>
                  <input value={eventForm.title} onChange={e => setEventForm(f => ({ ...f, title: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">活动日期时间 *</label>
                  <input type="datetime-local" value={eventForm.event_date} onChange={e => setEventForm(f => ({ ...f, event_date: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">报名截止时间</label>
                  <input type="datetime-local" value={eventForm.registration_deadline} onChange={e => setEventForm(f => ({ ...f, registration_deadline: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">活动地点 *</label>
                  <input value={eventForm.location} onChange={e => setEventForm(f => ({ ...f, location: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">活动类别</label>
                  <select value={eventForm.category} onChange={e => setEventForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple">
                    <option value="networking">交流活动</option>
                    <option value="career">职业发展</option>
                    <option value="culture">文化活动</option>
                    <option value="sports">体育活动</option>
                    <option value="academic">学术活动</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">活动名额（0=不限）</label>
                  <input type="number" min="0" value={eventForm.capacity} onChange={e => setEventForm(f => ({ ...f, capacity: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">活动费用 (HK$，0=免费)</label>
                  <input type="number" min="0" step="0.01" value={eventForm.fee} onChange={e => setEventForm(f => ({ ...f, fee: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">会员优惠价 (HK$)</label>
                  <input type="number" min="0" step="0.01" value={eventForm.member_fee} onChange={e => setEventForm(f => ({ ...f, member_fee: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">发布状态</label>
                  <select value={eventForm.status} onChange={e => setEventForm(f => ({ ...f, status: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple">
                    <option value="published">立即发布</option>
                    <option value="draft">保存草稿</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">活动详情</label>
                  <textarea value={eventForm.description} onChange={e => setEventForm(f => ({ ...f, description: e.target.value }))}
                    rows={4} placeholder="请详细描述活动内容、流程、注意事项等..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple resize-none" />
                </div>
              </div>
              {eventError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" /> {eventError}
                </div>
              )}
              <button type="submit" disabled={eventSubmitting}
                className="w-full bg-cuhk-purple hover:bg-cuhk-purple-dark disabled:opacity-60 text-white py-3 rounded-xl font-semibold transition-colors">
                {eventSubmitting ? '创建中...' : '创建活动'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
