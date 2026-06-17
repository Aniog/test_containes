import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-stone-900"
        data-strk-bg-id="hero-bg-tiger-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center top' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/75 via-stone-900/55 to-stone-900/85" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-6 bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full">
          守护濒危生命 · 传承自然之美
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6"
        >
          虎缘救护站
        </h1>
        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-stone-200 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          为每一只受伤、被遗弃的老虎提供安全的家园，
          让这些壮美的生命重获尊严与自由。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#help"
            className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-10 py-4 rounded-full transition-all shadow-xl hover:shadow-amber-500/30 text-lg"
          >
            立即捐助
          </a>
          <a
            href="#about"
            className="border-2 border-white text-white hover:bg-white hover:text-stone-900 font-bold px-10 py-4 rounded-full transition-all text-lg"
          >
            了解更多
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
