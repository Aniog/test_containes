import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Award, Microscope } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-navy">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-sky/20 border border-brand-sky/30 text-brand-sky px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>ISO 13485 国际认证</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            精准医疗器械<br />
            <span className="text-brand-sky">守护生命健康</span>
          </h1>

          <p id="hero-subtitle" className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">
            星闪医疗器械专注高端医疗设备研发制造二十余年，为全国三甲医院及医疗机构提供专业可靠的医疗解决方案。
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-brand-sky text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-brand-blue transition-colors"
            >
              探索产品 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              获取方案
            </Link>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { icon: Award, value: '20+', label: '年行业经验' },
              { icon: Microscope, value: '500+', label: '产品型号' },
              { icon: Shield, value: '3000+', label: '合作医院' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-sky/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-sky" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl leading-tight">{value}</div>
                  <div className="text-blue-300 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side image card */}
        <div className="hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="专业医疗设备"
              className="w-full h-[480px] object-cover"
              data-strk-img-id="hero-img-d4e5f6"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/80 to-transparent p-6">
              <div className="text-white font-semibold">最新一代监护系统</div>
              <div className="text-blue-200 text-sm">精准监测 · 实时预警 · 智能分析</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
