import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Users, DollarSign, Search, Filter } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { useAuth } from '@/contexts/AuthContext'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORY_MAP = {
  networking: '交流联谊',
  academic: '学术讲座',
  cultural: '文化活动',
  sports: '体育运动',
  charity: '公益慈善',
  other: '其他',
}

const CATEGORY_COLORS = {
  networking: 'purple',
  academic: 'paid',
  cultural: 'gold',
  sports: 'approved',
  charity: 'pending',
  other: 'default',
}

export default function EventsPage() {
  const { user, memberProfile } = useAuth()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const isFullMember = memberProfile?.data?.status === 'approved' && memberProfile?.data?.fee_paid

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    setLoading(true)
    try {
      const { data: resp } = await client
        .from('Events')
        .select('*')
        .eq('status', 'published')
        .order('event_date', { ascending: true })
      setEvents(resp?.data?.list ?? [])
    } catch (err) {
      console.error('Failed to fetch events:', err)
    } finally {
      setLoading(false)
    }
  }

  const filtered = events.filter(ev => {
    const d = ev.data
    const matchSearch = !search || d.title?.toLowerCase().includes(search.toLowerCase()) || d.location?.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'all' || d.category === category
    return matchSearch && matchCat
  })

  return (
    <div className="min-h-screen bg-[#F8F7FC]">
      {/* Hero */}
      <div className="bg-[#4B2D8F] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">校友活动</h1>
          <p className="text-purple-200">参与精彩活动，与校友共叙情谊</p>
          {isFullMember && (
            <Link to="/events/create" className="inline-block mt-4">
              <Button variant="secondary">+ 发布活动</Button>
            </Link>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索活动..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-[#1A1A2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#4B2D8F] focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-[#1A1A2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#4B2D8F]"
            >
              <option value="all">全部类别</option>
              {Object.entries(CATEGORY_MAP).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-8 h-8 border-2 border-[#4B2D8F] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-gray-500 text-sm">加载中...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">暂无活动</p>
            {isFullMember && (
              <Link to="/events/create" className="inline-block mt-4">
                <Button>发布第一个活动</Button>
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(ev => {
              const d = ev.data
              const isPast = d.event_date && new Date(d.event_date) < new Date()
              const isFull = d.max_participants && d.current_participants >= d.max_participants
              return (
                <Link key={ev.id} to={`/events/${ev.id}`}>
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardBody className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant={CATEGORY_COLORS[d.category] || 'default'}>
                          {CATEGORY_MAP[d.category] || d.category}
                        </Badge>
                        {d.is_paid ? (
                          <span className="text-sm font-semibold text-[#4B2D8F]">HKD {d.fee_amount}</span>
                        ) : (
                          <span className="text-sm font-medium text-emerald-600">免费</span>
                        )}
                      </div>

                      <h3 className="font-semibold text-[#1A1A2E] mb-2 line-clamp-2">{d.title}</h3>
                      {d.description && (
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-1">{d.description}</p>
                      )}

                      <div className="space-y-1.5 mt-auto">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{d.event_date ? format(new Date(d.event_date), 'yyyy年MM月dd日 HH:mm') : '-'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">{d.location}</span>
                        </div>
                        {d.max_participants && (
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Users className="w-3.5 h-3.5 flex-shrink-0" />
                            <span>{d.current_participants || 0}/{d.max_participants} 人</span>
                            {isFull && <Badge variant="rejected">已满</Badge>}
                          </div>
                        )}
                      </div>

                      {isPast && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <Badge variant="default">已结束</Badge>
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
