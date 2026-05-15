import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const news = [
  {
    id: 'n1',
    date: '2024-11-15',
    category: '公司动态',
    title: '星闪医疗荣获2024年度"国家高新技术企业"认定',
    summary: '经国家科技部、财政部、税务总局联合认定，星闪医疗器械有限公司正式获得2024年度国家高新技术企业资质。',
  },
  {
    id: 'n2',
    date: '2024-10-28',
    category: '产品发布',
    title: '新一代智能监护系统XS-9000正式发布上市',
    summary: '搭载自主研发AI算法，实现多参数智能分析与预警，填补国内高端监护设备市场空白。',
  },
  {
    id: 'n3',
    date: '2024-09-20',
    category: '行业资讯',
    title: '参展第87届中国国际医疗器械博览会',
    summary: '星闪医疗携旗下全线产品亮相CMEF，展示最新技术成果，吸引国内外客户广泛关注。',
  },
]

export default function HomeNews() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-medium mb-3">
              新闻资讯
            </div>
            <h2 id="news-section-title" className="text-3xl md:text-4xl font-bold text-brand-navy">
              最新动态
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 text-brand-blue font-medium hover:gap-2.5 transition-all text-sm"
          >
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, idx) => (
            <article key={item.id} className="group rounded-xl overflow-hidden border border-brand-border hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-strk-img-id={`news-img-${item.id}`}
                  data-strk-img={`[news-summary-${item.id}] [news-title-${item.id}] [news-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                />
                <span className="absolute top-3 left-3 bg-brand-blue text-white text-xs px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-brand-text text-xs mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 id={`news-title-${item.id}`} className="text-brand-navy font-semibold text-base leading-snug mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p id={`news-summary-${item.id}`} className="text-brand-text text-sm leading-relaxed line-clamp-2 mb-4">
                  {item.summary}
                </p>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
                >
                  阅读全文 <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
