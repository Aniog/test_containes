import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Play, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundColor: '#0a0a0f' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-lol-bg/70 via-lol-bg/50 to-lol-bg" />

      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-lol-gold/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-lol-gold/20 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-lol-accent/30 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-lol-gold/10 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-lol-accent/20 rounded-full animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fadeIn">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lol-gold/30 bg-lol-gold/10 text-lol-gold text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-lol-gold rounded-full animate-pulse" />
            Season 2026 火热进行中
          </div>

          <h1
            id="hero-title"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
          >
            <span className="text-white">召唤师峡谷</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lol-gold via-lol-gold-light to-lol-gold">
              等你来战
            </span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            全球最受欢迎的电脑游戏，拥有超过 160 位各具特色的英雄。
            加入超过 1 亿玩家的行列，在史诗般的 5v5 对战中争夺荣耀。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-lol-gold text-lol-bg font-bold text-lg rounded-lg hover:bg-lol-gold-light transition-all duration-300 shadow-lg shadow-lol-gold/25 hover:shadow-lol-gold/40 hover:-translate-y-0.5"
            >
              <Play className="w-5 h-5 fill-current" />
              免费游玩
            </a>
            <a
              href="#champions"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 font-semibold text-lg rounded-lg hover:border-lol-gold/50 hover:text-lol-gold transition-all duration-300"
            >
              探索英雄
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-lol-gold/50" />
      </div>
    </section>
  )
}