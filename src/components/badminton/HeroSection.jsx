
import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-badminton-900 via-badminton-800 to-badminton-950"
        data-strk-bg-id="hero-bg-7f3d9k"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
          />
        </div>
      </div>

      {/* Floating shuttlecock decoration */}
      <div className="absolute top-20 right-10 lg:right-20 opacity-20 animate-float-slow">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="55" r="10" fill="#fde047" />
          <path d="M50 45 C 40 30, 35 15, 50 5 C 65 15, 60 30, 50 45" fill="#fef08a" opacity="0.8" />
          <path d="M50 45 C 35 35, 20 25, 15 15 C 30 15, 45 25, 50 45" fill="#fef08a" opacity="0.6" />
          <path d="M50 45 C 65 35, 80 25, 85 15 C 70 15, 55 25, 50 45" fill="#fef08a" opacity="0.6" />
          <path d="M50 45 C 42 30, 38 18, 42 8 C 48 18, 52 30, 50 45" fill="#fef08a" opacity="0.7" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
          <span className="w-2 h-2 bg-feather-400 rounded-full animate-pulse"></span>
          <span className="text-white/80 text-sm font-medium tracking-wider uppercase">官方网站</span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          羽球
          <span className="text-feather-400 block mt-2">天地</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          探索世界上最快的球拍运动 —— 速度、技巧与优雅的完美结合
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-feather-400 hover:bg-feather-500 text-badminton-950 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-feather-400/30 hover:shadow-feather-500/40 text-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
            探索羽球世界
          </a>
          <a
            href="#tournaments"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-all duration-300 text-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            赛事信息
          </a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  )
}

