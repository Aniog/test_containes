import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Filter } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['全部', '监护设备', '影像设备', '手术器械', '康复设备', '检验设备']

const allProducts = [
  { id: 'p01', cat: '监护设备', name: '多参数患者监护仪 XS-9000', model: 'XS-9000', desc: '12.1英寸高清触摸屏，监测ECG、SpO₂、NIBP、体温、呼吸等参数，内置AI预警算法。', badge: '热销' },
  { id: 'p02', cat: '监护设备', name: '便携式心电监护仪 XS-3200', model: 'XS-3200', desc: '轻量化设计，支持12导联心电图，蓝牙传输，适用于急救转运场景。', badge: '' },
  { id: 'p03', cat: '监护设备', name: '中央监护系统 XS-C800', model: 'XS-C800', desc: '支持最多64床位集中监护，实时数据汇总，护士站一屏掌控全病区。', badge: '新品' },
  { id: 'p04', cat: '影像设备', name: '数字化X射线摄影系统 DR-5000', model: 'DR-5000', desc: '高分辨率平板探测器，低剂量成像，3秒出片，支持DICOM标准。', badge: '推荐' },
  { id: 'p05', cat: '影像设备', name: '彩色多普勒超声诊断仪 US-8800', model: 'US-8800', desc: '15英寸高清显示屏，多探头兼容，支持腹部、心脏、妇产等多科室应用。', badge: '' },
  { id: 'p06', cat: '影像设备', name: '移动式C型臂X射线机 CA-2000', model: 'CA-2000', desc: '全数字化平板探测器，360°旋转，适用于手术室实时透视引导。', badge: '' },
  { id: 'p07', cat: '手术器械', name: '腹腔镜手术系统 LS-4K', model: 'LS-4K', desc: '4K超高清摄像系统，配套气腹机、冲洗泵，微创手术全套解决方案。', badge: '热销' },
  { id: 'p08', cat: '手术器械', name: '电外科手术系统 ES-300', model: 'ES-300', desc: '智能功率控制，精准切割与止血，支持单双极模式，安全可靠。', badge: '' },
  { id: 'p09', cat: '康复设备', name: '智能康复训练系统 RT-AI', model: 'RT-AI', desc: 'AI驱动个性化康复方案，上下肢联动训练，实时评估运动功能恢复进度。', badge: '新品' },
  { id: 'p10', cat: '康复设备', name: '体外冲击波治疗仪 SW-500', model: 'SW-500', desc: '精准聚焦冲击波，有效治疗肌腱炎、钙化性肩周炎等骨科疾病。', badge: '' },
  { id: 'p11', cat: '检验设备', name: '全自动生化分析仪 BA-1200', model: 'BA-1200', desc: '每小时检测1200个测试，支持急诊优先，覆盖肝功、肾功、血脂等项目。', badge: '推荐' },
  { id: 'p12', cat: '检验设备', name: '血液细胞分析仪 BC-6800', model: 'BC-6800', desc: '六分类白细胞分析，每小时100样本，配备自动进样系统，减少人工操作。', badge: '' },
]

const badgeColors = { 热销: 'bg-red-500', 新品: 'bg-brand-sky', 推荐: 'bg-brand-teal' }

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [searchQuery, setSearchQuery] = useState('')
  const containerRef = useRef(null)

  const filtered = allProducts.filter((p) => {
    const matchCat = activeCategory === '全部' || p.cat === activeCategory
    const matchSearch = p.name.includes(searchQuery) || p.desc.includes(searchQuery)
    return matchCat && matchSearch
  })

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [filtered])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-blue py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-blue-300 text-sm mb-2">
            <Link to="/" className="hover:text-white">首页</Link> / 产品中心
          </div>
          <h1 id="products-page-title" className="text-4xl font-bold mb-3">产品中心</h1>
          <p id="products-page-subtitle" className="text-blue-200 max-w-2xl">
            覆盖监护、影像、手术、康复、检验五大领域，500余款专业医疗器械产品
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="bg-white border-b border-brand-border sticky top-[88px] md:top-[112px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Filter className="w-4 h-4 text-brand-text mt-2 shrink-0" />
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
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text" />
            <input
              type="text"
              placeholder="搜索产品..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-brand-border rounded-lg text-sm focus:outline-none focus:border-brand-blue text-brand-dark"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-brand-text text-sm mb-6">共找到 <span className="text-brand-blue font-semibold">{filtered.length}</span> 款产品</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-strk-img-id={`plist-img-${p.id}`}
                    data-strk-img={`[plist-desc-${p.id}] [plist-name-${p.id}] [products-page-subtitle] [products-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                  />
                  {p.badge && (
                    <span className={`absolute top-3 left-3 ${badgeColors[p.badge]} text-white text-xs px-2.5 py-1 rounded-full`}>
                      {p.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-white/90 text-brand-text text-xs px-2 py-0.5 rounded">
                    {p.cat}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-brand-text text-xs mb-1">型号：{p.model}</div>
                  <h3 id={`plist-name-${p.id}`} className="text-brand-navy font-semibold text-sm mb-2 leading-snug">{p.name}</h3>
                  <p id={`plist-desc-${p.id}`} className="text-brand-text text-xs leading-relaxed mb-4 line-clamp-3">{p.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
                  >
                    询价咨询 <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-3">未找到合适的产品？</h2>
          <p className="text-blue-200 mb-6">我们提供定制化医疗器械解决方案，联系我们获取专属报价</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-sky text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors"
          >
            联系我们 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
