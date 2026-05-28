import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Calendar, MapPin, Users, ArrowLeft, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import { Modal } from '@/components/ui/Modal'
import { toast } from '@/components/ui/Toast'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function EventDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user, memberProfile, isApprovedMember } = useAuth()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [myRegistration, setMyRegistration] = useState(null)
  const [registerModal, setRegisterModal] = useState(false)
  const [payNote, setPayNote] = useState('')
  const [registering, setRegistering] = useState(false)
  const [registrationCount, setRegistrationCount] = useState(0)

  useEffect(() => {
    fetchEvent()
  }, [id])

  useEffect(() => {
    if (user && event) {
      fetchMyRegistration()
      fetchRegistrationCount()
    }
  }, [user, event])

  const fetchEvent = async () => {
    setLoading(true)
    try {
      const { data: res } = await client.from('Event').select('*').eq('id', id).single()
      setEvent(res?.data ?? null)
    } catch (err) {
      console.error('Fetch event error:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchMyRegistration = async () => {
    if (!user?.id) return
    const { data: res } = await client.from('EventRegistration').select('*')
      .eq('event_id', String(id))
      .eq('user_id', user.id)
    const list = res?.data?.list ?? []
    setMyRegistration(list[0] ?? null)
  }

  const fetchRegistrationCount = async () => {
    const { data: res } = await client.from('EventRegistration').select('*').eq('event_id', String(id))
    setRegistrationCount(res?.data?.total ?? 0)
  }

  const handleRegister = async () => {
    if (!user) { navigate('/login'); return }
    if (!isApprovedMember) {
      toast.error('只有正式会员才能报名活动')
      return
    }
    const eventData = event?.data ?? event
    if (eventData?.is_paid && !payNote.trim()) {
      toast.error('请填写付款参考号或说明')
      return
    }
    setRegistering(true)
    try {
      const profileData = memberProfile?.data
      const { data: res, error } = await client.from('EventRegistration').insert({
        data: {
          event_id: String(id),
          user_id: user.id,
          user_name: profileData?.real_name || user.email,
          user_email: user.email,
          payment_status: eventData?.is_paid ? 'pending' : 'free',
          payment_amount: eventData?.is_paid ? eventData?.fee : 0,
          payment_note: payNote,
          status: 'registered',
        }
      }).select().single()
      if (error) throw error
      toast.success(eventData?.is_paid ? '报名成功！请等待管理员确认付款。' : '报名成功！')
      setRegisterModal(false)
      setPayNote('')
      await fetchMyRegistration()
      await fetchRegistrationCount()
    } catch (err) {
      console.error('Register error:', err)
      toast.error('报名失败，请重试')
    } finally {
      setRegistering(false)
    }
  }

  const handleCancelRegistration = async () => {
    if (!myRegistration) return
    try {
      const { data: res, error } = await client.from('EventRegistration')
        .update({ data: { ...myRegistration.data, status: 'cancelled' } })
        .eq('id', myRegistration.id)
        .select().single()
      if (error) throw error
      toast.success('已取消报名')
      await fetchMyRegistration()
      await fetchRegistrationCount()
    } catch (err) {
      console.error('Cancel error:', err)
      toast.error('取消失败，请重试')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-500">加载中...</div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 mb-4">活动不存在或已删除</p>
          <Button onClick={() => navigate('/events')}>返回活动列表</Button>
        </div>
      </div>
    )
  }

  const eventData = event?.data ?? event
  const eventDate = eventData?.event_date ? new Date(eventData.event_date) : null
  const deadline = eventData?.registration_deadline ? new Date(eventData.registration_deadline) : null
  const isPast = eventDate && eventDate < new Date()
  const isDeadlinePassed = deadline && deadline < new Date()
  const isFull = eventData?.max_participants && registrationCount >= eventData.max_participants
  const myRegData = myRegistration?.data
  const isRegistered = myRegData?.status === 'registered'
  const canRegister = isApprovedMember && !isPast && !isDeadlinePassed && !isFull && !isRegistered

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigate('/events')} className="flex items-center gap-2 text-blue-200 hover:text-white mb-4 text-sm">
            <ArrowLeft size={16} /> 返回活动列表
          </button>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-medium bg-blue-700 px-3 py-1 rounded-full">{eventData?.category}</span>
            {eventData?.is_paid ? (
              <span className="text-xs font-bold bg-amber-500 text-white px-3 py-1 rounded-full">HK${eventData?.fee}</span>
            ) : (
              <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full">免费活动</span>
            )}
            <Badge status={eventData?.status} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{eventData?.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-blue-200">
            {eventDate && (
              <div className="flex items-center gap-1.5">
                <Calendar size={15} />
                <span>{eventDate.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <MapPin size={15} />
              <span>{eventData?.location}</span>
            </div>
            {eventData?.max_participants && (
              <div className="flex items-center gap-1.5">
                <Users size={15} />
                <span>{registrationCount}/{eventData.max_participants} 人已报名</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {eventData?.description && (
              <Card>
                <CardHeader><h2 className="font-semibold text-slate-900">活动详情</h2></CardHeader>
                <CardBody>
                  <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">{eventData.description}</p>
                </CardBody>
              </Card>
            )}

            {eventData?.is_paid && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <DollarSign size={18} className="text-amber-600" />
                    <h2 className="font-semibold text-slate-900">费用信息</h2>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">活动费用</span>
                    <span className="text-xl font-bold text-amber-700">HK${eventData.fee}</span>
                  </div>
                  {eventData?.fee_description && (
                    <p className="text-sm text-slate-500 mt-2">{eventData.fee_description}</p>
                  )}
                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
                    报名后请按照管理员指引完成付款，付款确认后报名生效。
                  </div>
                </CardBody>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Registration Card */}
            <Card>
              <CardBody className="p-5">
                {isRegistered ? (
                  <div className="text-center">
                    <CheckCircle size={32} className="text-green-500 mx-auto mb-2" />
                    <p className="font-semibold text-slate-900 mb-1">已报名</p>
                    {myRegData?.payment_status === 'pending' && (
                      <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2 mb-3">
                        等待付款确认中
                      </p>
                    )}
                    {myRegData?.payment_status === 'paid' && (
                      <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 mb-3">
                        付款已确认
                      </p>
                    )}
                    <Button variant="secondary" size="sm" className="w-full" onClick={handleCancelRegistration}>
                      取消报名
                    </Button>
                  </div>
                ) : isPast ? (
                  <div className="text-center text-slate-500">
                    <Clock size={28} className="mx-auto mb-2 text-slate-300" />
                    <p className="text-sm">活动已结束</p>
                  </div>
                ) : isDeadlinePassed ? (
                  <div className="text-center text-slate-500">
                    <AlertCircle size={28} className="mx-auto mb-2 text-slate-300" />
                    <p className="text-sm">报名已截止</p>
                  </div>
                ) : isFull ? (
                  <div className="text-center text-slate-500">
                    <Users size={28} className="mx-auto mb-2 text-slate-300" />
                    <p className="text-sm">名额已满</p>
                  </div>
                ) : !user ? (
                  <div className="text-center">
                    <p className="text-sm text-slate-600 mb-3">请登录后报名参加活动</p>
                    <Button className="w-full" onClick={() => navigate('/login')}>登录报名</Button>
                  </div>
                ) : !isApprovedMember ? (
                  <div className="text-center">
                    <AlertCircle size={28} className="mx-auto mb-2 text-amber-400" />
                    <p className="text-sm text-slate-600 mb-3">只有正式会员才能报名活动</p>
                    <Button variant="secondary" size="sm" className="w-full" onClick={() => navigate('/profile')}>
                      查看会员状态
                    </Button>
                  </div>
                ) : (
                  <div>
                    {eventData?.is_paid && (
                      <div className="text-center mb-4">
                        <p className="text-2xl font-bold text-amber-700">HK${eventData.fee}</p>
                        <p className="text-xs text-slate-500">{eventData?.fee_description}</p>
                      </div>
                    )}
                    <Button className="w-full" onClick={() => setRegisterModal(true)}>
                      {eventData?.is_paid ? '立即报名并付款' : '免费报名'}
                    </Button>
                  </div>
                )}
              </CardBody>
            </Card>

            {/* Event Info */}
            <Card>
              <CardBody className="p-5 space-y-3">
                <h3 className="font-semibold text-slate-900 text-sm">活动信息</h3>
                {deadline && (
                  <div className="flex items-start gap-2 text-sm">
                    <Clock size={15} className="text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-500 text-xs">报名截止</p>
                      <p className="text-slate-900">{deadline.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-2 text-sm">
                  <Users size={15} className="text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-500 text-xs">报名人数</p>
                    <p className="text-slate-900">
                      {registrationCount} 人已报名
                      {eventData?.max_participants && ` / 限 ${eventData.max_participants} 人`}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <Modal open={registerModal} onClose={() => setRegisterModal(false)}
        title={eventData?.is_paid ? '报名并付款' : '确认报名'}>
        <div className="space-y-4">
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="font-semibold text-slate-900">{eventData?.title}</p>
            <p className="text-sm text-slate-600 mt-1">
              {eventDate?.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })} · {eventData?.location}
            </p>
          </div>

          {eventData?.is_paid && (
            <>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-bold text-amber-800 text-lg">需付款：HK${eventData.fee}</p>
                {eventData?.fee_description && <p className="text-sm text-amber-700 mt-1">{eventData.fee_description}</p>}
                <div className="mt-3 text-sm text-amber-800 space-y-1">
                  <p className="font-medium">付款方式：</p>
                  <p>• 微信/支付宝/FPS 转账至管理员账号</p>
                  <p>• 转账后请填写参考号或截图说明</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">付款参考号/说明 *</label>
                <input type="text" placeholder="请填写转账参考号或截图说明" value={payNote}
                  onChange={e => setPayNote(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700" />
              </div>
            </>
          )}

          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1" onClick={() => setRegisterModal(false)}>取消</Button>
            <Button className="flex-1" disabled={registering} onClick={handleRegister}>
              {registering ? '提交中...' : '确认报名'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
