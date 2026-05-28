import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, Users, DollarSign, ArrowLeft } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/Button'
import { Input, Select, Textarea } from '@/components/ui/Input'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import { toast } from '@/components/ui/Toast'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORIES = ['聚会联谊', '学术讲座', '职业发展', '文化活动', '体育运动', '公益志愿', '其他']

export default function CreateEventPage() {
  const { user, isApprovedMember } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    title: '', description: '', event_date: '', location: '',
    category: '', max_participants: '', is_paid: false, fee: '',
    fee_description: '', registration_deadline: '', status: 'published'
  })

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  if (!isApprovedMember) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar size={28} className="text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">需要正式会员资格</h2>
          <p className="text-slate-600 mb-4">只有审核通过且已缴费的正式会员才能发布活动。</p>
          <Button onClick={() => navigate('/profile')}>查看我的会员状态</Button>
        </div>
      </div>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.title || !form.event_date || !form.location || !form.category) {
      toast.error('请填写所有必填项')
      return
    }
    setLoading(true)
    try {
      const payload = {
        organizer_user_id: user.id,
        title: form.title,
        description: form.description,
        event_date: new Date(form.event_date).toISOString(),
        location: form.location,
        category: form.category,
        status: form.status,
        is_paid: form.is_paid,
        ...(form.max_participants && { max_participants: parseInt(form.max_participants) }),
        ...(form.is_paid && form.fee && { fee: parseFloat(form.fee) }),
        ...(form.is_paid && form.fee_description && { fee_description: form.fee_description }),
        ...(form.registration_deadline && { registration_deadline: new Date(form.registration_deadline).toISOString() }),
      }
      const { data: res, error } = await client.from('Event').insert({ data: payload }).select().single()
      if (error) throw error
      const created = res?.data
      toast.success('活动发布成功！')
      navigate(`/events/${res?.id || ''}`)
    } catch (err) {
      console.error('Create event error:', err)
      toast.error('发布失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <button onClick={() => navigate('/events')} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 text-sm">
          <ArrowLeft size={16} /> 返回活动列表
        </button>

        <Card>
          <CardHeader>
            <h1 className="text-xl font-bold text-slate-900">发布新活动</h1>
            <p className="text-sm text-slate-500 mt-1">填写活动信息，发布后所有会员均可查看</p>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input label="活动标题 *" type="text" placeholder="请输入活动标题" value={form.title}
                onChange={e => set('title', e.target.value)} required />

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">活动详情</label>
                <textarea rows={4} placeholder="请详细描述活动内容、议程安排等..." value={form.description}
                  onChange={e => set('description', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input label="活动时间 *" type="datetime-local" value={form.event_date}
                  onChange={e => set('event_date', e.target.value)} required />
                <Input label="报名截止时间" type="datetime-local" value={form.registration_deadline}
                  onChange={e => set('registration_deadline', e.target.value)} />
              </div>

              <Input label="活动地点 *" type="text" placeholder="请输入详细地址" value={form.location}
                onChange={e => set('location', e.target.value)} required />

              <div className="grid grid-cols-2 gap-4">
                <Select label="活动类别 *" value={form.category} onChange={e => set('category', e.target.value)} required>
                  <option value="">请选择类别</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </Select>
                <Input label="人数上限" type="number" placeholder="不填则不限" min="1" value={form.max_participants}
                  onChange={e => set('max_participants', e.target.value)} />
              </div>

              {/* Paid Event Toggle */}
              <div className="bg-slate-50 rounded-xl p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign size={18} className="text-slate-600" />
                    <span className="font-medium text-slate-900">收费活动</span>
                  </div>
                  <button type="button" onClick={() => set('is_paid', !form.is_paid)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${form.is_paid ? 'bg-blue-700' : 'bg-slate-300'}`}>
                    <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.is_paid ? 'translate-x-7' : 'translate-x-1'}`} />
                  </button>
                </div>
                {form.is_paid && (
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="活动费用（港币）*" type="number" placeholder="0.00" min="0" step="0.01" value={form.fee}
                      onChange={e => set('fee', e.target.value)} required={form.is_paid} />
                    <Input label="费用说明" type="text" placeholder="如：含餐费" value={form.fee_description}
                      onChange={e => set('fee_description', e.target.value)} />
                  </div>
                )}
              </div>

              <Select label="发布状态" value={form.status} onChange={e => set('status', e.target.value)}>
                <option value="published">立即发布</option>
                <option value="draft">保存为草稿</option>
              </Select>

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="secondary" className="flex-1" onClick={() => navigate('/events')}>取消</Button>
                <Button type="submit" className="flex-1" disabled={loading}>
                  {loading ? '发布中...' : form.status === 'published' ? '立即发布' : '保存草稿'}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
