import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Calendar, MapPin, Briefcase, GraduationCap, Clock, CheckCircle, XCircle, CreditCard, Plus } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'
import { format } from 'date-fns'

const STATUS_MAP = {
  pending: { label: '审核中', variant: 'pending', icon: <Clock className="w-4 h-4" /> },
  approved: { label: '已通过', variant: 'approved', icon: <CheckCircle className="w-4 h-4" /> },
  rejected: { label: '已拒绝', variant: 'rejected', icon: <XCircle className="w-4 h-4" /> },
}

const DEGREE_MAP = { bachelor: '学士', master: '硕士', phd: '博士', other: '其他' }
const MEMBERSHIP_MAP = { regular: '普通会员', lifetime: '终身会员' }

export default function ProfilePage() {
  const { user, memberProfile, loading, refreshProfile, client } = useAuth()
  const [myEvents, setMyEvents] = useState([])
  const [myRegistrations, setMyRegistrations] = useState([])

  useEffect(() => {
    if (user?.id) {
      refreshProfile()
      fetchMyEvents()
      fetchMyRegistrations()
    }
  }, [user?.id])

  const fetchMyEvents = async () => {
    if (!user?.id) return
    try {
      const { data: resp } = await client.from('Events').select('*').eq('organizer_user_id', user.id).order('event_date', { ascending: false }).limit(5)
      setMyEvents(resp?.data?.list ?? [])
    } catch (err) {
      console.error('Failed to fetch my events:', err)
    }
  }

  const fetchMyRegistrations = async () => {
    if (!user?.id) return
    try {
      const { data: resp } = await client.from('Event Registrations').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(5)
      setMyRegistrations(resp?.data?.list ?? [])
    } catch (err) {
      console.error('Failed to fetch registrations:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#4B2D8F] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-500 text-sm">加载中...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center px-4">
        <Card className="max-w-sm w-full">
          <CardBody className="text-center py-10">
            <User className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-2">请先登录</h2>
            <p className="text-gray-500 text-sm mb-6">登录后查看您的会员档案</p>
            <Link to="/login"><Button className="w-full">立即登录</Button></Link>
          </CardBody>
        </Card>
      </div>
    )
  }

  const profile = memberProfile?.data
  const statusInfo = STATUS_MAP[profile?.status] || STATUS_MAP.pending
  const isApproved = profile?.status === 'approved'
  const isFullMember = isApproved && profile?.fee_paid

  return (
    <div className="min-h-screen bg-[#F8F7FC] py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Card */}
        <Card>
          <CardBody>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-16 h-16 bg-[#4B2D8F] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-bold">
                  {(profile?.name_zh || user.email || '?')[0]}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h1 className="text-xl font-bold text-[#1A1A2E]">
                    {profile?.name_zh || user.email}
                  </h1>
                  {profile && (
                    <Badge variant={statusInfo.variant}>
                      {statusInfo.label}
                    </Badge>
                  )}
                  {profile?.fee_paid && <Badge variant="paid">会费已缴</Badge>}
                  {profile?.membership_type && (
                    <Badge variant="purple">{MEMBERSHIP_MAP[profile.membership_type]}</Badge>
                  )}
                </div>
                {profile?.name_en && <p className="text-gray-500 text-sm">{profile.name_en}</p>}
                <p className="text-gray-400 text-xs mt-1">{user.email}</p>
              </div>
              {isFullMember && (
                <Link to="/events/create">
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-1" /> 发布活动
                  </Button>
                </Link>
              )}
            </div>
          </CardBody>
        </Card>

        {/* Status Banner */}
        {profile && !isFullMember && (
          <div className={`rounded-xl p-4 border ${
            profile.status === 'pending' ? 'bg-amber-50 border-amber-200' :
            profile.status === 'rejected' ? 'bg-red-50 border-red-200' :
            isApproved && !profile.fee_paid ? 'bg-blue-50 border-blue-200' : ''
          }`}>
            {profile.status === 'pending' && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-sm font-medium text-amber-800">申请审核中</p>
                  <p className="text-xs text-amber-600">管理员正在审核您的申请，请耐心等待（3-5个工作日）</p>
                </div>
              </div>
            )}
            {profile.status === 'rejected' && (
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium text-red-800">申请未通过</p>
                  {profile.admin_notes && <p className="text-xs text-red-600">原因：{profile.admin_notes}</p>}
                </div>
              </div>
            )}
            {isApproved && !profile.fee_paid && (
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-blue-800">申请已通过，等待会费确认</p>
                  <p className="text-xs text-blue-600">管理员正在确认您的付款，确认后即可使用全部功能</p>
                </div>
              </div>
            )}
          </div>
        )}

        {!profile && (
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-sm font-medium text-purple-800">尚未提交入会申请</p>
            <p className="text-xs text-purple-600 mt-1">请完成入会申请以享受校友会全部服务</p>
            <Link to="/register" className="inline-block mt-3">
              <Button size="sm">立即申请入会</Button>
            </Link>
          </div>
        )}

        {/* Profile Details */}
        {profile && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-[#1A1A2E] flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#4B2D8F]" /> 学历信息
                </h2>
              </CardHeader>
              <CardBody>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs text-gray-500">院系</dt>
                    <dd className="text-sm font-medium text-[#1A1A2E]">{profile.department || '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500">学位</dt>
                    <dd className="text-sm font-medium text-[#1A1A2E]">{DEGREE_MAP[profile.degree] || '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500">毕业年份</dt>
                    <dd className="text-sm font-medium text-[#1A1A2E]">{profile.graduation_year || '-'}</dd>
                  </div>
                </dl>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="font-semibold text-[#1A1A2E] flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#4B2D8F]" /> 工作信息
                </h2>
              </CardHeader>
              <CardBody>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs text-gray-500">现居城市</dt>
                    <dd className="text-sm font-medium text-[#1A1A2E]">{profile.current_city || '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500">单位</dt>
                    <dd className="text-sm font-medium text-[#1A1A2E]">{profile.current_company || '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500">职位</dt>
                    <dd className="text-sm font-medium text-[#1A1A2E]">{profile.current_position || '-'}</dd>
                  </div>
                </dl>
              </CardBody>
            </Card>
          </div>
        )}

        {/* My Events */}
        {isFullMember && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-[#1A1A2E] flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#4B2D8F]" /> 我发布的活动
                </h2>
                <Link to="/events/create">
                  <Button size="sm" variant="outline">
                    <Plus className="w-4 h-4 mr-1" /> 新建活动
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardBody>
              {myEvents.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-4">暂无发布的活动</p>
              ) : (
                <div className="space-y-3">
                  {myEvents.map(ev => {
                    const d = ev.data
                    return (
                      <Link key={ev.id} to={`/events/${ev.id}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div>
                          <p className="text-sm font-medium text-[#1A1A2E]">{d.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {d.event_date ? format(new Date(d.event_date), 'yyyy年MM月dd日') : '-'}
                          </p>
                        </div>
                        <Badge variant={d.status}>{d.status === 'published' ? '已发布' : d.status === 'draft' ? '草稿' : d.status}</Badge>
                      </Link>
                    )
                  })}
                </div>
              )}
            </CardBody>
          </Card>
        )}

        {/* My Registrations */}
        {isFullMember && (
          <Card>
            <CardHeader>
              <h2 className="font-semibold text-[#1A1A2E] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#4B2D8F]" /> 我报名的活动
              </h2>
            </CardHeader>
            <CardBody>
              {myRegistrations.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-gray-400 text-sm mb-3">暂无报名记录</p>
                  <Link to="/events"><Button size="sm" variant="outline">浏览活动</Button></Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {myRegistrations.map(reg => {
                    const d = reg.data
                    return (
                      <div key={reg.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                        <div>
                          <p className="text-sm font-medium text-[#1A1A2E]">活动 #{d.event_id}</p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {d.payment_status === 'paid' ? `已付款 HKD ${d.payment_amount}` : d.payment_status === 'pending' ? '待付款' : '免费'}
                          </p>
                        </div>
                        <Badge variant={d.attendance_status === 'attended' ? 'approved' : d.attendance_status === 'cancelled' ? 'rejected' : 'pending'}>
                          {d.attendance_status === 'registered' ? '已报名' : d.attendance_status === 'attended' ? '已出席' : d.attendance_status === 'cancelled' ? '已取消' : d.attendance_status}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  )
}
