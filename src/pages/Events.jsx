import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, Users, Filter, Search } from 'lucide-react'
import { client, getRows, getSchemaData } from '../api/client.js'
import { format, parseISO, isPast } from 'date-fns'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const CATEGORIES = [
  { value: '', label: '全部' },
  { value: 'networking', label: '交流活动' },
  { value: 'career', label: '职业发展' },
  { value: 'culture', label: '文化活动' },
  { value: 'sports', label: '体育活动' },
  { value: 'academic', label: '学术活动' },
  { value: 'other', label: '其他' },
]

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  const containerRef = useRef(null)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      try {
        let query = client.from('Events').select('*').eq('status', 'published').order('event_date', { ascending: true })
        const { data: response } = await query
        setEvents(getRows(response))
      } catch (err) {
        console.error('Failed to fetch events:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [events])

  const filtered = events.filter(e => {
    const d = getSchemaData(e)
    const matchCat = !category || d.category === category
    const matchSearch = !search || d.title?.toLowerCase().includes(search.toLowerCase()) || d.location?.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen bg-gray-50" ref={containerRef}>
      {/* Header */}
      <div className="bg-cuhk-purple py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">活动资讯</h1>
          <p className="text-white/70">参与精彩活动，结识志同道合的校友</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="搜索活动名称或地点..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cuhk-purple focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
            {CATEGORIES.map(cat => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  category === cat.value
                    ? 'bg-cuhk-purple text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Calendar className="w-12 h-12 mx-auto mb-3 opacity-40" />
            <p className="text-lg">暂无符合条件的活动</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(event => {
              const d = getSchemaData(event)
              const past = d.event_date ? isPast(parseISO(d.event_date)) : false
              const titleId = `events-title-${event.id}`
              const descId = `events-desc-${event.id}`
              return (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group ${past ? 'opacity-70' : ''}`}
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <img
                      data-strk-img-id={`events-img-${event.id}`}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {d.category && (
                        <span className="bg-cuhk-purple text-white text-xs px-2.5 py-1 rounded-full font-medium">
                          {CATEGORIES.find(c => c.value === d.category)?.label || d.category}
                        </span>
                      )}
                      {past && (
                        <span className="bg-gray-600 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                          已结束
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 id={titleId} className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-cuhk-purple transition-colors">
                      {d.title}
                    </h3>
                    <p id={descId} className="text-gray-500 text-sm line-clamp-2 mb-4">{d.description}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3.5 h-3.5 text-cuhk-purple flex-shrink-0" />
                        <span>{d.event_date ? format(parseISO(d.event_date), 'yyyy年MM月dd日 HH:mm') : '待定'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-cuhk-purple flex-shrink-0" />
                        <span className="truncate">{d.location || '待定'}</span>
                      </div>
                      {d.capacity > 0 && (
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Users className="w-3.5 h-3.5 text-cuhk-purple flex-shrink-0" />
                          <span>名额 {d.capacity} 人</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      {d.fee > 0 ? (
                        <div>
                          <span className="text-cuhk-gold font-bold">HK${d.fee}</span>
                          {d.member_fee != null && d.member_fee < d.fee && (
                            <span className="text-gray-400 text-xs ml-1">会员 HK${d.member_fee}</span>
                          )}
                        </div>
                      ) : (
                        <span className="text-green-600 font-semibold text-sm">免费</span>
                      )}
                      <span className="text-cuhk-purple text-sm font-medium group-hover:underline">
                        查看详情 →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
