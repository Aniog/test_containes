import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { format, parseISO } from 'date-fns'

const newsItems = [
  {
    id: 'news-1',
    title: 'Season 2026 重磅更新：全新地图机制即将上线',
    category: '游戏更新',
    date: '2026-05-28',
    readTime: '5分钟',
    excerpt: '新赛季带来颠覆性的地图变化，全新的野区机制和史诗级野怪将为召唤师峡谷注入全新活力。',
    imgId: 'news-2026-7g8h9i',
    titleId: 'news-1-title',
    descId: 'news-1-desc',
  },
  {
    id: 'news-2',
    title: 'MSI 2026 决赛即将打响：LPL vs LCK 巅峰对决',
    category: '电竞赛事',
    date: '2026-05-25',
    readTime: '8分钟',
    excerpt: '季中冠军赛总决赛即将拉开帷幕，来自LPL和LCK的两支顶级战队将争夺赛季首个国际赛事冠军。',
    imgId: 'news-msi-8h9i0j',
    titleId: 'news-2-title',
    descId: 'news-2-desc',
  },
  {
    id: 'news-3',
    title: '新英雄预告：来自暗影岛的神秘刺客即将登场',
    category: '新英雄',
    date: '2026-05-20',
    readTime: '3分钟',
    excerpt: '暗影岛的迷雾中传来新的低语，一位全新的刺客英雄即将加入召唤师峡谷。',
    imgId: 'news-champ-9i0j1k',
    titleId: 'news-3-title',
    descId: 'news-3-desc',
  },
]

export default function NewsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="news" ref={containerRef} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-lol-bg via-lol-bg-light/10 to-lol-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-lol-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            News
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            最新资讯
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            了解《英雄联盟》最新动态、版本更新和电竞赛事信息。
          </p>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group bg-lol-bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-lol-gold/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [news-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lol-bg-card via-transparent to-transparent" />

                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-lol-bg/80 backdrop-blur-sm rounded-full text-lol-accent border border-lol-accent/20">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {format(parseISO(item.date), 'yyyy/MM/dd')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </span>
                </div>

                <h3 id={item.titleId} className="text-lg font-bold text-white mb-2 group-hover:text-lol-gold transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-sm text-white/50 leading-relaxed line-clamp-2 mb-4">
                  {item.excerpt}
                </p>

                <div className="flex items-center gap-1 text-lol-gold text-sm font-medium group/link">
                  <span>阅读更多</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 rounded-lg hover:border-lol-gold/50 hover:text-lol-gold transition-all duration-300"
          >
            查看全部资讯
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <span id="news-section-title" className="hidden">英雄联盟最新资讯</span>
      </div>
    </section>
  )
}