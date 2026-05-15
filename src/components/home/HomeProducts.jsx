import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'p1',
    category: '监护设备',
    name: '多参数患者监护仪',
    desc: '实时监测心率、血压、血氧、体温等多项生命体征，配备智能预警系统。',
    badge: '热销',
    badgeColor: 'bg-red-500',
  },
  {
    id: 'p2',
    category: '影像设备',
    name: '数字化X射线摄影系统',
    desc: '高分辨率数字成像，低辐射剂量，快速出片，适用于各级医疗机构。',
    badge: '新品',
    badgeColor: 'bg-brand-sky',
  },
  {
    id: 'p3',
    category: '手术器械',
    name: '腹腔镜手术系统',
    desc: '高清4K摄像头，精准操控，微创手术首选，减少患者创伤与恢复时间。',
    badge: '推荐',
    badgeColor: 'bg-brand-teal',
  },
  {
    id: 'p4',
    category: '康复设备',
    name: '智能康复训练系统',
    desc: '结合AI技术，个性化康复方案，帮助患者快速恢复运动功能。',
    badge: '',
    badgeColor: '',
  },
]

export default function HomeProducts() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-medium mb-3">
            产品中心
          </div>
          <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            专业医疗器械产品线
          </h2>
          <p id="products-subtitle" className="text-brand-text max-w-2xl mx-auto">
            覆盖监护、影像、手术、康复等多个领域，为医疗机构提供全方位设备支持
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-strk-img-id={`prod-img-${p.id}`}
                  data-strk-img={`[prod-desc-${p.id}] [prod-name-${p.id}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                />
                {p.badge && (
                  <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-xs px-2.5 py-1 rounded-full font-medium`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="text-brand-sky text-xs font-medium mb-1">{p.category}</div>
                <h3 id={`prod-name-${p.id}`} className="text-brand-navy font-semibold text-base mb-2">{p.name}</h3>
                <p id={`prod-desc-${p.id}`} className="text-brand-text text-sm leading-relaxed mb-4">{p.desc}</p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
                >
                  了解详情 <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors"
          >
            查看全部产品 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
