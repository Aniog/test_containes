import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, BookOpen, ArrowRight, Star, MapPin, Clock } from 'lucide-react'
import { client, getRows, getSchemaData } from '../api/client.js'
import { format, parseISO } from 'date-fns'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const CATEGORY_LABELS = {
  networking: '交流活动',
  career: '职业发展',
  culture: '文化活动',
  sports: '体育活动',
  academic: '学术活动',
  other: '其他',
}

export default function Home() {
  const [events, setEvents] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data: response } = await client
          .from('Events')
          .select('*')
          .eq('status', 'published')
          .order('event_date', { ascending: true })
          .range(0, 2)
        setEvents(getRows(response))
      } catch (err) {
        console.error('Failed to fetch events:', err)
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

  const stats = [
    { label: '注册校友', value: '500+', icon: Users },
    { label: '举办活动', value: '50+', icon: Calendar },
    { label: '覆盖城市', value: '20+', icon: MapPin },
    { label: '成立年份', value: '2010', icon: Star },
  ]

  const features = [
    {
      icon: Users,
      title: '校友网络',
      desc: '连接全球各地的中大内地生校友，拓展人脉，互助成长。',
    },
    {
      icon: Calendar,
      title: '精彩活动',
      desc: '定期举办交流、职业发展、文化等多类型活动，丰富校友生活。',
    },
    {
      icon: BookOpen,
      title: '校友录',
      desc: '完整的校友信息库，方便校友之间互相联系与合作。',
    },
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-cuhk-purple overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cuhk-gold rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-cuhk-gold/20 text-cuhk-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              欢迎加入我们的大家庭
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              香港中文大学<br />
              <span className="text-cuhk-gold">内地生校友会</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              连接全球中大内地生校友，共建互助成长的校友网络。
              无论你身在何处，这里永远是你的家。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="bg-cuhk-gold hover:bg-cuhk-gold-dark text-white px-8 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2"
              >
                立即加入 <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/events"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-colors border border-white/30"
              >
                查看活动
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-cuhk-purple" />
                </div>
                <div className="text-3xl font-bold text-cuhk-purple">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们能为你做什么</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              校友会致力于为每一位中大内地生校友提供最优质的服务和最温暖的归属感
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cuhk-purple-light rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-cuhk-purple" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">近期活动</h2>
              <p className="text-gray-500 mt-1">参与精彩活动，结识志同道合的校友</p>
            </div>
            <Link
              to="/events"
              className="hidden md:flex items-center gap-2 text-cuhk-purple hover:text-cuhk-purple-dark font-medium transition-colors"
            >
              查看全部 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {events.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p>暂无近期活动，敬请期待</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event) => {
                const d = getSchemaData(event)
                const titleId = `home-event-title-${event.id}`
                const descId = `home-event-desc-${event.id}`
                return (
                  <Link
                    key={event.id}
                    to={`/events/${event.id}`}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
                  >
                    <div className="relative h-44 bg-gray-100 overflow-hidden">
                      <img
                        data-strk-img-id={`home-event-img-${event.id}`}
                        data-strk-img={`[${descId}] [${titleId}]`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={d.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-cuhk-purple text-white text-xs px-2.5 py-1 rounded-full font-medium">
                          {CATEGORY_LABELS[d.category] || '活动'}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 id={titleId} className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-cuhk-purple transition-colors">
                        {d.title}
                      </h3>
                      <p id={descId} className="text-gray-500 text-sm line-clamp-2 mb-3">{d.description}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {d.event_date ? format(parseISO(d.event_date), 'MM月dd日') : '待定'}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {d.location || '待定'}
                        </span>
                      </div>
                      {d.fee > 0 && (
                        <div className="mt-3 text-cuhk-gold font-semibold text-sm">
                          HK${d.fee}
                          {d.member_fee != null && d.member_fee < d.fee && (
                            <span className="text-gray-400 font-normal ml-1">
                              (会员 HK${d.member_fee})
                            </span>
                          )}
                        </div>
                      )}
                      {(!d.fee || d.fee === 0) && (
                        <div className="mt-3 text-green-600 font-semibold text-sm">免费</div>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-cuhk-purple font-medium"
            >
              查看全部活动 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cuhk-purple py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">加入我们，共叙中大情</h2>
          <p className="text-white/70 text-lg mb-8">
            成为正式会员，享受专属活动优惠、校友录查阅权限及更多会员福利
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="bg-cuhk-gold hover:bg-cuhk-gold-dark text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              免费注册
            </Link>
            <Link
              to="/membership"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-colors border border-white/30"
            >
              了解会员权益
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
