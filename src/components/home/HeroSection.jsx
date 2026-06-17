import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Star, Truck, Shield } from 'lucide-react'

const badges = [
  { icon: Star, text: '10万+ 满意客户' },
  { icon: Truck, text: '全国次日达' },
  { icon: Shield, text: '正品保障' },
]

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative overflow-hidden bg-[#1E3A5F]">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              新品上市 · 限时优惠
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              专业办公用品<br />
              <span className="text-orange-400">一站购齐</span>
            </h1>
            <p id="hero-subtitle" className="text-slate-300 text-lg mb-8 leading-relaxed">
              精选优质办公桌椅、文具耗材、电脑配件，为您的工作空间提供全方位解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#products"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                浏览产品 <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                联系我们
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {badges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-300 text-sm">
                  <Icon className="w-4 h-4 text-orange-400" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <img
                  alt="现代办公室环境"
                  data-strk-img-id="hero-office-img-d4e5f6"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">4.9 / 5.0</p>
                  <p className="text-slate-500 text-xs">用户好评率</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
