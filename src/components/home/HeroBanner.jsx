import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroBanner() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-700 to-red-500 min-h-[320px] md:min-h-[420px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ opacity: 0.25 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 md:py-16 w-full">
        <div className="max-w-lg">
          <div className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            🎉 618大促 · 全场低至5折
          </div>
          <h1 id="hero-title" className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
            中国优质商品
            <br />
            <span className="text-yellow-300">一站购齐</span>
          </h1>
          <p id="hero-subtitle" className="text-white/80 text-base md:text-lg mb-8">
            精选国内知名品牌，正品保障，极速配送，让购物更简单
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-yellow-50 transition-colors shadow-lg"
            >
              立即购物
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products?category=electronics"
              className="inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors border border-white/30"
            >
              查看电子产品
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute right-16 bottom-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2" />
    </section>
  )
}
