import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Calendar, MapPin, Users, Tag, Search, Filter, Plus } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardBody } from '@/components/ui/Card'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORIES = ['全部', '聚会联谊', '学术讲座', '职业发展', '文化活动', '体育运动', '公益志愿', '其他']

export default function EventsPage() {
  const { isApprovedMember } = useAuth()
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('全部')

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    setLoading(true)
    const { data: res } = await client.from('Event').select('*')
      .eq('status', 'published')
      .order('event_date', { ascending: true })
    setEvents(res?.data?.list ?? [])
    setLoading(false)
  }

  const filtered = events.filter(ev => {
    const d = ev.data
    const matchCat = category === '全部' || d?.category === category
    const matchSearch = !search || d?.title?.toLowerCase().includes(search.toLowerCase()) || d?.location?.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const upcoming = filtered.filter(ev => new Date(ev.data?.event_date) >= new Date())
  const past = filtered.filter(ev => new Date(ev.data?.event_date) < new Date())

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">校友活动</h1>
          <p className="text-blue-200">参与活动，连接校友，共叙情谊</p>
          {isApprovedMember && (
            <Button variant="gold" className="mt-4" onClick={() => navigate('/events/create')}>
              <Plus size={16} className="mr-2" /> 发布活动
            </Button>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="搜索活动名称或地点..." value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700 text-sm" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  category === cat ? 'bg-blue-800 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-16 text-slate-500">加载中...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <Calendar size={48} className="mx-auto mb-4 text-slate-300" />
            <p className="text-slate-500 text-lg">暂无活动</p>
            {isApprovedMember && (
              <Button className="mt-4" onClick={() => navigate('/events/create')}>发布第一个活动</Button>
            )}
          </div>
        ) : (
          <>
            {upcoming.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">即将举行 ({upcoming.length})</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcoming.map(ev => <EventCard key={ev.id} event={ev} />)}
                </div>
              </div>
            )}
            {past.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-slate-500 mb-4">往期活动 ({past.length})</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 opacity-70">
                  {past.map(ev => <EventCard key={ev.id} event={ev} past />)}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function EventCard({ event, past }) {
  const d = event.data
  const navigate = useNavigate()
  const eventDate = d?.event_date ? new Date(d.event_date) : null

  return (
    <Card className={`cursor-pointer hover:shadow-md transition-shadow ${past ? 'grayscale-[30%]' : ''}`}
      onClick={() => navigate(`/events/${event.id}`)}>
      <div className="h-2 bg-gradient-to-r from-blue-800 to-blue-600 rounded-t-xl" />
      <CardBody className="p-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">{d?.category}</span>
          {d?.is_paid ? (
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">HK${d?.fee}</span>
          ) : (
            <span className="text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full">免费</span>
          )}
        </div>
        <h3 className="font-semibold text-slate-900 mb-3 line-clamp-2 leading-snug">{d?.title}</h3>
        <div className="space-y-1.5 text-xs text-slate-600">
          {eventDate && (
            <div className="flex items-center gap-1.5">
              <Calendar size={13} className="text-slate-400 flex-shrink-0" />
              <span>{eventDate.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-slate-400 flex-shrink-0" />
            <span className="truncate">{d?.location}</span>
          </div>
          {d?.max_participants && (
            <div className="flex items-center gap-1.5">
              <Users size={13} className="text-slate-400 flex-shrink-0" />
              <span>限{d.max_participants}人</span>
            </div>
          )}
        </div>
        {past && <div className="mt-3"><Badge status="completed" /></div>}
      </CardBody>
    </Card>
  )
}
