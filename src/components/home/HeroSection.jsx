import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronRight, Star, Zap } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0E1A]">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-wc2026-a1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A0E1A] via-[#0A0E1A]/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-red-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-40 w-48 h-48 bg-blue-800/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span>FIFA 世界杯 2026 官方授权</span>
          </div>

          {/* Title */}
          <h1 id="hero-title" className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-4">
            世界杯
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              周边旗舰店
            </span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            汇聚全球32支球队官方授权商品，球衣、足球、收藏品一站购齐。
            为您的世界杯之旅增添无限激情！
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10">
            {[
              { value: '500+', label: '精选商品' },
              { value: '32', label: '参赛球队' },
              { value: '100%', label: '官方授权' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-yellow-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-lg transition-all text-base"
            >
              立即选购
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/shop?category=jersey"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-all text-base"
            >
              浏览球衣
            </Link>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-8">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">超过 <span className="text-white font-semibold">50,000+</span> 球迷好评</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-gray-500" />
        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
      </div>
    </section>
  )
}
