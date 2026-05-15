import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Tag, ArrowRight, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['全部', '公司动态', '产品发布', '行业资讯', '技术分享']

const newsItems = [
  {
    id: 'news01', cat: '公司动态', date: '2024-11-15', featured: true,
    title: '星闪医疗荣获2024年度"国家高新技术企业"认定',
    summary: '经国家科技部、财政部、税务总局联合认定，星闪医疗器械有限公司正式获得2024年度国家高新技术企业资质，标志着公司在技术创新和研发能力方面获得国家权威认可。',
  },
  {
    id: 'news02', cat: '产品发布', date: '2024-10-28', featured: true,
    title: '新一代智能监护系统XS-9000正式发布上市',
    summary: '搭载自主研发AI算法，实现多参数智能分析与预警，填补国内高端监护设备市场空白。新系统支持12导联心电、无创血压、血氧饱和度等多参数同步监测。',
  },
  {
    id: 'news03', cat: '行业资讯', date: '2024-09-20', featured: false,
    title: '参展第87届中国国际医疗器械博览会',
    summary: '星闪医疗携旗下全线产品亮相CMEF，展示最新技术成果，吸引国内外客户广泛关注，现场签约合作意向超过50项。',
  },
  {
    id: 'news04', cat: '技术分享', date: '2024-08-10', featured: false,
    title: 'AI技术在医疗监护领域的应用与展望',
    summary: '本文探讨人工智能技术如何赋能医疗监护设备，实现从被动监测到主动预警的转变，提升临床诊疗效率与患者安全。',
  },
  {
    id: 'news05', cat: '公司动态', date: '2024-07-05', featured: false,
    title: '星闪医疗与北京协和医院签署战略合作协议',
    summary: '双方将在医疗器械临床研究、产品改进优化、医护人员培训等方面开展深度合作，共同推动医疗技术进步。',
  },
  {
    id: 'news06', cat: '产品发布', date: '2024-06-18', featured: false,
    title: '便携式超声诊断仪US-P300正式上市',
    summary: '重量仅2.8kg，支持无线传输，内置AI辅助诊断功能，适用于急诊、ICU、基层医疗机构等多种场景。',
  },
  {
    id: 'news07', cat: '行业资讯', date: '2024-05-22', featured: false,
    title: '2024年医疗器械行业政策解读与市场趋势分析',
    summary: '国家药监局发布多项新规，进一步规范医疗器械注册审批流程，国产高端医疗器械迎来重要发展机遇。',
  },
  {
    id: 'news08', cat: '技术分享', date: '2024-04-15', featured: false,
    title: '医疗器械电磁兼容性设计要点与测试方法',
    summary: '本文从工程实践角度介绍医疗器械EMC设计的关键技术，包括屏蔽设计、滤波电路、接地处理等核心要素。',
  },
]

export default function News() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const containerRef = useRef(null)

  const filtered = newsItems.filter(
    (n) => activeCategory === '全部' || n.cat === activeCategory
  )
  const featured = newsItems.filter((n) => n.featured)
  const regular = filtered.filter((n) => !n.featured)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [activeCategory])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-blue py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-blue-300 text-sm mb-2">
            <Link to="/" className="hover:text-white">首页</Link> / 新闻资讯
          </div>
          <h1 id="news-page-title" className="text-4xl font-bold mb-3">新闻资讯</h1>
          <p id="news-page-subtitle" className="text-blue-200 max-w-2xl">
            了解星闪医疗最新动态、产品发布及行业资讯
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-brand-navy mb-6">精选报道</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((item) => (
              <article key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-strk-img-id={`featured-img-${item.id}`}
                    data-strk-img={`[featured-summary-${item.id}] [featured-title-${item.id}] [news-page-subtitle] [news-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                  />
                  <span className="absolute top-3 left-3 bg-brand-blue text-white text-xs px-2.5 py-1 rounded-full">{item.cat}</span>
                  <span className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs px-2.5 py-1 rounded-full font-medium">精选</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-text text-xs mb-2">
                    <Calendar className="w-3.5 h-3.5" />{item.date}
                  </div>
                  <h3 id={`featured-title-${item.id}`} className="text-brand-navy font-bold text-lg mb-2 leading-snug">{item.title}</h3>
                  <p id={`featured-summary-${item.id}`} className="text-brand-text text-sm leading-relaxed flex-1 mb-4">{item.summary}</p>
                  <div className="flex items-center gap-1 text-brand-blue text-sm font-medium">
                    阅读全文 <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All news */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Tag className="w-4 h-4 text-brand-text mt-2 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-light text-brand-dark hover:bg-blue-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <article key={item.id} className="group rounded-xl overflow-hidden border border-brand-border hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-strk-img-id={`news-list-img-${item.id}`}
                    data-strk-img={`[news-list-summary-${item.id}] [news-list-title-${item.id}] [news-page-subtitle] [news-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                  />
                  <span className="absolute top-3 left-3 bg-brand-blue text-white text-xs px-2.5 py-1 rounded-full">{item.cat}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-brand-text text-xs mb-2">
                    <Calendar className="w-3.5 h-3.5" />{item.date}
                  </div>
                  <h3 id={`news-list-title-${item.id}`} className="text-brand-navy font-semibold text-base leading-snug mb-2 line-clamp-2">{item.title}</h3>
                  <p id={`news-list-summary-${item.id}`} className="text-brand-text text-sm leading-relaxed line-clamp-2 mb-4">{item.summary}</p>
                  <div className="flex items-center gap-1 text-brand-blue text-sm font-medium">
                    阅读全文 <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
