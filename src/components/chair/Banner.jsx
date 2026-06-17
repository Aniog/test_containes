import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Banner = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-[#1a1a2e]">
      <div
        className="absolute inset-0 opacity-15"
        data-strk-bg-id="banner-bg-chair-4e5f6a"
        data-strk-bg="[banner-title] office workspace ergonomic"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] to-[#1a1a2e]/80" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-[#e8b86d] text-sm font-semibold uppercase tracking-widest mb-4">
          限时优惠
        </p>
        <h2 id="banner-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
          现在下单，立享 <span className="text-[#e8b86d]">8折优惠</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          活动截止至本月底，全系列产品参与折扣，免费送货上门，30天无理由退换。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#products"
            className="bg-[#e8b86d] text-[#1a1a2e] font-bold px-10 py-4 rounded-full hover:bg-[#d4a45a] transition text-base"
          >
            立即抢购
          </a>
          <a
            href="#contact"
            className="border-2 border-white/40 text-white font-semibold px-10 py-4 rounded-full hover:border-white hover:bg-white/10 transition text-base"
          >
            咨询客服
          </a>
        </div>
      </div>
    </section>
  )
}

export default Banner
