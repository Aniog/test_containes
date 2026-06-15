import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-tiger-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* Decorative tiger stripes */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-[2px] opacity-10"
            style={{
              left: `${10 + i * 16}%`,
              background: 'linear-gradient(to bottom, transparent, #d97706, transparent)',
              transform: 'skewX(-15deg)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 border border-amber-600/50 rounded text-amber-500 text-sm tracking-widest uppercase">
          欢迎来到
        </div>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Noto Serif SC', serif", textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
        >
          老虎公园
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          探索自然界最壮观的猫科动物，感受野性之美与生命的力量
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tigers"
            className="px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded transition-colors duration-200 text-base"
          >
            认识老虎
          </a>
          <a
            href="#visit"
            className="px-8 py-3.5 border border-white/30 hover:border-amber-500 text-white hover:text-amber-400 font-semibold rounded transition-colors duration-200 text-base"
          >
            参观信息
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-neutral-500">
        <span className="text-xs tracking-widest uppercase">向下滚动</span>
        <div className="w-px h-10 bg-gradient-to-b from-neutral-500 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
