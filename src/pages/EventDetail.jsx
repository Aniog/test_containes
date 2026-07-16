import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, Users, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import { client, getRows, getSchemaData, getEntity, getErrorMessage } from '../api/client.js'
import { useAuth } from '../context/AuthContext.jsx'
import { format, parseISO, isPast } from 'date-fns'

const CATEGORY_LABELS = {
  networking: '交流活动', career: '职业发展', culture: '文化活动',
  sports: '体育活动', academic: '学术活动', other: '其他',
}

export default function EventDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user, memberProfile, isMember } = useAuth()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [myReg, setMyReg] = useState(null)
  const [regCount, setRegCount] = useState(0)
  const [showRegForm, setShowRegForm] = useState(false)
  const [regForm, setRegForm] = useState({ name: '', email: '', phone: '', payment_method: 'fps', payment_reference: '' })
  const [submitting, setSubmitting] = useState(false)
  const [regError, setRegError] = useState('')
  const [regSuccess, setRegSuccess] = useState(false)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data: response } = await client.from('Events').select('*').eq('id', parseInt(id)).range(0, 0)
        const rows = getRows(response)
        if (rows.length > 0) setEvent(rows[0])
        else navigate('/events')
      } catch (err) {
        console.error(err)
        navigate('/events')
      } finally {
        setLoading(false)
      }
    }
    fetchEvent()
  }, [id, navigate])

  useEffect(() => {
    if (!user || !id) return
    const fetchMyReg = async () => {
      try {
        const { data: response } = await client
          .from('Event Registrations')
          .select('*')
          .eq('event_id', parseInt(id))
          .eq('user_id', user.id)
        const rows = getRows(response)
        setMyReg(rows[0] || null)
      } catch (err) {
        console.error(err)
      }
    }
    fetchMyReg()
  }, [user, id])

  useEffect(() => {
    if (!id) return
    const fetchCount = async () => {
      try {
        const { data: response } = await client
          .from('Event Registrations')
          .select('*')
          .eq('event_id', parseInt(id))
          .eq('registration_status', 'registered')
        setRegCount(getRows(response).length)
      } catch (err) {
        console.error(err)
      }
    }
    fetchCount()
  }, [id])

  useEffect(() => {
    if (user && event) {
      const d = getSchemaData(event)
      const mp = memberProfile ? getSchemaData(memberProfile) : {}
      setRegForm(f => ({
        ...f,
        name: mp.real_name || user.name || '',
        email: user.email || '',
        phone: mp.phone || '',
      }))
    }
  }, [user, event, memberProfile])

  const handleRegister = async (e) => {
    e.preventDefault()
    if (!user) { navigate('/login', { state: { from: `/events/${id}` } }); return }
    setRegError('')
    setSubmitting(true)
    const d = getSchemaData(event)
    const fee = isMember && d.member_fee != null ? d.member_fee : (d.fee || 0)
    try {
      const { data: response, error } = await client
        .from('Event Registrations')
        .insert({
          data: {
            event_id: event.id,
            user_id: user.id,
            participant_name: regForm.name,
            participant_email: regForm.email,
            participant_phone: regForm.phone,
            fee_paid: fee,
            payment_status: fee === 0 ? 'waived' : 'pending',
            payment_method: fee === 0 ? 'free' : regForm.payment_method,
            payment_reference: regForm.payment_reference,
            registration_status: 'registered',
          }
        })
        .select()
        .single()
      if (error || response?.success === false) {
        setRegError(getErrorMessage(response, error))
        return
      }
      setMyReg(getEntity(response))
      setRegSuccess(true)
      setShowRegForm(false)
      setRegCount(c => c + 1)
    } catch (err) {
      setRegError(err.message || '报名失败，请重试')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-400">加载中...</div>
      </div>
    )
  }

  if (!event) return null

  const d = getSchemaData(event)
  const past = d.event_date ? isPast(parseISO(d.event_date)) : false
  const deadlinePast = d.registration_deadline ? isPast(parseISO(d.registration_deadline)) : false
  const fee = isMember && d.member_fee != null ? d.member_fee : (d.fee || 0)
  const isFull = d.capacity > 0 && regCount >= d.capacity
  const canRegister = !past && !deadlinePast && !isFull && !myReg

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <Link to="/events" className="inline-flex items-center gap-2 text-gray-500 hover:text-cuhk-purple mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> 返回活动列表
        </Link>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Event Header */}
          <div className="bg-cuhk-purple p-8">
            {d.category && (
              <span className="inline-block bg-cuhk-gold text-white text-xs px-3 py-1 rounded-full font-medium mb-4">
                {CATEGORY_LABELS[d.category] || d.category}
              </span>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{d.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock className="w-4 h-4 text-cuhk-gold flex-shrink-0" />
                <span>{d.event_date ? format(parseISO(d.event_date), 'yyyy年MM月dd日 HH:mm') : '待定'}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4 text-cuhk-gold flex-shrink-0" />
                <span>{d.location || '待定'}</span>
              </div>
              {d.registration_deadline && (
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Calendar className="w-4 h-4 text-cuhk-gold flex-shrink-0" />
                  <span>报名截止：{format(parseISO(d.registration_deadline), 'MM月dd日 HH:mm')}</span>
                </div>
              )}
              {d.capacity > 0 && (
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Users className="w-4 h-4 text-cuhk-gold flex-shrink-0" />
                  <span>已报名 {regCount}/{d.capacity} 人</span>
                </div>
              )}
            </div>
          </div>

          <div className="p-8">
            {/* Fee Info */}
            <div className="bg-cuhk-gold-light border border-cuhk-gold/30 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <span className="text-gray-600 text-sm">活动费用：</span>
                  {d.fee > 0 ? (
                    <span className="text-cuhk-gold font-bold text-xl ml-1">HK${d.fee}</span>
                  ) : (
                    <span className="text-green-600 font-bold text-xl ml-1">免费</span>
                  )}
                  {d.member_fee != null && d.member_fee < d.fee && (
                    <span className="text-gray-500 text-sm ml-2">
                      会员优惠价：<span className="text-cuhk-purple font-semibold">HK${d.member_fee}</span>
                    </span>
                  )}
                </div>
                {isMember && d.member_fee != null && d.member_fee < d.fee && (
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                    ✓ 已享会员优惠
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">活动详情</h2>
              <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">{d.description || '暂无详情'}</div>
            </div>

            {/* Registration Status */}
            {regSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-800 font-medium">报名成功！</p>
                  <p className="text-green-600 text-sm mt-1">
                    {fee > 0 ? `请按照支付方式完成缴费 HK$${fee}，我们将在确认后通知您。` : '您已成功报名此免费活动。'}
                  </p>
                </div>
              </div>
            )}

            {myReg && !regSuccess && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-blue-800 font-medium">您已报名此活动</p>
                  <p className="text-blue-600 text-sm mt-1">
                    报名状态：{getSchemaData(myReg).registration_status === 'registered' ? '已确认' : getSchemaData(myReg).registration_status}
                    {' | '}支付状态：{
                      { pending: '待支付', paid: '已支付', waived: '免费', refunded: '已退款' }[getSchemaData(myReg).payment_status] || getSchemaData(myReg).payment_status
                    }
                  </p>
                </div>
              </div>
            )}

            {/* Registration Form */}
            {!myReg && !regSuccess && (
              <>
                {past ? (
                  <div className="bg-gray-100 text-gray-500 rounded-xl p-4 text-center">活动已结束</div>
                ) : deadlinePast ? (
                  <div className="bg-gray-100 text-gray-500 rounded-xl p-4 text-center">报名已截止</div>
                ) : isFull ? (
                  <div className="bg-orange-50 text-orange-600 rounded-xl p-4 text-center">名额已满</div>
                ) : !user ? (
                  <div className="text-center">
                    <p className="text-gray-500 mb-4">请登录后报名参加活动</p>
                    <Link
                      to="/login"
                      state={{ from: `/events/${id}` }}
                      className="bg-cuhk-purple hover:bg-cuhk-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-colors inline-block"
                    >
                      登录报名
                    </Link>
                  </div>
                ) : !showRegForm ? (
                  <button
                    onClick={() => setShowRegForm(true)}
                    className="w-full bg-cuhk-purple hover:bg-cuhk-purple-dark text-white py-3 rounded-xl font-semibold transition-colors"
                  >
                    {fee > 0 ? `立即报名 (HK$${fee})` : '免费报名'}
                  </button>
                ) : (
                  <form onSubmit={handleRegister} className="border border-gray-200 rounded-xl p-6 space-y-4">
                    <h3 className="font-semibold text-gray-900 text-lg">填写报名信息</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">姓名 *</label>
                        <input
                          value={regForm.name}
                          onChange={e => setRegForm(f => ({ ...f, name: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">邮箱 *</label>
                        <input
                          type="email"
                          value={regForm.email}
                          onChange={e => setRegForm(f => ({ ...f, email: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">联系电话</label>
                        <input
                          value={regForm.phone}
                          onChange={e => setRegForm(f => ({ ...f, phone: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                        />
                      </div>
                      {fee > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">支付方式 *</label>
                          <select
                            value={regForm.payment_method}
                            onChange={e => setRegForm(f => ({ ...f, payment_method: e.target.value }))}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                          >
                            <option value="fps">FPS 转数快</option>
                            <option value="bank_transfer">银行转账</option>
                            <option value="cash">现场现金</option>
                          </select>
                        </div>
                      )}
                    </div>
                    {fee > 0 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">支付参考号/备注</label>
                        <input
                          value={regForm.payment_reference}
                          onChange={e => setRegForm(f => ({ ...f, payment_reference: e.target.value }))}
                          placeholder="请填写转账参考号或备注"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                        />
                        <p className="text-xs text-gray-400 mt-1">
                          FPS号码：12345678 | 银行：中银香港 账号：012-345-678901
                        </p>
                      </div>
                    )}
                    {regError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" /> {regError}
                      </div>
                    )}
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 bg-cuhk-purple hover:bg-cuhk-purple-dark disabled:opacity-60 text-white py-3 rounded-xl font-semibold transition-colors"
                      >
                        {submitting ? '提交中...' : `确认报名${fee > 0 ? ` (HK$${fee})` : ''}`}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowRegForm(false)}
                        className="px-6 py-3 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        取消
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
