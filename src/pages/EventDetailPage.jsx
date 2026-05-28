import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Calendar, MapPin, Users, ExternalLink, ArrowLeft, User } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'
import { Input, Select, Textarea } from '@/components/ui/FormFields'
import { useAuth } from '@/contexts/AuthContext'
import { useToast } from '@/contexts/ToastContext'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORY_MAP = {
  networking: '交流联谊', academic: '学术讲座', cultural: '文化活动',
  sports: '体育运动', charity: '公益慈善', other: '其他',
}

export default function EventDetailPage() {
  const { id } = useParams()
  const { user, memberProfile } = useAuth()
  const { addToast } = useToast()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [registering, setRegistering] = useState(false)
  const [showRegForm, setShowRegForm] = useState(false)
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)
  const [regForm, setRegForm] = useState({
    phone: '', notes: '',
    payment_method: 'fps', payment_reference: '',
  })

  const isFullMember = memberProfile?.data?.status === 'approved' && memberProfile?.data?.fee_paid

  useEffect(() => {
    fetchEvent()
    if (user?.id) checkRegistration()
  }, [id, user?.id])

  const fetchEvent = async () => {
    setLoading(true)
    try {
      const { data: resp } = await client.from('Events').select('*').eq('id', parseInt(id)).single()
      setEvent(resp?.data ?? null)
    } catch (err) {
      console.error('Failed to fetch event:', err)
    } finally {
      setLoading(false)
    }
  }

  const checkRegistration = async () => {
    if (!user?.id) return
    try {
      const { data: resp } = await client
        .from('Event Registrations')
        .select('*')
        .eq('event_id', parseInt(id))
        .eq('user_id', user.id)
      const list = resp?.data?.list ?? []
      setAlreadyRegistered(list.length > 0)
    } catch (err) {
      console.error('Check registration error:', err)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    if (!user || !memberProfile) return
    const d = event?.data || event
    if (d?.is_paid && !regForm.payment_reference) {
      addToast('请填写付款参考号', 'error')
      return
    }
    setRegistering(true)
    try {
      const profile = memberProfile.data
      const { data: resp, error } = await client
        .from('Event Registrations')
        .insert({
          data: {
            event_id: parseInt(id),
            user_id: user.id,
            member_name: profile.name_zh,
            member_email: profile.email,
            member_phone: regForm.phone || profile.phone || '',
            payment_status: d?.is_paid ? 'pending' : 'waived',
            payment_amount: d?.is_paid ? d.fee_amount : 0,
            payment_method: d?.is_paid ? regForm.payment_method : null,
            payment_reference: d?.is_paid ? regForm.payment_reference : '',
            attendance_status: 'registered',
            notes: regForm.notes || '',
          }
        })
        .select()
        .single()

      if (error || resp?.success === false) {
        throw new Error(resp?.errors?.join(', ') || '报名失败')
      }

      // Update participant count
      await client.from('Events').update({
        data: {
          ...(event?.data || event),
          current_participants: ((event?.data || event)?.current_participants || 0) + 1,
        }
      }).eq('id', parseInt(id))

      addToast('报名成功！' + (d?.is_paid ? '请等待管理员确认付款。' : ''), 'success')
      setAlreadyRegistered(true)
      setShowRegForm(false)
      fetchEvent()
    } catch (err) {
      console.error('Register error:', err)
      addToast(err.message || '报名失败，请重试', 'error')
    } finally {
      setRegistering(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#4B2D8F] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-500 mb-4">活动不存在</p>
          <Link to="/events"><Button variant="outline">返回活动列表</Button></Link>
        </div>
      </div>
    )
  }

  const d = event?.data || event
  const isPast = d.event_date && new Date(d.event_date) < new Date()
  const isFull = d.max_participants && (d.current_participants || 0) >= d.max_participants

  return (
    <div className="min-h-screen bg-[#F8F7FC] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/events" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#4B2D8F] mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> 返回活动列表
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardBody>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="purple">{CATEGORY_MAP[d.category] || d.category}</Badge>
                  {isPast && <Badge variant="default">已结束</Badge>}
                  {isFull && <Badge variant="rejected">名额已满</Badge>}
                </div>
                <h1 className="text-2xl font-bold text-[#1A1A2E] mb-4">{d.title}</h1>
                {d.description && (
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{d.description}</p>
                )}
              </CardBody>
            </Card>

            {/* Registration form */}
            {showRegForm && (
              <Card>
                <CardHeader>
                  <h2 className="font-semibold text-[#1A1A2E]">填写报名信息</h2>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <Input label="联系电话" type="tel" placeholder="选填" value={regForm.phone} onChange={e => setRegForm(f => ({ ...f, phone: e.target.value }))} />
                    <Textarea label="备注" placeholder="如有特殊需求请说明" rows={2} value={regForm.notes} onChange={e => setRegForm(f => ({ ...f, notes: e.target.value }))} />

                    {d.is_paid && (
                      <>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                          <p className="text-sm font-semibold text-amber-800 mb-1">活动费用：HKD {d.fee_amount}</p>
                          <p className="text-xs text-amber-700">请通过以下方式付款后填写参考号：</p>
                          <ul className="text-xs text-amber-700 mt-1 space-y-0.5">
                            <li>• FPS：+852 9000 0000</li>
                            <li>• 银行转账：汇丰 123-456789-001</li>
                          </ul>
                        </div>
                        <Select label="付款方式" value={regForm.payment_method} onChange={e => setRegForm(f => ({ ...f, payment_method: e.target.value }))} required>
                          <option value="fps">FPS（转数快）</option>
                          <option value="bank_transfer">银行转账</option>
                          <option value="cash">现金</option>
                          <option value="other">其他</option>
                        </Select>
                        <Input label="付款参考号" placeholder="请输入付款参考号" value={regForm.payment_reference} onChange={e => setRegForm(f => ({ ...f, payment_reference: e.target.value }))} required />
                      </>
                    )}

                    <div className="flex gap-3">
                      <Button type="button" variant="outline" onClick={() => setShowRegForm(false)}>取消</Button>
                      <Button type="submit" className="flex-1" disabled={registering}>
                        {registering ? '提交中...' : '确认报名'}
                      </Button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardBody>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#4B2D8F] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">活动时间</p>
                      <p className="text-sm font-medium text-[#1A1A2E]">
                        {d.event_date ? format(new Date(d.event_date), 'yyyy年MM月dd日') : '-'}
                      </p>
                      <p className="text-xs text-gray-500">
                        {d.event_date ? format(new Date(d.event_date), 'HH:mm') : ''}
                        {d.end_date ? ` - ${format(new Date(d.end_date), 'HH:mm')}` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#4B2D8F] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">活动地点</p>
                      <p className="text-sm font-medium text-[#1A1A2E]">{d.location}</p>
                    </div>
                  </div>
                  {d.online_link && (
                    <div className="flex items-start gap-3">
                      <ExternalLink className="w-4 h-4 text-[#4B2D8F] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">线上链接</p>
                        <a href={d.online_link} target="_blank" rel="noreferrer" className="text-sm text-[#4B2D8F] hover:underline">点击加入</a>
                      </div>
                    </div>
                  )}
                  {d.max_participants && (
                    <div className="flex items-start gap-3">
                      <Users className="w-4 h-4 text-[#4B2D8F] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">报名人数</p>
                        <p className="text-sm font-medium text-[#1A1A2E]">{d.current_participants || 0} / {d.max_participants}</p>
                      </div>
                    </div>
                  )}
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-500">活动费用</p>
                    {d.is_paid ? (
                      <p className="text-lg font-bold text-[#4B2D8F]">HKD {d.fee_amount}</p>
                    ) : (
                      <p className="text-lg font-bold text-emerald-600">免费</p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  {!user ? (
                    <Link to="/login">
                      <Button className="w-full">登录后报名</Button>
                    </Link>
                  ) : !isFullMember ? (
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">仅限认证会员参加</p>
                      <Link to="/profile">
                        <Button variant="outline" className="w-full" size="sm">查看会员状态</Button>
                      </Link>
                    </div>
                  ) : alreadyRegistered ? (
                    <div className="text-center p-3 bg-emerald-50 rounded-lg">
                      <p className="text-sm font-medium text-emerald-700">✓ 已报名</p>
                    </div>
                  ) : isPast ? (
                    <Button className="w-full" disabled>活动已结束</Button>
                  ) : isFull ? (
                    <Button className="w-full" disabled>名额已满</Button>
                  ) : showRegForm ? null : (
                    <Button className="w-full" onClick={() => setShowRegForm(true)}>立即报名</Button>
                  )}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
