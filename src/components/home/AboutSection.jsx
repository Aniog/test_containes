import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Users, Award, Globe, Headphones } from 'lucide-react'

const stats = [
  { value: '10万+', label: '服务客户' },
  { value: '5000+', label: '产品种类' },
  { value: '15年', label: '行业经验' },
  { value: '99%', label: '好评率' },
]

const features = [
  {
    icon: Award,
    title: '品质保证',
    desc: '所有产品均经过严格质检，提供正品保障和完善的售后服务。',
  },
  {
    icon: Globe,
    title: '全国配送',
    desc: '覆盖全国300+城市，大部分地区支持次日达，企业批量采购享专属物流。',
  },
  {
    icon: Users,
    title: '企业定制',
    desc: '为企业客户提供专属采购方案，支持LOGO定制和批量优惠报价。',
  },
  {
    icon: Headphones,
    title: '专业客服',
    desc: '7×12小时在线客服，专业顾问一对一解答您的采购需求。',
  },
]

const AboutSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">关于我们</p>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              15年专注办公用品<br />打造一流采购体验
            </h2>
            <p id="about-desc" className="text-slate-600 text-lg leading-relaxed mb-6">
              OfficeHub 成立于2009年，是国内领先的办公用品一站式采购平台。我们深耕办公领域15年，与全球500+品牌建立合作，为企业和个人用户提供高品质、高性价比的办公解决方案。
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              无论是初创公司的基础配置，还是大型企业的整体采购，我们都能提供专业的产品推荐和定制化服务方案。
            </p>
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
            >
              了解更多
            </a>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="专业办公环境"
                data-strk-img-id="about-office-img-k1l2m3"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1E3A5F] text-white rounded-xl p-5 shadow-lg">
              <p className="text-3xl font-bold text-orange-400">15+</p>
              <p className="text-sm text-slate-300">年行业经验</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-slate-50 rounded-xl p-6">
              <p className="text-3xl font-bold text-[#1E3A5F] mb-1">{stat.value}</p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-slate-900 font-semibold text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
