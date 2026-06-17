import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a2e]">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-chair-9f3b2a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#1a1a2e]/90 to-[#1a1a2e]/40" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-[#e8b86d] text-sm font-semibold uppercase tracking-widest mb-4">
            人体工学办公椅
          </p>
          <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            坐得舒适<br />
            <span className="text-[#e8b86d]">工作更高效</span>
          </h1>
          <p id="hero-subtitle" className="text-white/70 text-lg leading-relaxed mb-10 max-w-md">
            专为长时间办公设计的人体工学椅，全方位支撑脊椎，释放久坐疲劳，让每一天的工作都充满活力。
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-[#e8b86d] text-[#1a1a2e] font-bold px-8 py-4 rounded-full hover:bg-[#d4a45a] transition text-base"
            >
              探索产品系列
            </a>
            <a
              href="#features"
              className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition text-base"
            >
              了解更多
            </a>
          </div>
          <div className="flex gap-10 mt-14">
            <div>
              <p className="text-3xl font-bold text-white">50,000+</p>
              <p className="text-white/50 text-sm mt-1">满意客户</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10年</p>
              <p className="text-white/50 text-sm mt-1">品质保证</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9★</p>
              <p className="text-white/50 text-sm mt-1">用户评分</p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-[#e8b86d]/20 rounded-3xl blur-2xl" />
            <img
              alt="人体工学办公椅"
              data-strk-img-id="hero-chair-img-7c4d1e"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="relative w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
