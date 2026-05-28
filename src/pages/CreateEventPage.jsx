import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Plus } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { useAuth } from '@/contexts/AuthContext'
import { useToast } from '@/contexts/ToastContext'
import { Button } from '@/components/ui/Button'
import { Input, Select, Textarea } from '@/components/ui/FormFields'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function CreateEventPage() {
  const { user, memberProfile } = useAuth()
  const { addToast } = useToast()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    title: '', description: '',
    event_date: '', end_date: '',
    location: '', online_link: '',
    category: 'networking',
    is_paid: false, fee_amount: '',
    max_participants: '',
    status: 'published',
  })

  const isFullMember = memberProfile?.data?.status === 'approved' && memberProfile?.data?.fee_paid

  const set = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm(f => ({ ...f, [field]: val }))
  }

  const validate = () => {
    const e = {}
    if (!form.title.trim()) e.title = '请输入活动标题'
    if (!form.event_date) e.event_date = '请选择活动时间'
    if (!form.location.trim()) e.location = '请输入活动地点'
    if (form.is_paid && (!form.fee_amount || parseFloat(form.fee_amount) <= 0)) e.fee_amount = '请输入有效的活动费用'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    if (!user?.id) { addToast('请先登录', 'error'); return }
    if (!isFullMember) { addToast('仅限认证会员发布活动', 'error'); return }

    setLoading(true)
    try {
      const { data: resp, error } = await client
        .from('Events')
        .insert({
          data: {
            organizer_user_id: user.id,
            title: form.title.trim(),
            description: form.description.trim(),
            event_date: form.event_date ? new Date(form.event_date).toISOString() : null,
            end_date: form.end_date ? new Date(form.end_date).toISOString() : null,
            location: form.location.trim(),
            online_link: form.online_link.trim() || null,
            category: form.category,
            is_paid: form.is_paid,
            fee_amount: form.is_paid ? parseFloat(form.fee_amount) : 0,
            max_participants: form.max_participants ? parseInt(form.max_participants) : null,
            current_participants: 0,
            status: form.status,
          }
        })
        .select()
        .single()

      if (error || resp?.success === false) {
        throw new Error(resp?.errors?.join(', ') || '发布失败')
      }

      addToast('活动发布成功！', 'success')
      navigate(`/events/${resp?.data?.id}`)
    } catch (err) {
      console.error('Create event error:', err)
      addToast(err.message || '发布失败，请重试', 'error')
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center px-4">
        <Card className="max-w-sm w-full">
          <CardBody className="text-center py-10">
            <p className="text-gray-500 mb-4">请先登录</p>
            <Link to="/login"><Button>立即登录</Button></Link>
          </CardBody>
        </Card>
      </div>
    )
  }

  if (!isFullMember) {
    return (
      <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center px-4">
        <Card className="max-w-sm w-full">
          <CardBody className="text-center py-10">
            <p className="text-gray-500 mb-2">仅限认证会员发布活动</p>
            <p className="text-xs text-gray-400 mb-4">请先完成会员申请并缴纳会费</p>
            <Link to="/profile"><Button>查看会员状态</Button></Link>
          </CardBody>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F7FC] py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/events" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#4B2D8F] mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> 返回活动列表
        </Link>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A1A2E]">发布活动</h1>
          <p className="text-gray-500 text-sm mt-1">填写活动信息，发布后校友可报名参加</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader><h2 className="font-semibold text-[#1A1A2E]">基本信息</h2></CardHeader>
            <CardBody className="space-y-4">
              <Input label="活动标题" placeholder="请输入活动标题" value={form.title} onChange={set('title')} error={errors.title} required />
              <Textarea label="活动介绍" placeholder="详细描述活动内容、议程等..." rows={4} value={form.description} onChange={set('description')} />
              <Select label="活动类别" value={form.category} onChange={set('category')} required>
                <option value="networking">交流联谊</option>
                <option value="academic">学术讲座</option>
                <option value="cultural">文化活动</option>
                <option value="sports">体育运动</option>
                <option value="charity">公益慈善</option>
                <option value="other">其他</option>
              </Select>
            </CardBody>
          </Card>

          <Card>
            <CardHeader><h2 className="font-semibold text-[#1A1A2E]">时间与地点</h2></CardHeader>
            <CardBody className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input label="开始时间" type="datetime-local" value={form.event_date} onChange={set('event_date')} error={errors.event_date} required />
                <Input label="结束时间" type="datetime-local" value={form.end_date} onChange={set('end_date')} />
              </div>
              <Input label="活动地点" placeholder="详细地址或场馆名称" value={form.location} onChange={set('location')} error={errors.location} required />
              <Input label="线上链接（选填）" placeholder="Zoom/腾讯会议链接" value={form.online_link} onChange={set('online_link')} />
            </CardBody>
          </Card>

          <Card>
            <CardHeader><h2 className="font-semibold text-[#1A1A2E]">报名设置</h2></CardHeader>
            <CardBody className="space-y-4">
              <Input label="最大参与人数（选填）" type="number" placeholder="不填则不限人数" min="1" value={form.max_participants} onChange={set('max_participants')} />

              <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl">
                <input
                  type="checkbox"
                  id="is_paid"
                  checked={form.is_paid}
                  onChange={set('is_paid')}
                  className="w-4 h-4 accent-[#4B2D8F]"
                />
                <label htmlFor="is_paid" className="text-sm font-medium text-[#1A1A2E] cursor-pointer">
                  这是收费活动
                </label>
              </div>

              {form.is_paid && (
                <Input
                  label="活动费用（HKD）"
                  type="number"
                  placeholder="0"
                  min="0"
                  step="0.01"
                  value={form.fee_amount}
                  onChange={set('fee_amount')}
                  error={errors.fee_amount}
                  required
                />
              )}

              <Select label="发布状态" value={form.status} onChange={set('status')}>
                <option value="published">立即发布</option>
                <option value="draft">保存草稿</option>
              </Select>
            </CardBody>
          </Card>

          <div className="flex gap-3">
            <Link to="/events" className="flex-shrink-0">
              <Button type="button" variant="outline">取消</Button>
            </Link>
            <Button type="submit" className="flex-1" disabled={loading}>
              <Plus className="w-4 h-4 mr-2" />
              {loading ? '发布中...' : form.status === 'draft' ? '保存草稿' : '发布活动'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
